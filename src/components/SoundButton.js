import React, { useState } from 'react';
import styled from 'styled-components';


export const StyledSoundButton = styled.button`
    border: 5px solid red;

    background-color: white;
    color: grey;
    margin: 0 0 20px 0;
    padding: 10px 10px 10px 10px;

    cursor: pointer;
`;

export const SoundButton = ({ callback }) => (
    <StyledSoundButton onClick={callback}>
      Start Game
    </StyledSoundButton>
  );

export default SoundButton;