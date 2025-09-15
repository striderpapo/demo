import { Link,Outlet,useNavigate } from "react-router-dom";
import Menu from '../containers/menu'
function InicioLayout(props){
  const navigate = useNavigate();
  //<Link to="nosotros"><button style={estilos.buttonPrueba}>Haz clic para ver la página sobre nosotros</button></Link>
  //<p className='probandoClassName'>Inicio</p>
        //<button style={estilos.buttonPrueba} onClick={handleClick}>Haz clic para ver la página sobre nosotros</button>
        //<h2 style={estilos.avatar}>{props.item}</h2>
  function handleClick() {
    navigate("/login");
  }

    function handleClickMysql() {
    navigate("/loginmysql");
  }
    return(
      <div>
        <Menu/>
        <h2 className="titel-inicio">{props.item}</h2>
        <div className="box-bd">
          <div className="box-mysql">
                <p onClick={handleClickMysql}>MySQL</p>
          </div>
          <div className="box-mongodb">
              <p onClick={handleClick}>mongo DB</p>
          </div>
        </div>
        <div className="box-bd-device">
          <div className="box-mysql-device">
                <p onClick={handleClickMysql}>MySQL</p>
          </div>
          <div className="box-mongodb-device">
              <p onClick={handleClick}>mongo DB</p>
          </div>
        </div>
        <Outlet/>
      </div>
    )

  

}
const estilos = {
  avatar: {
    fontFamily: "-apple-system",
    fontSize: "5rem",
    fontWeight: 1.5,
    color: "white",
    backgroundColor: "#2e3047",
    textAlign:"center",
    
  },
  buttonPrueba:{
    backgroundColor:"purple",
    width:"50%",
    padding:"1rem",
    cursor:"pointer",
  }
};


export default InicioLayout