import React, { Component } from 'react';
import InsidedosLayout from '../components/insideDosLayout';

class Insidedos extends Component {
    constructor(props){
        super(props);
        this.state={
            isHola:"hola desde Inside",
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
          this.getDatainfoCita();

      }

         
 render(){
    let {isHola,isLoading}=this.state
    return(
    <InsidedosLayout item={isHola} />
 )
    }
}

export default Insidedos