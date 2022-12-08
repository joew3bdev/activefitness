import Carousel from "../components/common/Carousel";
import SeoHead from "../components/common/Head";
import Layout from "../components/common/Layout";
import TabCarousel from "../components/common/TabCarousel";
import { Button, Rate, Select, Collapse, Checkbox } from "antd";
import TruckIcon from "../components/library/icons/TruckIcon";
import { useState } from "react";
import { callApi } from "../helpers/helpers";
const { Panel } = Collapse;

function Product(props) {
  const [gridType, setgridType] = useState(1);
  return (
    <Layout>
      <SeoHead />
    </Layout>
  );
}
Product.getInitialProps = async (ctx) => {
  const datafor = {
    product_id: ctx.query.id,
    country_id: 2,
    language_id: 2,
    channel: "app",
  };
  const res = await callApi({
    URL: "https://api.afsdev.in/product/detail",
    TYPE: "POST",
    DATA: JSON.stringify(datafor),
  });
  return { lisitng: res?.data };
};
export default Product;
