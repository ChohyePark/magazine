import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import GlobalStyle from "./GlobalStyle";
import ScrollToTop from "./ScrollToTop";
import Search from "./pages/Search";
import UserInfo from "./pages/mypage/UserInfo";
import UserPasswordCheck from "./pages/mypage/UserPasswordCheck";
import UserOut from "./pages/mypage/UserOut";
import MyComunity from "./pages/mypage/MyComunity";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { saveUser } from "./store/store";
import { useDispatch } from "react-redux";
import Index from "./pages/Index";
import PostCreate from "./pages/PostCreate";
import PostDetail from "./pages/postDetail/PostDetail";
import PostUpdate from "./pages/PostUpdate";
import PostList from "./pages/postList/PostList";
import Login from "./pages/Login";
import Join from "./pages/Join";
import MyPage from "./pages/mypage/MyPage";
import BookMark from "./pages/mypage/BookMark";
import Layout from "./components/layout/Layout";
import Error from "./pages/Error";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      dispatch(saveUser(JSON.parse(localStorage.getItem("user"))));
    }
  }, []);

  return (
    <div className="container-flud">
      <GlobalStyle />
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/newpost" element={<PostCreate />} />
          <Route path="/post/:id" element={<PostDetail></PostDetail>} />
          <Route path="/updatepost/:id" element={<PostUpdate />} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/join" element={<Join></Join>} />
          <Route path="/mypage" element={<MyPage></MyPage>}>
            <Route path="info" element={<UserInfo></UserInfo>} />
            <Route path="reconfirm" element={<UserPasswordCheck></UserPasswordCheck>} />
            <Route path="bookmark" element={<BookMark />} />
            <Route path="userout" element={<UserOut></UserOut>} />
            <Route path="mycommunity" element={<MyComunity></MyComunity>} />
          </Route>
        </Route>
        {/* 레이아웃 적용 페이지 끝  */}
        <Route path="/search" element={<Search></Search>} />
        <Route path="/*" element={<Error></Error>} />
      </Routes>
    </div>
  );
}

export default App;
