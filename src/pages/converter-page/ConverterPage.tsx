import React, {useState} from "react";
import ApiService from "../../service/AssetService";
import CurrencyTypes from "../../dto/CurrencyTypes";
import AssetCurrency from "../../dto/AssetCurrency";
import ResultTable from "../../components/ResultTable";
import AppAlert from "../../components/AppAlert";
import CurrencyOptions from "../../components/CurrencyOptions";
import {AxiosError, AxiosResponse} from "axios";
import CurrencyTypesTable from "../../components/CurrencyTypesTable";
import ViewTypesButton from "../../components/ViewTypesButton";
import AppSpinner from "../../components/AppSpinner";

export const ConverterPage = () => {
  document.title = "Converter";

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
      (async () => setTypes(await ApiService.getTypes()))()
      setInterval(() => (async () => setTypes(await ApiService.getTypes()))(), 60_000)
  }, [])

  React.useEffect(() => {
    if (seeTypes) {
      setTimeout(() => (async () => setTypes(await ApiService.getTypes()))(), 0)
    }
  }, [seeTypes])

  return (
    !types
      ? <div style={{position: "absolute", left: "50%", top: "50%", translate: "-50% -50%"}}><AppSpinner/></div>
      : <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "center"}}>
        <div style={{
          display: "inline-block",
          color: "white",
          fontSize: "25px",
        }}>
          <h1 style={{
            margin: "50px",
            fontWeight: "bold",
            fontSize: "70px",
            textAlign: "center",
            color: "coral",
            fontFamily: "Times New Roman"
          }}>
            Conversor de Moedas
          </h1>
          <p style={{display: "flex", justifyContent: "center", fontFamily: "Times New Roman"}}>
            <strong>
              <span style={{fontSize: "35px"}}>Escolha os codigos das moedas que deseja ver a conversão.</span>
              <br/><br/>
              <em>
                PS: Algumas combinações de moedas pode não ter conversão ainda.
                <br/>
                Exemplo: Não há conversão de BRL (Real Brasileiro) para BTC (Bitcoin)
              </em>
            </strong>
          </p>
          <div style={{marginTop: "35px", textAlign: "center"}}>
            <CurrencyOptions resultHandle={resultHandle} types={distinctTypes}/>
          </div>
          <div style={{
            marginTop: "80px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <span>Clique no botão para ver os tipos de moeda:</span>
            <div style={{marginLeft: "8px"}}>
              <ViewTypesButton handleSetSeeTypes={setSeeTypes} seeTypes={seeTypes}/>
            </div>
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
                <div style={{marginTop: "80px", width: "100%"}}>
                  <span><strong>Resultado:</strong></span>
                  <ResultTable result={result}/>
                </div>
                : <div style={{width: "1000px", marginTop: "80px"}}>
                  {
                    responseError
                      ? <AppAlert
                        variant={"danger"}
                        message={"Ocorreu um erro, talvez ainda não haja conversão entre essas moedas."}
                      />
                      : <AppAlert variant={"info"} message={"Os codigos ainda não foram selecionados"}/>
                  }
                </div>
            }
          </div>
        </div>
        {
          types && seeTypes ?
            <div style={{width: "350px", marginTop: "3%", marginLeft: "70px"}}>
              <CurrencyTypesTable types={distinctTypes}/>
            </div>
            : <></>
        }
      </div>
  );
}