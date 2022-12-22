import React, {useState} from "react";
import ApiService from "../service/AssetService";
import {AssetTypes} from "../dto/AssetTypes";
import {v4 as uuidv4} from 'uuid';

export const CurrencyTypesPage = () => {
  const [types, setTypes] = useState<AssetTypes>()

  return (
    <div style={{
      backgroundColor: "black",
      width: "auto",
      height: "auto",
      textAlign: "center",
      position: "absolute",
      top: "50%",
      left: "50%",
      translate: "-50% -50%"
    }}>
      {
        types ?
          <div style={{textAlign: "start", margin: "8px"}}>
            <ul>
              {types.currencyTypes.map(asset => <li key={uuidv4()}>{asset}</li>)}
            </ul>
          </div>
          : <></>
      }
      <button style={{
        margin: "8px",
        fontWeight: "bold",
        fontSize: "30px",
        color: "darkgoldenrod",
        backgroundColor: "black",
        width: "200px",
        height: "100px",
        border: "3px solid cyan",
        borderRadius: "30px",
        textAlign: "center"
      }} onClick={() => (async () => setTypes(await ApiService.getTypes()))()}
      >
        Button
      </button>
    </div>
  );
}