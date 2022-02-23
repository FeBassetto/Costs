import './App.css';

import RouterPages from './components/RouterPages/routerpages';
import Container from './components/layout/Container/container';

function App() {
  return (
    <div className="App">
      <Container customClass="min-height">
        <RouterPages/> 
      </Container>
    </div>
  );
}

export default App;
