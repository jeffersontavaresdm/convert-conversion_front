import { StyleSheet } from "aphrodite";

interface ButtonProps {
  size: number
}

const contactsButtonStyles = ({ size }: ButtonProps) => {
  return StyleSheet.create({
    button: {
      width: size,
      height: size,
      background: "cadetblue",
      border: `1px solid cadetblue`,
      borderRadius: "100px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background 0.2s ease-in-out",
      cursor: "pointer",
      ":hover": {
        background: "linear-gradient(to right, #ff0000, #ffa500, #ffff00)"
      },
      ":active": {
        transform: "translateY(2px)"
      }
    },
  })
};

export default contactsButtonStyles;