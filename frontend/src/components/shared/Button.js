import styled from "styled-components";

const Button = styled.button`
  width: ${(props) => (props.$width ? props.$width : "90px")};
  height: ${(props) => (props.$height ? props.$height : "30px")};
  background-color: ${(props) => (props.$bg ? props.$bg : "white")};
  margin: 0.2rem;
  border-radius: 20px;
  border: ${(props) => (props.$bg ? "none" : "1px solid black")};
  font-size: 12px;
  transition: 0.5s;

  &:hover {
    background-color: ${(props) => (props.$bg ? props.$bg : "black")};
    color: ${(props) => (props.$bg ? "black" : "white")};
  }
`;
export default function ({ children, clickEvent, width, hegiht, bg }) {
  return (
    <Button onClick={clickEvent} $width={width} $hegiht={hegiht} $bg={bg}>
      {children}
    </Button>
  );
}
