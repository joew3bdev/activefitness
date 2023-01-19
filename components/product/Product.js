import { useRef, useState } from "react";
import Carousel from "../../components/common/Carousel";
import { Button, Tabs } from "antd";
import UserStar from "../../components/library/icons/Star";
import LabelIcon from "../../components/library/icons/LabelIcon";
import Image from "next/image";
import ProductDetails from "./ProductDetails";
import LoveIcon from "../../components/library/icons/LoveIcon";
import DirectionIcon from "../../components/library/icons/DirectionIcon";
import ShareIcon from "../../components/library/icons/ShareIcon";
import TruckIcon from "../../components/library/icons/TruckIcon";
import ReplayIcon from "../../components/library/icons/Replay";
import SettingsIcon from "../../components/library/icons/SettingsIcon";
import useViewport from "../../helpers/useViewport";

function Product(props) {
  const productDetails = props?.lisitng?.data;
  const [initialSlide, setinitialSlide] = useState(0);
  const { width } = useViewport();
  const mobile = width < 481;
  let sliderRef = useRef(null);
  const sliderRefup = (refData) => {
    sliderRef = refData;
  };
  const [tabKey, setTabKey] = useState(1);
  const onChange = (key) => {
    setTabKey(key);
  };
  const tab_items = [
    {
      label: `Product Details`,
      key: 1,
      children: (
        <ProductDetails productDetails={productDetails} tabKey={tabKey} />
      ),
    },
    {
      label: `Specifications`,
      key: 2,
      children: (
        <ProductDetails productDetails={productDetails} tabKey={tabKey} />
      ),
    },
    {
      label: `Delivery`,
      key: 3,
      children: (
        <ProductDetails productDetails={productDetails} tabKey={tabKey} />
      ),
    },
    {
      label: `Warranty & Installation`,
      key: 4,
      children: (
        <ProductDetails productDetails={productDetails} tabKey={tabKey} />
      ),
    },
    {
      label: `Reviews`,
      key: 5,
      children: (
        <ProductDetails productDetails={productDetails} tabKey={tabKey} />
      ),
    },
  ];
  debugger;
  return (
    <>
      <div className="product-wrapper">
        <div className="image-section">
          <div className="image-display">
            {productDetails?.pricing?.[0]?.images?.map((item, key) => {
              // Todo: pricing array
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
          <p className="title">{productDetails?.product_name}</p>
          <span className="star-wrap">
            {/* {Array(Math.round(Number(productDetails?.pricing?.[0]["item_rating"]))).fill(<UserStar />)}  // change item rating to nummber */}
            {Array(4).fill(<UserStar />)}
            <h5>246</h5>
          </span>
          <div className="price-wrap">
            <div className="price">
              <p className="org">
                {productDetails?.currency}{" "}
                {productDetails?.pricing?.[0].sale_price}
              </p>
              <p className="disc">
                {productDetails?.currency}{" "}
                {productDetails?.pricing?.[0].regular_price}
              </p>
              <p className="saves">
                {productDetails?.pricing?.[0].discount_percent_text}
              </p>
            </div>
            {mobile ? (
              <span>
                Includes Free delivery and Installation. Earn 100 Fit Coins
                onthis Purchase (?)
              </span>
            ) : (
              <span>Inclusive of VAT</span>
            )}
          </div>
          <div className="offer-wrap">
            <div className="offer">
              <LabelIcon />{" "}
              <span className="offer-text">
                <p>
                  3 interest-free payments of {productDetails?.currency} 406.00
                  with <img src={""} />
                  <a> learn more</a>
                </p>
              </span>
            </div>
            <div className="express">
              <div className="bus">
                <Image src="/images/truck.png" width={21} height={14} />
                <strong className="bus-title">
                  {productDetails?.pricing?.[0]?.delivery?.delivery_type}
                </strong>
              </div>
              <p>{productDetails?.pricing?.[0]?.delivery?.text}</p>
            </div>
            <p className="stock-num">
              Hurry up! Only {productDetails?.pricing?.[0].stock} left in stock
            </p>
          </div>
          <div className="buy-wrap">
            <Button type="primary" className="full-size">
              {props.translate.addtocart[1]}
            </Button>
            <Button type="primary" className="red full-size">
              BUY NOW
            </Button>
          </div>
          <div className="useful-wrap">
            <div>
              <LoveIcon /> <strong>Wishlist</strong>
            </div>
            <div>
              <DirectionIcon />
              <strong>Compare</strong>
            </div>
            <div>
              <ShareIcon />
              <strong>Share</strong>
            </div>
          </div>
          <p className="about-item">About this item</p>
          <div
            className="about"
            dangerouslySetInnerHTML={{
              __html: productDetails?.short_description,
            }}
          ></div>
          <a className="learn-more">Learn more</a>
          <div className="sales-service-wrap">
            <div className="sales-service">
              <TruckIcon /> <span>Free Delivery</span>
            </div>
            <div className="sales-service">
              <SettingsIcon /> <span>After-Sales Services</span>
            </div>
          </div>
          <div className="store-visit-wrap">
            <ReplayIcon />
            <div className="try-buy">
              <p className="title">Try and buy</p>
              <p className="desc">
                You can try this product from our store and buy: Locate store
              </p>
            </div>
          </div>
          <div className="brands-wrap">
            <div className="brands">
              <img
                src={productDetails?.brand?.brand_image}
                width={100}
                height={60}
              />
              <div className="brand-item-wrap">
                <div className="brand-item">
                  <p className="item">Brand</p>
                  <p className="title">{productDetails?.brand?.brand_name}</p>
                </div>
                <div className="brand-item">
                  <p className="item">Origin</p>
                  <p className="title">{productDetails?.brand?.brand_origin}</p>
                </div>
              </div>
            </div>
            <a href={`/${productDetails?.brand?.brand_url}`}>visit Store</a>
          </div>
          <div className="request-buttons">
            <Button type="primary" className="req-btn full-size">
              REQUEST PRICE MATCH
            </Button>
            <Button type="primary" className="req-btn full-size">
              ORDER VIA WHATSAPP
            </Button>
          </div>
        </div>
      </div>
      <div className="spec-container">
        <Tabs defaultActiveKey="1" onChange={onChange} items={tab_items} />
      </div>
    </>
  );
}
export default Product;
