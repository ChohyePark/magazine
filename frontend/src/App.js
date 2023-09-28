import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import ScrollToTop from "./ScrollToTop";
import Search from "./components/layout/header/navi/Search";
import UserInfo from "./components/body/mypage/UserInfo";
import CheckPw from "./components/body/mypage/CheckPw";
import UserInfoMod from "./components/body/mypage/UserInfoMod";
import UserOut from "./components/body/mypage/UserOut";
import MyComunity from "./components/body/mypage/MyComunity";
import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/index/Index";
import BoardWritePage from "./pages/BoardWritePage";
import PostDetailPage from "./pages/postDetail/PostDetailPage";
import PostUpdatePage from "./pages/postUpdate/PostUpdatePage";
import PostListPage from "./pages/postList/PostListPage";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";
import MyPage from "./pages/MyPage";

import BookMark from "./components/body/mypage/BookMark";
import Header from "./components/layout/header/Header";
import ErrorPage from "./pages/error/ErrorPage";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  return (
    <div className="container-flud">
      <ScrollToTop />
      <Routes>
        <Route element={<Header user={user} />}>
          <Route path="/" element={<Index user={user} setUser={setUser} />} />
          <Route path="/posts" element={<PostListPage user={user} />}></Route>
          <Route path="/newpost" element={<BoardWritePage user={user}></BoardWritePage>} />
          <Route path="/post/:id" element={<PostDetailPage user={user}></PostDetailPage>} />
          <Route path="/modpost/:id" element={<PostUpdatePage />}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/join" element={<JoinPage></JoinPage>}></Route>
          <Route path="/mypage" element={<MyPage></MyPage>}>
            <Route path="info" element={<UserInfo user={user} setUser={setUser}></UserInfo>}></Route>
            <Route path="reconfirm" element={<CheckPw user={user}></CheckPw>}></Route>
            <Route path="bookmark" element={<BookMark></BookMark>}></Route>
            <Route path="infomod" element={<UserInfoMod user={user} setUser={setUser}></UserInfoMod>}></Route>
            <Route path="userout" element={<UserOut></UserOut>}></Route>
            <Route path="mycommunity" element={<MyComunity></MyComunity>}></Route>
          </Route>
        </Route>
        {/* 헤더 적용 페이지 끝  */}
        <Route path="/search" element={<Search></Search>}></Route>
        <Route path="/*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
