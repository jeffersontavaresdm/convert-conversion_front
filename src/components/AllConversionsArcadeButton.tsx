import React from "react";

interface AllConversionsArcadeButtonProps {
  buttonClicked: boolean
  setButtonClicked: (buttonClicked: boolean) => void
}

const AllConversionsArcadeButton = (props: AllConversionsArcadeButtonProps) => {
  return (
    <button
      className={"brl-arcade-button"}
      onClick={() => props.setButtonClicked(!props.buttonClicked)}
    />
  );
}

export default AllConversionsArcadeButton;