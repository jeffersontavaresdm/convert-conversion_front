import AssetCurrency from "../dto/AssetCurrency";
import React, {useState} from "react";
import AssetDropdown from "./AssetDropdown";
import ApiService from "../service/AssetService";
import {AxiosError, AxiosResponse} from "axios";

interface AssetCurrencyFormProps {
  resultHandle: (data: AxiosResponse<AssetCurrency, any> | AxiosError) => void
  types: string[]
}

const AssetOptions = (props: AssetCurrencyFormProps) => {
  let [from, setFrom] = useState<string>("")
  let [to, setTo] = useState<string>("")

  React.useEffect(() => {
    if (from && to) {
      (async () => props.resultHandle(await ApiService.convert(from, to)))()
    }
  }, [from, to])

  return (
    <div>
      <span>
        From:<AssetDropdown types={props.types} setCode={setFrom}/>
      </span>
      <span style={{marginLeft: "24px"}}>
        To:<AssetDropdown types={props.types} setCode={setTo}/>
      </span>
    </div>
  );
}

export default AssetOptions;