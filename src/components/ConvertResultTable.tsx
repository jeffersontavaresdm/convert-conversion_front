import Table from 'react-bootstrap/Table';
import AssetCurrency from "../dto/AssetCurrency";

interface ConvertResultTableProps {
  result: AssetCurrency | undefined
}

function ConvertResultTable(props: ConvertResultTableProps) {
  return (
    <Table striped bordered hover size="sm" style={{
      textAlign: "center",
      color: "white",
      backgroundColor: "#14213d"                    ,
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
        <td style={{color: "white"}}>USD/Dólar Americano</td>
        <td style={{color: "white"}}>BRL/Real Brasileiro</td>
        <td style={{color: "white"}}>5.17</td>
        <td style={{color: "white"}}>5.17</td>
        <td style={{color: "white"}}>2022-12-23 at 00:22:11</td>

        {/*<td>{props.result.from}</td>*/}
        {/*<td>{props.result.to}</td>*/}
        {/*<td>{props.result.convertedValue}</td>*/}
        {/*<td>{props.result.saleValue}</td>*/}
        {/*<td>{props.result.lastUpdate}</td>*/}
      </tr>
      </tbody>
    </Table>
  );
}

export default ConvertResultTable;