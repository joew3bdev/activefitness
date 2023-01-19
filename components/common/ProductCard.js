import { Button, Rate } from "antd";
import TruckIcon from "../library/icons/TruckIcon";
import Link from "next/link";
import useViewport from "../../helpers/useViewport";
function ProductCard({ item, gridType, save }) {
  const { width } = useViewport();
  const mobile = width < 481;

  return (
    <Link href={`/${item.product_slug}`}>
      <div className="product-card">
        <img src={item.image} />
        {gridType === 3 ? (
          <div className="info">
            <div className="sec">
              <h4>{item.product_name}</h4>
              <div className="rate">
                <Rate allowHalf defaultValue={2.5} className="start-rate" />
                <label>{item.reviews.reviews}</label>
              </div>
              <h3>About this item</h3>
              <div
                className="about"
                dangerouslySetInnerHTML={{
                  __html: item.short_description,
                }}
              ></div>
            </div>
            <div className="sec">
              <div className="pricing">
                <sup>{item.currency}</sup>
                <label>{item.sale_price}</label>
                <del>
                  {item.currency} {item.regular_price}
                </del>
                <span>{item.discount.discount_text}</span>
              </div>
              <div className="delivery">
                <div>
                  <span>
                    <TruckIcon />
                  </span>
                  <label>Express</label>
                </div>
                <p className="delivery-detail">
                  Free delivery within 1st -3rd October and installation
                  avaialable
                </p>
              </div>
              <Button type="primary" className="full-size">
                ADD TO CART
              </Button>
              <Button type="primary" className="red full-size">
                BUY NOW
              </Button>
            </div>
          </div>
        ) : (
          <div className="info">
            <div className="delivery">
              <span>
                <TruckIcon />
              </span>
              <label>{item.delivery.delivery_type}</label>
            </div>
            <h4>{item.product_name}</h4>
            {mobile ? (
              <div className="pricing">
                <div>
                  <sup>{item.currency}</sup>
                  <label>{item.sale_price}</label>
                  <del>
                    {item.currency} {item.regular_price}
                  </del>
                </div>
                <span>{item.discount.discount_text}</span>
              </div>
            ) : (
              <div className="pricing">
                <sup>{item.currency}</sup>
                <label>{item.sale_price}</label>
                <del>
                  {item.currency} {item.regular_price}
                </del>
                <span>{item.discount.discount_text}</span>
              </div>
            )}
            <div className="rate">
              <Rate allowHalf defaultValue={2.5} />
              <label>246 reviews</label>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
export default ProductCard;
