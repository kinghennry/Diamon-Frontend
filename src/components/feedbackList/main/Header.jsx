/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { HiOutlineLightBulb } from "react-icons/hi";
import Search from "./Search";
import { ButtonOne } from "../../common/ui/Button";
import device from "../../common/MediaQueries";
import { useHistory } from "react-router-dom";
import millify from "millify";

const Container = styled.div`
  background: #373f68;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SuggestionCount = styled.div`
  display: flex;
  place-items: center;
  align-items: center;
  color: #ffffff;
  gap: 16px;

  h3 {
    padding-right: 16px;
    @media ${device.tablet} {
      display: none;
    }
  }
`;

const Icon = styled(HiOutlineLightBulb)`
  font-size: 24px;
  @media ${device.tablet} {
    display: none;
  }
`;

function Header({ totalFeedbacks }) {
  const history = useHistory();

  return (
    <Container>
      <SuggestionCount>
        <Icon />
        <h3>
          {/* {millify(totalFeedbacks)} */}
          {totalFeedbacks}&nbsp;Suggestion
          {totalFeedbacks > 1 && "s"}
        </h3>
        <Search />
      </SuggestionCount>
      <ButtonOne onClick={() => history.push("/create-feedback")}>
        + Add Feedback
      </ButtonOne>
    </Container>
  );
}

export default Header;
