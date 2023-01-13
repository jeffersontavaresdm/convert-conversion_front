import React from "react";

const ContactsPage = () => {
  document.title = "Contatos"

  return (
    <>
      <h1 style={ { textAlign: "center", marginTop: "36px", fontSize: "60px", fontFamily: "Sigmar One" } } >
        Contatos
      </h1 >
      <br />
      <hr style={ { color: "white" } } />
      <div style={ { display: "flex", justifyContent: "center", alignItems: "center" } } >
        <div style={ { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" } } >
          <h3 style={ { color: "white", marginTop: "60px" } } >
            Para entrar em contato comigo ou apenas para ver um pouco mais sobre mim, vá até:
          </h3 >
          <br />
          <ul style={ { color: "cadetblue" } } >
            <li >
              <a
                href="https://linkedin.com/in/jefferson-tavares"
                target="_blank"
                style={ { fontStyle: "italic", fontSize: "20px", color: "cadetblue" } } >
                <b >Linkedin</b >
              </a >
            </li >
            <li style={ { marginTop: "12px" } } >
              <a
                href="https://github.com/jeffersontavaresdm"
                target="_blank"
                style={ { fontStyle: "italic", fontSize: "20px", color: "cadetblue" } } >
                <b >GitHub</b >
              </a >
            </li >
            <li style={ { marginTop: "12px" } } >
              <a
                href="https://wa.me/+5585985800297"
                target="_blank"
                style={ { fontStyle: "italic", fontSize: "20px", color: "cadetblue" } } >
                <b >Whatsapp</b >
              </a >
            </li >
            <li style={ { marginTop: "12px" } } >
              <a
                href="https://t.me/jeffersontdm"
                target="_blank"
                style={ { fontStyle: "italic", fontSize: "20px", color: "cadetblue" } } >
                <b >Telegram</b >
              </a >
            </li >
            <li style={ { marginTop: "12px" } } >
              <a
                href="https://twitter.com/JFFTXD"
                target="_blank"
                style={ { fontStyle: "italic", fontSize: "20px", color: "cadetblue" } } >
                <b >Twitter</b >
              </a >
            </li >
            <li style={ { marginTop: "12px" } } >
              <a
                href="https://discord.com/users/jeffersontdm#1604"
                target="_blank"
                style={ { fontStyle: "italic", fontSize: "20px", color: "cadetblue" } } >
                <b >Discord</b >
              </a >
            </li >
            <li style={ { marginTop: "12px" } } >
              <a
                href="https://instagram.com/jeffersontdm_"
                target="_blank"
                style={ { fontStyle: "italic", fontSize: "20px", color: "cadetblue" } } >
                <b >Instagram</b >
              </a >
            </li >
          </ul >
        </div >
      </div >
      <footer style={ { position: "fixed", fontSize: "12px", right: "24px", bottom: "24px", } } >
        <h3 style={ { fontSize: "18px", fontFamily: "Sigmar One" } } >See ya!</h3 >
      </footer >
    </>
  )
}

export default ContactsPage;