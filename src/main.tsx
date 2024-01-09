//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import Addpet from './main/containers/pruebapet.jsx'
//import App from './App.tsx'
import './assets/styles.css'
//import { BrowserRouter } from "react-router-dom";

/*const createButton=(text:string)=>{
  return(
    <button>{text}</button>
  )
}
//nombre de componentes deben ser PascalCase
const SpecialButton=({text})=>{
  return(
    <button>{text}</button>
  )
}*/
ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <App/>
  
)
