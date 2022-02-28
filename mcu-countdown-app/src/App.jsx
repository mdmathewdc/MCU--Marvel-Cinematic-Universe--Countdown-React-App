import styled from 'styled-components';
import { Body } from './components';

const App = () => {
  return (
    <AppDiv className="App">
      <Body />
    </AppDiv>
  );
}

const AppDiv = styled.div `
  background-color: red;
  text-align: center;
`
export default App;
