import { Routes, Route } from 'react-router-dom'

import './App.css';
import Header from './Components/Header/Header';
import {Register} from './Components/Register/Register';
import { Login } from './Components/Login/Login';
import { Home } from './Components/Home/Home';


function App() {
  return (
    <>
      <Header />
      <Home />
      <main>
        <Routes>
            <Route path={"/auth/register"} element={<Register />} />
            <Route path={"/auth/login"}  element = {<Login />} />
           
        </Routes>
      </main>
    </>
  );
}

export default App;
