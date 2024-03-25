import { Routes, Route ,Link,Navigate,BrowserRouter} from "react-router-dom"
import { useState } from 'react';
import Inicio from "./main/containers/inicio"
import Addpet from './main/containers/pruebapet'
import Home from "./main/containers/home"
import Login from "./main/containers/login"
import PrivateRoute from "./main/guard/authGuard"

function Aplicacion() {
  const [isAuthenticated, setisAuthenticated] = useState(localStorage.getItem('myData'));
  //let isAuthenticated = localStorage.getItem('myData');
console.log(isAuthenticated)
  const handleLogin = (newToken) => {
    setisAuthenticated(newToken);
    localStorage.setItem('myData', newToken);
    console.log(typeof newToken)
  };

  const handleLogout = () => {
  setisAuthenticated(false);
   localStorage.removeItem('myData');
   console.log(localStorage.getItem('myData'))
  };

  return (
    <BrowserRouter>
    <div className="Aplicacion">
      <Routes>
      <Route path="/" exact element={isAuthenticated ? <Navigate to="/home" /> : <Inicio /> } />
      <Route path="/inicio" element={ isAuthenticated ? <Navigate to="/home" /> :<Inicio /> } />
      <Route path="/nosotros" element={isAuthenticated ? <Navigate to="/home" /> :<Addpet/>} />
      <Route path="/login" exact element={isAuthenticated ? <Navigate to="/home" /> :<Login onLogin={handleLogin}/>} /> 
      <Route path="/home"  element= {isAuthenticated ?<PrivateRoute element={<Home onLogout={handleLogout}/>} algo={isAuthenticated}/>:<Login onLogin={handleLogin}/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    
  )
}

export default Aplicacion


//<Route path="/login" exact element={isAuthenticated ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} /> 
//<Route path="/home" exact element= {isAuthenticated ? <Home user="papo" onLogout={handleLogout} /> : <Navigate to="/login" />}/>