import { Link,useNavigate,Outlet } from "react-router-dom";
import { useState } from 'react';

function AgregarLayout(props){ 
  const [nombre, setnombreProducto] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  console.log(props)
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const agregarSubmit = async () => {
    let nombreagrega=localStorage.getItem('myData')
    const formData = new FormData();
    formData.append('imageproducto', selectedFile);
    try {
      /*const response = await fetch('https://backenddemosite.onrender.com/api/suser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });*/
        const response = await fetch('http://192.168.1.68:3700/api/sproduc', {
      //  const response = await fetch('https://backenddemosite.onrender.com/api/sproduc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, descripcion,nombreagrega }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log(data.producto._id);
      setnombreProducto('');
      setDescripcion('');
      //fetch(`http://192.168.1.68:3700/api/uImageProd/${data.producto._id}/${nombreagrega}`, {
      fetch(`https://backenddemosite.onrender.com/api/uImageProd/${data.producto._id}/${nombreagrega}`, {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to upload image');
        }
        return response.json();
      })
      .then(data => {
        console.log('Image uploaded successfully:', data);
        // Do something with the response if needed
      })
      .catch(error => {
        console.error('Error uploading image:', error);
      });
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
  <input type="file" onChange={handleFileChange} />
  {selectedFile && (
        <p>Selected file: {selectedFile.name}</p>
      )}
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