import Table from 'react-bootstrap/Table';
import AssetCurrency from "../dto/AssetCurrency";

interface ConvertResultTableProps {
  result: AssetCurrency
}

function ResultTable(props: ConvertResultTableProps) {
  const formatedDate = () => {
    let date = props.result.lastUpdate.split("T")[0].replaceAll("-", "/")
    let hours = props.result.lastUpdate.split("T")[1].replace("Z", "")
    return (date).concat(" at ").concat(hours)
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
      style={{border: "2px solid darkcyan"}}
    >
      <thead>
      <tr>
        <th style={{padding: "16px"}}>From</th>
        <th style={{padding: "16px"}}>To</th>
        <th style={{padding: "16px"}}>Converted Value</th>
        <th style={{padding: "16px"}}>Sale Value</th>
        <th style={{padding: "16px"}}>Last Update</th>
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