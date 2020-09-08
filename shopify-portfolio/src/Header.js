import React from "react";
import styled from "styled-components";
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

const Wrapper = styled.header`
  display: flex;
`;

export default Header;
