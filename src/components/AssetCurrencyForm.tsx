import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AssetCurrency from "../dto/AssetCurrency";
import {ApiService} from "../service/AssetService";
import {useState} from "react";

interface AssetCurrencyFormProps {
  setResult: (result: AssetCurrency) => void
}

const AssetCurrencyForm = (props: AssetCurrencyFormProps) => {
  let [input, setInput] = useState<string>("")

  const inputHandler = () => {
    if (input && input) {

    }
  }

  return (
    <Form style={{marginTop: "20px", textAlign: "center"}}>
      <div style={{display: "inline-block"}}>
        <Form.Group className="mb-1" controlId="formBasicPassword">
          <Form.Label>From:</Form.Label>
          <Form.Control
            style={{
              display: "inline-block",
              width: "150px",
              height: "30px",
              paddingTop: "12px",
              marginLeft: "10px",
              textAlign: "center",
            }}
            placeholder="Example: USD"
            onKeyUp={(event) => {
              if (event.code == "Enter") {
                setInput((event.target as HTMLInputElement).value)
                console.log(input)
              }
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword" style={{display: "inline-block"}}>
          <Form.Label>To:</Form.Label>
          <Form.Control
            style={{
              display: "inline-block",
              width: "150px",
              height: "30px",
              paddingTop: "12px",
              marginLeft: "40px",
              textAlign: "center",
            }}
            placeholder="Example: BRL"
            onKeyUp={(event) => {
              if (event.code == "Enter") {
                setInput((event.target as HTMLInputElement).value)
                console.log(input)
              }
            }}
          />
        </Form.Group>
      </div>
      <div style={{display: "inline-block", width: "150px"}}>
        <Button variant="primary" type="submit" style={{
          marginLeft: "20px",
          marginBottom: "50px",
          width: "100px",
          height: "80px"
        }}>
          <em><strong style={{fontSize: "18px"}}>Convert</strong></em>
        </Button>
      </div>
    </Form>
  );
}

export default AssetCurrencyForm;