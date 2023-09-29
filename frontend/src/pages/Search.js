import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchWrapper = styled.div`
  text-align: ${(props) => props.$textAlign};
  position: absolute;
  z-index: 50;
  background-color: ${(props) => props.$bg}
  opacity: 30;
  width: 100%;
  height: 100%;
`;

const SearchSmallTop = styled.div`
  line-height: 50px;
  background-color: white;
  text-align: center;
`;

const SearchSmallInput = styled.input.attrs({ type: "text" })`
  width: 19rem;
  height: 2rem;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: #f4f4f4;
  font-weight: bolder;
`;

const SearchSmallIcon = styled.i`
  margin-left: 10px;
  color: black;
  font-size: 18px;

  &:hover {
    cursor: pointer;
  }
`;

const SearchSmallText = styled.div`
  padding-top: 20px;
  margin-top: 20px;
  width: 100%;
  height: 200px;

  span {
    font-size: 16px;
    font-weight: bolder;
    margin-left: 20px;
  }

  div {
    margin-top: 2rem;
  }
`;

const CategoryItem = styled.li`
  list-style: none;
  margin-top: 12px;
`;

const SearchMdTop = styled.div`
  margin-top: 200px;
  text-align: center;
  height: 300px;
  width: 100%;
`;

const SearchMdInputBox = styled.div`
  padding-top: 150px;
  margin: auto;
  width: 80%;
  height: 300px;

  span {
    border-bottom: solid 2px black;
  }
`;

const SearchMdInput = styled.input.attrs({ type: "text" })`
  background-color: transparent;
  text-align: center;
  opacity: 80;
  font-size: 48px;
  border: none;
  width: 600px;
`;

const SearchMdIcon = styled.i`
  color: black;
  font-size: 48px;
  margin-left: 12px;
  &:hover {
    cursor: pointer;
  }
`;

export default function () {
  const Navigate = useNavigate();
  const onClickBackHandler = () => {
    Navigate(-1);
  };

  return (
    <>
      <SearchWrapper $textAlign={"start"} $bg={"#F4F4F4;"} className="d-md-none">
        <SearchSmallTop>
          <SearchSmallInput placeholder="Search"></SearchSmallInput>
          <SearchSmallIcon className="ri-search-line"></SearchSmallIcon>
          <SearchSmallIcon className="ri-close-fill" onClick={onClickBackHandler}></SearchSmallIcon>
        </SearchSmallTop>
        <SearchSmallText>
          <span>관심사를 검색해보세요</span>
          <div>
            <ul>
              <CategoryItem>패션 👚👕👙</CategoryItem>
              <CategoryItem>운동 🏃🏻‍♀️</CategoryItem>
              <CategoryItem>자유 👀</CategoryItem>
              <CategoryItem>IT 👩‍💻</CategoryItem>
            </ul>
          </div>
        </SearchSmallText>
      </SearchWrapper>
      <SearchWrapper $textAlign={"center"} className="d-none d-md-block">
        <SearchMdTop>
          <SearchMdInputBox>
            <span>
              <SearchMdInput placeholder="Whats your interests?"></SearchMdInput>{" "}
            </span>
            <SearchMdIcon className="ri-search-line"></SearchMdIcon>
            <SearchMdIcon className="ri-close-fill" onClick={onClickBackHandler}></SearchMdIcon>
          </SearchMdInputBox>
        </SearchMdTop>
      </SearchWrapper>
    </>
  );
}
