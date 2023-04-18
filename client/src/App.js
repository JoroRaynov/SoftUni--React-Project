import { Routes, Route } from 'react-router-dom'

import './App.css';
import Header from './Components/Header/Header';
import { Register } from './Components/Register/Register';
import { Login } from './Components/Login/Login';
import { Home } from './Components/Home/Home';
import { AdCreate } from './Components/AdCreate/AdCreate';
import { AdProvider } from './contexts/AdContext';
import { AuthProvider } from './contexts/AuthContext';
import { AdDetails } from './Components/AdDetails/AdDetails';
import { AdsUser } from './Components/AdsUser/AdsUser';
import { Authenticated } from './Components/RouteGuards/Authenticated';
import { NotAuthenticated } from './Components/RouteGuards/NotAuthenticated';
import { Logout } from './Components/Logout/Logout';

function App() {
  return (
    <>
      <AuthProvider>
        <AdProvider>
          <Header />
          <main>
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/data/:adId/details"} element={<AdDetails />} />
              <Route path={"/data/user/:userId/catalog"} element={<AdsUser />} />

              <Route element={<Authenticated />} >
                <Route path={"/data/catalog/new"} element={<AdCreate />} />
                <Route path={"/auth/logout"} element= {<Logout />} />
              </Route>

              <Route element={<NotAuthenticated />}>
                <Route path={"/auth/register"} element={<Register />} />
                <Route path={"/auth/login"} element={<Login />} />
              </Route>

            </Routes>
          </main>
        </AdProvider>
      </AuthProvider>
    </>
  );
}

export default App;
