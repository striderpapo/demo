import { Link,useNavigate,Outlet } from "react-router-dom";
import { useState } from 'react';
import Menu from '../containers/menu'
function LoginLayout(props){ 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    console.log(props.onLogin)
    const handleLogin = async () => {
      console.log(username)
        try {
          //const response = await fetch(`https://backenddemosite.onrender.com/api/guser/${username}`).then(res => res.json()) 
          /*const response = await fetch(`http://192.168.1.68:3700/api/guser/${username}/${password}`).then(res => res.json()) 
          console.log(response.user.length)
          if(response.user.length>0){
          props.onLogin(response.user[0].username); // Llama a la función proporcionada por el padre
          }*/
          const response = await fetch('http://192.168.1.68:3700/api/guser', {
            //const response = await fetch('https://backenddemosite.onrender.com/api/suser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          });
            console.log(response.ok)
          if(response.ok){
            const data = await response.json();
            props.onLogin(data.token); // Llama a la función proporcionada por el padre
          }else{
            setLoginError('Se proporcionó nombre de usuario o contraseña incorrectos.');
          }
      //    navigate("/home");
        } catch (error) {
          console.error('Error de inicio de sesión:', error);
        }
      };
      
      function handleClick() {
        navigate("/nosotros");
      }

  return(
    <div className="login-div">
      <Menu/>
      <div className="login-zone">
        <div className="form-class">
    <h2>Iniciar Sesión</h2>
    <input
      type="text"
      placeholder="Nombre de usuario"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      required
    />
    <input
      type="password"
      placeholder="Contraseña"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
    <button onClick={handleLogin} className="but-login">Iniciar Sesión</button>
    <button onClick={handleClick} className="but-registro">Registrarte</button>
    </div>
    {loginError && <p className="error-message">{loginError}</p>}
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
    backgroundColor: "yellow",
  },
  buttonPrueba:{
    backgroundColor:"purple",
    width:"50%",
    padding:"1rem",
    cursor:"pointer",
  }
};


export default LoginLayout