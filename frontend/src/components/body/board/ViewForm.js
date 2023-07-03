import 'bootstrap/dist/css/bootstrap.min.css';
import style from './ViewForm.module.css';
import axios from "axios";
import profile from '../../../assets/images/reply_profile.jpg'
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';


const Button = ({ post, user }) => {

  const Navigate = useNavigate();
  const delPost = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      axios.delete(`/api/v1/posts/${post.id}`)
      Navigate('/posts')
    }
    return;
  }

  return (
    <>
      {console.log(post.email)
      }
      {
        console.log(user.email)
      }
      {post.email == user.email ?
        <div className='d-flex justify-content-end mt-3' style={{ width: "800px", margin: "auto" }}>
          <button className={`${style.btn} btn btn-dark`}
            onClick={() => {
              Navigate('/modpost/' + post.id, { state: post })
            }}
          >수정
          </button>
          <button className={`${style.btn} btn btn-dark ms-2`}
            onClick={delPost}
          >삭제
          </button>
        </div> : null
      }
    </>
  )
}


const convertToKorean = (category) => {
  return [
    ["FREEDOM", "자유"],
    ["IT", "IT"],
    ["SPORTS", "운동"],
    ["FASHION", "패션"]
  ].filter(c => c[0] === category)
    .map(c => c[1]);
}


export default function ViewForm({ post, user }) {
  return (
    <>
      <div className={style.view_container}>
        <div className={style.user_box}>
          <div className={style.view_profile}>
            <div className={style.profile}>
              <img src = {post.picture == null ? profile : post.picture}></img>
            </div>
          </div>
          <div className={style.view_category}>
            <div className={`${style.category} d-flex justify-content-start`}>
              {convertToKorean(post.category)}
            </div>
          </div>
        </div>
        <div className={`${style.view_title} mt-4`}>
          {post.title}
        </div>
        <div className={`${style.view_content} mt-4`}>
          <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(String(post.contents)) }}></div>
        </div>
        {user ? <Button post={post} user={user}></Button> : null}
      </div>
    </>
  )
}




