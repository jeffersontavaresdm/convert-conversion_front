import React from "react";

const HomepageArcadeButtons = () => {
  return (
    <button
      className={ "homepage-arcade-button" }
      onClick={ () => window.location.href = "/currency-conversion" }
    />
  );
}

export default HomepageArcadeButtons;