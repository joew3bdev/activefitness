import React, { useState } from "react";
import { Tabs } from "antd";
import Carousel from "./Carousel";

function TabCarousel(props) {
  const items = [
    {
      label: "Category title 1",
      key: "Category title 1",
      children: (
        <Carousel slidesToShow={5} slidesToScroll={5}>
          <div>
            <img src="https://res.cloudinary.com/afs-assets/image/upload/w_300,h_400/f_auto/v327102019/product-large/SUN-DII-XBU55-0/SUN-DII-XBU55-0.jpg" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/afs-assets/image/upload/w_300,h_400/f_auto/v327102019/product-large/GC-012/GC-012-V2.jpg" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/afs-assets/image/upload/w_300,h_400/f_auto/v327102019/product-large/ICON-PFEL-03717/ICON-PFEL-03717.jpg" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/afs-assets/image/upload/w_300,h_400/f_auto/v327102019/product-large/XT185/XT185.jpg" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/afs-assets/image/upload/w_300,h_400/f_auto/v327102019/product-large/ICWEEVSY49810/ICWEEVSY49810.jpg" />
          </div>
        </Carousel>
      ),
    }, // remember to pass the key prop
    {
      label: "Category title 2",
      key: "Category title 2",
      children: (
        <Carousel slidesToShow={5} slidesToScroll={5}>
          <div>
            <img src="https://res.cloudinary.com/afs-assets/image/upload/w_300,h_400/f_auto/v327102019/product-large/GC-012/GC-012-V2.jpg" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/afs-assets/image/upload/w_300,h_400/f_auto/v327102019/product-large/SUN-DII-XBU55-0/SUN-DII-XBU55-0.jpg" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/afs-assets/image/upload/w_300,h_400/f_auto/v327102019/product-large/XT185/XT185.jpg" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/afs-assets/image/upload/w_300,h_400/f_auto/v327102019/product-large/ICON-PFEL-03717/ICON-PFEL-03717.jpg" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/afs-assets/image/upload/w_300,h_400/f_auto/v327102019/product-large/ICWEEVSY49810/ICWEEVSY49810.jpg" />
          </div>
        </Carousel>
      ),
    },
  ];
  return (
    <div className={`${props.position}-tab-carousel`}>
      <Tabs
        items={items}
        defaultActiveKey="1"
        type={props.position == "top" ? "card" : ""}
        centered={true}
        size="small"
        tabPosition={props.position}
        animated={{ inkBar: true, tabPane: false }}
        destroyInactiveTabPane={true}
      />
    </div>
  );
}

export default TabCarousel;
