import { Link,useNavigate,Outlet } from "react-router-dom";
import { useState } from 'react';

function AgregarLayout(props){ 
  const [nombre, setnombreProducto] = useState('');
  const [descripcion, setDescripcion] = useState('');
  console.log(props)
  const agregarSubmit = async () => {
    let nombreagrega=localStorage.getItem('myData')
    try {
      /*const response = await fetch('https://backenddemosite.onrender.com/api/suser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });*/
      //const response = await fetch('http://192.168.1.68:3700/api/sproduc', {
        const response = await fetch('https://backenddemosite.onrender.com/api/sproduc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, descripcion,nombreagrega }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log(data.producto);
      setnombreProducto('');
      setDescripcion('');
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error al enviar datos:', error);
    }
  };
  

  return(
    <div className="style-form">
    <h2>Agregar datos</h2>
    <input
    type="text"
    placeholder="Producto"
    value={nombre}
    onChange={(e) => setnombreProducto(e.target.value)}
  />
  <input
    type="text"
    placeholder="Descripcion"
    value={descripcion}
    onChange={(e) => setDescripcion(e.target.value)}
  />
  <button onClick={agregarSubmit} className="but-agregarSubmit">Agregar</button>

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


export default AgregarLayout