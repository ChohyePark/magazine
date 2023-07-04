import 'bootstrap/dist/css/bootstrap.min.css';
import style from './List.module.css';
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';

export default function List({ posts, search, loading , setLoading , page ,setPage }) {

  const [item, setItem] = useState([]);
  const pageEnd = useRef();

  const getItem = (page) => {
    if(search.category == 'ALL' && search.word == '') {
      setItem(posts.slice(0,page));
      return
    }

    const item = posts.filter(post => post.category == search.category || search.category == "ALL")
    .filter(post => post.title.includes(search.word) || post.contents.includes(search.word))
    setItem(item);
    }

  useEffect(() => {
    getItem(page);
    setLoading(prev => true);
  }, [page])

  useEffect(() => {
    getItem(page);
    setLoading(prev => true);
  }, [search])


  const loadMore = () => {
    setPage(prev => prev + 3);
    console.log(page);
  }

  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver((entries, options) => {
        loadMore();
      })
      observer.observe(pageEnd.current);
    }
  }, [loading])

  return (
    <>
    {console.log(item)}
      <div className={`${style.container}`}>
      {item.map((post, i) => {
        return (
          <>
            <div>
              <Link to={`/post/${post.id}`} state={{ from: post }}>
                <div className={`${style.content} mt-4`}
                  key={i}>
                  <div className={`${style.content_box} mt-4`}>
                    <div className={`${style.title_box} d-flex justify-content-start mt-3`}>
                      <strong className = {style.title}>{post.title}</strong>
                    </div>
                    <div className={`${style.sub_content} d-flex justify-content-start mt-3`}>
                      <p dangerouslySetInnerHTML={{ __html: post.contents }}>
                      </p>
                    </div>
                    <div className={`${style.content_info} d-flex justify-content-start`} >
                      <div className={style.like_box}>
                      <i className="ri-heart-fill me-1" style={{color:"#9B111E"
                      , fontSize : "0.49rem"
                    }}></i>{post.count} •
                      </div>
                      <div className={style.author_box}>
                        by {post.author} •
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </>
        )
      })}
    <div ref={pageEnd} />
    </div>
    </>

  )
}