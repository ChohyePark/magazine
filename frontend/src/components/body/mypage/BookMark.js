import axios from 'axios'
import style from './BookMark.module.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


export default function () {

  const [bookMarks, setBookMarks] = useState([]);
  const getBookMark = () => {
    axios({
      url: '/api/v1/my_page/bookmarks',
      method: 'get'
    }).then((resp) => {
      console.log(resp.data)
      setBookMarks(resp.data)
    })
  }

  useEffect(() => {
    getBookMark()
  }, [])



  return (
    <>
      <div className={style.container}>
        <div className={style.info_box}>
          <h3>북마크 <i class="ri-bookmark-3-fill" style={{ color: "#FFD228" }}></i></h3>
        </div>
        <div className={style.title}>글 제목</div>
        <div className={style.bookmark_list}>

          {
            bookMarks.map((bookMark, i) => {
              return (
                <Link to = {`/post/${bookMark.postId}`} state={{
                  from: {
                    id: bookMark.postId
                  }
                  }}>
                <div className={style.bookmark}>
                <span className={style.postTitle}>
                  {bookMark.title}</span>
              </div>
              </Link>
              )
            })
          }
        </div>
      </div>
    </>

  )
}