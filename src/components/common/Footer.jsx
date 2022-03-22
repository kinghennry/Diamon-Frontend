import React from "react";
import styled from "styled-components";
import flag from "./nigeria.svg";

const Container = styled.div`
  margin-top: auto;
  color: black;
  padding: 16px 24px;

  a {
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      color: #d82259;
    }
  }
`;

function Footer() {
  return (
    <Container className="fade-in">
      <a target="_blank" href="https://henry-ogbu.netlify.app" rel="noreferrer">
        Made in &nbsp;
        <span>
          <img style={{ width: "30px" }} src={flag} alt="nigeria" />
        </span>{" "}
        &nbsp; by Henry Ogbu .
      </a>
    </Container>
  );
}

export default Footer;
