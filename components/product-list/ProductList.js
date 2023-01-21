import { Select, Collapse, Checkbox, Button, Drawer } from "antd";
import { useState } from "react";
import { callApi } from "../../helpers/helpers";
import ProductCard from "../../components/common/ProductCard";
import { cloneDeep } from "lodash";
import PopupModal from "../../components/common/PopupModal";
import FilterModal from "../../components/common/FilterModal";
import { DownOutlined } from "@ant-design/icons";
import SortIcon from "../library/icons/Sort";
import FilterIcon from "../library/icons/FilterIcon";
const { Panel } = Collapse;
function ProductList(props) {
  const [gridType, setgridType] = useState(1);
  const [datafor, setdatafor] = useState(cloneDeep(props?.filterval));
  const [lisitng, setlisitng] = useState(cloneDeep(props?.lisitng));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [options, setOptions] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openFilterModal, setOpenFilterModal] = useState(false);

  const showFilter = () => {
    setOpenFilterModal(true);
  };

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const closeDrawer = () => {
    setOpenDrawer(false);
  };
  const showModal = async () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setOptions("");
    setIsModalOpen(false);
  };

  const onClickBrand = async () => {
    const brands = props?.lisitng?.filters?.find(
      (item) => item.name == "brands"
    );
    setOptions(brands);
    setModalTitle("Brands");
    showModal();
  };

  const onClickCategories = async () => {
    const categories = props?.lisitng?.filters?.find(
      (item) => item.name == "categories"
    );
    setOptions(categories);
    setModalTitle("Categories");
    showModal();
  };

  const applyFilter = async (key, value) => {
    const currentdatafor = cloneDeep(datafor);
    currentdatafor.filters[key] = value;
    setdatafor(currentdatafor);
    const res = await callApi({
      URL: "http://reactapi.activefitnessstore.com/api/product/listing",
      TYPE: "POST",
      DATA: currentdatafor,
    });
    setlisitng(res?.data);
  };
  return (
    <div className={"product-listing-wrapper type" + gridType}>
      <div className="product-filter">
        <Collapse
          accordion
          expandIcon={({ isActive }) => <span>{isActive ? "-" : "+"}</span>}
          expandIconPosition={"end"}
          defaultActiveKey={lisitng.filters?.map((item, key) => key)}
        >
          {lisitng.filters?.map((item, key) => {
            const options = item.list.map((opt) => {
              return {
                label: opt?.title,
                value: opt?.slug ?? opt?._id,
              };
            });
            return (
              <Panel header={<h4>{item.title}</h4>} key={key}>
                <Checkbox.Group
                  options={options}
                  defaultValue={["Pear"]}
                  onChange={(value) => {
                    applyFilter(item.name, value);
                  }}
                />
              </Panel>
            );
          })}
        </Collapse>
      </div>
      <div className="product-listing">
        <div className="product-head">
          <div>
            <h2>{lisitng.title}</h2>
            <label>{lisitng.total_count} Results</label>
          </div>
          <div>
            {gridType == 2 && (
              <>
                <Button
                  onClick={async () => {
                    await onClickCategories();
                  }}
                >
                  Categories
                  <DownOutlined />
                </Button>
                <Button
                  onClick={async () => {
                    await onClickBrand();
                  }}
                >
                  Brands
                  <DownOutlined />
                </Button>
                <Button onClick={showDrawer}>
                  All Filters
                  <DownOutlined />
                </Button>
                <Drawer
                  title="All Filters"
                  placement="right"
                  width={580}
                  onClose={closeDrawer}
                  open={openDrawer}
                  footer={
                    <div className="modal-buttons">
                      <Button
                        onClick={() => {
                          applyFilter(item.name, value);
                        }}
                        className="filter-btn"
                      >
                        Apply Filter
                      </Button>
                      <Button onClick={() => {}} className="reset-btn">
                        Reset
                      </Button>
                    </div>
                  }
                >
                  <div className="product-filter">
                    <Collapse
                      accordion
                      expandIcon={({ isActive }) => (
                        <span>{isActive ? "-" : "+"}</span>
                      )}
                      expandIconPosition={"end"}
                      defaultActiveKey={lisitng.filters?.map(
                        (item, key) => key
                      )}
                    >
                      {lisitng.filters?.map((item, key) => {
                        const options = item.list.map((opt) => {
                          return {
                            label: opt?.title,
                            value: opt?.slug ?? opt?._id,
                          };
                        });
                        return (
                          <Panel header={<h4>{item.title}</h4>} key={key}>
                            <Checkbox.Group
                              options={options}
                              defaultValue={["Pear"]}
                              onChange={(value) => {
                                applyFilter(item.name, value);
                              }}
                            />
                          </Panel>
                        );
                      })}
                    </Collapse>
                  </div>
                </Drawer>
                <PopupModal
                  isModalOpen={isModalOpen}
                  handleCancel={handleCancel}
                  title={modalTitle}
                  options={options}
                />
              </>
            )}
            <Select
              defaultValue={lisitng.sorting?.selected}
              style={{
                width: 200,
              }}
              title="title"
              val
              options={lisitng.sorting?.types.map((item) => {
                return {
                  value: item._id,
                  label: item.title,
                };
              })}
            />
            <span
              onClick={() => setgridType(1)}
              className={
                gridType === 1 ? "section-type active" : "section-type"
              }
            >
              III
            </span>
            <span
              onClick={() => setgridType(2)}
              className={
                gridType === 2 ? "section-type active" : "section-type"
              }
            >
              IIII
            </span>
            <span
              onClick={() => setgridType(3)}
              className={
                gridType === 3 ? "section-type active" : "section-type"
              }
            >
              III
            </span>
          </div>
        </div>
        <div
          className="product-card-wrapper"
          style={
            lisitng.total_count < 3
              ? { justifyContent: "space-around" }
              : { justifyContent: "space-between" }
          }
        >
          {lisitng.listdata?.map((item, key) => {
            const save =
              ((item.regular_price - item.sale_price) / item.regular_price) *
              100;
            return (
              <ProductCard
                item={item}
                gridType={gridType}
                save={save}
                key={key}
              />
            );
          })}
        </div>
        <div className="filter-wrapper">
          <div>
            <SortIcon /> <span>Sort</span>
          </div>
          <div onClick={() => showFilter()}>
            <FilterIcon /> <span>Filter</span>
          </div>
        </div>
      </div>
      <FilterModal
        isModalOpen={openFilterModal}
        handleCancel={() => setOpenFilterModal(false)}
        lisitng={lisitng}
      />
    </div>
  );
}
export default ProductList;
