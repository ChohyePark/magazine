import styled from "styled-components";

const Form = styled.div`
  width: 960px;
  height: 600px;
`;

export default function ({ children }) {
  return <Form>{children}</Form>;
}
