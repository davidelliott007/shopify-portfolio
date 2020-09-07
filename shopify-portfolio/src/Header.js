import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  console.log("Header");

  return (
    <Wrapper>
      <Title>Fruit Emporium</Title>
      <nav>
        <div className="nav-items">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-items">
          <Link to="/about">About</Link>
        </div>
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
`;

const Title = styled.h1`
  font-size: 32px;
`;

export default Header;
