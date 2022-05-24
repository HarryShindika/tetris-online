import React from 'react';
import styled from 'styled-components';

const StyledStartButton = styled.button`

  background-color: green;

  color: white;
  margin-left: 25%;
  padding: 10px;
  border: none;
  border-radius: 20px;
  width: 50%;
  height: 45px;

  cursor: pointer;
`;

const StartButton = ({ callback }) => (
  <StyledStartButton style={{alignItems: 'center' }} onClick={callback}>
    Start Game
  </StyledStartButton>
);

export default StartButton;
