import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Category from "../../components/post/Category";
import Title from "../../components/post/Title";
import Editor from "../../components/post/Editor";
import Container from "../../components/post/Container";
import ButtonLayOut from "../../components/post/ButtonLayOut";
import Button from "../../components/shared/Button";

export default function () {
  const { id } = useParams();
  const { state } = useLocation();
  const [post, setPost] = useState(state);
  const Navigate = useNavigate();

  const onClickPutPostHandler = async () => {
    if (post.title === "") {
      alert("제목을 입력해주세요");
      return;
    } else if (post.contents === "") {
      alert("내용을 입력해주세요");
      return;
    }
    try {
      await axios({
        method: "put",
        url: `/api/v1/posts/${id}`,
        data: post,
      }).then((resp) => {
        Navigate(`/post/${post.id}`, { state: { from: post } });
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Category post={post} setPost={setPost}></Category>
      <Title>
        <input
          type="text"
          placeholder="글 제목"
          value={post.title}
          onChange={(e) => {
            setPost((prev) => ({ ...prev, title: e.target.value }));
          }}
        ></input>
      </Title>
      <Editor post={post} setPost={setPost}></Editor>
      <ButtonLayOut>
        <div>
          <Button width={"70px"} hegiht={"28px"} clickEvent={onClickPutPostHandler}>
            수정 완료
          </Button>
        </div>
        <Button
          width={"70px"}
          hegiht={"28px"}
          clickEvent={() => {
            Navigate(-1);
          }}
        >
          수정취소
        </Button>
      </ButtonLayOut>
    </Container>
  );
}
