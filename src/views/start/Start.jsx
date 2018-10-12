import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import Button from "../../ui/Button";
import Logo from '../../ui/Logo';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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
      <Logo />
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
