import { Link,useNavigate,Outlet } from "react-router-dom";
import { useState,  useRef  } from 'react';
import { jwtDecode } from "jwt-decode";
import { decodeToken } from '../services/auth'; 

function AgregarLayout(props){ 
  const [nombre, setnombreProducto] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const refinputFile = useRef();

  console.log(props)
  
  const isFormValid = () => {
    return nombre.trim() !== '' && descripcion.trim() !== '' && selectedFile !== null;
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    //setSelectedFile(event.target.files[0]);
    if (files.length > 0) {
      const selectedFile = files[0];
      setSelectedFile(selectedFile);
    } else {
      setSelectedFile(null);
    }
  };
  const agregarSubmit = async () => {
    const decoded = jwtDecode(localStorage.getItem('myData'));
    const decodedimportado = decodeToken(localStorage.getItem('myData'));
    //console.log(decoded.username);
    //console.log(decodedimportado.username)
    let nombreagrega=decodedimportado.username
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
        console.log(data.producto._id);
      setnombreProducto('');
      setDescripcion('');
      setSelectedFile(null);
      refinputFile.current.value = "";
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
  <input type="file" onChange={handleFileChange} ref={refinputFile}/>
  {selectedFile && (
        <p>Selected file: {selectedFile.name}</p>
      )}
  <button onClick={agregarSubmit} disabled={!isFormValid()} className={`but-agregarSubmit ${!isFormValid() ? 'disabled' : ''}`} >Agregar</button>

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