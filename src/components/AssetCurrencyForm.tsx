import AssetCurrency from "../dto/AssetCurrency";
import React, {useState} from "react";
import AssetDropdown from "./AssetDropdown";
import ApiService from "../service/AssetService";

interface AssetCurrencyFormProps {
  setResult: (result: AssetCurrency) => void
  types: string[]
}

const AssetCurrencyForm = (props: AssetCurrencyFormProps) => {
  let [from, setFrom] = useState<string>("")
  let [to, setTo] = useState<string>("")

  React.useEffect(() => {
    if ((from && to) && from != to) {
      (async () => props.setResult(await ApiService.convert(from, to)))()

      setFrom("")
      setTo("")
    }
  }, [from, to])

  return (
    <div style={{marginTop: "20px", textAlign: "center"}}>
      <span>
        From:<AssetDropdown types={props.types} setCode={setFrom}/>
      </span>
      <span style={{marginLeft: "24px"}}>
        To:<AssetDropdown types={props.types} setCode={setTo}/>
      </span>
    </div>
  );
}

export default AssetCurrencyForm;