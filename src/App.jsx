
import './App.scss';
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch'
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { Routes, Route, Navigate } from 'react-router-dom';
function App() {
  const user = true;
  return (
    <div className="App">
     <Routes>
        <Route  path='/' element={ user ?  <Home /> : <Navigate to='/register' />} />
        <Route path='/register' element={ <Register />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/movies' element={<Home type="movie"/>} />
        <Route path='/series' element={<Home type="series"/>} />
        <Route path='/watch' element={<Watch />} />
        
      </Routes>
    </div>
  );
}

export default App;
