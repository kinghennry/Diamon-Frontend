/* eslint-disable import/no-named-as-default */
/* eslint-disable no-undef */
import React from "react";
import styled from "styled-components";
import Header from "./Header";
import MediaQuery from "react-responsive";
import device from "../../common/MediaQueries";
import MobileHeader from "./mobile/MobileHeader";
import { useSelector } from "react-redux";
import Login from "./Login";
import LoggedIn from "./LoggedIn";
import Filter from "./Filter";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
  }
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 300px;
`;

const SideBar = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  return (
    <>
      <MediaQuery minWidth={630}>
        <Container className="fade-in">
          <MediaQuery minWidth={940}>
            {user ? <LoggedIn /> : <Login />}
          </MediaQuery>
          <User>
            <MediaQuery maxWidth={940}>
              {user ? <LoggedIn /> : <Login />}
            </MediaQuery>
            <Header />
          </User>
        </Container>
      </MediaQuery>
      <MediaQuery maxWidth={630}>
        <MobileHeader />
      </MediaQuery>
    </>
  );
};
export default SideBar;
