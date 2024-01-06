import React, { Component } from 'react';
import InicioLayout from '../components/inicioLayout';

class Inicio extends Component {
    constructor(props){
        super(props);
        this.state={
            isHola:"hola desde inicio",
          }
        }

        async getDatainfoCita(){
            var prueba ="Demo sitio web"
         
              this.setState({
                  isLoading:false,
                  isHola:prueba
                  })    
        }       

      componentDidMount(){
          this.getDatainfoCita();

      }

         
 render(){
    let {isHola,isLoading}=this.state
    return(
    <InicioLayout item={isHola} />
 )
    }
}

export default Inicio