import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import api from "./services/api";

export default function App() {
  const [usuario, setUsuario] = useState();

  useEffect(() => {
    api
      .get("http://localhost:8080/instrumento", {}/*{auth:{
        username:'user',
        password:'cbfae790-5552-40df-996d-63838d4ab592'
      }}*/)
      .then((response) => setUsuario(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="App">
      <p>Usuário: {usuario?.nome}</p>
      <p>Biografia: {usuario?.valor}</p>
    </div>
  );
}