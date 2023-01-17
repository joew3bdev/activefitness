import ProductList from "../components/product-list/ProductList";
import { callApi } from "./helpers";

export const pageApi = async (urlData) => {
  if (urlData.type == "category") {
    const datafor = {
      country_id: "1",
      language_id: "1",
      channel: "desktop",
      type: urlData.type,
      slug: urlData.slug,
      pagination: 1,
      sorting: "recommended",
      rating: null,
      tags: [],
      filters: {
        brands: null,
        categories: null,
        delivery_days: [],
        prices: {
          min: 0,
          max: 0,
        },
      },
    };
    const res = await callApi({
      URL: "http://reactapi.activefitnessstore.com/api/product/listing",
      TYPE: "POST",
      DATA: datafor,
    });
    console.log(res);
    return { lisitng: res?.data, filterval: datafor, pageType: "lisitng" };
  }
};

export const pageRender = (props) => {
  debugger;
  if (props.pageType == "lisitng") {
    return <ProductList {...props} />;
  }
};
