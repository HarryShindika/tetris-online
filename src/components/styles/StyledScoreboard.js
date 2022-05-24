import React from "react";
import styled from "styled-components";

export const StyledScoreboard = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 0;
  padding: 20px;
  min-height: 30px;
  width: 100%;
  color: ${props => (props.text ? 'red' : '#999')};
  background: #000;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
`;