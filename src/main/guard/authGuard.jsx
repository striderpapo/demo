import React from 'react';
import { Route, Navigate  } from 'react-router-dom';


const isAuthenticated = () => {
  // Implementa tu lógica de autenticación aquí
  // Retorna true si el usuario está autenticado, de lo contrario, false.
  return localStorage.getItem('myData'); // Cambia esto con tu lógica real
};
const PrivateRoute = ({ path, element ,algo}) => {
  console.log(algo)
  console.log(path)
  console.log(element)
  return algo ? (
    element
  ) : (
    <Navigate to="/login" replace state={{ from: path }} />
  );
};


export default PrivateRoute;
