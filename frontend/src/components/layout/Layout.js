import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";

export default function () {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
