import Table from "react-bootstrap/Table";
import AssetCurrency from "../../dto/AssetCurrency";
import React, {useState} from "react";
import ApiService from "../../service/AssetService";
import AppSpinner from "../../components/AppSpinner";

const ConversionsToBRLPage = () => {
  document.title = "Conversion to BRL";

  const [assets, setAssets] = useState<AssetCurrency[]>([])

  let count = 0;

  React.useEffect(() => {
    if (assets.length == 0) {
      (async () => setAssets(await ApiService.getAll()))()
      setInterval(() => (async () => setAssets(await ApiService.getAll()))(), 60_000)
    }
  }, [assets])

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
    assets.length == 0
      ? <div style={{position: "absolute", left: "50%", top: "50%", translate: "-50% -50%"}}><AppSpinner/></div>
      : <div>
        <div style={{padding: "8px", textAlign: "center",}}>
          <h1 style={{
            fontWeight: "bold",
            fontSize: "60px",
            color: "coral",
            fontFamily: "Times New Roman"
          }}>
            Conversor de Moedas
          </h1>
          <h2 style={{marginTop: "8px", color: "white", fontStyle: "italic"}}>
            Todos os tipos de moeda convertido para BRL!
          </h2>
        </div>
        <Table
          striped
          bordered
          hover
          variant={"dark"}
          size="sm"
          style={{
            border: "2px solid darkcyan",
            width: "80%",
            textAlign: "center",
            marginLeft: "10%"
          }}
        >
          <thead>
          <tr>
            <th style={{padding: "16px"}}>#</th>
            <th style={{padding: "16px"}}>De</th>
            <th style={{padding: "16px"}}>Para</th>
            <th style={{padding: "16px"}}>Valor Convertido</th>
            <th style={{padding: "16px"}}>Valor de venda</th>
            <th style={{padding: "16px"}}>Ultima atualização</th>
          </tr>
          </thead>
          <tbody>
          {
            assets
              .filter(asset => asset.to.split("/")[0] == "BRL")
              .sort()
              .map(asset => {
                  count = count + 1;

                  return <tr>
                    <td style={{padding: "16px"}}>{count}</td>
                    <td style={{padding: "16px"}}>{fromName(asset)}</td>
                    <td style={{padding: "16px"}}>{toName(asset)}</td>
                    <td style={{padding: "16px"}}>{asset.convertedValue}</td>
                    <td style={{padding: "16px"}}>{asset.saleValue}</td>
                    <td style={{padding: "16px"}}>{formatedDate(asset)}</td>
                  </tr>
                }
              )
          }
          </tbody>
        </Table>
      </div>
  );
}

export default ConversionsToBRLPage;