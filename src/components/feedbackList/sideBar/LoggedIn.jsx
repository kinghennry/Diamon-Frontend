/* eslint-disable import/no-named-as-default */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import styled from "styled-components";
import { GoKebabHorizontal } from "react-icons/go";
import { Menu, MenuList, MenuButton, MenuItem } from "@reach/menu-button";
import "@reach/menu-button/styles.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../../../features/authSlice";
import decode from "jwt-decode";
import { Avatar } from "@material-ui/core";

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 9px;
  display: flex;
  gap: 16px;

  img {
    border-radius: 100%;
    width: 90px;
  }
`;
const Pic = styled(Avatar)`
  outline-offset: 2px;
  outline: 2px solid #a5d5ee !important;
`;
const Kebab = styled(GoKebabHorizontal)`
  color: black;
  font-size: 24px;
`;

const UserDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  p {
    font-size: 12px;
  }
`;

const MenuBtn = styled(MenuButton)`
  background: none;
  align-items: center;
  border: none;
  width: 100%;
  cursor: pointer;
  display: flex;
  gap: 8px;
  text-align: left;
  transition: all 0.3s ease;
  padding: 14px;
  border-radius: 10px;
  &:hover {
    background: #eeeeee;
  }
`;

const MenuLi = styled(MenuList)`
  background: #ffffff;
  border-radius: 10px;
  margin-top: 24px;
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.350492);
  border: none;
  width: 230px;
  > [data-reach-menu-item][data-selected] {
    color: #ad1fea;
    font-weight: 400;
    background: none;
  }

  > [data-reach-menu-items] {
    width: 100%;
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
  const handleLogout = () => {
    dispatch(setLogout());
  };

  return (
    <Container>
      <Menu>
        <MenuBtn>
          <Pic src={user?.result?.img} alt="avatar" />
          <UserDetails>
            <div>
              <h4>{user?.result?.name}</h4>
              <p>@{user?.result?.username}</p>
            </div>
            <Kebab />
          </UserDetails>
        </MenuBtn>
        <MenuLi>
          <MenuItem onSelect={handleLogout}>Log Out</MenuItem>
          <MenuItem onSelect={() => history.push("/your-upvotes")}>
            Your Upvotes
          </MenuItem>
        </MenuLi>
      </Menu>
    </Container>
  );
};

export default LoggedIn;
