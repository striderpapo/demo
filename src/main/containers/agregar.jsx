import React, { Component } from 'react';
import AgregarLayout from '../components/agregarLayout';
import { decodeToken } from '../services/auth';

class Agregar extends Component {
    constructor(props){
        super(props);
        this.onlogout=this.props.onLogout;
        this.state={
            isHola:"hola desde Inside",
            userName:this.props.user,
            contDatos:0,
            sindatos:false
          }
        }

        async getDataCount(){
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
                       console.log(prueba)
                       if(prueba.length>=3){
                       this.setState({
                           contDatos:prueba.length,
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
        this.getDataCount();
        console.log(this.onlogout)
      }

         
 render(){
    let {contDatos}=this.state
    //return(
    //<AgregarLayout contdat={contDatos}/>
 //)
 // if(contDatos<3){
    return(
    <AgregarLayout contdat={contDatos} refreshCount={() => this.getDataCount()} />
 )
   //}
       /*if(contDatos>=3){
        return(
          <div style={{backgroundColor: "#2e3047"}}>
        <h2 style={{color: "white"}}>Tienes 3 datos registrados como demo no puedes registrar más</h2>
        </div>
        )
      }*/
    }
}

export default Agregar