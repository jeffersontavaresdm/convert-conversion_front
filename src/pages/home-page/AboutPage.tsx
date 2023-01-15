import React from "react";
import { css, StyleSheet } from 'aphrodite';
import { Link } from "react-router-dom";

interface AboutPageProps {
  setPage: (page: string) => void
}

const AboutPage: React.FunctionComponent<AboutPageProps> = ({ setPage }) => {
  document.title = "Sobre"

  const styles = StyleSheet.create({
    container: {
      color: "#B2ACA2",
      textAlign: "start",
      fontStyle: "normal",
      fontSize: "18px",
      fontFamily: '"Chivo Mono", monospace'
    },
    background: {
      width: "100%",
      background: `linear-gradient(to right, rgba(95, 158, 160, 0.1), rgba(173, 216, 230, 0))`,
      padding: "10px",
      marginTop: "50px",
      display: "flex",
      justifyContent: "center"
    },
    extraMarginTop: {
      marginTop: "48px"
    }
  });

  return (
    <>
      <h1 style={ { textAlign: "center", marginTop: "36px", fontSize: "60px", fontFamily: "Sigmar One" } } >
        Olá, eu sou o Jefferson
      </h1 >
      <div style={ {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "36px",
      } } >
        <img src="src/img/me.jpg" alt="me" style={ { borderRadius: "100%", width: "230px" } } />
        <div className={ css(styles.background) } >
          <div style={ {
            width: 1400,
            height: "100%",
            color: "#B2ACA2",
            fontSize: "24px",
            fontStyle: "italic",
            textAlign: "start",
          } } >
            <p >
              Sou um desenvolvedor de software apaixonado por tecnologia e sempre buscando aprender e evoluir.
            </p >
            <p >
              Sempre trabalhando em projetos pessoais para aperfeiçoamento dos meus conhecimentos
              e adquirir novas habilidades técnicas.
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
          </div >
        </div >
        <footer className={ css(styles.background, styles.extraMarginTop) } >
          <div className={ css(styles.container) } >
            Você pode ver um projetinho de
            &nbsp;<strong >conversão de moedas</strong >, só clicar <Link to={ "/currency-conversion" } >
            <b >aqui</b >
          </Link >.
            <br />
            Veja também a pagina de
            &nbsp;<span
            style={ { cursor: "pointer", textDecoration: "underline", color: "forestgreen" } }
            onClick={ () => setPage("skills") } >
              <b >habilidades</b >
            </span >&nbsp;
            para ver um pouco sobre minhas <b >hard</b > e <b >soft</b > skills.
            <br />
            E por último,
            &nbsp;<span
            style={ { cursor: "pointer", textDecoration: "underline", color: "forestgreen" } }
            onClick={ () => setPage("contacts") } >
              <b >contatos</b >
            </span >&nbsp;
            para ver minhas redes.
          </div >
        </footer >
      </div >
      <footer style={ { position: "fixed", fontSize: "12px", right: "24px", bottom: "24px", } } >
        <h3 style={ { fontSize: "18px", fontFamily: "Sigmar One" } } >See ya!</h3 >
      </footer >
    </>
  );
}

export default AboutPage;