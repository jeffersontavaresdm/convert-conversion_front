import React from "react";
import { css, StyleSheet } from 'aphrodite';
import { Link } from "react-router-dom";
import ContactsButton from "../../components/contacts-button/ContactsButton";
import globalStyles from "../../components/contacts-button/globalStyles";

interface AboutPageProps {
  setPage: (page: string) => void
}

const AboutPage: React.FunctionComponent<AboutPageProps> = ({ setPage }) => {
  document.title = "Sobre"

  return (
    <>
      <div style={ { display: "flex", justifyContent: "center", marginTop: 40 } } >
        <h1 style={ { fontSize: "60px", fontFamily: "Sigmar One" } } >
          Olá, eu sou o Jefferson
        </h1 >
      </div >
      <div style={ {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      } } >
        <div className={ css(globalStyles.background) } >
          <img src="src/img/me.jpg" alt="me" style={ { borderRadius: "100%", width: "200px", height: "200px" } } />
          <div style={ {
            width: "500px",
            height: "200px",
            marginLeft: "80px",
            display: "flex",
            flexDirection: "column",
          } } >
            <span className={ css(globalStyles.spanStylish) } >
              Idade: 35 anos
            </span >
            <span className={ css(globalStyles.spanStylish) } >
              Telefone: (85) 98580-0297
            </span >
            <span className={ css(globalStyles.spanStylish) } >
              Email: jeffersontavares1611@gmail.com
            </span >
            <span className={ css(globalStyles.spanStylish) } >
              Localidade: Fortaleza-CE
            </span >
          </div >
          <div style={ { width: 100, display: "flex", flexDirection: "column", alignItems: "start" } } >
            <ContactsButton
              name={ "Linkedin" }
              withName={ false }
              nameSize={ 20 }
              size={ 35 }
              margin={ 18 }
              link={ "https://linkedin.com/in/jefferson-tavares" }
            />
            <ContactsButton
              name={ "Telegram" }
              withName={ false }
              nameSize={ 20 }
              size={ 35 }
              margin={ 18 }
              link={ "https://t.me/jeffersontdm" }
            />
            <ContactsButton
              name={ "Discord" }
              withName={ false }
              nameSize={ 20 }
              size={ 35 }
              margin={ 18 }
              link={ "https://discord.com/users/jeffersontdm#1604" }
            />
          </div >
          <div style={ { width: 100, height: 200, display: "flex", flexDirection: "column", alignItems: "start" } } >
            <ContactsButton
              name={ "GitHub" }
              withName={ false }
              nameSize={ 20 }
              size={ 35 }
              margin={ 18 }
              link={ "https://github.com/jeffersontavaresdm" }
            />
            <ContactsButton
              name={ "Whatsapp" }
              withName={ false }
              nameSize={ 20 }
              size={ 35 }
              margin={ 18 }
              link={ "https://wa.me/+5585985800297" }
            />
            <ContactsButton
              name={ "Instagram" }
              withName={ false }
              nameSize={ 20 }
              size={ 35 }
              margin={ 18 }
              link={ "https://www.instagram.com/jeffersontdm_" }
            />
          </div >
        </div >
        <div className={ css(globalStyles.background) } >
          <div style={ {
            width: 1400,
            height: "100%",
            marginLeft: "300px",
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
        <footer className={ css(globalStyles.background) } >
          <div style={ { width: "1400px", marginLeft: "300px" } } >
            <div className={ css(globalStyles.container) } >
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
              Por último,&nbsp;
              <span
                style={ { cursor: "pointer", textDecoration: "underline", color: "forestgreen" } }
                onClick={ () => setPage("contacts") } >
              <b >contatos</b >
            </span >
              &nbsp;para ver todas as minhas redes.
            </div >
          </div >
        </footer >
      </div >
    </>
  );
}

export default AboutPage;