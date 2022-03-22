/* eslint-disable import/no-named-as-default */
import React from "react";
import styled from "styled-components";
import { ButtonOne } from "../common/ui/Button";
import device from "../common/MediaQueries";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

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

function Empty() {
  const history = useHistory();
  const { user } = useSelector((state) => ({ ...state.auth }));

  return (
    <Container>
      <EmptyContainer>
        <img src="illustration-empty.svg" alt="empty" />
        <EmptyTxt>
          <h1>
            There are no liked suggestion yet&nbsp;
            {/* {(user?.result?.name).split(" ")[0]}. */}
            {user?.result?.name.split(" ")[0]}
          </h1>
          <p>Go and Like some Feedbacks and view them here</p>
        </EmptyTxt>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ButtonOne onClick={() => history.push("/")}>Back Home</ButtonOne>
        </div>
      </EmptyContainer>
    </Container>
  );
}

export default Empty;
