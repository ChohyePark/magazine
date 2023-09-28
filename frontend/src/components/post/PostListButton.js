import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Button = styled.div`
  width: 6rem;
  height: 6rem;
  z-index: 100;
  position: fixed;
  bottom: 40px;
  right: 100px;
  overflow: hidden;
  border-radius: 50%;
  text-align: center;
  padding-top: 20px;
  font-weight: lighter;
  font-size: 36px;
  color: white;
  background-color: black;
  transition-duration: 3s;
  animation: ${fadeIn} 3s;

  .i {
    height: 100%;
    width: 100%;
    color: white;
  }

  &:hover {
    cursor: pointer;
    background-color: #f9f8f3;
    color: black;
  }

  .list:hover i {
    color: black;
  }
`;

export default function () {
  return (
    <Link to="/posts">
      <Button>
        <i className="style.icon ri-file-list-line"></i>
      </Button>
    </Link>
  );
}
