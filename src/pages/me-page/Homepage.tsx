import React from "react";
import ContactsPage from "./ContactsPage";
import SkillPage from "./SkillPage";
import AboutPage from "./AboutPage";

const Homepage = () => {
  const aboutRef = React.useRef<HTMLSpanElement>(null)
  const skillsRef = React.useRef<HTMLSpanElement>(null)
  const contactsRef = React.useRef<HTMLSpanElement>(null)
  const [page, setPage] = React.useState<string>("about")

  const handlePage = () => {
    switch (page) {
      case "about":
        return <AboutPage />
      case "skills":
        return <SkillPage />
      case "contacts":
        return <ContactsPage />
    }
  }

  React.useEffect(() => {
    switch (page) {
      case "about":
        aboutRef.current!!.style.textDecoration = "underline"
        skillsRef.current!!.style.textDecoration = "none"
        contactsRef.current!!.style.textDecoration = "none"
        break;
      case "skills":
        aboutRef.current!!.style.textDecoration = "none"
        skillsRef.current!!.style.textDecoration = "underline"
        contactsRef.current!!.style.textDecoration = "none"
        break;
      case "contacts":
        aboutRef.current!!.style.textDecoration = "none"
        skillsRef.current!!.style.textDecoration = "none"
        contactsRef.current!!.style.textDecoration = "underline"
        break;
    }
  }, [page])

  return (
    <div id={ "main-div" } >
      <div id={ "header-div" } >
        <div id={ "header-img_name" } onClick={ () => window.location.href = "/" } >
          <img id={ "icon-img" } src="src/img/svg/radar.svg" alt={ "img01" } />
          <span id={ "header-name" } >Jefferson Tavares</span >
        </div >
        <div id={ "header-features" } >
          <span ref={ aboutRef } id={ "header-about" } onClick={ () => setPage("about") } >
          About
        </span >
          <span ref={ skillsRef } id={ "header-skills" } onClick={ () => setPage("skills") } >
          Skills
        </span >
          <span ref={ contactsRef } id={ "header-contact" } onClick={ () => setPage("contacts") } >
          Contacts
        </span >
        </div >
      </div >
      { handlePage() }
    </div >
  );
}

export default Homepage;