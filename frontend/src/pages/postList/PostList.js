import "bootstrap/dist/css/bootstrap.css";
import Banner from "./Banner";
import { useEffect, useRef, useState } from "react";
import PostButton from "../../components/post/PostCreateButton";
import axios from "axios";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

// 스타일 영역

const ContentWrapper = styled.div`
  height: 100%;
  background-color: #fbfbfb;
  padding-top: 15px;
  padding-bottom: 90px;
`;

const ContentBox = styled.div`
  width: 60%;
  margin: auto;
  height: 200px;
  background-color: #fff;
  transition-duration: 1s;
  padding-top: 10px;
  &:hover {
    cursor: pointer;
    box-shadow: 10px 10px 20px rgb(209, 208, 208);
  }
`;

const Content = styled.div`
  height: 80%;
  width: 90%;
  margin: auto;
  text-align: center;
`;

const Title = styled.div`
  font-size: 20px;
  text-align: center;
  width: 100%;
  color: black;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  strong {
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;
const SubTitle = styled.div`
  height: 30%;
  p {
    text-align: start;
    padding: 0px;
    margin: 0px;
    width: 100%;
    color: black;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const Icon = styled.div`
  width: auto;
  height: 100%;
  float: left;
  font-size: 0.7rem;
  padding-top: 5px;
  margin-right: ${(props) => props.$margin};
  font-style: ${(props) => (props.$fontStyle ? props.$fontStyle : "normal")};
`;

const LikeIcon = styled.i`
  color: #9b111e;
  font-size: 0.49rem;
`;

const ContentInfo = styled.div`
  color: black;
  width: 100%;
  height: 30px;
  margin-top: 20px;
`;

export default function () {
  const user = useSelector((state) => {
    return state.user;
  });
  const { state } = useLocation();
  const [posts, setPosts] = useState([]);
  const [pagingPost, setPagingPost] = useState([]);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState({ category: "ALL", word: "" });
  const [loading, setLoading] = useState(false);
  const pageEnd = useRef();

  const pagingPosts = () => {
    if (state) {
      const item = posts
        .filter(() => search.category == "ALL")
        .filter((post) => post.title.includes(state.word) || post.contents.includes(state.word));
      setPagingPost(item);
      return;
    }

    if (search.category == "ALL" && search.word == "") {
      setPagingPost(posts.slice(0, page));
      return;
    }
    const item = posts
      .filter((post) => post.category == search.category || search.category == "ALL")
      .filter((post) => post.title.includes(search.word) || post.contents.includes(search.word));
    setPagingPost(item);
  };

  const mergePosts = (post, like) => {
    let tmp = post;
    tmp.toReversed().map((post, i) => {
      post.count = like[i].count;
      post.isLike = like[i].isLike;
    });
    setPosts(tmp);
    setPage(5);
  };

  const getPosts = async () => {
    await axios.all([axios.get("/api/v1/posts"), axios.get("/api/v1/likes/posts")]).then(
      axios.spread((post, like) => {
        mergePosts(post.data, like.data);
      })
    );
  };

  const loadMore = () => {
    setPage((prev) => prev + 3);
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    pagingPosts(page);
    setLoading((prev) => true);
  }, [page, search]);

  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(() => {
        loadMore();
      });
      observer.observe(pageEnd.current);
    }
  }, [loading]);

  return (
    <>
      <Banner user={user} search={search} setSearch={setSearch} />
      <ContentWrapper>
        {pagingPost.map((post, i) => {
          return (
            <div key={post.id}>
              <Link to={`/post/${post.id}`}>
                <ContentBox className="mt-4">
                  <Content className="mt-4">
                    <Title className="d-flex justify-content-start mt-3">
                      <strong>{post.title}</strong>
                    </Title>
                    <SubTitle className="d-flex justify-content-start mt-3">
                      <p dangerouslySetInnerHTML={{ __html: post.contents }}></p>
                    </SubTitle>
                    <ContentInfo className="d-flex justify-content-start">
                      <Icon $margin={"12px"}>
                        <LikeIcon className="ri-heart-fill me-1"></LikeIcon>
                        {post.count} •
                      </Icon>
                      <Icon $margin={"5px"} $fontStyle={"italic"}>
                        by {post.author} •
                      </Icon>
                    </ContentInfo>
                  </Content>
                </ContentBox>
              </Link>
            </div>
          );
        })}
        <div ref={pageEnd} />
      </ContentWrapper>
      {user.isLogin ? <PostButton /> : null}
    </>
  );
}
