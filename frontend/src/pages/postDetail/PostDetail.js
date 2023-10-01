import "bootstrap/dist/css/bootstrap.min.css";
import profile from "../../assets/logo/reply_profile.jpg";
import { useNavigate, useParams, usetNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ListButton from "../postList/PostListButton";
import DOMPurify from "dompurify";
import styled from "styled-components";
import Button from "../../components/shared/Button";
import Comment from "./Comment";
import Container from "../../components/shared/Container";
import { useSelector } from "react-redux";

// 스타일 영역

const Info = styled.div`
  width: 800px;
  height: 70px;
  margin: auto;
  align-items: start;
`;

const ProfileBox = styled.div`
  width: 6rem;
  height: 4.3rem;
  float: left;
`;

const Profile = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50px;
  overflow: hidden;
  float: left;
  img {
    width: 100%;
    height: 100%;
  }
`;

const CategoryBox = styled.div`
  margin-top: 0.7rem;
  padding-top: 1rem;
  float: left;
  height: 4.3rem;
  width: 8rem;
`;

const Category = styled.div`
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 5rem;
  height: 1.6rem;
  font-size: 14px;
  padding-left: 0.3rem;
  padding-top: 0.2em;
`;

const Title = styled.div`
  border-bottom: 1px solid #ccc;
  width: 800px;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin: auto;
  font-size: 32px;
`;

const Content = styled.div`
  margin-top: 10px;
  width: 800px;
  height: 600px;
  border: 1px solid #ccc;
  margin: auto;
  word-break: break-all;
  overflow: scroll;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 800px;
  margin: 14px auto;
  justify-content: end;
`;

const Tab = styled.div`
  display: flex;
  width: 800px;
  margin: 5px auto;
  justifi-content: end;
`;

export default function () {
  const user = useSelector((state) => {
    return state.user;
  });
  const [replys, setReplys] = useState([]);
  const Navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [liked, setLiked] = useState({ isLike: false, count: 0 });
  const [bookMarked, setBookMarked] = useState({ isSubscribed: false });

  const convertToKorean = (category) => {
    return [
      ["FREEDOM", "자유"],
      ["IT", "IT"],
      ["SPORTS", "운동"],
      ["FASHION", "패션"],
    ]
      .filter((c) => c[0] === category)
      .map((c) => c[1]);
  };

  const getReplys = async () => {
    let comments = null;
    try {
      await axios({
        method: "get",
        url: `/api/v1/comments/${id}`,
      }).then((resp) => {
        comments = resp.data;
      });
    } catch (err) {
      console.log(err);
    }
    axios({
      method: "get",
      url: `/api/v1/likes/comments/${id}`,
    }).then((resp) => {
      comments.map((comment, i) => {
        comment.count = resp.data[i].count;
        comment.isLike = resp.data[i].isLike;
      });
      setReplys(comments);
    });
  };

  const getPost = async () => {
    try {
      await axios
        .all([
          axios.get(`/api/v1/posts/${id}`),
          axios.get(`/api/v1/likes/posts/${id}`),
          axios.get(`/api/v1/bookmarks/${id}`),
        ])
        .then(
          axios.spread((post, like, bookmark) => {
            setPost(post.data);
            setLiked({ isLike: like.data.isLike, count: like.data.count });
            setBookMarked({ isSubscribed: bookmark.data.isSubscribed });
          })
        );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
    getReplys();
  }, []);

  const onClickDeletePostHandler = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      axios.delete(`/api/v1/posts/${post.id}`);
      Navigate("/posts");
    }
    return;
  };

  const onClickModPostHandler = () => {
    Navigate("/updatepost/" + post.id, { state: post });
  };

  const onClickBookMarkHandler = async () => {
    if (bookMarked.isSubscribed) {
      try {
        await axios.delete(`/api/v1/bookmarks/${id}`).then(() => {
          setBookMarked({ isSubscribed: false });
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await axios.post(`/api/v1/bookmarks/${id}`).then((resp) => {
          setBookMarked({ isSubscribed: true });
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const onClickLikeHandler = async () => {
    if (liked.isLike) {
      try {
        await axios.delete(`/api/v1/likes/posts/${id}`).then((resp) => {
          setLiked({ isLike: resp.data.isLike, count: resp.data.count });
        });
      } catch (err) {
        console.log("like delete err : " + err);
      }
    } else {
      try {
        await axios.post(`/api/v1/likes/posts/${id}`).then((resp) => {
          setLiked({ isLike: resp.data.isLike, count: resp.data.count });
        });
      } catch (err) {
        console.log("like post err : " + err);
      }
    }
  };

  return (
    <>
      <Container height={"940px"}>
        <Info>
          <ProfileBox>
            <Profile>
              <img src={post.picture == null ? profile : post.picture}></img>
            </Profile>
          </ProfileBox>
          <CategoryBox>
            <Category className="d-flex justify-content-start">{convertToKorean(post.category)}</Category>
          </CategoryBox>
        </Info>
        <Title className="mt-4">{post.title}</Title>
        <Content className="mt-4">
          <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(String(post.contents)) }}></div>
        </Content>
        {user.isLogin && post.email == user.email ? (
          <>
            <ButtonWrapper>
              <Button clickEvent={onClickModPostHandler} width={"50px"} hegiht={"30px"}>
                수정
              </Button>
              <Button clickEvent={onClickDeletePostHandler} width={"50px"} hegiht={"30px"}>
                삭제
              </Button>
            </ButtonWrapper>
          </>
        ) : null}
        <Tab>
          <Button bg={"#ccccc"}>
            <i className="ri-message-3-line me-1"></i>
            댓글 <span style={{ fontSize: "14px" }}>{replys.length}</span>
          </Button>
          <Button clickEvent={onClickBookMarkHandler} bg={"#ccccc"}>
            <i
              className="ri-bookmark-fill"
              style={{ color: bookMarked.isSubscribed ? "#FFD228" : "grey", transitionDuration: "1s" }}
            ></i>
            북마크
          </Button>
          <Button clickEvent={onClickLikeHandler} bg={"#ccccc"}>
            <i
              className="ri-heart-3-fill me-1 like_i"
              style={{
                color: liked.isLike ? "#9B111E" : "grey",
                transitionDuration: "1s",
              }}
            ></i>
            좋아요 {liked.count}
          </Button>
        </Tab>
      </Container>
      <Comment id={id} replys={replys} setReplys={setReplys} user={user}></Comment>
      <ListButton />
    </>
  );
}
