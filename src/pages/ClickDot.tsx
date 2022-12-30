import React from "react";

interface Dot {
  left: number,
  top: number
}

const ClickDot = () => {

  const [dots, setDots] = React.useState<Dot[]>([])
  const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const dot = {
      left: event.clientX,
      top: event.clientY
    }

    console.log(dot)

    setDots((dotsValue: Dot[]) => [...dotsValue, dot])
  }

  return (
    <div>
      <div style={{height: "1080px"}} onClick={(event) => clickHandler(event)}>
        {JSON.stringify(dots)}
        {
          dots.length != 0
            ? dots.map((dot, index) => {
              return <div
                key={index}
                style={{
                  backgroundColor: "white",
                  border: "2px solid black",
                  borderRadius: "100%",
                  width: "10px",
                  height: "10px",
                  position: "absolute",
                  left: dot.left,
                  top: dot.top
                }}></div>
            })
            : <></>
        }
      </div>
    </div>
  );
}

export default ClickDot;