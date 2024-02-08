import { Link,useNavigate,Outlet } from "react-router-dom";
import { useState,useRef  } from 'react';
import AgregarLayout from '../containers/agregar'
import MostrarLayout from '../containers/mostrar'
import ActualizarLayout from '../containers/actualizar'


function HomeLayout(props){ 
  const [tipo, setTipo] = useState(1);
  //let valorSinRenderizado = useRef(0);
  //console.log(valorSinRenderizado.current)
  console.log(props)
  const handleLogout = async () => {
    try {
      props.onLogout(); // Llama a la función proporcionada por el padre
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
    }
  };

  const changeTipo = (num) => {
    //valorSinRenderizado.current=1
    setTipo(num)
   // console.log(valorSinRenderizado)
  }

  return(
    <div className="style-home">
      <div className="style-banner">
      <h2>Crud sencillo {props.nameUser}</h2>
        <button onClick={handleLogout}>cerrar sesion</button>
      </div>
      <div className="crud-section">
    <button className="buttons-design"  style={{ backgroundColor:tipo==1? "rgba(13,67,133,1)":"" }} onClick={() => changeTipo(1)}>Agregar</button>
    <button className="buttons-design" style={{ backgroundColor:tipo==2? "rgba(13,67,133,1)":"" }}onClick={() => changeTipo(2)}>Mostrar</button>
    <button className="buttons-design" style={{ backgroundColor:tipo==3? "rgba(13,67,133,1)":"" }}onClick={() => changeTipo(3)}>Actualizar</button>
    <section>
      {tipo==1?<AgregarLayout/>:null}
      {tipo==2?<MostrarLayout/>:null}
      {tipo==3?<ActualizarLayout/>:null}
    </section>
    </div>
    <Outlet />
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


export default HomeLayout