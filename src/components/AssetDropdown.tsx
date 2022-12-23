import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React from "react";

interface AssetDropdownProps {
  types: string[]
  setCode: (code: string) => void
}

function AssetDropdown(props: AssetDropdownProps) {
  let codes = props.types.map(asset => asset.split("/")[0]);

  const handleSelect = (event: any) => {
    props.setCode(event)
  }

  return (
    <DropdownButton
      id="dropdown-item-button"
      title="Codes"
      style={{display: "inline-block", marginLeft: "8px"}}
      onSelect={handleSelect}
    >
      {
        codes.map(code =>
          <Dropdown.Item as="button" eventKey={code} key={code} style={{textAlign: "center"}}>
            {code}
          </Dropdown.Item>)
      }
    </DropdownButton>
  );
}

export default AssetDropdown;