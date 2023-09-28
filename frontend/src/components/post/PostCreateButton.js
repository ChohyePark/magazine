import { Link } from "react-router-dom";
import img from "../../assets/logo/button.png";
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
  background-color: white;
  width: 8.3rem;
  height: 8.3rem;
  position: fixed;
  top: 35.8rem;
  left: 6rem;
  border-radius: 50%;
  text-align: center;
  transition-duration: 3s;
  animation: ${fadeIn} 3s;

  &:hover {
    cursor: pointer;
    transform: rotate(360deg);
  }

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 980px) {
    display: none;
  }
`;

export default function () {
  return (
    <Link to="/newpost">
      <Button>
        <img src={img} />
      </Button>
    </Link>
  );
}
