import React, {useState} from "react";
import AboutPage from "./AboutPage";
import SkillPage from "./SkillPage";
import ContactsPage from "./ContactsPage";

const MePage = () => {
  const [about, setAbout] = useState<boolean>(true)
  const [skills, setSkills] = useState<boolean>(false)
  const [contacts, setContacts] = useState<boolean>(false)

  const clearDecorators = () => {
    let elements = document.getElementsByClassName("header-element")

    for (let element of elements) {
      (element as HTMLElement).style.textDecoration = "none"
    }
  }

  React.useEffect(() => {
    if (about) {
      clearDecorators()
      document.getElementById("header-about")!.style.textDecoration = "underline";
      setAbout(true)
      setSkills(false)
      setContacts(false)
    }
  }, [about])

  React.useEffect(() => {
    if (skills) {
      clearDecorators()
      document.getElementById("header-skills")!.style.textDecoration = "underline";
      setAbout(false)
      setSkills(true)
      setContacts(false)
    }
  }, [skills])

  React.useEffect(() => {
    if (contacts) {
      clearDecorators()
      document.getElementById("header-contact")!.style.textDecoration = "underline";
      setAbout(false)
      setSkills(false)
      setContacts(true)
    }
  }, [contacts])

  return (
    <div id={"main-div"}>
      <div id={"header-div"}>
        <div id={"header-img_name"} onClick={() => window.location.href = "/"}>
          <img id={"icon-img"} src="src/img/svg/radar.svg" alt={"img01"}/>
          <span id={"header-name"}>Jefferson Tavares</span>
        </div>
        <div id={"header-features"}>
          <span className={"header-element"} id={"header-about"} onClick={() => setAbout(true)}>
          About
        </span>
          <span className={"header-element"} id={"header-skills"} onClick={() => setSkills(true)}>
          Skills
        </span>
          <span className={"header-element"} id={"header-contact"} onClick={() => setContacts(true)}>
          Contacts
        </span>
        </div>
      </div>
      {
        about ? <AboutPage/> : (skills ? <SkillPage/> : (contacts ? <ContactsPage/> : <></>))
      }
    </div>
  );
}

export default MePage;