import {useState} from "react";
import Editor from "./Editor";
import axios from "axios";
import style from "./WriteForm.module.css"
import 'bootstrap/dist/css/bootstrap.css';
import {useNavigate} from "react-router-dom";


function Button({post, setPosts, user}) {

  const Navigate = useNavigate();


  const sendPost = async () => {
    console.log(post)

    if (post.category == "") {
      alert("카테고리를 선택해주세요")
      return;
    }

    if (post.title == "") {
      alert("제목을 입력해주세요.")
      return;
    }

    if (post.contents == "") {
      alert("내용을 입력해주세요.")
      return;
    }

    try {
      await axios({
          method: "post",
          url: "/api/v1/posts",
          data: post
        }
      ).then((resp) => {
        resp.data = {...resp.data, email: user.email, picture : user.picture}
        setPosts(prev => [...prev, resp.data])
        Navigate(`/post/${resp.data.id}`, {state: {from: resp.data}})
      })
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="d-flex justify-content-end"
         style={{width: "800px", height: "40px", margin: "auto", marginTop: "60px",}}>
      <div>
        <button className="btn btn-dark"
          onClick={sendPost}>글 작성
        </button>
      </div>
    </div>

  )
}

function Category({post, setPost}) {

  return (
    <div style={{width: "800px", margin: "auto", marginTop: "10px", marginBottom: "10px"}}>
      <select
        style={{width: "140px", height: "36px"}}
        class="form-select" aria-label="Default select example"
        onChange={(e) => {
          setPost(prev => ({...prev, category: e.target.value}))
        }}>
        <option selected disabled>카테고리</option>
        <option key={"라이프"} value={"FREEDOM"}>자유</option>
        <option key={"스포츠"} value={"IT"}>IT</option>
        <option key={"연예"} value={"SPORTS"}>운동</option>
        <option key={"자유"} value={"FASHION"}>패션</option>
      </select>
    </div>
  )
}

function Title({post, setPost}) {
  return (
    <div style={{marginBottom: "20px"}}>
      <p className={style.title_p}>
        <input type="text"
               placeholder="글 제목"
               className={style.title_input}
               value={post.title}
               onChange={(e) => {
                 setPost(prev => ({...prev, title: e.target.value}))
              }}></input></p>
    </div>

  )
}


export default function WriteForm({setPosts, user}) {
  const [post, setPost] = useState({title: "", contents: "", category: ""})
  return (
    <div className="container mt-4">
      <Category post={post} setPost={setPost}></Category>
      <Title post={post} setPost={setPost}></Title>
      <Editor post={post} setPost={setPost}></Editor>
      <Button post={post} setPosts={setPosts} user={user}></Button>
    </div>
  )
}