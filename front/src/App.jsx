import React from 'react';
import './App.scss';
import Inicio from './pages/Inicio/Inicio';
import Album from './pages/Album/Album';
import Mercado from './pages/Mercado/Mercado';
import Navigator from './core/Navigator';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { JwtContext } from './context/jwtContext';
import { SWContextProvider } from './context/context';
import Aleatorio from './components/Aleatorio/Aleatorio';
import CromoDetail from './components/CromoDetail/CromoDetail';
import Register from './pages/Register/Register';
import Repetidos from './pages/Repetidos/Repetidos';
import Editar from './pages/Admin/Editar/Editar';
import Login from './pages/Login/Login';
import Crear from './pages/Admin/Crear/Crear';

function App() {
  const [isAdmin, setAdmin] = useState(false);
  const [jwt, setJwt] = useState();
  const [album, setAlbum] = useState();
  const [user, setUser] = useState([]);
  const [repe, setRepe] = useState([]);
  //console.log(user);

  return (
    <>
      <JwtContext.Provider
        value={{
          isAdmin,
          setAdmin,
          jwt,
          setJwt,
          user,
          setUser,
          repe,
          setRepe,
          album,
          setAlbum,
        }}>
        <SWContextProvider>
          <Router>
            {/* {isAdmin===false ? <Inicio />: <Navigator/>} */}

            <div className='App'>
              {localStorage.getItem('token') && <Navigator></Navigator>}

              <Routes>
                <Route path='/album' element={<Album />} />
                <Route path='/mercado' element={<Mercado />} />
                <Route path='/' element={<Login />} />
                <Route path='/cromo' element={<Aleatorio />} />
                <Route path='/album/:nombre' element={<CromoDetail />} />
                <Route path='/inicio' element={<Inicio />} />
                <Route path='/register' element={<Register />} />
                <Route path='/repetidos' element={<Repetidos />} />
                <Route path='/editar' element={<Editar />} />
                <Route path='/editar/:nombre' element={<CromoDetail />} />
                <Route path='/crear' element={<Crear />} />
              </Routes>
            </div>
          </Router>
        </SWContextProvider>
      </JwtContext.Provider>
    </>
  );
}

export default App;
