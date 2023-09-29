import "bootstrap/dist/css/bootstrap.css";
import banner from "../../assets/banner/boardbanner.gif";
import { useEffect, useState } from "react";
import Aos from "aos";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// 스타일 영역

const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 420px;
  background-color: none;
  border-bottom: 1px solid black;
  text-align: center;
  background-color: #fff;
`;

const BannerLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const BannerItem = styled.div`
  background-color: transparent;
  width: 400px;
  height: 380px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const BannerText = styled.div`
  position : relative;
  top: ${(props) => props.$top};
  right: ${(props) => props.$right};
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  font-size : ${(props) => (props.$fontSize ? props.$fontSize : "16px")};
};
`;

const Button = styled.div`
  position: relative;
  top: 160px;
  left: 120px;
  width: 200px;
  height: 200px;
  button {
    border-radius: 40px;
    border: 1px solid black;
    color: #fff;
    background-color: black;
    padding: 10px;
    transition-duration: 1s;

    &:hover {
      background-color: #ffff;
      color: black;
    }
  }
`;
const SearchWrapper = styled.div`
  padding-top: 5rem;
  width: 100%;
  height: 200px;
  text-align: center;
  background-color: #fbfbfb;
`;

const Search = styled.div`
  z-index: 100;
  width: 100%;
  height: 50px;
  margin: auto;
`;

const CategoryWrapper = styled.div`
  margin-right: 1rem;
`;

const Category = styled.select`
  border: 1px solid black;
  border-radius: 3em;
  width: 5rem;
  height: 2rem;
  font-size: 16px;
  padding-left: 1.4rem;
  padding-top: 0.2em;
  margin-top: 0.79rem;
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:hover {
    cursor: pointer;
  }
`;

const InputWrapper = styled.div`
  border: 1px solid black;
  border-radius: 30px;
  background-color: #fff;
  height: 50px;
  width: 450px;
  float: left;
  text-align: center;
  input {
    border-radius: 30px;
    margin-top: 7px;
    width: 93%;
    height: 35px;
    border: none;
  }
`;

const IconWrapper = styled.div`
  margin-left: 10px;
  font-size: 33px;
  i {
    margin-bottom: 4px;
    color: black;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default function ({ user, search, setSearch }) {
  const [keyWord, setKeyword] = useState({ word: "", category: "ALL" });
  const Navigate = useNavigate();

  const onClickSearchHandle = () => {
    if (keyWord.word == "") {
      alert("검색어를 입력해주세요");
      return;
    }
    setSearch(keyWord);
    setKeyword((prev) => ({ ...prev, word: "" }));
  };

  const keyUpHandle = (e) => {
    if (e.key === "Enter") {
      onClickSearchHandle();
    }
  };

  useEffect(() => {
    Aos.init();
  }, []);

  const onClickWriteHandle = (e) => {
    if (!user) {
      alert("로그인한 회원만 이용할 수 있습니다");
      e.preventDefault();
      return;
    }
    Navigate("/newpost");
  };

  return (
    <>
      <BannerWrapper>
        <BannerLayout>
          <BannerText
            $width={"500px"}
            $height={"60px"}
            $top={"120px"}
            $fontSize={"42px"}
            className="d-none d-md-block"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="700"
          >
            <span>현재 당신의 관심사를</span>
          </BannerText>
        </BannerLayout>
        <BannerLayout>
          <BannerItem data-aos="flip-up" data-aos-delay="600" data-aos-duration="3000">
            <img src={banner}></img>
          </BannerItem>
        </BannerLayout>
        <BannerLayout className="d-none d-md-block">
          <BannerText
            $top={"150px"}
            $width={"450px"}
            $height={"50px"}
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="900"
          >
            <strong>방구석 매거진</strong>에서는 누구나 작가가 될 수 있고 <br />
            <span> 무엇이든 컨텐츠가 될 수 있습니다.</span>
          </BannerText>
          <Button data-aos="zoom-in" data-aos-delay="1600" data-aos-duration="900">
            <button onClick={onClickWriteHandle}>글쓰러 가기</button>
          </Button>
          <BannerText
            $width={"450px"}
            $height={"60px"}
            $top={"50px"}
            $fontSize={"42px"}
            className="d-none d-md-block"
            data-aos="fade-up-left"
            data-aos-delay="500"
            data-aos-duration="700"
          >
            자유롭게 공유해주세요
          </BannerText>
        </BannerLayout>
      </BannerWrapper>
      <SearchWrapper
        className="d-none d-md-block d-flex justify-content-center"
        data-aos="zoom-out-up"
        data-aos-delay="500"
        data-aos-duration="900"
        data-aos-easing="ease-in-out"
      >
        <Search className="d-flex justify-content-center">
          <CategoryWrapper>
            <Category
              onChange={(e) => {
                setKeyword((prev) => ({ ...prev, category: e.target.value }));
              }}
            >
              <option key={"전체"} value={"ALL"}>
                전체
              </option>
              <option key={"라이프"} value={"FREEDOM"}>
                자유
              </option>
              <option key={"스포츠"} value={"IT"}>
                IT
              </option>
              <option key={"연예"} value={"SPORTS"}>
                운동
              </option>
              <option key={"자유"} value={"FASHION"}>
                패션
              </option>
            </Category>
          </CategoryWrapper>
          <InputWrapper>
            <input
              type="text"
              placeholder="검색"
              value={keyWord.word}
              onChange={(e) => {
                setKeyword((prev) => ({ ...prev, word: e.target.value }));
              }}
              onKeyUp={keyUpHandle}
            ></input>
          </InputWrapper>
          <IconWrapper>
            <i className="ri-search-line" onClick={onClickSearchHandle}></i>
          </IconWrapper>
        </Search>
      </SearchWrapper>
    </>
  );
}
