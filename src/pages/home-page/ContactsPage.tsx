import React from "react";
import ContactsButton from "../../components/contacts-button/ContactsButton";

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
          <div style={ { display: "flex", flexDirection: "row", marginTop: "30px" } } >
            <ContactsButton
              name={ "Linkedin" }
              withName={ false }
              nameSize={ 20 }
              size={ 50 }
              margin={ 20 }
              link={ "https://linkedin.com/in/jefferson-tavares" }
            />
            <ContactsButton
              name={ "GitHub" }
              withName={ false }
              nameSize={ 20 }
              size={ 50 }
              margin={ 20 }
              link={ "https://github.com/jeffersontavaresdm" }
            />
            <ContactsButton
              name={ "Whatsapp" }
              withName={ false }
              nameSize={ 20 }
              size={ 50 }
              margin={ 20 }
              link={ "https://wa.me/+5585985800297" }
            />
            <ContactsButton
              name={ "Telegram" }
              withName={ false }
              nameSize={ 20 }
              size={ 50 }
              margin={ 20 }
              link={ "https://t.me/jeffersontdm" }
            />
            <ContactsButton
              name={ "Discord" }
              withName={ false }
              nameSize={ 20 }
              size={ 50 }
              margin={ 20 }
              link={ "https://discord.com/users/jeffersontdm#1604" }
            />
            <ContactsButton
              name={ "Twitter" }
              withName={ false }
              nameSize={ 20 }
              size={ 50 }
              margin={ 20 }
              link={ "https://twitter.com/JFFTXD" }
            />
            <ContactsButton
              name={ "Instagram" }
              withName={ false }
              nameSize={ 20 }
              size={ 50 }
              margin={ 20 }
              link={ "https://www.instagram.com/jeffersontdm_" }
            />
          </div >
        </div >
      </div >
      <footer style={ { position: "fixed", fontSize: "12px", right: "24px", bottom: "24px", } } >
        <h3 style={ { fontSize: "18px", fontFamily: "Sigmar One" } } >See ya!</h3 >
      </footer >
    </>
  )
}

export default ContactsPage;