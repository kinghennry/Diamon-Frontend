import React from "react";
import styled from "styled-components";
import { BiChevronLeft } from "react-icons/bi";
import { useHistory } from "react-router-dom";
const Alert = styled.div`
  display: flex;
  color: #4661e6;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 24px;
  padding-top: 24px;

  h3 {
    padding-right: 16px;
  }
`;

const Back = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  p {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #647196;
  }
`;

const Header = () => {
  const history = useHistory();
  return (
    <Alert>
      <Back onClick={() => history.push("/")}>
        <BiChevronLeft />
        <p>Go Back</p>
      </Back>
    </Alert>
  );
};
export default Header;
