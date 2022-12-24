import Table from "react-bootstrap/Table";
import AppSpinner from "./AppSpinner";

interface CurrencyTypesTableProps {
  types: string[];
}

const CurrencyTypesTable = (props: CurrencyTypesTableProps) => {
  return props.types ?
    <Table
      striped
      bordered
      hover
      variant="dark"
      style={{border: "2px solid darkcyan"}}
    >
      <thead>
      <tr>
        <th>Currency Code</th>
        <th>Currency Name</th>
      </tr>
      </thead>
      <tbody>
      {
        props.types.map(asset => {
          return (
            <tr key={asset}>
              <td>{asset.split("/")[0]}</td>
              <td>{asset.split("/")[1]}</td>
            </tr>
          )
        })
      }
      </tbody>
    </Table>
    : <AppSpinner/>
}

export default CurrencyTypesTable;