import { Link,useNavigate ,Outlet} from "react-router-dom";
function InsideLayout(props){
  const navigate = useNavigate();
  //<Link to="inicio"><button style={estilos.buttonPrueba}>Haz clic para ver la página inicio</button></Link>
  function handleClick() {
    navigate("/inicio");
  }  
  return(
      <div>
        <h2 style={estilos.avatar}>{props.item}</h2>
        <p className='probandoClassName'>inside of contacto</p>
        <button style={estilos.buttonPrueba} onClick={handleClick}>Haz clic para ver la página inicio</button>
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


export default InsideLayout