import ProductList from "../components/product-list/ProductList";
import { callApi } from "./helpers";

export const pageApi = async (urlData) => {
  console.log(urlData);
  if (
    urlData.type == "category" ||
    urlData.type == "brand" ||
    urlData.type == "sub_category"
  ) {
    const datafor = {
      country_id: urlData.country_id,
      language_id: urlData.language_id,
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
