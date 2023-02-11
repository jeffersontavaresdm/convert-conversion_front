import { StyleSheet } from "aphrodite";

interface ButtonProps {
  size: number
}

interface ContactButtonStyle {
  button: {}
}

const contactsButtonStyles = ({ size }: ButtonProps) => {
  return StyleSheet.create<ContactButtonStyle>({
    button: {
      width: size,
      height: size,
      background: "lightblue",
      border: `1px solid cadetblue`,
      borderRadius: "100px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background 0.2s ease-in-out",
      cursor: "pointer",
      ":hover": {
        background: "linear-gradient(to top, coral, blue)"
      },
      ":active": {
        transform: "translateY(2px)"
      }
    },
  })
};

export default contactsButtonStyles;