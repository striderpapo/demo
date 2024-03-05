import { Link,useNavigate,Outlet } from "react-router-dom";
import { useState,useEffect  } from 'react';

function ActualizarLayout(props){ 
  const [nombre, setnombreProducto] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [idedita, setIdedita] = useState('');
  const [data, setData] = useState(props.dataUser);
  const [edita, setEdita] = useState(false);
  const [modelo, setModelo] = useState({
    nombre:"",
	  descripcion:"",
	  nombreagrega:localStorage.getItem('myData'),
  });
    console.log(props.dataUser[0])
    console.log(props.datafunction)
    console.log(modelo)
    useEffect(() => {
      setEdita(false)
    }, [data]);
    const manejarCambioInput = (event,it,dn) => {
      console.log(it)
      if(edita && idedita==it && dn==2){
        setDescripcion(event.target.value)
      }else if (edita && idedita==it && dn==1) {
        setnombreProducto(event.target.value)
      }
    };
    
    const handleDelete = async (id) => {
        console.log(id)
        try {
          const response = await fetch(`http://192.168.1.68:3700/api/dproduc/${id}`, {
          //const response = await fetch(`https://backenddemosite.onrender.com/api/dproduc/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              // Puedes incluir otros encabezados según sea necesario, como tokens de autenticación.
            },
          });
    
          if (response.ok) {
            console.log("se borro")
            // Puedes realizar otras acciones después de una eliminación exitosa.
            //props.datafunction()
            refreshComponent()
          } else {
            // Manejar errores de la solicitud DELETE.
            console.error('Error al intentar eliminar el recurso.');
          }
        } catch (error) {
          // Manejar errores de red u otros errores.
          console.error('Error de red:', error);
        }
      };
      const handleUpdate = async (ite) => {
        console.log(ite._id)
        setEdita(true)
        setnombreProducto(ite.nombre)
        setDescripcion(ite.descripcion)
        setIdedita(ite._id)
      };
      const confirmUpdate = async (ite,nom,des) => {
        try {
          console.log("confirmando update")
         /* setModelo({
            nombre:nom,
            descripcion:des,
          })*/
          console.log(ite)
          // Realizar la solicitud fetch para actualizar los datos
          /*console.log(modelo)*/
          const response = await fetch(`http://192.168.1.68:3700/api/eproduc/${ite._id}`, {
         // const response = await fetch(`https://backenddemosite.onrender.com/api/eproduc/${ite._id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre: nombre,descripcion:descripcion,nombreagrega:localStorage.getItem('myData') }),
          }).then(res => res.json());
          if (response) {
            console.log('Datos actualizados con éxito');
            refreshComponent()
            //setEdita(false)

          } else {
            console.error('Error al actualizar datos');
          }
        } catch (error) {
          console.error('Error en la solicitud fetch', error);
        }
      };
      
      const refreshComponent=async()=>{
        var prueba=[]
        console.log("props")

        try {
          const accountInfo = await fetch(`http://192.168.1.68:3700/api/gproduc/${localStorage.getItem('myData')}`).then(res => res.json())
          //  const accountInfo = await fetch(`https://backenddemosite.onrender.com/api/gproduc/${localStorage.getItem('myData')}`).then(res => res.json())
            // We can now store account info state on this component
           // console.log(accountInfo.cita.length)
            
            prueba=accountInfo.product
          setData(prueba)
           
        } catch (err) {
                                        console.log(err);
                                      }
      } 
  return(
    <div className="style-mostrar">
<h2>Actualizar datos</h2>
          {data.map(item => (
            <ul key={item._id}>
            <li >
            <p>
            <input
    type="text"
    value={edita && idedita==item._id?nombre:item.nombre}
    onChange={(e) =>manejarCambioInput(e,item._id,1)}
  />
            </p>
            <p>
            <input
    type="text"
    placeholder="Descripcion"
    value={edita && idedita==item._id?descripcion:item.descripcion}
    onChange={(e) =>manejarCambioInput(e,item._id,2)}
  />
            </p>
            <p>{item.nombreagrega}</p>
            <p className="section-editbuttons">
            <button onClick={edita && idedita==item._id ?() => confirmUpdate(item,nombre,descripcion):() => handleUpdate(item)}  className={edita && idedita==item._id?"but-editarConfirmar":"but-editarSubmit"}>{edita && idedita==item._id?"Confirmar":"Editar"}</button>
            <button onClick={() => handleDelete(item._id)} className="but-editarSubmit">Eliminar</button>
            </p>
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


export default ActualizarLayout