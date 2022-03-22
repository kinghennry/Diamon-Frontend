/* eslint-disable import/no-named-as-default */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import decode from "jwt-decode";
import { Avatar } from "@material-ui/core";
import { setLogout } from "../../../../features/authSlice";

const Pic = styled(Avatar)`
  outline-offset: 2px;
  outline: 2px solid #a5d5ee !important;
`;

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 9px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  img {
    border-radius: 100%;
    width: 40px;
  }
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  p {
    font-size: 12px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding-top: 8px;
  padding-bottom: 8px;
  p {
    font-size: 14px;
    cursor: pointer;
    font-weight: 700;
  }
`;

const LoggedIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state.auth }));
  const token = user?.token;
  if (token) {
    const decodedToken = decode(token);

    if (decodedToken.exp * 1000 < new Date().getTime()) {
      dispatch(setLogout());
    }
  }

  const handleLogOut = () => {
    dispatch(setLogout());
  };
  return (
    <>
      <Container>
        <UserDetails>
          <Pic src={user?.result?.img} alt="avatar" />
          <h4>{user?.result?.name}</h4>
          <p>@{user?.result?.username}</p>

          <Links>
            <p onClick={handleLogOut}>Log Out</p>
            <p onClick={() => history.push("/your-upvotes")}>Your Upvotes</p>
          </Links>
        </UserDetails>
      </Container>
    </>
  );
};

export default LoggedIn;
