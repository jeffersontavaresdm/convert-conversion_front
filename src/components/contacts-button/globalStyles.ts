import { StyleSheet } from "aphrodite";

interface GlobalStyles {
  container: {}
  background: {}
  spanStylish: {}
}

const globalStyles = () => {
  return StyleSheet.create<GlobalStyles>({
    container: {
      color: "#B2ACA2",
      textAlign: "start",
      fontStyle: "normal",
      fontSize: "18px",
      fontFamily: '"Chivo Mono", monospace'
    },
    background: {
      width: "100%",
      background: `linear-gradient(to right, rgba(50, 100, 100, 0.1), rgba(173, 216, 230, 0))`,
      padding: "10px",
      marginTop: "40px",
      display: "flex",
      justifyContent: "center"
    },
    spanStylish: {
      color: "#fafafa",
      fontSize: 20,
      marginBottom: 30,
      fontFamily: "Chivo Mono"
    }
  });
}

export default globalStyles