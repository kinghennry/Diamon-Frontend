import React from "react";
import styled from "styled-components";
import { BiChevronLeft } from "react-icons/bi";
import { Link, useHistory } from "react-router-dom";
import { ButtonTwo } from "../common/ui/Button";
import { useSelector } from "react-redux";

const Container = styled.div`
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Alert = styled.div`
  display: flex;
  color: #4661e6;
  flex-direction: column;
  gap: 8px;

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

function Header({ feedback }) {
  const { user } = useSelector((state) => ({
    ...state.auth,
  }));
  const history = useHistory();

  return (
    <Container>
      <Alert>
        <Link to="/">
          <Back>
            <BiChevronLeft />
            <p>Go Back</p>
          </Back>
        </Link>
      </Alert>
      {feedback.creator === user?.result?._id && (
        <ButtonTwo
          onClick={() => history.push(`/edit-feedback/${feedback._id}`)}
        >
          Edit Feedback
        </ButtonTwo>
      )}
    </Container>
  );
}

export default Header;
