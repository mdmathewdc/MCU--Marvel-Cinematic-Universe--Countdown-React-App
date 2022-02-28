import styled from 'styled-components';
import { Body, Header } from './components';

const App = () => {
  return (
    <AppContainer className="App">
      <Header />
      <Body />
    </AppContainer>
  );
}

const AppContainer = styled.div `
  margin: 0 auto;
`
export default App;
