import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import Button from "../../ui/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Logo = styled.div`
  color: white;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  font-family: "Freckle Face", cursive;
  font-size: 100px;
  text-align: center;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: space-evenly;
  font-size: 40px;
  margin-top: 30px;
  padding-bottom: 20px;
`;

const StyledLink = styled(Link)`
  color: white;
`;

export default function() {
  return (
    <Wrapper>
      <Logo>
        <span>Name</span>
        <div style={{ fontSize: "75px" }}>that</div>
        <span>Clion</span>
      </Logo>
      <BottomWrapper>
        <div>
          <Button>Start</Button>
        </div>
        <LinkWrapper>
          <StyledLink to="/leaderboard">
            <i className="fa fa-trophy" />
          </StyledLink>
          <StyledLink to="/directory">
            <i className="fa fa-address-book" />
          </StyledLink>
          <StyledLink to="/setup">
            <i className="fa fa-cog" />
          </StyledLink>
        </LinkWrapper>
      </BottomWrapper>
    </Wrapper>
  );
}
