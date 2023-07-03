import 'bootstrap/dist/css/bootstrap.css';
import style from './MyComunity.module.css'
import { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import Paging from '../../../ utils/Paging';
import styled from 'styled-components'
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function () {
  const [tab, setTab] = useState(0);
  return (
    <div className={style.container}>
      <div>
        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item style={{ width: "45%" }} className={style.nav}>
            <Nav.Link eventKey="link0" onClick={() => {
              setTab(0);
            }}><span className={style.navi_item}>작성글</span></Nav.Link>
          </Nav.Item>
          <Nav.Item style={{ width: "45%" }} className={style.nav}>
            <Nav.Link eventKey="link1" onClick={() => {
              setTab(1);
            }}><span className={style.navi_item}>작성 댓글 </span></Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <Tab tab={tab}></Tab>
    </div>
  )
}

const Post = () => {
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);


  const getPost = () => {
    axios({
      url: '/api/v1/my_page/posts',
      method: 'get'
    }).then((resp) => {
      setPost(resp.data)
    })
  }


  useEffect(() => {
    getPost()
  }, [])

  const handlePageChange = (page) => {
    setPage(page);
  };


  const offset = (page - 1) * limit;

  return (
    <div className={style.post_box}>
      <div className={style.title}><strong>제목</strong></div>
      {
        post.slice(
          offset,
          offset + limit
        ).map((post, i) => {
          return (
            <Link to={`/post/${post.id}`} state={{ from: post }}>
              <div className={style.post_list}><span style={{
                color:
                  "black"
              }}>{post.title}</span></div>
            </Link>
          )
        })
      }
      <div className={style.page_box}>
        <Paging page={page} limit={limit} post={post} handlePageChange={handlePageChange}></Paging>
      </div>
    </div>
  )
}

const PaginationBox = styled.div`
  .pagination {
    margin-top: 80px;
    padding-left: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 9px;
  }

  ul.pagination li:first-child {
    border-radius: 10px 0 0 10px;
  }

  ul.pagination li:last-child {
    border-radius: 0 10px 10px 0;
  }

  ul.pagination li a {
    text-decoration: none;
    color: black;
    font-size: 10px;
  }

  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    background-color: #337ab7;
  }

  ul.pagination li a:hover {
    color: black;
  }

  ul.pagination li a.active {
    color: black;
    font-weight: bold;
  }
`

const Reply = () => {
  const [reply, setReply] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const getReply = () => {
    axios({
      url: '/api/v1/my_page/comments',
      method: 'get'
    }).then((resp) => {
      console.log(resp.data)
      setReply(resp.data)
    })
  }

  useEffect(() => {
    getReply()
  }, [])

  const handlePageChange = (page) => {
    setPage(page);
  };

  const offset = (page - 1) * limit;

  return (
    <div className={style.reply_box}>
      <div className={style.title}><strong>댓글</strong></div>
      {
        reply.slice(
          offset,
          offset + limit
        ).map((reply, i) => {
          return (
            <Link to={`/post/${reply.postId}`} state={{
              from: {
                id: reply.postId
              }
              }}>
              <div className={style.reply}>
               <span className={style.reply_content}>{reply.contents}</span>
              </div>
            </Link>
          )
        })
      }
      <div className={style.page_box}>
        <Paging page={page} limit={limit} post={reply} handlePageChange={handlePageChange}></Paging>
      </div>
    </div>
  )
}

function Tab(props) {
  return (
    <div>
      {[<Post></Post>,
      <Reply></Reply>][props.tab]}
    </div>
  )
}