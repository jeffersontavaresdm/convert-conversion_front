import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, {useState} from "react";

interface AssetDropdownProps {
  types: string[]
  setCode: (code: string) => void
}

function CurrencyDropdown(props: AssetDropdownProps) {
  const [title, setTitle] = useState<string>("Codes")
  let codes = props.types.map(asset => asset.split("/")[0]);

  const handleSelect = (event: any) => {
    props.setCode(event)
  }

  return (
    <DropdownButton
      id="dropdown-item-button"
      title={title}
      onSelect={handleSelect}
    >
      {
        codes.map(code => {
          return <Dropdown.Item
            as="button"
            eventKey={code}
            key={code}
            style={{textAlign: "center"}}
            onClick={() => setTitle(code)}
          >
            {code}
          </Dropdown.Item>
        })
      }
    </DropdownButton>
  );
}

export default CurrencyDropdown;