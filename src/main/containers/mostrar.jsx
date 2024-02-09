import React, { Component } from 'react';
import MostrarLayout from '../components/mostrarLayout';

class Mostrar extends Component {
    constructor(props){
        super(props);
        this.onlogout=this.props.onLogout;
        this.state={
            isHola:"hola desde Inside",
            userName:this.props.user,
            dataSource:[],
          }
        }

        async getDatainfoCita(){
            var prueba=[]
            console.log("props")

            try {
                //const accountInfo = await fetch(`http://192.168.1.68:3700/api/gproduc/${localStorage.getItem('myData')}`).then(res => res.json())
                const accountInfo = await fetch(`https://backenddemosite.onrender.com/api/gproduc/${localStorage.getItem('myData')}`).then(res => res.json())
                // We can now store account info state on this component
               // console.log(accountInfo.cita.length)
                
                prueba=accountInfo.product
                //console.log("prueba")
                //console.log(typeof prueba)
                //console.log(prueba)
                this.setState({
                    dataSource:prueba
                    })    
                    //console.log(this.state.dataSource)
               
            } catch (err) {
                                            console.log(err);
                                          }
          }    

      componentDidMount(){
          this.getDatainfoCita();
       // console.log(this.onlogout)
      }

         
 render(){
    let {isHola,userName,dataSource}=this.state
    if(this.state.dataSource.length>0){
    return(
    <MostrarLayout dataUser={dataSource}/>
 )
    }else{
        return(
          <div style={{backgroundColor: "#2e3047"}}>
        <h2 style={{color: "white"}}>Sin datos para mostrar</h2>
        </div>
        )
      }
    }
}

export default Mostrar