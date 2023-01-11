import { Button, Checkbox, Input, Modal } from "antd";
import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";

function PopupModal({
  isModalOpen,
  handleCancel,
  title,
  options,
  applyFilter,
}) {
  const [filterItem, setFilterItem] = useState([]);

  const checkboxOptions = options?.list?.map((opt) => {
    return {
      label: opt?.title,
      value: opt?.slug ?? opt?._id,
    };
  });

  const brandTitle = (
    <div className="brand-title">
      {title}
      <Input
        size="large"
        placeholder="Search brand"
        className="brand-search"
        prefix={<SearchOutlined />}
      />
    </div>
  );

  return (
    <Modal
      title={title == "Brands" ? brandTitle : title}
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      width={400}
      className='popup-modal'
    >
      <>
        <div className="modal-checkbox">
          <Checkbox.Group
            options={checkboxOptions}
            onChange={(value) => {
              const newValue = [...filterItem, value];
              setFilterItem(newValue);
            }}
          />
        </div>
        <div className="modal-buttons">
          <Button
            onClick={() => {
              applyFilter(item.name, value);
            }}
            className="filter-btn"
          >
            Apply Filter
          </Button>
          <Button onClick={() => {}} className="reset-btn">
            Reset
          </Button>
        </div>
      </>
    </Modal>
  );
}

export default PopupModal;
