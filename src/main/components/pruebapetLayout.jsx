import { Link,Outlet,useNavigate } from "react-router-dom";
import { useState } from 'react';
import Menu from '../containers/menu'
function PruebapetLayout(props){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const isFormValid = () => {
    return username.trim() !== '' && password.trim() !== '';
  };
  
  const handleSubmit = async () => {
    try {
      /*const response = await fetch('https://backenddemosite.onrender.com/api/suser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });*/
      if(username.trim() !== '' && password.trim() !== ''){
      const response = await fetch('http://192.168.1.68:3700/api/suser', {
      //const response = await fetch('https://backenddemosite.onrender.com/api/suser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log(data.usuario);
      } else {
        console.error(data.message);
      }
    }
    } catch (error) {
      console.error('Error al enviar datos:', error);
    }
  };
  

  function handleClick() {
    navigate("/login");
  }
  return(
    <div className="login-div">
    <Menu/>
    <div className="login-zone">
      <div className="form-class">
  <h2>Registro</h2>
  <input
    type="text"
    placeholder="Nombre de usuario"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
  />
  <input
    type="password"
    placeholder="Contraseña"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  <button onClick={handleSubmit} disabled={!isFormValid()} className="but-login">Registrarte</button>
  <button onClick={handleClick} className="but-registro">Volver</button>
  </div>
  </div>
</div>
    )

  

}
const estilos = {
  avatar: {
    fontFamily: "-apple-system",
    fontSize: "5rem",
    fontWeight: 1.5,
    color: "#292b2c",
    backgroundColor: "pink",
  },
  buttonPrueba:{
    backgroundColor:"red",
    width:"50%",
    padding:"1rem",
    cursor:"pointer",
  }

};


export default PruebapetLayout