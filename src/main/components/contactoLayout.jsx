import { Link,useNavigate,Outlet } from "react-router-dom";
import Menu from '../containers/menu'
function ContactoLayout(props){
  const navigate = useNavigate();
  //<Link to="inicio"><button style={estilos.buttonPrueba}>Haz clic para ver la página inicio</button></Link>
  function handleClick() {
    navigate("/inicio");
  }  
  return(
      <div>
        <Menu/>
        <h2 style={estilos.avatar}>{props.item}</h2>
        <p className='probandoClassName'>Contacto</p>
        <button style={estilos.buttonPrueba} onClick={handleClick}>Haz clic para ver la página inicio</button>
        <ul>
           <li><Link to="inside"><button style={estilos.buttonPrueba}>vamos al inside </button></Link></li>
           <li><Link to="insidedos"><button style={estilos.buttonPrueba}>vamos al inside dos</button></Link></li>
        </ul>
        <Outlet/>
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


export default ContactoLayout