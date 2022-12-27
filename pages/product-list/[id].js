import Carousel from "../components/common/Carousel";
import SeoHead from "../components/common/Head";
import Layout from "../components/common/Layout";
import { Select, Collapse, Checkbox } from "antd";
import { useState } from "react";
import { callApi } from "../helpers/helpers";
import ProductCard from "../components/common/ProductCard";
const { Panel } = Collapse;

function List(props) {
  debugger;
  const [gridType, setgridType] = useState(1);
  return (
    <Layout>
      <SeoHead />
      <div className={"product-listing-wrapper type" + gridType}>
        <div className="product-filter">
          <Collapse
            accordion
            expandIcon={({ isActive }) => <span>{isActive ? "-" : "+"}</span>}
            expandIconPosition={"end"}
            defaultActiveKey={props?.lisitng?.filters?.map((item, key) => key)}
          >
            {props?.lisitng?.filters?.map((item, key) => {
              return (
                <Panel header={<h4>{item.title}</h4>} key={key}>
                  {item.list.map((insideItem, key) => {
                    return (
                      <Checkbox key={key} onChange={() => {}}>
                        {insideItem.title}
                      </Checkbox>
                    );
                  })}
                </Panel>
              );
            })}
          </Collapse>
        </div>
        <div className="product-listing">
          <div className="product-head">
            <div>
              <h2>{props?.lisitng?.title}</h2>
              <label>70 Results</label>
            </div>
            <div>
              <Select
                defaultValue={props?.lisitng?.sorting?.selected}
                style={{
                  width: 200,
                }}
                title="title"
                val
                options={props?.lisitng?.sorting?.types.map((item) => {
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
            {props?.lisitng?.listdata?.map((item, key) => {
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
    </Layout>
  );
}
List.getInitialProps = async (ctx) => {
  const datafor = {
    country_id: 2,
    language_id: 1,
    channel: "desktop",
    argument_1: "category",
    argument_2: "3",
    argument_3: "",
    pagination: 0,
    sorting: "h2l",
    tags: [],
    filters: {
      brands: [],
      categories: [],
      collections: [],
      colors: [],
      sizes: [],
      prices: [],
      Screen: [],
      Size: [],
    },
  };
  const res = await callApi({
    URL: "http://reactapi.activefitnessstore.com/api/product/listing",
    TYPE: "POST",
    DATA: datafor,
  });
  console.log(res);
  return { lisitng: res?.data };
};
export default List;
