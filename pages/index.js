import Carousel from "../components/common/Carousel";
import SeoHead from "../components/common/Head";
import Layout from "../components/common/Layout";
import TabCarousel from "../components/common/TabCarousel";
import { Button, Col } from "antd";
import { Row } from "antd";
import UserStar from "../components/library/icons/Star";
import Image from "next/image";
export default function Home() {
  const indexJson = {
    components: [
      {
        type: "top-usp-bar",
        content: [
          {
            "icon-url":
              "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/afs-nordictrack-rw900-july22-mweb-eng.jpg/icon",
            title: "Flexible payment options",
            "sub-title": "Pay in Installment",
          },
          {
            "icon-url":
              "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/afs-nordictrack-rw900-july22-mweb-eng.jpg/icon",
            title: "Flexible payment options",
            "sub-title": "Pay in Installment",
          },
          {
            "icon-url":
              "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/afs-nordictrack-rw900-july22-mweb-eng.jpg/icon",
            title: "Flexible payment options",
            "sub-title": "Pay in Installment",
          },
          {
            "icon-url":
              "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/afs-nordictrack-rw900-july22-mweb-eng.jpg/icon",
            title: "Flexible payment options",
            "sub-title": "Pay in Installment",
          },
        ],
      },
      {
        type: "offer-banner",
        content: [
          {
            url: "https://website.com",
            image:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARsAAACyCAMAAABFl5uBAAAAIVBMVEUAAAAZGRkVFRUNDQ0REREYGBgGBgYLCwsTExMICAgbGxslgkk6AAABy0lEQVR4nO3Z3W6CMBiA4RWhau//gmcUxo98CdMtS/Y9zyGWg76BVuDjAwAAAAAAAAAAAAAAAAAAADju3L3n9NcT+EWnVt7R+r+ewC/SJqZNTJvYo81Ly3CONq2+cmrTJqRNTJuYNjFtYtrEtImla1P7y+V67NRsba6tlXZwwtnajE9J572h2xsvWZvpybPbGzpsiiVr049tht2Rm2LJ2kzXzeV5YL0tROsjydpM683OTjU8hcjWpt52qdZ2XpDfx61vtWxtbgf6fuefYG3P+1e+Nsvf5sPdzv6Vuk0p2zV6NTBzm0ub4tTphfsqReI213uQ+y/D/GFhMSBxmzFIXX2nWa7GedtMf5FLrXOa1Wqcr033mO0cZOgWaZZD07Wp4xuKVZBlmzlGujbdY77n+FPw19Bsbeo44bBMmR8osrV53EptiNvMq3GyNjW+leYLZxqcrE20Aq/aTDlytTly2ZSv1ThXmyOXzbwap2pzbceMr7hStfkmbWLaxLSJaRNL0qY/vSBHm3Jw814rOdq8TBtttNnQJqZNTJuYNjFtYtrEtIlpE9Mmpk1Mm5g2MW1i2sROZXhH+c9tAAAAAAAAAAAAAAAAAAAA4Od9AiosG7xaKcMBAAAAAElFTkSuQmCC",
          },
          {
            title: "Exceed your limits. Stay in shape. Have fun.",
            url: "https://website.com",
            position: "center",
            "bg-color": "red",
            "cta-url": "https://website.com",
            "cta-text": "shop now",
            "cta-text-color": "white",
            "cta-bg-color": "red",
          },
        ],
      },
      {
        type: "carousel",
        style: "carousel-fluid, carousel-container",
        "support-image": "true",
        grid: 3,
        "image-url": "https://website.com/image",
        url: "https://website.com",
        content: [
          {
            grid: 1,
            item: 4,
            carousels: [
              {
                "slide-number": 1,
                "slide-image":
                  "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/afs-festive-sale-dec-web-eng-ae.png",
                title: "Exceed your limit. Stay in shape. Have Fun",
                "title-color": "white",
                "cta-text": "shop now",
                "cta-url": "https://website.com",
                "cta-text-color": "white",
                "cta-bg-color": "red",
              },
              {
                "slide-number": 2,
                "slide-image":
                  "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/afs-festive-sale-dec-web-eng-ae.png",
                title: "Exceed your limit. Stay in shape. Have Fun",
                "title-color": "white",
                "sub-title":
                  "Amet officia reprehenderit amet cupidatat elit ullamco amet.",
                "sub-title-color": "gray",
                "cta-text": "shop now",
                "cta-url": "https://website.com",
                "cta-text-color": "white",
                "cta-bg-color": "red",
              },
              {
                "slide-number": 3,
                "slide-image":
                  "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/afs-festive-sale-dec-web-eng-ae.png",
                title: "Exceed your limit. Stay in shape. Have Fun",
                "title-color": "white",
                "sub-title":
                  "Amet officia reprehenderit amet cupidatat elit ullamco amet.",
                "sub-title-color": "gray",
                "cta-text": "shop now",
                "cta-url": "https://website.com",
                "cta-text-color": "white",
                "cta-bg-color": "red",
              },
              {
                "slide-number": 4,
                "slide-image":
                  "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/afs-festive-sale-dec-web-eng-ae.png",
                title: "Exceed your limit. Stay in shape. Have Fun",
                "cta-text": "shop now",
                "cta-url": "https://website.com",
                "cta-text-color": "white",
                "cta-bg-color": "red",
              },
            ],
          },
        ],
      },
      {
        type: "carousel",
        style: "carousel-fluid, carousel-container",
        "support-image": "true",
        grid: 3,
        "image-url": "https://website.com/image",
        url: "https://website.com",
        content: [
          {
            grid: 6,
            item: 6,
            carousels: [
              {
                "slide-number": 1,
                "slide-image":
                  "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/home-multi-gym22-de.png",
                "cta-url": "https://website.com",
              },
              {
                "slide-number": 2,
                "slide-image":
                  "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/home-multi-gym22-de.png",
              },
              {
                "slide-number": 3,
                "slide-image":
                  "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/home-multi-gym22-de.png",
              },
              {
                "slide-number": 4,
                "slide-image":
                  "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/home-multi-gym22-de.png",
              },
              {
                "slide-number": 4,
                "slide-image":
                  "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/home-multi-gym22-de.png",
              },
              {
                "slide-number": 4,
                "slide-image":
                  "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/home-multi-gym22-de.png",
              },
            ],
          },
        ],
      },
      {
        type: "category-group",
        title: "Get fit with Treadmills",
        content: [
          {
            grid: 8,
            children: [
              {
                title: "Get fit with Treadmills",
                "title-color": "white",
                image:
                  "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/afs-nordictrack-rw900-july22-mweb-eng.jpg",
                "cta-text": "shop now",
                "cta-url": "https://website.com",
                "cta-text-color": "white",
                "cta-bg-color": "red",
              },
            ],
          },
          {
            grid: 4,
            children: [
              {
                image:
                  "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/afs-nordictrack-rw900-july22-mweb-eng.jpg",
                "cta-text": "shop now",
                "cta-url": "https://website.com",
                "cta-text-color": "white",
                "cta-bg-color": "red",
              },
              {
                image:
                  "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/afs-nordictrack-rw900-july22-mweb-eng.jpg",
                "cta-text": "shop now",
                "cta-url": "https://website.com",
                "cta-text-color": "white",
                "cta-bg-color": "red",
              },
            ],
          },
        ],
      },
      {
        type: "static-images",
        padding: "30px",
        content: [
          {
            grid: 4,
            image:
              "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/hds-ex-brands-nordictrack.png",
            title: "optional",
            url: "optional",
          },
          {
            grid: 4,
            image:
              "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/hds-ex-brands-adidas.png",
          },
          {
            grid: 4,
            image:
              "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/hds-ex-brands-stag.png",
          },
        ],
      },
      {
        type: "product-carousel",
        title: "Get fit with Treadmills",
        "carousel-style":
          "horizontal, vertical, default, with-banner, vertical-with-image",
        tabs: [
          {
            id: "0",
            title: "treadmill",
          },
          {
            id: "1",
            title: "treadmill",
          },
          {
            id: "2",
            title: "treadmill",
          },
          {
            id: "3",
            title: "treadmill",
          },
        ],
        "tab-title": "Categories",
        banner: {
          image:
            "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/afs-nordictrack-rw900-july22-mweb-eng.jpg",
          title: "Get fit with Treadmills",
          "title-color": "white",
          "cta-text": "shop now",
          "cta-url": "https://website.com",
          "cta-text-color": "white",
          "cta-bg-color": "red",
        },
        image:
          "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/afs-nordictrack-rw900-july22-mweb-eng.jpg",
        content: [
          {
            "tab-id": 1,
            children: [
              {
                title: "Reebok Fitness Treadmill",
                url: "https://website.com/product",
                "sale-price": "AED 8745",
                "retial-price": "AED 7896",
                "discount-percentage": "20%",
                "star-rating": "4.5",
                "total-rating": "254",
                badge: "Express",
              },
              {
                title: "Reebok Fitness Treadmill",
                url: "https://website.com/product",
                "sale-price": "AED 8745",
                "retial-price": "AED 7896",
                "discount-percentage": "20%",
                "star-rating": "4.5",
                "total-rating": "254",
                badge: "Express",
              },
            ],
          },
          {
            "tab-id": 2,
            children: [
              {
                title: "Reebok Fitness Treadmill",
                url: "https://website.com/product",
                "sale-price": "AED 8745",
                "retial-price": "AED 7896",
                "discount-percentage": "20%",
                "star-rating": "4.5",
                "total-rating": "254",
                badge: "Express",
              },
              {
                title: "Reebok Fitness Treadmill",
                url: "https://website.com/product",
                "sale-price": "AED 8745",
                "retial-price": "AED 7896",
                "discount-percentage": "20%",
                "star-rating": "4.5",
                "total-rating": "254",
                badge: "Express",
              },
            ],
          },
          {
            "tab-id": 3,
            children: [
              {
                title: "Reebok Fitness Treadmill",
                url: "https://website.com/product",
                "sale-price": "AED 8745",
                "retial-price": "AED 7896",
                "discount-percentage": "20%",
                "star-rating": "4.5",
                "total-rating": "254",
                badge: "Express",
              },
              {
                title: "Reebok Fitness Treadmill",
                url: "https://website.com/product",
                "sale-price": "AED 8745",
                "retial-price": "AED 7896",
                "discount-percentage": "20%",
                "star-rating": "4.5",
                "total-rating": "254",
                badge: "Express",
              },
            ],
          },
        ],
      },
      {
        type: "cta-block",
        content: [
          {
            grid: 12,
            title: "Exceed your limit. Stay in shape. Have Fun",
            "sub-title":
              "Amet officia reprehenderit amet cupidatat elit ullamco amet.",
            "cta-type": "bg-less, with-bg",
            "cta-text": "shop now",
            "cta-url": "https://website.com",
            "cta-text-color": "white",
            "cta-bg-color": "red",
          },
        ],
      },
      {
        type: "category-hover-card",
        title: "Get fit with Treadmills",
        style: "split-view, full-width",
        content: [
          {
            title: "Fitness",
            "title-color": "white",
            "bg-color": "black",
            image:
              "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/hds-new-arrival-treadmill.png",
            children: [
              {
                title: "Cardio",
                url: "https://website.com/cardio",
              },
              {
                title: "Strength",
                url: "https://website.com/cardio",
              },
              {
                title: "Weight",
                url: "https://website.com/cardio",
              },
              {
                title: "Performance",
                url: "https://website.com/cardio",
              },
            ],
          },
          {
            title: "Sports",
            "title-color": "white",
            "bg-color": "black",
            image:
              "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/afs-nordictrack-rw900-july22-mweb-eng.jpg",
            children: [
              {
                title: "Cardio",
                url: "https://website.com/cardio",
              },
              {
                title: "Strength",
                url: "https://website.com/cardio",
              },
              {
                title: "Weight",
                url: "https://website.com/cardio",
              },
              {
                title: "Performance",
                url: "https://website.com/cardio",
              },
            ],
          },
          {
            title: "Weight",
            "title-color": "white",
            "bg-color": "black",
            image:
              "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/afs-nordictrack-rw900-july22-mweb-eng.jpg",
            children: [
              {
                title: "Cardio",
                url: "https://website.com/cardio",
              },
              {
                title: "Strength",
                url: "https://website.com/cardio",
              },
              {
                title: "Weight",
                url: "https://website.com/cardio",
              },
              {
                title: "Performance",
                url: "https://website.com/cardio",
              },
            ],
          },
        ],
      },
      {
        type: "category-card",
        title: "Get fit with Treadmills",
        content: [
          {
            grid: 4,
            title: "Cardio",
            image:
              "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/hds-new-arrival-treadmill.png",
            children: [
              {
                title: "Cardio",
                url: "https://website.com/cardio",
              },
              {
                title: "Strength",
                url: "https://website.com/cardio",
              },
              {
                title: "Weight",
                url: "https://website.com/cardio",
              },
              {
                title: "Performance",
                url: "https://website.com/cardio",
              },
            ],
          },
          {
            grid: 4,
            title: "Strength",
            image:
              "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/hds-new-arrival-sbike.png",
            children: [
              {
                title: "Cardio",
                url: "https://website.com/cardio",
              },
              {
                title: "Strength",
                url: "https://website.com/cardio",
              },
              {
                title: "Weight",
                url: "https://website.com/cardio",
              },
              {
                title: "Performance",
                url: "https://website.com/cardio",
              },
            ],
          },
          {
            grid: 4,
            title: "Weight",
            image:
              "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/hds-new-arrival-hgym.png",
            children: [
              {
                title: "Cardio",
                url: "https://website.com/cardio",
              },
              {
                title: "Strength",
                url: "https://website.com/cardio",
              },
              {
                title: "Weight",
                url: "https://website.com/cardio",
              },
              {
                title: "Performance",
                url: "https://website.com/cardio",
              },
            ],
          },
        ],
      },
      {
        type: "testimonial",
        title: "What’s our Customers saying?",
        content: [
          {
            name: "Giannis Kollias",
            location: "Location, Gym name",
            src: "/images/user.png",
            image:
              "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/afs-nordictrack-rw900-july22-mweb-eng.jpg",
            "star-rating": "4.5",
            message:
              "Veniam dolore do et eu. Sint enim consectetur sunt aute velit aute duis duis duis nisi ullamco consectetur Lorem. Lorem labore dolor sunt mollit occaecat minim fugiat incididunt elit cillum irure enim. Deserunt aute commodo magna eiusmod anim aute velit consectetur sunt. Deserunt proident amet sunt aliqua eu dolor pariatur nulla eiusmod velit ad. Ea irure consectetur ex qui esse irure cupidatat fugiat esse esse anim do Lorem.",
          },
          // {
          //   name: "Giannis Kollias",
          //   location: "Location, Gym name",
          //   src: "/images/user.png",
          //   image:
          //     "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/afs-nordictrack-rw900-july22-mweb-eng.jpg",
          //   "star-rating": "4.5",
          //   message:
          //     "Veniam dolore do et eu. Sint enim consectetur sunt aute velit aute duis duis duis nisi ullamco consectetur Lorem. Lorem labore dolor sunt mollit occaecat minim fugiat incididunt elit cillum irure enim. Deserunt aute commodo magna eiusmod anim aute velit consectetur sunt. Deserunt proident amet sunt aliqua eu dolor pariatur nulla eiusmod velit ad. Ea irure consectetur ex qui esse irure cupidatat fugiat esse esse anim do Lorem.",
          // },
          // {
          //   name: "Giannis Kollias",
          //   location: "Location, Gym name",
          //   src: "/images/user.png",
          //   image:
          //     "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/afs-nordictrack-rw900-july22-mweb-eng.jpg",
          //   "star-rating": "4.5",
          //   message:
          //     "Veniam dolore do et eu. Sint enim consectetur sunt aute velit aute duis duis duis nisi ullamco consectetur Lorem. Lorem labore dolor sunt mollit occaecat minim fugiat incididunt elit cillum irure enim. Deserunt aute commodo magna eiusmod anim aute velit consectetur sunt. Deserunt proident amet sunt aliqua eu dolor pariatur nulla eiusmod velit ad. Ea irure consectetur ex qui esse irure cupidatat fugiat esse esse anim do Lorem.",
          // },
          // {
          //   name: "Giannis Kollias",
          //   src: "/images/user.png",
          //   image:
          //     "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/afs-nordictrack-rw900-july22-mweb-eng.jpg",
          //   "star-rating": "4.5",
          //   message:
          //     "Veniam dolore do et eu. Sint enim consectetur sunt aute velit aute duis duis duis nisi ullamco consectetur Lorem. Lorem labore dolor sunt mollit occaecat minim fugiat incididunt elit cillum irure enim. Deserunt aute commodo magna eiusmod anim aute velit consectetur sunt. Deserunt proident amet sunt aliqua eu dolor pariatur nulla eiusmod velit ad. Ea irure consectetur ex qui esse irure cupidatat fugiat esse esse anim do Lorem.",
          // },
        ],
      },
      {
        type: "blog-section",
        title: "Content block section",
        content: [
          {
            grid: 3,
            image:
              "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/afs-nordictrack-rw900-july22-mweb-eng.jpg",
            title: "Exceed your limit. Stay in shape. Have Fun",
            url: "https://website.com/blog/post",
            "create-date": "24/11/2022",
            category: "Fitness",
          },
          {
            grid: 3,
            image:
              "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/afs-nordictrack-rw900-july22-mweb-eng.jpg",
            title: "Exceed your limit. Stay in shape. Have Fun",
            url: "https://website.com/blog/post",
            "create-date": "24/11/2022",
            category: "Fitness",
          },
          {
            grid: 3,
            image:
              "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/afs-nordictrack-rw900-july22-mweb-eng.jpg",
            title: "Exceed your limit. Stay in shape. Have Fun",
            url: "https://website.com/blog/post",
            "create-date": "24/11/2022",
            category: "Fitness",
          },
          {
            grid: 3,
            image:
              "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/afs-nordictrack-rw900-july22-mweb-eng.jpg",
            title: "Exceed your limit. Stay in shape. Have Fun",
            url: "https://website.com/blog/post",
            "create-date": "24/11/2022",
            category: "Fitness",
          },
        ],
      },
    ],
  };

  const renderComp = (data) => {
    const structrue = (content) => {
      return (
        <>
          <Col span={24}>
            {data.title && <h1 className="main-title">{data.title}</h1>}
          </Col>
          {content}
        </>
      );
    };
    if (data.type == "offer-banner") {
      return structrue(
        <Col>
          {data.content.map((item) => {
            return (
              <div
                className="offer-banner"
                style={{ backgroundColor: item["bg-color"] }}
              >
                {item["title"] && (
                  <div className="content">
                    <h1>{item["title"]}</h1>{" "}
                  </div>
                )}
                {item["cta-text"] && (
                  <Button type="primary" className="white">
                    {item["cta-text"]}
                  </Button>
                )}

                {item.image && <img src={item.image} />}
              </div>
            );
          })}
        </Col>
      );
    } else if (data.type == "carousel") {
      return structrue(
        <Col>
          <Carousel
            slidesToShow={data.content[0].grid}
            slidesToScroll={data.content[0].grid}
          >
            {data.content[0].carousels.map((item) => {
              return (
                <div className="carousel">
                  <div className="content">
                    {item.title && (
                      <h1 style={{ color: item["title-color"] }}>
                        {item.title}
                      </h1>
                    )}
                    {item["sub-title"] && (
                      <h4 style={{ color: item["sub-title-color"] }}>
                        {item["sub-title"]}
                      </h4>
                    )}
                    {item["cta-text"] && (
                      <Button
                        type="primary"
                        style={{
                          color: item["cta-text-color"],
                          background: item["cta-bg-color"],
                          borderColor: item["cta-bg-color"],
                        }}
                      >
                        {item["cta-text"]}
                      </Button>
                    )}
                  </div>
                  <img src={item["slide-image"]} />
                </div>
              );
            })}
          </Carousel>
        </Col>
      );
    } else if (data.type == "category-group") {
      return structrue(
        data.content.map((main) => {
          return (
            <Col span={main.grid * 2}>
              <Carousel slidesToShow={1} slidesToScroll={1}>
                {main.children.map((item) => {
                  return (
                    <div className="carousel">
                      <div className="content">
                        {item.title && (
                          <h1 style={{ color: item["title-color"] }}>
                            {item.title}
                          </h1>
                        )}
                        {item["sub-title"] && (
                          <h4 style={{ color: item["sub-title-color"] }}>
                            {item["sub-title"]}
                          </h4>
                        )}
                        {item["cta-text"] && (
                          <Button
                            type="primary"
                            style={{
                              color: item["cta-text-color"],
                              background: item["cta-bg-color"],
                              borderColor: item["cta-bg-color"],
                            }}
                          >
                            {item["cta-text"]}
                          </Button>
                        )}
                      </div>
                      <img src={item["image"]} />
                    </div>
                  );
                })}
              </Carousel>
            </Col>
          );
        })
      );
    } else if (data.type == "static-images") {
      return structrue(
        data.content.map((item) => {
          return (
            <Col span={item.grid * 2}>
              <img src={item.image} />
            </Col>
          );
        })
      );
    } else if (data.type == "testimonial") {
      return structrue(
        <Carousel slidesToShow={1} slidesToScroll={1}>
          {data.content.map((item) => {
            return (
              <div className="testimonial">
                <p className="message">{item.message}</p>
                <div className="user">
                  <div>
                    <Image src={item.src} width={72} height={72} />
                  </div>
                  <div className="details">
                    <strong>{item["name"]}</strong>
                    <p>{item["location"]}</p>
                    <div className="star-wrap">
                      {Array(Math.round(Number(item["star-rating"]))).fill(
                        <UserStar />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      );
    } else if (data.type == "blog-section") {
      return structrue(
        <Row gutter={20}>
          {data.content.map((item) => {
            return (
              <Col span={item.grid * 2} className="block">
                <img src={item.image} />
                <p className="blockName">{item.category}</p>
                <p className="details">{item.title}</p>
              </Col>
            );
          })}
        </Row>
        // <dev className="blog-section">
        //   {data.content.map((item) => {
        //     return (
        //       <div className="block">
        //         <img src={item.image} />
        //         <p className="blockName">{item.category}</p>
        //         <p className="details">{item.title}</p>
        //       </div>
        //     );
        //   })}
        // </dev>
      );
    } else if (data.type == "category-card") {
      return structrue(
        <div className="category">
          {data.content.map((item) => {
            return (
              <div className="category-card">
                <img className="image" src={item.image} />
                <div className="card-details">
                  <p className="title">{item.title}</p>
                  {item.children.map((child) => {
                    return (
                      <a href={child.url} className="detail">
                        {child.title}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  };
  return (
    <Layout>
      <SeoHead />
      <br />
      {indexJson.components.map((item, key) => {
        return <Row gutter={[30, 0]}>{renderComp(item)}</Row>;
      })}
      {/* <Carousel slidesToShow={5} slidesToScroll={5}>
        <div>
          <img src="https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/afs-brands-concept2-web-eng-sep22.jpg" />
          <spna> AJit</spna>
        </div>
        <div>
          <img src="https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/afs-brands-lifefitness-web-eng-sep22.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/afs-brands-nordictrack-web-eng-sep22.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/afs-brands-assault-fitness-web-eng-sep22.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/afs-brands-concept2-web-eng-sep22.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/afs-brands-concept2-web-eng-sep22.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/afs-brands-concept2-web-eng-sep22.jpg" />
        </div>
      </Carousel>
      <br />
      <Carousel slidesToShow={1} slidesToScroll={1}>
        <div>
          <img src="https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/afs-nordictrack-rw900-july22-mweb-eng.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/nordictrack-x32i-oct22-web-eng.jpg" />
        </div>
      </Carousel>
      <br />
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <br />
      <TabCarousel position="top" />
      <br />
      <TabCarousel position="left" /> */}
    </Layout>
  );
}
