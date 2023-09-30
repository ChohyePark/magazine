import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";

const Category = styled.div`
  width: 800px;
  margin: 10px auto 10px auto;

  select {
    width: 140px;
    height: 36px;
  }
`;

export default function ({ post, setPost }) {
  return (
    <Category>
      <select
        className="form-select"
        aria-label="Default select example"
        defaultValue={post.category}
        onChange={(e) => {
          setPost((prev) => ({ ...prev, category: e.target.value }));
        }}
      >
        <option value={""} disabled>
          카테고리
        </option>
        <option key={"라이프"} id="FREEDOM" value={"FREEDOM"}>
          자유
        </option>
        <option key={"스포츠"} id="IT" value={"IT"}>
          IT
        </option>
        <option key={"연예"} id="SPORTS" value={"SPORTS"}>
          운동
        </option>
        <option key={"자유"} id="FASHOIN" value={"FASHION"}>
          패션
        </option>
      </select>
    </Category>
  );
}
