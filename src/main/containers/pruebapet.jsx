import React, { Component } from 'react';
import AddpetLayout from '../components/pruebapetLayout';

class Pruebapet extends Component {
    constructor(props){
        super(props);
        this.state={
            isHola:"hola desde prueba pet",
          }
        }

        async getDatainfoCita(){
            var prueba ="me carge desde datainfocita"
         
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
    <AddpetLayout item={isHola} />
 )
    }
}

export default Pruebapet