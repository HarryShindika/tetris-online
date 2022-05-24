import React from 'react';
import { StyledDisplay } from './styles/StyledDisplay';


const Display = ({ gameOver, text }) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

// Function to play sound when the wbsite is loaded


export default Display;
