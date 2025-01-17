import Table from "react-bootstrap/Table";
import AssetCurrency from "../../dto/AssetCurrency";
import React, { useState } from "react";
import AppSpinner from "../../components/AppSpinner";
import ApiService from "../../service/AssetService";
import AppPagination from "../../components/AppPagination";
import ResponseResult from "../../dto/ResponseResult";

const ConversionsPage = () => {
  document.title = "Conversion to BRL";

  const PAGE_LIMIT = 10;

  const [result, setResult] = useState<ResponseResult>({ assets: [], entityCount: 0 })
  const [page, setPage] = useState<number>(1)

  const assetsHandler = (currencies: AssetCurrency[] | undefined) => {
    if (currencies) {
      return currencies.sort((a, b) => {
        let currencyA = a.from.split("/")[1];
        let currencyB = b.from.split("/")[1];

        return (currencyA).localeCompare(currencyB);
      });
    }

    return [];
  }

  const handlerChangePage = React.useCallback((page: number) => setPage(page), [])

  React.useEffect(() => {
    (async () => {
      let result = await ApiService.allConversions(page, PAGE_LIMIT);
      setResult({ assets: assetsHandler(result.assets), entityCount: result.entityCount });
    })()
  }, [page])

  const formatedDate = (asset: AssetCurrency) => {
    let date = asset
      .lastUpdate
      .split("T")[0]
      .replaceAll("-", "/")
      .split('/')
      .reverse()
      .join('/')

    let hours = asset.lastUpdate.split("T")[1].replace("Z", "")

    return (date).concat(" as ").concat(hours)
  }

  const fromName = (asset: AssetCurrency) => {
    return asset.from.split("/")[1]
  }

  const toName = (asset: AssetCurrency) => {
    return asset.to.split("/")[1]
  }

  return (
    !result || result.entityCount == 0
      ? <div style={ { position: "absolute", left: "50%", top: "50%", translate: "-50% -50%" } } ><AppSpinner /></div >
      : <div style={ { marginTop: "30px" } } >
        <div style={ { display: "flex", flexDirection: "column", textAlign: "center" } } >
          <h1 style={ {
            fontWeight: "bold",
            fontSize: "60px",
            color: "coral",
            fontFamily: "Times New Roman",
          } }
          >
            <span style={ { cursor: "pointer" } } onClick={ () => window.location.href = "/" } >
              Conversor de Moedas
            </span >
          </h1 >
          <h2 style={ { marginTop: "50px", color: "white", fontStyle: "italic" } } >
            Aqui, podemos ver todos os tipos de moeda convertido pelos usuários até o momento!
          </h2 >
        </div >
        <div style={ {
          width: "100%",
          height: "100%",
          marginTop: "50px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        } } >
          <div
            style={ {
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              flexDirection: "column",
            } } >
            <Table
              striped
              bordered
              hover
              variant={ "dark" }
              size="sm"
              style={ { border: "2px solid darkcyan", textAlign: "center" } } >
              <thead >
              <tr >
                <th style={ { padding: "16px" } } >#</th >
                <th style={ { padding: "16px" } } >De</th >
                <th style={ { padding: "16px" } } >Para</th >
                <th style={ { padding: "16px" } } >Valor Convertido</th >
                <th style={ { padding: "16px" } } >Valor de venda</th >
                <th style={ { padding: "16px" } } >Ultima atualização</th >
              </tr >
              </thead >
              <tbody >
              {
                result && result.entityCount >= 1
                  ? assetsHandler(result.assets).map((asset, index) => {
                    return <tr key={ index } >
                      <td style={ { padding: "16px" } } >{ (page - 1) * 10 + (index + 1) }</td >
                      <td style={ { padding: "16px" } } >{ fromName(asset) }</td >
                      <td style={ { padding: "16px" } } >{ toName(asset) }</td >
                      <td style={ { padding: "16px" } } >{ asset.convertedValue }</td >
                      <td style={ { padding: "16px" } } >{ asset.saleValue }</td >
                      <td style={ { padding: "16px" } } >{ formatedDate(asset) }</td >
                    </tr >
                  })
                  : <></>
              }
              </tbody >
            </Table >
            <div style={ { display: "flex", justifyContent: "end" } } >
              <AppPagination
                total={ result.entityCount > PAGE_LIMIT ? Math.round(result.entityCount / PAGE_LIMIT) : 1 }
                current={ page }
                onChangePage={ handlerChangePage }
                page={ page }
              />
            </div >
          </div >
        </div >
      </div >
  );
}

export default ConversionsPage;