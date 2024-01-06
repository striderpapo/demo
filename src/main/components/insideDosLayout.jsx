import { Link,useNavigate } from "react-router-dom";
function InsidedosLayout(props){
  const navigate = useNavigate();
  //<Link to="nosotros"><button style={estilos.buttonPrueba}>Haz clic para ver la página sobre nosotros</button></Link>
  function handleClick() {
    navigate("/inicio");
  }
    return(
      <div>
        <h2 style={estilos.avatar}>{props.item}</h2>
        <p className='probandoClassName'>INSIDE DOS</p>
        <button style={estilos.buttonPrueba} onClick={handleClick}>Haz clic para ver la página sobre nosotros</button>
      </div>
    )

  

}
const estilos = {
  avatar: {
    fontFamily: "-apple-system",
    fontSize: "5rem",
    fontWeight: 1.5,
    color: "#292b2c",
    backgroundColor: "gray",
  },
  buttonPrueba:{
    backgroundColor:"orange",
    width:"50%",
    padding:"1rem",
    cursor:"pointer",
  }

};


export default InsidedosLayout