export const FistPage = () => {
  document.title = "TESTING..."

  return (
    <button
      style={{
        backgroundColor: "black",
        width: "20%",
        height: "20%",
        border: "3px solid cyan",
        borderRadius: "100px",
        textAlign: "center",
        padding: "16px",
        position: "absolute",
        top: "50%",
        left: "50%",
        translate: "-50% -50%"
      }}
      onClick={() => window.location.href = "/"}
    >
      <h1 style={{color: "goldenrod"}}>TEST!</h1>
    </button>
  )
}