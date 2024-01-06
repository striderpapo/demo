import { Link,Outlet,useNavigate } from "react-router-dom";
import Menu from '../containers/menu'
function PruebapetLayout(props){
  const navigate = useNavigate();
  //<Link to="contacto"><button style={estilos.buttonPrueba}>Haz clic para ver la página contacto</button></Link> 
  function handleClick() {
    navigate("/contacto");
  }
  return(
      <div>
        <Menu/>
        <h2 style={estilos.avatar}>{props.item}</h2>
        <p className='probandoClassName'>Sobre nosotros</p>
        <button style={estilos.buttonPrueba} onClick={handleClick}>Haz clic para ver la página contacto</button>
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