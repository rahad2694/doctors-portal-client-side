import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/Home/About/About';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import NavBar from './pages/Shared/NavBar';

function App() {
  return (
    <div >
      <NavBar></NavBar>
      {/* <button className='btn btn-primary'>Hi</button> */}

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
