import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import redheart from "../../assets/banner/banner_img1.png";
import game from "../../assets/banner/banner_img2.png";
import blueheart from "../../assets/banner/banner_img3.png";
import laptop from "../../assets/banner/banner_img4.png";
import pinkheart from "../../assets/banner/banner_img5.png";
import plant from "../../assets/banner/plant.png";
import women from "../../assets/banner/women.png";
import men from "../../assets/banner/banner_center.png";
import free from "../../assets/category/free.png";
import sports from "../../assets/category/sports.png";
import it from "../../assets/category/it.png";
import fashoin from "../../assets/category/fashoin.png";
import PostButton from "../../components/post/PostCreateButton";

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
  width: ${(props) => props.width};
  heght: 100%;
  justify-content: center;
  display: flex;
  flex-direction: ${(props) => props.direction};

  @media (max-width: 980px) {
    width: 100%;
  }
`;

const BannerItem = styled.div`
  z-index: 20;
  ${(props) => props.direction};
  width: ${(props) => (props.width ? props.width : "150px")};
  height: ${(props) => (props.height ? props.height : "150px")};
  top: ${(props) => props.top};
  margin: ${(props) => props.margin};
  img {
    width: ${(props) => (props.imgwidth ? props.imgwidth : "100%")};
    height: ${(props) => (props.imgheight ? props.imgheight : "100%")};
  }
  @media (max-width: 980px) {
    display: none;
  }
`;

const BannerText = styled.div`
  left: ${(props) => props.left};
  font-size: ${(props) => props.fontSize};
  font-style: italic;
  text-align: center;
  width: 500px;
  top: ${(props) => props.top};
`;

const CategoryWrapper = styled.div`
  margin-top: 50px;
  text-align: center;
  height: 300px;

  @media (max-width: 980px) {
    height: 300px;
  }
`;

const CategoryItem = styled.div`
  width: 230px;
  hegiht: 210px;
  border-radius: 10%;
  float: left;
  margin-right: 10px;
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
    <>
      <BannerWrapper>
        <BannerLayOut width={"80%"}>
          <BannerLayOut direction={"column"} width={"30%"}>
            <BannerItem
              margin={"0 0 0 20px"}
              width={"200px"}
              height={"200px"}
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img src={blueheart} />
            </BannerItem>
            <BannerItem
              width={"200px"}
              height={"200px"}
              margin={"0 0 0 90px"}
              data-aos="fade-up-right"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img src={laptop} />
            </BannerItem>
            <BannerItem
              width={"130px"}
              height={"130px"}
              imgwidth={"100%"}
              imgheight={"100%"}
              margin={"0 0 0 200px"}
              data-aos="fade-up-right"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img src={plant} />
            </BannerItem>
          </BannerLayOut>
          <BannerLayOut direction={"column"} width={"40%"}>
            <BannerText
              left={"43.5rem"}
              fontSize={"32px"}
              top={"14rem"}
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <span>온전히</span>
            </BannerText>
            <BannerText
              left={"32rem"}
              fontSize={"36px"}
              top={"18rem"}
              data-aos="fade-up"
              data-aos-delay="750"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
            >
              <span>
                나에게만 몰입할 수 있는 <strong>공간</strong>
              </span>
            </BannerText>
            <BannerLayOut display={"none"}>
              <BannerItem
                margin={"50px 0 0 0"}
                width={"170px"}
                height={"170px"}
                direction={"left:47rem"}
                top={"23.8rem"}
                data-aos="fade-out-in"
                data-aos-delay="1300"
                data-aos-duration="1200"
              >
                <img src={men} />
              </BannerItem>
              <BannerItem
                margin={"50px 0 0 0"}
                direction={"left:36rem"}
                top={"24rem"}
                data-aos="fade-out-in"
                data-aos-delay="1200"
                data-aos-duration="1200"
              >
                <img src={women} />
              </BannerItem>
            </BannerLayOut>
          </BannerLayOut>
          <BannerLayOut direction={"column"} width={"30%"}>
            <BannerItem
              width={"50px"}
              height={"50px"}
              margin={"0 0 30px 100px"}
              imgwidth={"100%"}
              imgheight={"100%"}
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <img src={pinkheart} />
            </BannerItem>
            <BannerItem margin={"0 0 0 100px"} data-aos="fade-left" data-aos-delay="100" data-aos-duration="1200">
              <img src={redheart} />
            </BannerItem>
            <BannerItem
              margin={"40px 0 0 21px"}
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
      <CategoryWrapper className="container d-flex justify-content-center">
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
    </>
  );
}
