import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Project from "./Project";
import Home from "./Home";
import Header from "./Header";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
      test
      <Router>
        <div>
          <Header></Header>
          <Switch>
            <Route exact path="/project">
              <Project />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Lato', sans-serif;

  }

.nav-items
{
  padding-right: 5px;
}

nav
{
  display: flex;

}

Link{
  padding-right: 0px;
  color:green;
  font-size: 50px;

  :visited {
    text-decoration: none;
  }

}

/* adopted from https://polaris.shopify.com/design/typography#section-display-styles */

displayXlarge
{
  font-size: 42px;
  line-height: 44px;
  font-weight: 500;

  @media (max-width: 800px) {
    font-size: 27px;
    line-height: 36px;
    font-weight: 500;
    }
}

displayLarge
{
  font-size: 28;
  line-height: 32px;
  font-weight: 500;

  @media (max-width: 800px) {
    font-size: 24px;
    line-height: 28px;
    font-weight: 500;
    }
}

displayMedium
{
  font-size: 26px;
  line-height: 32px;
  font-weight: 400;

  @media (max-width: 800px) {
    font-size: 21px;
    line-height: 28px;
    font-weight: 400;
    }
}

displaySmall
{
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;

  @media (max-width: 800px) {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    }
}

heading
{
  font-size: 16px;
line-height: 24px;
font-weight: 500;

  @media (max-width: 800px) {
    font-size: 17px;
line-height: 24px;
font-weight: 500;
    }
}

subHeading
{
  font-size: 12px;
line-height: 16px;
font-weight: 600;
text-transform: uppercase;

  @media (max-width: 800px) {
    font-size: 13px;
line-height: 16px;
font-weight: 600;
text-transform: uppercase;
    }
}
body
{
  font-size: 14px;
line-height: 20px;
font-weight: 400;

  @media (max-width: 800px) {
    font-size: 15px;
line-height: 20px;
font-weight: 400;
    }
}

caption
{
  font-size: 12px;
line-height: 16px;
font-weight: 400;

  @media (max-width: 800px) {
    font-size: 13px;
line-height: 20px;
font-weight: 400;
    }
}




button
  {
  background: blueviolet;
  border: none;
  padding: 16px 32px;
  color: white;
  font-size: 21px;
  border-radius: 2px;
  }

  p {
    line-height: 1.3;
  }
`;

export default App;
