import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import Container from "../components/shared/Container";
import redheart from "../assets/banner/banner_img1.png";
import game from "../assets/banner/banner_img2.png";
import blueheart from "../assets/banner/banner_img3.png";
import laptop from "../assets/banner/banner_img4.png";
import pinkheart from "../assets/banner/banner_img5.png";
import plant from "../assets/banner/plant.png";
import women from "../assets/banner/women.png";
import men from "../assets/banner/banner_center.png";
import free from "../assets/category/free.png";
import sports from "../assets/category/sports.png";
import it from "../assets/category/it.png";
import fashoin from "../assets/category/fashoin.png";
import PostButton from "../components/post/PostCreateButton";

// 스타일 컴포넌트
const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 500px;
  @media (max-width: 980px) {
    height: 230px;
  }
`;
const BannerLayOut = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  flex-direction: ${(props) => props.$direction};
  @media (max-width: 980px) {
    width: 100%;
  }
`;

const BannerItem = styled.div`
  position: relative;
  top: ${(props) => props.$top};
  right: ${(props) => props.$right};
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};

  img {
    width: ${(props) => props.$imgwidth};
    height: ${(props) => props.$imgheight};
  }
  @media (max-width: 980px) {
    display: none;
  }
`;

const BannerText = styled.div`
  position: relative;
  top: 150px;
  font-size: ${(props) => props.$fontSize};
  font-style: italic;
  text-align: center;
  width: 500px;
`;

const CategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  height: 300px;

  @media (max-width: 400px) {
    width: 500px;
    height: 200px;
  }
`;

const CategoryItem = styled.div`
  width: 230px;
  hegiht: 210px;
  border-radius: 10%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
  &:hover img {
    cursor: pointer;
    transition-duration: 1s;
    transform: scale(1.09);
  }

  @media (max-width: 980px) {
    width: 160px;
    hegiht: 140px;
  }
`;

const ItemBox = styled.div`
  position: relative;
  top: 60px;
  display: flex;
  flex-direction: row;
  margin: auto;
`;

export default function ({ user, setUser }) {
  let [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");

  useEffect(() => {
    Aos.init();
  }, []);

  const getUser = () => {
    axios({
      url: "/api/v1/users",
      method: "get",
    }).then((resp) => {
      setUser(resp.data);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(resp.data));
    });
  };

  useEffect(() => {
    if (success === "") {
      getUser();
    }
  }, []);

  return (
    <Container $height={"930px"}>
      <BannerWrapper>
        <BannerLayOut $width={"80%"} $height={"100%"}>
          <BannerLayOut $direction={"column"} $width={"30%"} $height={"100%"}>
            <BannerItem
              $right={"100px"}
              $width={"200px"}
              $height={"200px"}
              $imgwidth={"100%"}
              $imgheight={"100%"}
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img src={blueheart} />
            </BannerItem>
            <BannerItem
              $width={"200px"}
              $height={"200px"}
              $right={"150px"}
              $imgwidth={"100%"}
              $imgheight={"100%"}
              data-aos="fade-up-right"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img src={laptop} />
            </BannerItem>
            <BannerItem
              $width={"130px"}
              $height={"130px"}
              $imgwidth={"100%"}
              $imgheight={"100%"}
              $right={"120px"}
              data-aos="fade-up-right"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img src={plant} />
            </BannerItem>
          </BannerLayOut>
          <BannerLayOut $direction={"column"} $width={"40%"}>
            <BannerText
              $fontSize={"32px"}
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <span>온전히</span>
            </BannerText>
            <BannerText
              $fontSize={"36px"}
              $top={"18rem"}
              data-aos="fade-up"
              data-aos-delay="750"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
            >
              <span>
                나에게만 몰입할 수 있는 <strong>공간</strong>
              </span>
            </BannerText>
            <ItemBox>
              <BannerItem
                $imgwidth={"100%"}
                $imgheight={"100%"}
                $top={"10px"}
                $width={"170px"}
                $height={"170px"}
                data-aos="fade-out-in"
                data-aos-delay="1300"
                data-aos-duration="1200"
              >
                <img src={men} />
              </BannerItem>
              <BannerItem
                $width={"150px"}
                $height={"150px"}
                $imgwidth={"100%"}
                $imgheight={"100%"}
                data-aos="fade-out-in"
                data-aos-delay="1200"
                data-aos-duration="1200"
              >
                <img src={women} />
              </BannerItem>
            </ItemBox>
          </BannerLayOut>
          <BannerLayOut $direction={"column"} $width={"30%"} $height={"100%"}>
            <BannerItem
              $width={"50px"}
              $height={"50px"}
              $top={"10px"}
              $right={"200px"}
              $imgwidth={"100%"}
              $imgheight={"100%"}
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <img src={pinkheart} />
            </BannerItem>
            <BannerItem
              $width={"150px"}
              $height={"150px"}
              $top={"60px"}
              $right={"80px"}
              $imgwidth={"100%"}
              $imgheight={"100%"}
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <img src={redheart} />
            </BannerItem>
            <BannerItem
              $width={"150px"}
              $height={"150px"}
              $imgwidth={"100%"}
              $imgheight={"100%"}
              $top={"150px"}
              $right={"90px"}
              data-aos="fade-up-left"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img src={game} />
            </BannerItem>
          </BannerLayOut>
        </BannerLayOut>
      </BannerWrapper>
      <CategoryWrapper>
        <CategoryItem data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" data-aos-easing="ease-in-out">
          <img src={free} />
        </CategoryItem>
        <CategoryItem data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out">
          <img src={sports} />
        </CategoryItem>
        <CategoryItem data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" data-aos-easing="ease-in-out">
          <img src={it} />
        </CategoryItem>
        <CategoryItem data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000" data-aos-easing="ease-in-out">
          <img src={fashoin} />
        </CategoryItem>
      </CategoryWrapper>
      {user ? <PostButton></PostButton> : null}
    </Container>
  );
}
