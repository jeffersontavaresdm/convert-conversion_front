import React from "react";
import Button from "react-bootstrap/Button";

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
    <div style={{display: "flex", justifyContent: "start"}}>
      <div onClick={clickHandler} style={{margin: "8px", display: "inline-block"}}>
        <img src="src/img/map.jpg" alt="" style={{width: "100%"}}/>
        {
          dots.length != 0
            ? dots.map((dot, index) => {
              return <div
                key={index}
                style={{
                  backgroundColor: "goldenrod",
                  border: "2px solid black",
                  borderRadius: "100%",
                  width: "8px",
                  height: "8px",
                  position: "absolute",
                  left: dot.left,
                  top: dot.top
                }}></div>
            })
            : <></>
        }
      </div>
      <div style={{width: "200px", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Button
          as="input"
          type="button"
          value={"Desfazer"}
          style={{
            color: "gold",
            marginTop: "200px",
            borderColor: "cyan",
            borderRadius: "100%",
            fontWeight: "bold",
            fontSize: "20px",
            width: "100px",
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={undoHandler}
        />
        <Button
          as="input"
          type="button"
          value={"Refazer"}
          style={{
            color: "gold",
            marginTop: "200px",
            borderColor: "cyan",
            borderRadius: "100%",
            fontWeight: "bold",
            fontSize: "20px",
            width: "100px",
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={undidHandler}
        />
        <Button
          as="input"
          type="button"
          value={"Limpar"}
          style={{
            color: "gold",
            marginTop: "200px",
            borderColor: "cyan",
            borderRadius: "100%",
            fontWeight: "bold",
            fontSize: "20px",
            width: "100px",
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={clearHandle}
        />
      </div>
      {/*<div*/}
      {/*  style={{*/}
      {/*    position: "absolute",*/}
      {/*    top: "10px",*/}
      {/*    left: "87%",*/}
      {/*  }}>*/}
      {/*  <h1*/}
      {/*    style={{textAlign: "center", color: "goldenrod", fontFamily: "Source Code Pro, monospace", fontSize: "30px"}}>*/}
      {/*    <strong>Coordenadas</strong>*/}
      {/*  </h1>*/}
      {/*  <Table*/}
      {/*    striped*/}
      {/*    bordered*/}
      {/*    hover*/}
      {/*    variant="dark"*/}
      {/*    style={{border: "2px solid darkcyan", textAlign: "center"}}*/}
      {/*  >*/}
      {/*    <thead>*/}
      {/*    <tr>*/}
      {/*      <th>X</th>*/}
      {/*      <th>Y</th>*/}
      {/*    </tr>*/}
      {/*    </thead>*/}
      {/*    <tbody>*/}
      {/*    {*/}
      {/*      dots.map((dot, index) => {*/}
      {/*        return (*/}
      {/*          <tr key={index}>*/}
      {/*            <td>{dot.left}</td>*/}
      {/*            <td>{dot.top}</td>*/}
      {/*          </tr>*/}
      {/*        )*/}
      {/*      })*/}
      {/*    }*/}
      {/*    </tbody>*/}
      {/*  </Table>*/}
      {/*</div>*/}
    </div>
  );
}

export default ClickDot;