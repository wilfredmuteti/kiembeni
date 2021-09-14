import React from "react";
import styled from "styled-components";
import { Details } from "./details";
import { SideImage } from "./sideImage";

const CardContainer = styled.div`
  width: 1100px;
  height: 500px;
  display: flex;
  position: relative;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
`;

export default function Letter(props) {
  return (
    <CardContainer>
      <Details />
      <SideImage />
    </CardContainer>
  );
}
