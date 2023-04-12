import { Routes, Route } from 'react-router-dom'
import { useContext } from 'react';

import './App.css';
import Header from './Components/Header/Header';
import { Register } from './Components/Register/Register';
import { Login } from './Components/Login/Login';
import { Home } from './Components/Home/Home';
import { CreateAd } from './Components/CreateAd/CreateAd';
import { AdProvider } from './contexts/AdContext';


function App() {
  return (
    <>
      <Header />

    <AdProvider>
      <main>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/auth/register"} element={<Register />} />
          <Route path={"/auth/login"} element={<Login />} />
          <Route path={"/data/catalog/new"} element={<CreateAd />} />
        </Routes>
      </main>
      </AdProvider>
    </>
  );
}

export default App;
