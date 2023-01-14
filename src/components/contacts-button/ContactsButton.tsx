import React from "react";
import { css } from "aphrodite";
import contactsButtonStyles from "./contactsButtonStyles";

interface ContactsButtonProps {
  name: string;
  withName: boolean;
  nameSize: number
  size: number;
  margin: number;
  link: string;
}

const ContactsButton = ({ name, withName, nameSize, size, margin, link }: ContactsButtonProps) => {
  return (
    <div style={ { margin: margin, display: "flex", flexDirection: "column", alignItems: "center" } } >
      <img
        className={ css(contactsButtonStyles({ size }).button) }
        src={ `src/img/svg/${ name.toLowerCase() }-icon.svg` }
        alt={ `${ name }-icon` }
        onClick={ () => window.open(link, '_blank') }
        onDragStart={ event => event.preventDefault() }
      />
      {
        withName &&
        <span style={ { marginTop: 10, color: "cadetblue", fontSize: nameSize } } >
          <i ><b >{ name }</b ></i >
        </span >
      }
    </div >
  );
}

export default ContactsButton;