import { Button, Checkbox, Menu, Modal } from "antd";
import { useEffect, useState } from "react";

function FilterModal({ isModalOpen, handleCancel, lisitng }) {
  const [items, setItems] = useState({});
  useEffect(async () => {
    const lists = lisitng?.filters[0]?.list.map((opt) => {
      return {
        label: opt?.title,
        value: opt?.slug ?? opt?._id,
      };
    });
    const label = lisitng?.filters[0]?.title;
    setItems({ label, lists });
  }, []);
  const getItem = (key, label, options) => {
    return {
      key,
      label,
      options,
    };
  };

  const menuItems = lisitng.filters?.map((item, key) => {
    const label = item.title;
    const itemKey = key + 1;
    const lists = item.list.map((opt) => {
      return {
        label: opt?.title,
        value: opt?.slug ?? opt?._id,
      };
    });
    return getItem(itemKey, label, { label, lists });
  });

  const onSelect = ({ item }) => {
    const options = item?.props?.options;
    setItems(options);
  };
  return (
    <Modal
      title="Filter"
      open={isModalOpen}
      onCancel={handleCancel}
      width={"100%"}
      height={"100%"}
      footer={null}
      className="filter-modal"
    >
      <div className="menu-wrapper">
        <Menu
          defaultSelectedKeys={["1"]}
          style={{ width: "140px", background: "lightgray" }}
          mode="inline"
          items={menuItems}
          onSelect={onSelect}
        />
        <div className="items-wrapper">
          <Checkbox.Group
            options={items?.lists}
            defaultValue={["Pear"]}
            onChange={(value) => {
              applyFilter(item.name, value);
            }}
          />
        </div>
      </div>
      <div className="modal-buttons">
        <Button onClick={() => {}} className="reset-btn">
          Reset Filter
        </Button>
        <Button
          onClick={() => {
            applyFilter(item.name, value);
          }}
          className="filter-btn"
        >
          Apply Filter
        </Button>
      </div>
    </Modal>
  );
}

export default FilterModal;
