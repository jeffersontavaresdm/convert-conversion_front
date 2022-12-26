import React from "react";
import ArcadeButton from "../components/ArcadeButton";

const Homepage = () => {
  document.title = "Homepage"

  return (
    <div style={{position: "relative"}}>
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
          fontSize: "30px",
          fontFamily: "Times New Roman, serif"
        }}
      >
        <h1 style={{
          margin: "30px",
          fontWeight: "bold",
          fontSize: "70px",
          textAlign: "center",
          color: "coral",
          fontFamily: "Times New Roman"
        }}>
          Conversor de Moedas
        </h1>
        <span style={{color: "white"}}>
          <p style={{
            textAlign: "start",
            display: "flex",
            justifyContent: "center",
          }}>
            Aplicativo destinado a uma conversão entre tipos de moeda para uma busca simples e rápida.
            <br/>
            Veja a conversão de qualquer moeda para qualquer moeda.
            {/*Application intended for a conversion between currency types for a simple and quick search.*/}
            {/*<br/>*/}
            {/*See conversion from any currency to any currency.*/}
          </p>
          <p style={{marginTop: "50px"}}>Clique no botão para testar!</p>
        </span>
      </div>
      <div style={{marginTop: "80px", display: "flex", justifyContent: "center"}}>
        <ArcadeButton/>
      </div>
      <footer style={{
        position: "fixed",
        fontSize: "12px",
        left: "10px",
        bottom: "10px",
        color: "white"
      }}>
        <span>
          Criado por: <a
          href="/personal-page"
          style={{fontFamily: "Comic Sans, cursive", color: "darkcyan", fontStyle: "italic", fontWeight: "bold"}}
        >
          Jefferson Tavares
        </a>
        </span>
      </footer>
    </div>
  )
}

export default Homepage