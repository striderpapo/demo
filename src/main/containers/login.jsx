import React, { Component } from 'react';
import LoginLayout from '../components/loginLayout';

class Login extends Component {
    constructor(props){
        super(props);
        this.onlogin=this.props.onLogin;
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
          //this.getDatainfoCita();
            console.log(this.onlogin)
      }

         
 render(){
    let {isHola,isLoading}=this.state
    return(
    <LoginLayout item={isHola} onLogin={this.onlogin}/>
 )
    }
}

export default Login