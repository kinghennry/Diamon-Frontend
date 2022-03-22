import React from "react";
import { RevolvingDot } from "react-loader-spinner";
import styled from "styled-components";

const Container = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Loading() {
  return (
    <Container>
      <RevolvingDot
        type="Puff"
        color="#7c91f9"
        height={100}
        width={100}
        timeout={3000}
      />
    </Container>
  );
}
