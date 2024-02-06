import React, { Component } from 'react';
import AgregarLayout from '../components/agregarLayout';

class Agregar extends Component {
    constructor(props){
        super(props);
        this.onlogout=this.props.onLogout;
        this.state={
            isHola:"hola desde Inside",
            userName:this.props.user
          }
        }

        async getDatainfoCita(){
            var prueba ="me carge desde datainfocita de Inside"
         
              this.setState({
                  isLoading:false,
                  isHola:prueba
                  })    
        }       

      componentDidMount(){
          //this.getDatainfoCita();
        console.log(this.onlogout)
      }

         
 render(){
    let {isHola,userName}=this.state
    return(
    <AgregarLayout />
 )
    }
}

export default Agregar