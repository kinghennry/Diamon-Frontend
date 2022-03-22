/* eslint-disable import/no-named-as-default */
import React from "react";
import styled from "styled-components";
import { ButtonOne } from "../../common/ui/Button";
import device from "../../common/MediaQueries";
import { useHistory } from "react-router-dom";
import empty from "./illustration-empty.svg";

const Container = styled.div`
  height: 650px;
  max-width: 825px;
  width: 100%;
  border-radius: 10px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const EmptyContainer = styled.div`
  text-align: center;

  @media ${device.tablet} {
    padding: 24px;
  }

  img {
    width: 150px;
    margin: 0 auto;
    padding-bottom: 48px;
  }
`;

const EmptyTxt = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 48px;

  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    text-align: center;
    letter-spacing: -0.333333px;
    color: #3a4374;
    padding-bottom: 15px;
  }

  p {
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    font-weight: 400;
    color: #647196;
    max-width: 410px;
    width: 100%;
  }
`;

function NoSearchResult({ searchQuery }) {
  const history = useHistory();
  function refreshPage() {
    window.location.reload(false);
    history.push("/");
  }
  return (
    <Container>
      <EmptyContainer>
        <img src={empty} alt="empty" />
        <EmptyTxt>
          <h1>No Results Found for {searchQuery}, Please try another title.</h1>
        </EmptyTxt>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <ButtonOne onClick={() => history.push("/")}>+ Back Home</ButtonOne> */}
          <ButtonOne onClick={refreshPage}>+ Back Home</ButtonOne>
        </div>
      </EmptyContainer>
    </Container>
  );
}

export default NoSearchResult;
