export const FistPage = () => {
  document.title = "TESTING..."

  return (
    <button
      style={{
        backgroundColor: "black",
        width: "35%",
        height: "65%",
        border: "3px solid cyan",
        borderRadius: "100%",
        textAlign: "center",
        padding: "36px",
        position: "absolute",
        top: "50%",
        left: "50%",
        translate: "-50% -50%"
      }}
      onClick={() => window.location.href = "/"}
    >
      <h1 style={{color: "goldenrod"}}>Click to go to first useful page</h1>
    </button>
  )
}