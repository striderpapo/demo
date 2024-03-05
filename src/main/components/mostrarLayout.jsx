import { Link,useNavigate,Outlet } from "react-router-dom";
import { useState } from 'react';

function MostrarLayout(props){ 
    console.log(props.dataUser[0])
  return(
    <div className="style-mostrar">
<h2>Mostrar datos</h2>
          {props.dataUser.map(item => (
            <ul key={item._id}>
            <li >
            <p>{item.nombre}</p>
            <p>{item.descripcion}</p>
            <p>{item.nombreagrega}</p>
            <img src={item.imageproducto} alt="Logo de mi aplicación" />
            </li>
            </ul>
          ))}
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


export default MostrarLayout