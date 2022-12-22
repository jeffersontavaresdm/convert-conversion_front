export const FirstTestPage = () => {
  document.title = "TESTING..."

  return (
    <div style={{
      backgroundColor: "darkgray",
      width: "10%",
      border: "3px solid cyan",
      borderRadius: "100px",
      textAlign: "center",
      padding: "16px",
      top: "50%",
      left: "50%",
      position: "absolute",
      translate: "-50% -50%"
    }}>
      <h1 style={{color: "goldenrod"}}>TEST!</h1>
    </div>
  )
}