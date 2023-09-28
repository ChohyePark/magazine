import styled from "styled-components";

const Container = styled.div`
  padding-top: 50px;
  width: 100%;
  height: 950px;
`;

export default function ({ children }) {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
}
