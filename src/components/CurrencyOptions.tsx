import AssetCurrency from "../dto/AssetCurrency";
import React, {useState} from "react";
import CurrencyDropdown from "./CurrencyDropdown";
import ApiService from "../service/AssetService";
import {AxiosError, AxiosResponse} from "axios";

interface AssetCurrencyFormProps {
  resultHandle: (data: AxiosResponse<AssetCurrency, any> | AxiosError) => void
  types: string[]
}

const CurrencyOptions = (props: AssetCurrencyFormProps) => {
  let [from, setFrom] = useState<string>("")
  let [to, setTo] = useState<string>("")

  React.useEffect(() => {
    if (from && to) {
      (async () => props.resultHandle(await ApiService.convert(from, to)))()
    }
  }, [from, to])

  return (
    <div>
      <span>From:</span>
      <div style={{display: "inline-block", marginLeft: "8px"}}>
        <CurrencyDropdown types={props.types} setCode={setFrom}/>
      </div>
      <span style={{marginLeft: "24px"}}>To:</span>
      <div style={{display: "inline-block", marginLeft: "8px"}}>
        <CurrencyDropdown types={props.types} setCode={setTo}/>
      </div>
    </div>
  );
}

export default CurrencyOptions;