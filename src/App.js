import logo from './logo.svg';
import './App.css';
import User from './User';
import HomeContainer from './containers/HomeContainer';
import HeaderContainer from './components/HeaderContainer';
function App() {
  return (
    <div className="App">
    <HeaderContainer/>
      <HomeContainer/>
    </div>
  );
}

export default App;
