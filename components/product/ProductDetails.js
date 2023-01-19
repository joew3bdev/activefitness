function ProductDetails(props) {
  const { tabKey, productDetails } = props;
  return (
    <div className="tab-children">
      {tabKey == 1 ? (
        <p className="pdtDetails">
          Airy mesh shoes with plush cushioning. However you move, these adidas
          training shoes were designed specifically to support the unique you.
          Whether you're on the pavement, treadmill or in that early-morning
          HIIT class, the supportive, locked-in feel offers a free range of
          motion. The breathable upper keeps airflow circulating{" "}
        </p>
      ) : tabKey == 2 ? (
        productDetails && productDetails?.product_specifications.map((item) => (
          <div className="specifications">
            <p>{item.spec_name}</p>
            <strong>{item.spec_value}</strong>
          </div>
        ))
      ) : tabKey == 3 ? (
        <div className="delivery-wrap">
          <ul>
            <li>All orders above AED 100 will be eligible</li>
          </ul>
        </div>
      ) : tabKey == 4 ? (
        <div className="service">
          <p>Free Installation will be provided to all equipment & machines which need expert skills. Installation service will not be covered for below listed items</p>
          <ul>
            <li>tems required </li>
          </ul>
        </div>
      ) : tabKey == 5 ? (
        <div className="pdt-reviews">
          Pdt Reviews here
        </div>
      ) : null}
      <div className="return-info">
        <strong>Return Information</strong>
        <p>We have 14 days Return policy. Conditions Apply. Learn more</p>
      </div>
    </div>
  );
}
export default ProductDetails;
