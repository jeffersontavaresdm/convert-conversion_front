import { StyleSheet } from "aphrodite";

interface ButtonProps {
  size: number
}

const contactsButtonStyles = ({ size }: ButtonProps) => {
  return StyleSheet.create({
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
        // background: "linear-gradient(to top, #ff0000, #ffa500, #ffff00)"
        background: "linear-gradient(to top, coral, blue)"
      },
      ":active": {
        transform: "translateY(2px)"
      }
    },
  })
};

export default contactsButtonStyles;