import React, {useState} from "react";
import ApiService from "../service/AssetService";
import AssetTypes from "../dto/AssetTypes";
import AssetTypesTable from "../components/AssetTypesTable";
import AssetCurrencySpinner from "../components/AssetCurrencySpinner";
import AssetCurrencyForm from "../components/AssetCurrencyForm";
import AssetCurrency from "../dto/AssetCurrency";
import ResultTable from "../components/ResultTable";
import Alert from "../components/Alert";

export const CurrencyConversionPage = () => {
  const [types, setTypes] = useState<AssetTypes>()
  const [result, setResult] = useState<AssetCurrency>()

  const distinctTypes = types ? types
      .currencyTypes
      .filter((asset, i, arr) => arr.findIndex(t => t.split("/")[0] === asset.split("/")[0]) === i)
    : []

  React.useEffect(() => {
    if (!types) {
      (async () => setTypes(await ApiService.getTypes()))()
    }
  }, [types])

  return (
    <div style={{color: "white"}}>

      <div style={{
        display: "inline-block",
        marginLeft: "36px",
        fontSize: "25px",
        fontFamily: "courier,arial,helvetica",
      }}>
        <h1 style={{textAlign: "center", color: "#fca311", marginBottom: "3%", padding: "24px", paddingTop: "46px"}}>
          <em>Currency Conversion</em>
        </h1>
        <p>Application intended for a conversion between currency types for a simple and quick search.</p>
        <p>See conversion from any currency to any currency.</p>
        <p style={{marginTop: "88px", textAlign: "center"}}>
          <strong>
            <em>
              Enter the types and click the button!
            </em>
          </strong>
        </p>
        <AssetCurrencyForm setResult={setResult} types={types ? distinctTypes : []}/>
        <div style={{
          marginLeft: "20px",
          marginTop: "20px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}>
          {
            result ?
              <div style={{marginTop: "80px"}}>
                <span><strong>RESULT:</strong></span>
                <ResultTable result={result}/>
              </div>
              : <></>
          }
          {result ? <></> : <Alert/>}
        </div>
      </div>
      {types ? <AssetTypesTable types={distinctTypes}/> : <AssetCurrencySpinner/>}
    </div>
  );
}