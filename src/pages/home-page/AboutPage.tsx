import {Link} from "react-router-dom";
import React from "react";

interface AboutPageProps {
  setPage: (page: string) => void
}

const AboutPage: React.FunctionComponent<AboutPageProps> = ({ setPage }) => {
  document.title = "Sobre"

  return (
    <>
      <h1 style={ { textAlign: "center", marginTop: "36px", fontSize: "45px", fontFamily: "Sigmar One" } } >
        Olá, eu sou o Jefferson
      </h1 >
      <div style={ {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "36px"
      } } >
        <img src="src/img/me.jpg" alt="me" style={ { borderRadius: "100%", width: "230px" } } />
        <div style={ {
          color: "white",
          fontSize: "24px",
          fontStyle: "italic",
          marginTop: "36px",
          textAlign: "center",
        } } >
          <p >
            Sou um desenvolvedor de software apaixonado por tecnologia e sempre buscando aprender e evoluir.
          </p >
          <p >
            Atualmente, estou trabalhando como desenvolvedor Full Stack em projetos pessoais
            para aperfeiçoamento dos meus conhecimentos e adquirir novas habilidades técnicas.
          </p >
          <p >
            Eu acredito que a comunidade de desenvolvimento é muito importante e gosto de compartilhar meus
            conhecimentos,
            <br />
            então você pode me encontrar compartilhando conteúdo e participando de eventos na minha rede do&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/jefferson-tavares" >
              <b >LinkedIn</b >
            </a >.
          </p >
          <p >
            Também é possível ver alguns de meus projetos no&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/jeffersontavaresdm"
            >
              <b >GitHub</b >
            </a >&nbsp;
            onde estou sempre aberto para contribuições e feedbacks.
          </p >
          <p >
            Se você estiver interessado em trabalhar juntos ou apenas quer dizer um "oi",
            entre em contato comigo! Estou sempre disposto a ouvir o que você tem a dizer.
          </p >
          <footer style={ {
            backgroundColor: "darkkhaki",
            color: "black",
            textAlign: "center",
            padding: "20px",
            marginTop: "100px",
            fontStyle: "normal",
            fontSize: "20px",
            borderRadius: "100px"
          } } >
            Você também pode ver alguns projetinhos aqui mesmo, clicando
            &nbsp;<Link to={ "/dot" } ><b >aqui</b ></Link >&nbsp;
            para ver um projetinho em react simples ou
            &nbsp;<Link to={ "/currency-conversion" } ><b >aqui</b ></Link >&nbsp;
            para ver um projeto de <strong >conversão de moedas</strong >.
            <br />
            Veja também a pagina de
            &nbsp;<span
            style={ { cursor: "pointer", textDecoration: "underline", color: "forestgreen" } }
            onClick={ () => setPage("skills") } >
              <b >habilidades</b >
            </span >&nbsp;
            para ver um pouco sobre minhas <b >hard</b > e <b >soft</b > skills e
            &nbsp;<span
            style={ { cursor: "pointer", textDecoration: "underline", color: "forestgreen" } }
            onClick={ () => setPage("contacts") } >
              <b >contatos</b >
            </span >&nbsp;
            para ver minhas redes.
          </footer >
        </div >
      </div >
      <footer style={ { position: "fixed", fontSize: "12px", right: "24px", bottom: "24px", } } >
        <h3 style={ { fontSize: "18px", fontFamily: "Sigmar One" } } >See ya!</h3 >
      </footer >
    </>
  );
}

export default AboutPage;