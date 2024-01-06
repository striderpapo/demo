import React, { Component } from 'react';
import InsideLayout from '../components/insideLayout';

class Inside extends Component {
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
    <InsideLayout item={isHola} />
 )
    }
}

export default Inside