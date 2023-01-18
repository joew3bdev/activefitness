import { useEffect } from "react";
import SeoHead from "../components/common/Head";
import Layout from "../components/common/Layout";
import { callApi } from "../helpers/helpers";
import { pageApi, pageRender } from "../helpers/pageRender";

function Page(props) {
  useEffect(() => {}, []);
  return (
    <Layout>
      <SeoHead />
      {pageRender(props.data)}
    </Layout>
  );
}
Page.getInitialProps = async (ctx) => {
  const url = ctx.query.params.join("/");
  const datafor = {
    url: `https://activefitnessstore.com/${url}`,
  };
  const res = await callApi({
    URL: "http://reactapi.activefitnessstore.com/api/transform_url",
    TYPE: "POST",
    DATA: datafor,
  });
  const data = await pageApi(res?.data);
  return { data: { ...data } };
};
export default Page;
