import React from "react";
import { StyledInstructions } from "./styles/StyledInstructions";

export const Instructions = () => (
    <StyledInstructions>
      <p>      
      <h1>Tetris Online<br/></h1>
        Welcome to Tetris Online!<br/>
        <ol style={{textAlign: "left"}}>
          <li>Use the arrow keys to move<br/></li>
          <br/>
          <li>Try to gain the highest score possible</li>
        </ol>
      </p>
    </StyledInstructions>
  );

export default Instructions;