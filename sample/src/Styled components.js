import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
background: yellow;
border: 2px solid black;
color: black;
padding: 8px;
`;

const StyledComponentsApp = () => {
  return (
    <div>
      <h1>An example of a styled component</h1>
      {/* <Button>A black and yellow button without any function</Button> */}
    </div>
  );
};

export default StyledComponentsApp;