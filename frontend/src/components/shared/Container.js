import styled from "styled-components";

const Container = styled.div`
  padding-top: 50px;
  width: 100%;
  height: ${(props) => props.$height};
`;

export default function ({ children, height }) {
  return <Container $height={height}>{children}</Container>;
}
