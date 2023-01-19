import { Modal } from "antd";

function FilterModal({ isModalOpen, handleCancel, lisitng }) {
  return (
    <Modal
      title="Filter"
      open={isModalOpen}
      onCancel={handleCancel}
      width={100}
      className="filter-modal"
    >
      <>Test</>
    </Modal>
  );
}

export default FilterModal;
