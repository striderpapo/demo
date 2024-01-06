import React, { Component } from 'react';
import MenuLayout from '../components/menuLayout';

class Menu extends Component {
    constructor(props){
        super(props);
        this.state={
            isHola:"hola desde inicio",
          }
        }

        async getDatainfoCita(){
            var prueba ="me carge desde datainfocita de inicio"
         
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
    <MenuLayout />
 )
    }
}

export default Menu