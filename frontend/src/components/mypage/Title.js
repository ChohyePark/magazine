import styled from "styled-components";

const Title = styled.div`
  border-bottom: 3px solid black;
  width: 100%;
  padding-bottom: 12px;
`;

export default function ({ children }) {
  return <Title>{children}</Title>;
}
