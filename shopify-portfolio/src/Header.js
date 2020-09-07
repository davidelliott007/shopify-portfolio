import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
function Header() {
  console.log("Header");

  return (
    <Wrapper>
      <nav>
        {/* <Button>
          <AiFillGithub style={{ verticalAlign: "middle" }} />
        </Button>
        <Button>
          <AiFillTwitterCircle style={{ verticalAlign: "middle" }} />
        </Button>

        <Button>
          <AiFillInstagram style={{ verticalAlign: "middle" }} />
        </Button> */}

        {/* <div className="nav-items">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-items">
          <Link to="/about">About</Link>
        </div> */}
      </nav>
    </Wrapper>
  );
}

const Button = styled.button`
  background-color: transparent;
  color: black;
  :hover {
    cursor: pointer;
  }
  vertical-align: middle;
  padding: 2px;
`;

const Wrapper = styled.header`
  display: flex;
`;

const Title = styled.h1`
  font-size: 32px;
`;

export default Header;
