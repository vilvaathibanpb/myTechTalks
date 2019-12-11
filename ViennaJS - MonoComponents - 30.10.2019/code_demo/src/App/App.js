import React from "react";
import Div from "../DesignSystem/Div";
import Text from "../DesignSystem/Text/Text";
import styled from 'styled-components';
import Child from "../Child";

const StyledDiv = styled(Div)`
  background: red;
  margin: 100px;
`


function App() {
  return (
    <StyledDiv>
      <Text>Test</Text>
      <Child />
    </StyledDiv>
  );
}

export default App;
