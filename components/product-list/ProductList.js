import { Select, Collapse, Checkbox } from "antd";
import { useState } from "react";
import { callApi } from "../../helpers/helpers";
import ProductCard from "../../components/common/ProductCard";
import { cloneDeep } from "lodash";
const { Panel } = Collapse;
function ProductList(props) {
  const [gridType, setgridType] = useState(1);
  const [datafor, setdatafor] = useState(cloneDeep(props?.filterval));
  const [lisitng, setlisitng] = useState(cloneDeep(props?.lisitng));
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
        <div className="product-card-wrapper">
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
      </div>
    </div>
  );
}
export default ProductList;
