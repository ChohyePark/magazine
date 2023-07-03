import Pagination from 'react-js-pagination'
import { useState } from 'react';
import styled from 'styled-components'


const Paging = ({page,limit,post,handlePageChange}) => {
  return (
    <PaginationBox>
        <Pagination
          activePage={page} // 현재 페이지
          itemsCountPerPage={limit} // 한 페이지당 보여줄 아이템 갯수
          totalItemsCount={post.length - 1} // 전체 아이템 수
          pageRangeDisplayed={5} // 페이지 범위
          prevPageText={"이전"} // "이전" 을 나타낼 텍스트
          nextPageText={"다음"} // "다음" 을 나타낼 텍스트
          onChange={handlePageChange} // 페이지 변경 핸들러
          들링하는 함수 />
      </PaginationBox>
  )
}

const PaginationBox = styled.div`
  .pagination { margin-top: 80px;  padding-left: 10px ;
  }
  ul { list-style: none; padding: 0;  }
  ul.pagination li{
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 9px;
  }
  ul.pagination li:first-child{ border-radius: 10px 0 0 10px; }
  ul.pagination li:last-child{ border-radius: 0 10px 10px 0; }
  ul.pagination li a { text-decoration: none; color: black; font-size: 10px; }
  ul.pagination li.active a { color: white; }
  ul.pagination li.active { background-color: #337ab7; }
  ul.pagination li a:hover { color: black; }
  ul.pagination li a.active { color: black; font-weight: bold; }
`


export default Paging;