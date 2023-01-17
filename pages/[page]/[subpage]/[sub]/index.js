import SeoHead from "../../../../components/common/Head";
import Layout from "../../../../components/common/Layout";
import { callApi } from "../../../../helpers/helpers";

function Subpage(props) {
  return (
    <Layout>
      <SeoHead />
    </Layout>
  );
}
Subpage.getInitialProps = async (ctx) => {
  const datafor = {
    url: "https://activefitnessstore.com/treadmills",
  };
  const res = await callApi({
    URL: "http://reactapi.activefitnessstore.com/api/transform_url",
    TYPE: "POST",
    DATA: datafor,
  });
  console.log(res);

  return { lisitng: res?.data };
};
export default Subpage;
