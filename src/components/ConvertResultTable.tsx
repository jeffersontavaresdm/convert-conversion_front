import Table from 'react-bootstrap/Table';
import AssetCurrency from "../dto/AssetCurrency";

interface ConvertResultTableProps {
  result: AssetCurrency
}

function ConvertResultTable(props: ConvertResultTableProps) {
  const formatedDate = props
    .result
    .lastUpdate
    .replace("T", " ")
    .replace("Z", " ")
    .replaceAll("-", "/")

  const fromName = props
    .result
    .from
    .split("/")[1]

  const toName = props
    .result
    .to
    .split("/")[1]

  return (
    <Table striped bordered hover size="sm" style={{
      textAlign: "center",
      color: "white",
      backgroundColor: "#14213d",
      marginTop: "10px"
    }}>
      <thead>
      <tr>
        <th>From</th>
        <th>To</th>
        <th>Converted Value</th>
        <th>Sale Value</th>
        <th>Last Update</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{fromName}</td>
        <td>{toName}</td>
        <td>{props.result.convertedValue}</td>
        <td>{props.result.saleValue}</td>
        <td>{formatedDate}</td>
      </tr>
      </tbody>
    </Table>
  );
}

export default ConvertResultTable;