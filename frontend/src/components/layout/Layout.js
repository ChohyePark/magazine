import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";

export default function ({ user }) {
  return (
    <>
      <Header user={user}></Header>
      <Outlet></Outlet>
      <Footer user={user}></Footer>
    </>
  );
}
