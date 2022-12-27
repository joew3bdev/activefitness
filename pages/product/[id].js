import SeoHead from "../../components/common/Head";
import Layout from "../../components/common/Layout";
import { useRef, useState } from "react";
import { callApi } from "../../helpers/helpers";
import Carousel from "../../components/common/Carousel";
import { Button } from "antd";

function Product(props) {
  const productDetails = props?.lisitng?.data;
  const [initialSlide, setinitialSlide] = useState(0);
  let sliderRef = useRef(null);
  const sliderRefup = (refData) => {
    sliderRef = refData;
  };
  console.log(props);
  debugger;
  return (
    <Layout>
      <SeoHead />
      <div className="product-wrapper">
        <div className="image-section">
          <div className="image-display">
            {productDetails?.images?.map((item, key) => {
              return (
                <div onClick={() => sliderRef?.slickGoTo(key)} key={key}>
                  <img src={item} />
                </div>
              );
            })}
          </div>
          <div className="carousel-section">
            <Carousel initialSlide={initialSlide} sliderRef={sliderRefup}>
              {productDetails?.images?.map((item, key) => {
                return <img src={item} key={key} />;
              })}
            </Carousel>
          </div>
        </div>
        <div className="details-section">
          <h2>{productDetails?.product_name}</h2>
          <div>
            <Button type="primary" className="full-size">
              {props.translate.addtocart[1]}
            </Button>
            <Button type="primary" className="red full-size">
              BUY NOW
            </Button>
          </div>
          <div
            className="about"
            dangerouslySetInnerHTML={{
              __html: productDetails?.short_description,
            }}
          ></div>
        </div>
      </div>
    </Layout>
  );
}
Product.getInitialProps = async (ctx) => {
  const datafor = {
    product_slug: "asics-as003-1173a006-bs/1173A006-400-44",
    country_id: 1,
    language_id: 1,
    channel: "desktop",
  };
  const res = await callApi({
    URL: "http://reactapi.activefitnessstore.com/api/product/detail",
    TYPE: "POST",
    DATA: datafor,
  });
  return { lisitng: res?.data };
};
export default Product;
