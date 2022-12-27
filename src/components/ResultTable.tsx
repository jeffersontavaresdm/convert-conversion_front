import Table from 'react-bootstrap/Table';
import AssetCurrency from "../dto/AssetCurrency";

interface ConvertResultTableProps {
  result: AssetCurrency
}

function ResultTable(props: ConvertResultTableProps) {
  const formatedDate = () => {
    let date = props.result.lastUpdate.split("T")[0].replaceAll("-", "/").split('/').reverse().join('/')
    let hours = props.result.lastUpdate.split("T")[1].replace("Z", "")
    return (date).concat(" as ").concat(hours)
  }

  const fromName = props
    .result
    .from
    .split("/")[1]

  const toName = props
    .result
    .to
    .split("/")[1]

  return (
    <Table
      striped
      bordered
      hover
      variant={"dark"}
      size="sm"
      style={{border: "2px solid darkcyan", width: "100%"}}
    >
      <thead>
      <tr>
        <th style={{padding: "16px"}}>De</th>
        <th style={{padding: "16px"}}>Para</th>
        <th style={{padding: "16px"}}>Valor Convertido</th>
        <th style={{padding: "16px"}}>Valor de venda</th>
        <th style={{padding: "16px"}}>Ultima atualização</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td style={{padding: "16px"}}>{fromName}</td>
        <td style={{padding: "16px"}}>{toName}</td>
        <td style={{padding: "16px"}}>{props.result.convertedValue}</td>
        <td style={{padding: "16px"}}>{props.result.saleValue}</td>
        <td style={{padding: "16px"}}>{formatedDate()}</td>
      </tr>
      </tbody>
    </Table>
  );
}

export default ResultTable;