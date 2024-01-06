import { Link,useNavigate } from "react-router-dom";
function MenuLayout(props){

    return(
      <div className="nav-box">
        <nav>
          <ul>
          <li>
            <Link to="/inicio">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>          
        </ul>
      </nav>
      </div>
    )

  

}
const estilos = {


};


export default MenuLayout

//<li>
//<Link to="/nosotros">nosotros</Link>
//</li> 
//<li>
//  <Link to="/contacto">About</Link>
//</li> 