import React, {useState} from "react";
import ApiService from "../service/AssetService";
import CurrencyTypes from "../dto/CurrencyTypes";
import AssetCurrency from "../dto/AssetCurrency";
import ResultTable from "../components/ResultTable";
import AppAlert from "../components/AppAlert";
import CurrencyOptions from "../components/CurrencyOptions";
import {AxiosError, AxiosResponse} from "axios";
import CurrencyTypesTable from "../components/CurrencyTypesTable";
import Button from 'react-bootstrap/Button';

export const CurrencyConversionPage = () => {
  const [types, setTypes] = useState<CurrencyTypes>()
  const [result, setResult] = useState<AssetCurrency>()
  const [responseError, setResponseError] = useState<boolean>(false)
  const [seeTypes, setSeeTypes] = useState<boolean>(false)

  const distinctTypes = types
    ? types
      .currencyTypes
      .filter((asset, i, arr) => arr.findIndex(t => t.split("/")[0] === asset.split("/")[0]) === i)
      .sort()
    : []

  const resultHandle = (data: AxiosResponse<AssetCurrency, any> | AxiosError) => {
    if (data.status != 200) {
      setResponseError(true)
      setResult(undefined)
    } else {
      setResponseError(false)
      setResult((data as AxiosResponse).data)
    }
  }

  React.useEffect(() => {
    if (!types) {
      (async () => setTypes(await ApiService.getTypes()))()
    }
  }, [types])

  return (
    <div style={{textAlign: "center"}}>
      <div style={{
        display: "inline-block",
        marginLeft: "36px",
        fontSize: "25px",
        fontFamily: "courier,arial,helvetica",
      }}>
        <h1 style={{
          textAlign: "center", marginBottom: "3%", padding: "24px", paddingTop: "46px", fontWeight: "bold"
        }}>
          <em>Currency Conversion</em>
        </h1>
        <p>Application intended for a conversion between currency types for a simple and quick search.</p>
        <p>See conversion from any currency to any currency.</p>
        <p style={{marginTop: "88px", textAlign: "center"}}>
          <strong>
            <em>
              Choose the codes of the currencies you want to convert
            </em>
          </strong>
        </p>
        <div style={{marginTop: "80px", textAlign: "center"}}>
          <CurrencyOptions resultHandle={resultHandle} types={distinctTypes}/>
        </div>
        <div style={{marginTop: "80px"}}>
          <span>Click on the button to see the types of coins:</span>
          <Button
            variant="success"
            style={{marginLeft: "10px", height: "35px", fontWeight: "bold"}}
            onClick={() => setSeeTypes(!seeTypes)}
          >
            See types
          </Button>
        </div>
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
          {
            result
              ? <></>
              : <div style={{width: "1300px", marginTop: "80px"}}>
                {
                  responseError
                    ? <AppAlert
                      variant={"danger"}
                      message={"An error occurred, maybe there is no conversion between these currencies yet."}
                    />
                    : <AppAlert variant={"warning"} message={"No codes selected yet."}/>
                }
              </div>
          }
        </div>
      </div>
      {
        types && seeTypes ?
          <div style={{display: "inline-block", width: "350px", float: "right", marginRight: "5%", marginTop: "150px"}}>
            <CurrencyTypesTable types={distinctTypes}/>
          </div>
          : <></>
      }
    </div>
  )
    ;
}