import Navbar from "./Navbar";
import Footer from "./Footer";
import "../../styles/Layout.module.css";

export default function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
