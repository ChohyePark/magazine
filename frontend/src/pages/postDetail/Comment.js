import profile from "../../assets/logo/reply_profile.jpg";
import Button from "../../components/shared/Button";
import styled from "styled-components";
import axios from "axios";
import useInput from "../../hooks/useInput";
import { useState } from "react";

// 스타일 컴포넌트

const Comments = styled.div`
  width: 800px;
  margin: ${(props) => props.$margin};
  padding-bottom: ${(props) => (props.$padding ? props.$padding : "")};
`;

const CommentBox = styled.div`
  margin-left: 10px;
  height: 80px;
  font-size: 13px;
  display: flex;
  align-items: center;
  flex: 2;
`;

const CommentBoxItem = styled.div`
  flex: ${(props) => props.$flex};
`;

const CommetInput = styled.textarea`
  width: 800px;
  height: 120px;
  resize: none;
`;

const CommentLike = styled.span`
  margin-left: 0.6rem;

  i {
    cursor: pointer;
  }
`;

const CommentUpdateButton = styled.div`
  float: left;
  margin-right: 10px;
  ul {
    margin: 0px;
    padding: 0px;
    li {
      list-style: none;
      float: left;
      font-size: 13px;
      margin-right: 8px;
      &:hover {
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
`;

const ButtonBox = styled.div`
  text-align: end;
  font-size: 12px;
`;

const CommentListLayout = styled.div`
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CommentList = styled.div`
  margin-top: 10px;
  width: 800px;
  height: auto;
  border: 1px solid #d4d4d4;
  display: flex;
  flex-direction: column;
  background-color: #f9f8f3;
`;

const CommentTop = styled.div`
  width: 100%;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
`;

const ProfileBox = styled.div`
  padding: 10px 5px 5px 5px;
`;

const Profile = styled.div`
  margin: auto;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  overflow: hidden;

  img {
    width : 100%;
    height : 1000%:
  }
`;

const CommentContent = styled.div`
  width: 100%;
  padding: 10px 30px 10px 30px;
  font-size: 16px;
  border-top: 1px solid #d4d4d4;
  word-break: break-all;
`;

const CommentUpdateForm = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
`;

const CommentUpdateTitle = styled.div`
  font-size: 13px;
`;

const CommentUpdateInput = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
`;

const Comment = ({ user, reply, setReplys, replys }) => {
  const [commentUpdateView, setCommentUpdateView] = useState(false);
  const [commentUpdate, handleChange] = useInput({});

  const onClickDeleteCommentHandler = async () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      await axios.delete(`/api/v1/comments/${reply.id}`);
      setReplys(replys.filter((e) => e.id !== reply.id));
    }
  };

  const onClickLikeCommentHandler = (e) => {
    if (!user) {
      alert("회원만 좋아요를 할 수 있습니다.");
      e.preventDefault();
      return;
    }
  };

  const onClickPutCommentHandler = async () => {
    if (commentUpdate.contents === "") {
      alert("댓글을 입력해주세요");
      return;
    }
    try {
      await axios({
        method: "put",
        url: `/api/v1/comments/${reply.id}`,
        data: commentUpdate,
      }).then((resp) => {
        let copy = [...replys];
        let findIndex = replys.findIndex((e) => e.id == reply.id);
        let sendModReply = {
          id: reply.id,
          contents: resp.data.contents,
          picture: user.picture,
          author: user.nickname,
          email: user.email,
          count: reply.count,
          isLike: reply.isLike,
        };
        copy[findIndex] = sendModReply;
        setReplys(copy);
        setCommentUpdateView(false);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <CommentList>
        <CommentTop>
          <ProfileBox>
            <Profile>
              <img src={reply.picture ? reply.picture : profile}></img>
            </Profile>
          </ProfileBox>
          <CommentBox>
            <CommentBoxItem $flex={"2"}>
              <span>{reply.author}</span>
              <CommentLike
                onClick={(e) => {
                  onClickLikeCommentHandler(e);
                }}
              >
                <i style={{ color: reply.isLike ? "#9B111E" : "gray" }} className="ri-chat-heart-line me-1" />
                {reply.count}
              </CommentLike>
            </CommentBoxItem>
            <CommentBoxItem $flex={"0.4"}>
              {user.isLogin && user.email == reply.email ? (
                <CommentUpdateButton>
                  <ul>
                    <li
                      onClick={() => {
                        setCommentUpdateView(!commentUpdateView);
                      }}
                    >
                      수정
                    </li>
                    <li onClick={onClickDeleteCommentHandler}>삭제</li>
                  </ul>
                </CommentUpdateButton>
              ) : null}
            </CommentBoxItem>
          </CommentBox>
        </CommentTop>
        {commentUpdateView ? (
          <CommentUpdateForm>
            <CommentUpdateTitle>
              <strong>댓글수정</strong>
            </CommentUpdateTitle>
            <div>
              <CommentUpdateInput name="contents" onChange={handleChange} />
            </div>
            <Button width={"65px"} hegiht={"20px"} clickEvent={onClickPutCommentHandler}>
              수정
            </Button>
            <Button
              width={"70px"}
              hegiht={"20px"}
              onClick={() => {
                setCommentUpdateView(false);
              }}
            >
              수정 취소
            </Button>
          </CommentUpdateForm>
        ) : (
          <CommentContent>{reply.contents}</CommentContent>
        )}
      </CommentList>
    </>
  );
};

export default function ({ id, user, setReplys, replys }) {
  const [reply, handleChange, submitEvent] = useInput({ contents: "" });

  const onClickPostComment = async () => {
    if (reply.contents === "") {
      alert("댓글을 입력해주세요");
      return;
    }
    axios({
      method: "post",
      url: `/api/v1/comments/${id}`,
      data: reply,
    }).then((resp) => {
      resp.data = { ...resp.data, author: user.nickname, email: user.email, picture: user.picture };
      setReplys((prev) => [...prev, resp.data]);
      submitEvent("contents");
    });
  };

  return (
    <>
      <CommentListLayout>
        {replys != null
          ? replys.map((reply, i) => {
              return <Comment user={user} reply={reply} setReplys={setReplys} replys={replys} />;
            })
          : null}
      </CommentListLayout>
      {user ? (
        <Comments $margin={"10px auto"} $padding={"2rem"}>
          <div>
            <strong>댓글</strong>
          </div>
          <div>
            <CommetInput name={"contents"} onChange={handleChange} value={reply.contents}></CommetInput>
          </div>
          <ButtonBox>
            <Button width={"65px"} height={"20px"} clickEvent={onClickPostComment}>
              확인
            </Button>
          </ButtonBox>
        </Comments>
      ) : null}
    </>
  );
}
