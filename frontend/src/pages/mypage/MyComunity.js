import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Form from "../../components/mypage/Form";
import Paging from "../../ utils/Paging";

const NavTitle = styled.span`
  color: #5d5d5d;
`;

const NavItem = styled.div`
  width: 45%;
`;

const UserWriteBox = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 500px;
`;

const UserWriteTitle = styled.div`
  border-top: 3px solid black;
  border-bottom: 1px solid black;
  padding-top: 6px;
  padding-bottom: 6px;
  width: 90%;
  height: 40px;
  text-align: center;
  margin-bottom: 12px;
  overflow: hidden;
`;

const Posts = styled.div`
  width: 90%;
  height: 40px;
  border-bottom: 1px solid #d4d4d4;
  text-align: center;
  line-height: 40px;
  span {
    color: black;
  }
`;

const Comment = styled.div`
  padding-top: 5px;
  padding-left: 20px;
  width: 90%;
  height: 2.5rem;
  overflow: hidden;
  border: 1px solid black;
  border-radius: 20px;
  margin-bottom: 10px;
`;

const CommentContent = styled.span`
  color: black;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const PagingBox = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  height: 120px;
`;

export default function () {
  const [tab, setTab] = useState(0);

  return (
    <Form>
      <Nav variant="tabs" defaultActiveKey="link0">
        <NavItem>
          <Nav.Item>
            <Nav.Link
              eventKey="link0"
              onClick={() => {
                setTab(0);
              }}
            >
              <NavTitle>작성글</NavTitle>
            </Nav.Link>
          </Nav.Item>
        </NavItem>
        <NavItem>
          <Nav.Item>
            <Nav.Link
              eventKey="link1"
              onClick={() => {
                setTab(1);
              }}
            >
              <NavTitle>작성 댓글 </NavTitle>
            </Nav.Link>
          </Nav.Item>
        </NavItem>
      </Nav>
      <Tab tab={tab}></Tab>
    </Form>
  );
}

const Post = () => {
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const getPost = () => {
    axios({
      url: "/api/v1/my_page/posts",
      method: "get",
    }).then((resp) => {
      setPost(resp.data);
    });
  };

  useEffect(() => {
    getPost();
  }, []);

  const handlePageChange = (page) => {
    setPage(page);
  };

  const offset = (page - 1) * limit;

  return (
    <UserWriteBox>
      <UserWriteTitle>
        <strong>제목</strong>
      </UserWriteTitle>
      {post.slice(offset, offset + limit).map((post, i) => {
        return (
          <div key={post.id}>
            <Link to={`/post/${post.id}`} state={{ from: post }}>
              <Posts>
                <span
                  style={{
                    color: "black",
                  }}
                >
                  {post.title}
                </span>
              </Posts>
            </Link>
          </div>
        );
      })}
      <PagingBox>
        <Paging page={page} limit={limit} post={post} handlePageChange={handlePageChange}></Paging>
      </PagingBox>
    </UserWriteBox>
  );
};

const Reply = () => {
  const [reply, setReply] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const getReply = () => {
    axios({
      url: "/api/v1/my_page/comments",
      method: "get",
    }).then((resp) => {
      console.log(resp.data);
      setReply(resp.data);
    });
  };

  useEffect(() => {
    getReply();
  }, []);

  const handlePageChange = (page) => {
    setPage(page);
  };

  const offset = (page - 1) * limit;

  return (
    <UserWriteBox>
      <UserWriteTitle>
        <strong>댓글</strong>
      </UserWriteTitle>
      {reply.slice(offset, offset + limit).map((reply, i) => {
        return (
          <div key={i}>
            <Link
              to={`/post/${reply.postId}`}
              state={{
                from: {
                  id: reply.postId,
                },
              }}
            >
              <Comment>
                <CommentContent>{reply.contents}</CommentContent>
              </Comment>
            </Link>
          </div>
        );
      })}
      <PagingBox>
        <Paging page={page} limit={limit} post={reply} handlePageChange={handlePageChange}></Paging>
      </PagingBox>
    </UserWriteBox>
  );
};

function Tab(props) {
  return <div>{[<Post></Post>, <Reply></Reply>][props.tab]}</div>;
}
