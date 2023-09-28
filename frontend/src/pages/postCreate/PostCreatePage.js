import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ButtonLayOut from "../../components/post/ButtonLayOut";
import Category from "../../components/post/Category";
import Container from "../../components/post/Container";
import Editor from "../../components/post/Editor";
import Title from "../../components/post/Title";
import Button from "../../components/shared/Button";

export default function ({ user }) {
  const Navigate = useNavigate();
  const [post, setPost] = useState({ title: "", contents: "", category: "" });

  const onClickCreatePostHandler = async () => {
    if (post.category === "") {
      alert("카테고리를 선택해주세요");
      return;
    }

    if (post.title === "") {
      alert("제목을 입력해주세요.");
      return;
    }

    if (post.contents === "") {
      alert("내용을 입력해주세요.");
      return;
    }

    try {
      await axios({
        method: "post",
        url: "/api/v1/posts",
        data: post,
      }).then((resp) => {
        resp.data = { ...resp.data, email: user.email, picture: user.picture };
        Navigate(`/post/${resp.data.id}`, { state: { from: resp.data } });
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Category post={post} setPost={setPost}></Category>
      <Title post={post} setPost={setPost}>
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
        <Button clickEvent={onClickCreatePostHandler}>글 작성</Button>
      </ButtonLayOut>
    </Container>
  );
}
