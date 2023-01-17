import { Button, Input } from "antd";
import Image from "next/image";
import React from "react";
import Email from "../library/icons/EMail";
import Phone from "../library/icons/Phone";
import Whatsapp from "../library/icons/Whatsapp";
import { EnvironmentOutlined } from "@ant-design/icons";
import Star from "../library/icons/Star";

function Footer(props) {
  return (
    <div className="footer-wrap">
      <div className="sep support">
        <div className="text">
          <p>Hassle finding what you're looking for?</p>
          <p>Connect with Sales Des</p>
        </div>
        <div className="tech">
          <div>
            <span className="circle">
              <Phone />
            </span>
            <span>
              <p>Customer Support</p>
              <p>+971 4 250 6060</p>
            </span>
          </div>

          <div>
            <span className="circle">
              <Whatsapp />
            </span>
            <span>
              <p>WhatsApp Support</p>
              <p>+971 54 581 6298</p>
            </span>
          </div>
          <div>
            <span className="circle">
              <Phone />
            </span>
            <span>
              <p>Service & Technical support</p>
              <p>+971 56 533 6553</p>
            </span>
          </div>
          <div>
            <span className="circle">
              <Email />
            </span>
            <span>
              <p>Email us</p>
              <p>help@cactivefitnessstore.com</p>
            </span>
          </div>
        </div>
      </div>
      <div className="sep about-wrap">
        <div>
          <Image src="/images/image 43.png" width={160} height={160} />
        </div>
        <div className="about-us">
          <p>About Us</p>
          <p>Careers</p>
          <p>FAQs</p>
        </div>
        <div className="about-us terms">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Warranty Policy</p>
          <p>Delivery & Returns</p>
        </div>
        <div className="showroom-wrap">
          <div className="showrooms">
            <EnvironmentOutlined /> <strong>Showrooms</strong>
          </div>
          <div className="detail-wrap">
            <div className="details">
              <span>
                <strong>Dubai</strong>
                <p className="address">
                  The Curve Building, Shop No 1 - Sheikh Zayed Rd - Al Quoz 3 -
                  Dubai - United Arab Emirates
                </p>
              </span>
              <p className="direction">Get Direction</p>
            </div>
            <div className="details">
              <span>
                <strong>Dubai</strong>
                <p className="address">
                  The Curve Building, Shop No 1 - Sheikh Zayed Rd - Al Quoz 3 -
                  Dubai - United Arab Emirates
                </p>
              </span>
              <p className="direction">Get Direction</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sep review-wrap">
        <div className="app-sep">
          <strong>Download our App</strong>
          <div className="img-wrap">
            <Image src="/images/applestore.png" width={122} height={40} />
            <Image src="/images/googlestore.png" width={122} height={40} />
          </div>
        </div>
        <div className="app-sep">
          <strong>Connect with us</strong>
          <Image src="/images/socialmedia.png" width={284} height={33} />
        </div>
        <div className="app-sep-mobile">
          <strong>Google Reviews</strong>
          <div className="star-wrap">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <p>4.3</p>
          </div>
        </div>
        <div className="app-sep-mobile">
          <strong>Send Me Best Offers & Deals</strong>
          <div>
            <Input.Group compact>
              <Input
                style={{
                  width: "334px",
                  height: "46px",
                  background: "#000000",
                  border: "1px solid #1E1E1E",
                }}
                placeholder="Enter your email address"
              />
              <Button
                style={{
                  background: "#252525",
                  color: "#FFFFFF",
                  width: "100px",
                  height: "46px",
                  border: "1px solid #1E1E1E",
                  fontFamily: "Barlow Condensed",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                SUBSCRIBE
              </Button>
            </Input.Group>
          </div>
        </div>
      </div>
      <div className="sep distributors">
        <p>Authertised distributors</p>
        <div>
          <Image src="/images/stag.png" width={60} height={18.52} />
          <Image src="/images/xebex.png" width={54.08} height={18.52} />
          <Image src="/images/insight.png" width={94.08} height={18.52} />
          <Image src="/images/spirit.png" width={88.15} height={18.52} />
          <Image src="/images/cornilleou.png" width={177.04} height={18.52} />
          <Image src="/images/axox.png" width={72.59} height={18.52} />
        </div>
      </div>
      <div className="payements">
        <p className="items">
          Treadmills &nbsp; Elliptical &nbsp; Machine &nbsp; Multi Gym Machin
          &nbsp;Power Tower &nbsp; Functional Trainer &nbsp; Boxing Gloves
          &nbsp; Exercise Bike &nbsp; Upright Bike &nbsp; Spin Bike &nbsp;
          Recumbent Bike &nbsp; Air Bike &nbsp; Rowing Machine &nbsp; Gym Bench
          &nbsp; Dumbbells &nbsp; Adult Bicycle &nbsp; Bike for Kids &nbsp; Pool
          Table &nbsp; Table Tennis Table &nbsp; Football Table Game &nbsp; Men
          Clothing &nbsp; Women Sportswear &nbsp; Sports Shoe for Men &nbsp;
          Sports Shoes for Women
        </p>
        <p className="mobile">Accepted Payment Methods</p>
        <div className="img-wrap">
          <Image src="/images/postpay.png" width={55.38} height={30} />
          <Image src="/images/visa.png" width={55.38} height={30} />
          <Image src="/images/mastercard.png" width={55.38} height={30} />
          <Image src="/images/cs10.png" width={55.38} height={30} />
          <Image src="/images/cashew.png" width={55.38} height={30} />
        </div>
        <p className="mobile-c">© 2013-2022 Active fitness store LLC.</p>
      </div>
    </div>
  );
}

export default Footer;
