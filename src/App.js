import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/Home/About/About';
import Home from './pages/Home/Home';
import NavBar from './pages/Shared/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      {/* <button className='btn btn-primary'>Hi</button> */}

      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
