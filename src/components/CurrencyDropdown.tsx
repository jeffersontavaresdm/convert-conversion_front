import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { FunctionComponent, useState } from "react";

interface AssetDropdownProps {
  types: string[]
  setCode: (code: string) => void
}

const CurrencyDropdown: FunctionComponent<AssetDropdownProps> = ({ types, setCode }) => {
  const [title, setTitle] = useState<string>("Codigo")
  let codes = types.map(asset => asset.split("/")[0]);

  const handleSelect = (event: any) => {
    setCode(event)
  }

  return (
    <DropdownButton
      id="dropdown-item-button"
      title={ title }
      onSelect={ handleSelect }
      style={ { border: "1px solid cyan", borderRadius: "6px" } }
    >
      {
        codes.map(code => {
          return <Dropdown.Item
            as="button"
            eventKey={ code }
            key={ code }
            style={ { textAlign: "center" } }
            onClick={ () => setTitle(code) }
          >
            { code }
          </Dropdown.Item >
        })
      }
    </DropdownButton >
  );
}

export default CurrencyDropdown;