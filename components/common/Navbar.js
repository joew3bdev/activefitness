import Image from "next/image";
import { Dropdown, Popover } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React, { useState } from "react";
import Cart from "../library/icons/Cart";
import Profile from "../library/icons/Profile";
import LocIcon from "../library/icons/LocIcon";
function Navbar(props) {
  const menuJson = {
    groups: [
      {
        key: "Fitness",
        submenu: [
          {
            key: "Cardio",
            url: "https://activefitnessstore.com/cardio",
            megamenu: [
              {
                grid: 2,
                type: "link",
                "content-block": [
                  {
                    type: "link",
                    title: "Upright Bike",
                    url: "https://activefitnessstore.com/exercise-bikes/upright-bike",
                  },
                  {
                    type: "link",
                    title: "Recumbent Bike",
                    url: "https://activefitnessstore.com/exercise-bikes/recumbent-bike",
                  },
                  {
                    type: "link",
                    title: "Spinning Bike",
                    url: "https://activefitnessstore.com/exercise-bikes/spinning-bike",
                  },
                  {
                    type: "link",
                    title: "Air Bike",
                    url: "https://activefitnessstore.com/exercise-bikes/air-bike",
                  },
                  {
                    type: "link",
                    title: "Stepper",
                    url: "https://activefitnessstore.com/climbmill-stepper/stepper-machine",
                  },
                  {
                    type: "link",
                    title: "Bike Trainer",
                    url: "https://activefitnessstore.com/bikes/bike-trainers",
                  },
                  {
                    type: "link",
                    title: "Mirror",
                    url: "https://activefitnessstore.com/strength-training/fitness-mirror",
                  },
                  {
                    type: "link",
                    title: "Climber",
                    url: "https://activefitnessstore.com/climbmill-stepper/climbmill-trainers",
                  },
                ],
              },
              {
                grid: 2,
                "block-title": "Popular Brands",
                type: "block-link",
                "content-block": [
                  {
                    type: "link",
                    title: "ProForm",
                    url: "https://activefitnessstore.com/proform",
                  },
                  {
                    type: "link",
                    title: "NordicTrack",
                    url: "https://activefitnessstore.com/nordictrack",
                  },
                  {
                    type: "link",
                    title: "Spirit Fitness",
                    url: "https://activefitnessstore.com/spirit-fitness",
                  },
                  {
                    type: "link",
                    title: "Life Fitness",
                    url: "https://activefitnessstore.com/life-fitness",
                  },
                  {
                    type: "link",
                    title: "Horizon Fitness",
                    url: "https://activefitnessstore.com/horizon-fitness",
                  },
                  {
                    type: "link",
                    title: "Sole Fitness",
                    url: "https://activefitnessstore.com/sole-fitness",
                  },
                  {
                    type: "link",
                    title: "Reebok Fitness",
                    url: "https://activefitnessstore.com/reebok-fitness",
                  },
                  {
                    type: "link",
                    title: "Matrix",
                    url: "https://activefitnessstore.com/matrix",
                  },
                ],
              },
              {
                grid: 2,
                type: "image-tile",
                "content-block": [
                  {
                    type: "image-tile",
                    title: "Treadmill",
                    url: "https://activefitnessstore.com/treadmills",
                    style: "vertical",
                    "image-url":
                      "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/treadmill-22.jpg",
                  },
                  {
                    type: "image-tile",
                    title: "Max Trainer",
                    url: "https://activefitnessstore.com/elliptical-crosstrainers?tags=max-trainer&sort=recommended",
                    style: "vertical",
                    "image-url":
                      "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/Max%20Trainer.jpg",
                  },
                ],
              },
              {
                grid: 2,
                type: "image-tile",
                "content-block": [
                  {
                    type: "image-tile",
                    title: "Elliptical",
                    url: "https://activefitnessstore.com/elliptical-crosstrainers",
                    "image-url":
                      "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/Elliptical.jpg",
                  },
                  {
                    type: "image-tile",
                    title: "Rower",
                    url: "https://activefitnessstore.com/rowing-machines",
                    "image-url":
                      "https://res.cloudinary.com/afs-assets/image/upload/q_auto,f_auto/v22122019/blocks/rower-22.jpg",
                  },
                ],
              },
              {
                grid: 2,
                type: "logo-tile",
                "content-block": [
                  {
                    url: "https://activefitnessstore.com/axox",
                    "image-url":
                      "https://activefitnessstore.com/images/logos/Axox.jpg",
                  },
                  {
                    url: "https://activefitnessstore.com/cornilleau",
                    "image-url":
                      "https://activefitnessstore.com/images/logos/Cornilleau.jpg",
                  },
                  {
                    url: "https://activefitnessstore.com/concept-2",
                    "image-url":
                      "https://activefitnessstore.com/images/logos/Concept-2.jpg",
                  },
                  {
                    url: "https://activefitnessstore.com/reebok-fitness",
                    "image-url":
                      "https://activefitnessstore.com/images/logos/Reebok-fitness.jpg",
                  },
                ],
              },
              {
                grid: 3,
                type: "horizontal-image-tile",
                "content-block": [
                  {
                    type: "image-tile",
                    title: "Elliptical",
                    url: "https://activefitnessstore.com/elliptical-crosstrainers",
                    "image-url":
                      "https://res.cloudinary.com/afs-assets/image/upload/w_300,h_400/f_auto/v327102019/product-large/PFEL49720-INT/PFEL49720-INT.jpg",
                  },
                  {
                    type: "image-tile",
                    title: "Air Bike",
                    url: "https://activefitnessstore.com/exercise-bikes/air-bike",
                    "image-url":
                      "https://res.cloudinary.com/afs-assets/image/upload/w_300,h_400/f_auto/v327102019/product-large/ABVR-2L/ABVR-2L.jpg",
                  },
                  {
                    type: "image-tile",
                    title: "Air Trainer",
                    url: "https://activefitnessstore.com/bikes/bike-trainers",
                    "image-url":
                      "https://res.cloudinary.com/afs-assets/image/upload/w_300,h_400/f_auto/v327102019/product-large/010-02419-01/010-02419-01.jpg?ver=1",
                  },
                  {
                    type: "image-tile",
                    title: "Mirror",
                    url: "https://activefitnessstore.com/strength-training/fitness-mirror",
                    "image-url":
                      "https://res.cloudinary.com/afs-assets/image/upload/w_300,h_400/f_auto/v327102019/product-large/ECH-REFL02/ECH-REFL02-V.jpg?ver=1",
                  },
                ],
              },
            ],
          },
          {
            key: "Strength",
            url: "https://activefitnessstore.com/strength",
            megamenu: [
              {
                grid: 2,
                "content-block": [
                  {
                    type: "link",
                    title: "Upright Bike",
                    url: "https://activefitnessstore.com/exercise-bikes/upright-bike",
                  },
                  {
                    type: "link",
                    title: "Recumbent Bike",
                    url: "https://activefitnessstore.com/exercise-bikes/recumbent-bike",
                  },
                  {
                    type: "link",
                    title: "Spinning Bike",
                    url: "https://activefitnessstore.com/exercise-bikes/spinning-bike",
                  },
                  {
                    type: "link",
                    title: "Air Bike",
                    url: "https://activefitnessstore.com/exercise-bikes/air-bike",
                  },
                  {
                    type: "link",
                    title: "Stepper",
                    url: "https://activefitnessstore.com/climbmill-stepper/stepper-machine",
                  },
                  {
                    type: "link",
                    title: "Bike Trainer",
                    url: "https://activefitnessstore.com/bikes/bike-trainers",
                  },
                  {
                    type: "link",
                    title: "Mirror",
                    url: "https://activefitnessstore.com/strength-training/fitness-mirror",
                  },
                  {
                    type: "link",
                    title: "Climber",
                    url: "https://activefitnessstore.com/climbmill-stepper/climbmill-trainers",
                  },
                ],
              },
            ],
          },
          {
            key: "Weight",
            url: "https://activefitnessstore.com/weight",
            megamenu: [
              {
                grid: 3,
                "content-block": [
                  {
                    type: "image-tile",
                    title: "Dumbbell",
                    url: "https://activefitnessstore.com/weight-training/dumbbell",
                    style: "vertical",
                    "image-url":
                      "https://res.cloudinary.com/afs-assets/image/upload/v1656576976/assets/menu/dumbell.jpg",
                  },
                ],
              },
              {
                grid: 3,
                "content-block": [
                  {
                    type: "image-tile",
                    title: "Barbell",
                    url: "https://activefitnessstore.com/weight-training/barbell-set-weight-set",
                    style: "vertical",
                    "image-url":
                      "https://res.cloudinary.com/afs-assets/image/upload/v1656576976/assets/menu/barbell.jpg",
                  },
                ],
              },
            ],
          },
          {
            key: "Balance",
            url: "https://activefitnessstore.com/balance",
            megamenu: [
              {
                grid: 3,
                "content-block": [
                  {
                    type: "image-tile",
                    title: "Dumbbell",
                    url: "https://activefitnessstore.com/weight-training/dumbbell",
                    style: "vertical",
                    "image-url":
                      "https://res.cloudinary.com/afs-assets/image/upload/v1656576976/assets/menu/dumbell.jpg",
                  },
                ],
              },
              {
                grid: 3,
                "content-block": [
                  {
                    type: "image-tile",
                    title: "Barbell",
                    url: "https://activefitnessstore.com/weight-training/barbell-set-weight-set",
                    style: "vertical",
                    "image-url":
                      "https://res.cloudinary.com/afs-assets/image/upload/v1656576976/assets/menu/barbell.jpg",
                  },
                ],
              },
            ],
          },
          {
            key: "Functional Training",
            url: "https://activefitnessstore.com/strength-training/functional-trainers",
            megamenu: [
              {
                grid: 3,
                "content-block": [
                  {
                    type: "image-tile",
                    title: "Functional Trainer FT2",
                    url: "https://activefitnessstore.com/inspire-fitness-ft2-functional-trainer",
                    style: "vertical",
                    "image-url":
                      "https://res.cloudinary.com/afs-assets/image/upload/w_300,h_400/f_auto/v327102019/product-large/INSP-FT20-WB/INSP-FT20-WB.jpg",
                  },
                  {
                    type: "image-tile",
                    title: "360PTX Functional Trainer",
                    url: "https://activefitnessstore.com/bruteforce-360ptx-functional-trainer-360ptx",
                    style: "vertical",
                    "image-url":
                      "https://res.cloudinary.com/afs-assets/image/upload/w_300,h_400/f_auto/v327102019/product-large/360PTX/360PTX.jpg?ver=1",
                  },
                  {
                    type: "image-tile",
                    title: "F100 Functional Trainer",
                    url: "https://activefitnessstore.com/force-usa-f100-all-in-one-trainer-pin-loaded-includes-15kg-barbell-f-f100",
                    style: "vertical",
                    "image-url":
                      "https://res.cloudinary.com/afs-assets/image/upload/w_300,h_400/f_auto/v327102019/product-large/F-F100/F-F100-2.jpg?ver=1",
                  },
                  {
                    type: "image-tile",
                    title: "Monster G9 Functional Trainer",
                    url: "https://activefitnessstore.com/force-usa-monster-g9-all-in-one-commercial-strength-training-system-fusa-g9",
                    style: "vertical",
                    "image-url":
                      "https://res.cloudinary.com/afs-assets/image/upload/w_300,h_400/f_auto/v327102019/product-large/FUSA-G9/FUSA-G9.jpg?ver=1",
                  },
                ],
              },
            ],
          },
          {
            key: "Accessories",
            url: "https://activefitnessstore.com/search?q=accessories&hPP=32&idx=afs_latest_2022_index&p=0&is_v=2&dFR%5Bpricing.country_id%5D%5B0%5D=1",
          },
          {
            key: "Flooring",
            url: "https://activefitnessstore.com/search?q=Flooring&hPP=32&idx=afs_latest_2022_index&p=0&is_v=2&dFR%5Bpricing.country_id%5D%5B0%5D=1",
          },
          {
            key: "Calisthenics",
            url: "https://activefitnessstore.com/calisthenics",
          },
        ],
      },
      {
        key: "Sports",
        submenu: [],
      },
      {
        key: "Wellness",
        submenu: [],
      },
      {
        key: "Performance",
        submenu: [],
      },
      {
        key: "Sale",
        submenu: [],
      },
    ],
  };
  const renderMenuComp = (type, data) => {
    if (type == "link") {
      return (
        <ul>
          {data["content-block"].map((item) => {
            return (
              <li>
                <a>{item.title}</a>
              </li>
            );
          })}
        </ul>
      );
    } else if (type == "block-link") {
      return (
        <ul>
          <h3>{data["block-title"]}</h3>
          {data["content-block"].map((item) => {
            return (
              <li>
                <a>{item.title}</a>
              </li>
            );
          })}
        </ul>
      );
    } else if (type == "image-tile") {
      return (
        <ul className="image-tile">
          {data["content-block"].map((item) => {
            return (
              <li>
                <a>
                  <img src={item["image-url"]} />
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      );
    } else if (type == "logo-tile") {
      return (
        <ul className="logo-tile">
          {data["content-block"].map((item) => {
            return (
              <li>
                <a>
                  <img src={item["image-url"]} />
                </a>
              </li>
            );
          })}
        </ul>
      );
    } else if (type == "horizontal-image-tile") {
      debugger;
      return (
        <ul className="horizontal-image-tile">
          {data["content-block"].map((item) => {
            return (
              <li>
                <a>
                  <img src={item["image-url"]} />
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      );
    }
  };
  const rendersubmenu = (key, menu) => {
    return (
      <div key={key} className="sub-menu-wrapper">
        {menu?.map((item, key) => {
          return (
            <div
              style={{
                flex: item.grid,
                padding: "0px 10px",
              }}
            >
              {renderMenuComp(item.type, item)}
            </div>
          );
        })}
      </div>
    );
  };
  const rendermenu = (data) => {
    return (
      <ul className="menu-bar">
        {data.map((item) => {
          return (
            <Dropdown
              key={item.key}
              overlay={rendersubmenu(item.key, item.megamenu)}
              trigger="click"
              getPopupContainer={() =>
                document.querySelector(".menu-bar li." + item.key)
              }
            >
              <li className={item.key}>{item.key}</li>
            </Dropdown>
          );
        })}
      </ul>
    );
  };

  return (
    <nav className="navbar-wrap">
      <div className="sep">
        <Image src="/images/logo.png" width={104} height={50} />
        <ul className="category-bar">
          {menuJson.groups.map((item) => {
            return (
              <Dropdown
                key={item.key}
                overlay={rendermenu(item.submenu)}
                trigger="click"
                getPopupContainer={() =>
                  document.querySelector(".category-bar")
                }
              >
                <li>{item.key}</li>
              </Dropdown>
            );
          })}
        </ul>
        <div className="search-bar">
          <Input
            size="large"
            placeholder="Search over 10,000+ products"
            prefix={<SearchOutlined />}
          />
        </div>
      </div>
      <div className="sep">
        <span>
          <LocIcon /> Store Location
        </span>
        <span>العربية</span>
        <Popover placement="bottom" content={<div>Sele</div>} trigger="click">
          <img
            width={29}
            src="https://activefitnessstore.com/desktop-assets/images/uae.svg"
          />
        </Popover>
        <Profile />
        <Cart />
      </div>
    </nav>
  );
}

export default Navbar;
