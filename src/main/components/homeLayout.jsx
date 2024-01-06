import { Link,useNavigate,Outlet } from "react-router-dom";

function HomeLayout(props){ 
  console.log(props)
  const handleLogout = async () => {
    try {
      props.onLogout(); // Llama a la función proporcionada por el padre
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
    }
  };

  return(
    <div>
    <h2>Este es elhome luego de logeo {props.nameUser}</h2>
    <button onClick={handleLogout}>cerrar sesion</button>
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