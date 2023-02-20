import React from "react";
import { css } from "aphrodite";
import contactsButtonStyles from "./contactsButtonStyles";

const imagesPath = import.meta.env.MODE === 'production'
  ? import.meta.env.VITE_IMAGES_PATH_PRD
  : import.meta.env.VITE_IMAGES_PATH_DEV

interface ContactsButtonProps {
  name: string;
  withName: boolean;
  nameSize: number
  size: number;
  margin: number;
  link: string;
}

const ContactsButton = ({ name, withName, nameSize, size, margin, link }: ContactsButtonProps) => {
  const styles = contactsButtonStyles({ size })

  return (
    <div style={ { margin: margin, display: "flex", flexDirection: "column", alignItems: "center" } } >
      <img
        className={ css(styles.button) }
        src={ `${ imagesPath }/${ name.toLowerCase() }-icon.svg` }
        alt={ `${ name }-icon` }
        onClick={ () => window.open(link, '_blank') }
        onDragStart={ event => event.preventDefault() }
      />
      {
        withName &&
        <span style={ { marginTop: 10, color: "cadetblue", fontSize: nameSize } } >
          <b >{ name }</b >
        </span >
      }
    </div >
  );
}

export default ContactsButton;