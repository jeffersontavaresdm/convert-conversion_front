import React, {Dispatch, SetStateAction} from "react";
import ToggleButton from 'react-bootstrap/ToggleButton';
import {ToggleButtonGroup} from "react-bootstrap";

interface ArcaneButtonProps {
  handleSetSeeTypes: Dispatch<SetStateAction<boolean>>
  seeTypes: boolean
  buttonName: string
}

const ViewTypesButton = (props: ArcaneButtonProps) => {
  return (
    <ToggleButtonGroup type="checkbox">
      <ToggleButton
        id="toggle-button-01"
        value={1}
        onClick={() => props.handleSetSeeTypes(!props.seeTypes)}
        style={{
          borderColor: "cyan",
          paddingLeft: "10px",
          paddingRight: "10px",
          fontWeight: "bold"
        }}>
        Moedas
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ViewTypesButton;