import styled from "styled-components";
import { Children } from "react";

const Layout = styled.div`
  margin: 20px;
`;

const Title = styled.div`
  border-bottom: 1px solid #ccc;
  width: 800px;
  margin: auto;

  input {
    border: none;
    width: 800px;
    font-size: 22px;
  }
`;

export default function ({ children }) {
  return (
    <Layout>
      <Title>{children}</Title>
    </Layout>
  );
}
