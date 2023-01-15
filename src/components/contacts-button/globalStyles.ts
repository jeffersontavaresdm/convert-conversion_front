import { StyleSheet } from "aphrodite";

const globalStyles = StyleSheet.create({
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
  extraMarginTop: {
    marginTop: "50px"
  },
  spanStylish: {
    color: "#fafafa",
    fontSize: 20,
    marginBottom: 30,
    fontFamily: "Chivo Mono"
  }
});

export default globalStyles