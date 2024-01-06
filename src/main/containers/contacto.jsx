import React, { Component } from 'react';
import ContactoLayout from '../components/contactoLayout';

class Contacto extends Component {
    constructor(props){
        super(props);
        this.state={
            isHola:"hola desde contacto",
          }
        }

        async getDatainfoCita(){
            var prueba ="me carge desde datainfocita de contacto"
         
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
    <ContactoLayout item={isHola} />
 )
    }
}

export default Contacto