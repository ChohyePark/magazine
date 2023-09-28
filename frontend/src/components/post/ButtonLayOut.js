import styled from "styled-components";

const ButtonLayOut = styled.div`
  display: flex;
  justify-content: end;
  width: 800px;
  height: 40px;
  margin: 50px auto;
`;

export default function ({ children }) {
  return <ButtonLayOut>{children}</ButtonLayOut>;
}
