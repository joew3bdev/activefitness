import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import "../styles/product-list.css";
import "../styles/product.css";
import "../styles/components.css";
import "../styles/footer.css";
import { translate } from "../public/locale";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} translate={translate} />;
}

export default MyApp;
