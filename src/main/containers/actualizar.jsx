import React, { Component } from 'react';
import ActualizarLayout from '../components/actualizarLayout';
import { decodeToken } from '../services/auth';

class Actualizar extends Component {
    constructor(props){
        super(props);
        this.onlogout=this.props.onLogout;
        this.state={
            isHola:"hola desde Inside",
            userName:this.props.user,
            dataSource:[],
            sindatos:false
          }
        }

        async getDatainfoCita(){
            var prueba=[]
            console.log("props")

            try {
                //const accountInfo = await fetch(`http://192.168.1.68:3700/api/gproduc/${decodeToken(localStorage.getItem('myData')).username}`).then(res => res.json())
                const accountInfo = await fetch(`https://backenddemosite.onrender.com/api/gproduc/${decodeToken(localStorage.getItem('myData')).username}`).then(res => res.json())
                // We can now store account info state on this component
               // console.log(accountInfo.cita.length)
                
                prueba=accountInfo.product
                //console.log("prueba")
                //console.log(typeof prueba)
                //console.log(prueba)
                if(prueba.length>0){
                  this.setState({
                      dataSource:prueba,
                      sindatos:false
                      })  
                    }else{
                      this.setState({
                        sindatos:true
                        })  
                    }   
                    //console.log(this.state.dataSource)
               
            } catch (err) {
                                            console.log(err);
                                          }
          }        

      componentDidMount(){
          this.getDatainfoCita();
        //console.log(this.onlogout)
      }

         
 render(){
    let {isHola,userName,dataSource}=this.state
    if(this.state.dataSource.length>0){
    return(
    <ActualizarLayout dataUser={dataSource} datafunction={this.getDatainfoCita}/>
 )
    }
    
    if(this.state.sindatos){
      return(
        <div style={{backgroundColor: "#2e3047"}}>
      <h2 style={{color: "white"}}>Sin datos para actualizar</h2>
      </div>
      )
    }
    }
}

export default Actualizar