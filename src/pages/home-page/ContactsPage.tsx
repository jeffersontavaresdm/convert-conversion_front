import React from "react";
import ContactsButton from "../../components/contacts-button/ContactsButton";

const ContactsPage = () => {
  document.title = "Contatos"

  return (
    <>
      <h1 style={ { textAlign: "center", marginTop: "60px", fontSize: "60px", fontFamily: "Sigmar One" } } >
        Contatos
      </h1 >
      <hr style={ { color: "white", marginTop: "60px" } } />
      <div style={ { display: "flex", justifyContent: "center", alignItems: "center" } } >
        <div style={ { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" } } >
          <h3 style={ { color: "white", marginTop: "60px", fontFamily: "Chivo Mono" } } >
            <b>Para entrar em contato comigo ou apenas para ver um pouco mais sobre mim, vá até:</b>
          </h3 >
          <div style={ { display: "flex", flexDirection: "row", marginTop: "60px" } } >
            <ContactsButton
              name={ "Linkedin" }
              withName={ true }
              nameSize={ 20 }
              size={ 50 }
              margin={ 20 }
              link={ "https://linkedin.com/in/jefferson-tavares" }
            />
            <ContactsButton
              name={ "GitHub" }
              withName={ true }
              nameSize={ 20 }
              size={ 50 }
              margin={ 20 }
              link={ "https://github.com/jeffersontavaresdm" }
            />
            <ContactsButton
              name={ "Whatsapp" }
              withName={ true }
              nameSize={ 20 }
              size={ 50 }
              margin={ 20 }
              link={ "https://wa.me/+5585985800297" }
            />
            <ContactsButton
              name={ "Telegram" }
              withName={ true }
              nameSize={ 20 }
              size={ 50 }
              margin={ 20 }
              link={ "https://t.me/jeffersontdm" }
            />
            <ContactsButton
              name={ "Discord" }
              withName={ true }
              nameSize={ 20 }
              size={ 50 }
              margin={ 20 }
              link={ "https://discord.com/users/jeffersontdm#1604" }
            />
            <ContactsButton
              name={ "Twitter" }
              withName={ true }
              nameSize={ 20 }
              size={ 50 }
              margin={ 20 }
              link={ "https://twitter.com/JFFTXD" }
            />
            <ContactsButton
              name={ "Instagram" }
              withName={ true }
              nameSize={ 20 }
              size={ 50 }
              margin={ 20 }
              link={ "https://www.instagram.com/jeffersontdm_" }
            />
          </div >
        </div >
      </div >
      <hr style={ { color: "white", marginTop: "60px" } } />
      <footer style={ { textAlign: "center", marginTop: "60px" } } >
        <h4 style={ { fontFamily: "Sigmar One", color: "lightblue" } } >
          See ya!
        </h4 >
      </footer >
    </>
  )
}

export default ContactsPage;