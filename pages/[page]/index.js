import { useEffect } from "react";
import SeoHead from "../../components/common/Head";
import Layout from "../../components/common/Layout";
import { callApi } from "../../helpers/helpers";
import { pageApi, pageRender } from "../../helpers/pageRender";

function Page(props) {
  return (
    <Layout>
      <SeoHead />
      {pageRender(props.data)}
    </Layout>
  );
}
Page.getInitialProps = async (ctx) => {
  const datafor = {
    url: `https://activefitnessstore.com/${ctx.query.page}`,
  };
  const res = await callApi({
    URL: "http://reactapi.activefitnessstore.com/api/transform_url",
    TYPE: "POST",
    DATA: datafor,
  });
  const data = await pageApi(res?.data);
  console.log(data);
  return { data: { ...data } };
};
export default Page;
