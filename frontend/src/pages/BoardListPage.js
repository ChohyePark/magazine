import 'bootstrap/dist/css/bootstrap.css';
import List from "../components/body/board/List";
import BoardBanner from "../components/body/banner/BoardBanner";
import BannerSearch from "../components/body/banner/BannerSearch";
import {useEffect, useState} from "react";
import PostButton from "../components/postButton/PostButton";
import axios from "axios";


export default function ({posts, setPosts, user}) {


  const [search, setSearch] = useState({});

  let new_posts = null;

  const getPost = async () => {
    try {
      await axios({
        method: 'get',
        url: '/api/v1/posts'
      }).then(resp => {
        // setPosts(resp.data);
        new_posts = resp.data
        setSearch({category: "ALL", word: ""})
        // setPage(10);
      });
    } catch (err) {
      alert('로그인 후 이용 가능합니다.')
    }
  }


  const getLike = () => {
    axios({
      url : '/api/v1/likes/posts',
      method : 'get'
    }).then((resp) => {
      new_posts.map((post, i) => {
        post.count = resp.data[i].count;
        post.isLike = resp.data[i].isLike;
      })
      setPosts(new_posts);
      console.log(new_posts)
    })
  }

  useEffect(() => {
    getPost();
    getLike();
  }, [])

  const [fade, setFade] = useState('')
  useEffect(() => {
    setTimeout(() => {
      setFade('end')
    }, 100)
    return (() => {
      setFade('')
    })
  }, [])


  return (
    <>
      <div className={`start ${fade}`}>
        <BoardBanner user={user}></BoardBanner>
        <div className="d-none d-md-block">
          <BannerSearch search={search} setSearch={setSearch}></BannerSearch>
        </div>
        <List posts={posts} search={search}></List>
        {user ? <PostButton></PostButton> : null}
      </div>
    </>
  )
}