import React from "react";
import Button from "react-bootstrap/Button";

const imagesPath = import.meta.env.MODE === 'production'
  ? import.meta.env.VITE_IMAGES_PATH_PRD
  : import.meta.env.VITE_IMAGES_PATH_DEV

interface Dot {
  left: number,
  top: number
}

const ClickDot = () => {
  document.body.style.backgroundColor = "#222"

  const [dots, setDots] = React.useState<Dot[]>([])
  const [undid, setUndid] = React.useState<Dot[]>([])
  const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const dot = {
      left: event.clientX,
      top: event.clientY
    }

    console.log(dot)

    setDots((dots: Dot[]) => [...dots, dot])
  }

  const undoHandler = () => {
    if (dots.length === 0) {
      return;
    } else {
      let lastDot = dots[dots.length - 1]

      setUndid((prevState) => [...prevState, lastDot])

      setDots((prevState) => [...prevState].slice(0, -1))
    }
  }
  const undidHandler = () => {
    if (undid.length === 0) {
      return;
    } else {
      let recoveredDot = undid[undid.length - 1]

      setUndid((prevState) => [...prevState].slice(0, -1))

      setDots((prevState) => [...prevState, recoveredDot])
    }
  }

  const clearHandle = () => {
    for (let i = 0; i < dots.length; i++) {
      let dot = dots[i]
      setUndid((prevState) => [...prevState, dot])
    }

    setDots([])
  }

  return (
    <div style={ { height: "900px", width: "85%" } } >
      <div onClick={ clickHandler } style={ { margin: "4px", display: "inline-block" } } >
        <img
          src={ `${ imagesPath }/map.jpg` }
          alt="map-img"
          style={ { width: "100%", opacity: "0.8" } }
          onDragStart={ event => event.preventDefault() } />
        {
          dots.length != 0
            ? dots.map((dot, index) => {
              return <div
                key={ index }
                style={ {
                  backgroundColor: "goldenrod",
                  border: "2px solid black",
                  borderRadius: "100%",
                  width: "10px",
                  height: "10px",
                  position: "absolute",
                  left: dot.left,
                  top: dot.top
                } } ></div >
            })
            : <></>
        }
      </div >
      <div style={ {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        left: "89%",
        top: "16%"
      } } >
        <Button
          as="input"
          type="button"
          value={ "Desfazer" }
          style={ {
            color: "gold",
            borderColor: "cyan",
            borderRadius: "100%",
            fontWeight: "bold",
            fontSize: "20px",
            width: "120px",
            height: "120px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          } }
          onClick={ undoHandler }
        />
        <Button
          as="input"
          type="button"
          value={ "Refazer" }
          style={ {
            color: "gold",
            marginTop: "200px",
            borderColor: "cyan",
            borderRadius: "100%",
            fontWeight: "bold",
            fontSize: "20px",
            width: "120px",
            height: "120px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          } }
          onClick={ undidHandler }
        />
        <Button
          as="input"
          type="button"
          value={ "Limpar" }
          style={ {
            color: "gold",
            marginTop: "200px",
            borderColor: "cyan",
            borderRadius: "100%",
            fontWeight: "bold",
            fontSize: "20px",
            width: "120px",
            height: "120px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          } }
          onClick={ clearHandle }
        />
      </div >
    </div >
  );
}

export default ClickDot;