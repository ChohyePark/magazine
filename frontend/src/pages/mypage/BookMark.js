import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const BookMark = styled.div`
  margin-top: 30px;
  width: 70%;
  height: 600px;
  padding-left: 20px;
`;

const BookMarkTitle = styled.div`
  height: 30px;
  height: auto;
  }
`;

const Icon = styled.i`
  color: #ffd228;
`;

const PostTitle = styled.div`
  border-top: 2px solid black;
  border-bottom: 1px solid black;
  padding-top: 6px;
  width: 90%;
  height: 40px;
  text-align: center;
  overflow: hidden;
`;

const BookMarkedPosts = styled.div`
  width: 90%;
  height: 28rem;
`;

const Post = styled.div`
  text-align: center;
  border-bottom: 1px solid black;
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  overflow: hidden;
  &:hover {
    background-color: rgb(239, 238, 238);
  }
  span {
    color: black;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;

const BookMarkedTitle = styled.div``;

export default function () {
  const [bookMarks, setBookMarks] = useState([]);
  const getBookMark = () => {
    axios({
      url: "/api/v1/my_page/bookmarks",
      method: "get",
    }).then((resp) => {
      console.log(resp.data);
      setBookMarks(resp.data);
    });
  };

  useEffect(() => {
    getBookMark();
  }, []);

  return (
    <BookMark>
      <BookMarkTitle>
        <h3>
          북마크 <Icon className="ri-bookmark-3-fill"></Icon>
        </h3>
      </BookMarkTitle>
      <PostTitle>글 제목</PostTitle>
      <BookMarkedPosts>
        {bookMarks.map((bookMark, i) => {
          return (
            <Link
              to={`/post/${bookMark.postId}`}
              state={{
                from: {
                  id: bookMark.postId,
                },
              }}
            >
              <Post>
                <span>{bookMark.title}</span>
              </Post>
            </Link>
          );
        })}
      </BookMarkedPosts>
    </BookMark>
  );
}
