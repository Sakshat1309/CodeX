import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/logout"/>
        <Route path="/Home" element = {<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
