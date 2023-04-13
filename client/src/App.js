import { Routes, Route } from 'react-router-dom'

import './App.css';
import Header from './Components/Header/Header';
import { Register } from './Components/Register/Register';
import { Login } from './Components/Login/Login';
import { Home } from './Components/Home/Home';
import { CreateAd } from './Components/CreateAd/CreateAd';
import { AdProvider } from './contexts/AdContext';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <AdProvider>
            <Header />
            <main>
              <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/auth/register"} element={<Register />} />
                <Route path={"/auth/login"} element={<Login />} />
                <Route path={"/data/catalog/new"} element={<CreateAd />} />
              </Routes>
            </main>
        </AdProvider>
      </AuthProvider>
    </>
  );
}

export default App;
