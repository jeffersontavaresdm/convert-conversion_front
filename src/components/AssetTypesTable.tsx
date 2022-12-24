import Table from "react-bootstrap/Table";
import AppSpinner from "./AppSpinner";

interface AssetTypesTableProps {
  types: string[];
}

const AssetTypesTable = (props: AssetTypesTableProps) => {
  return props.types ?
    <Table
      striped
      bordered
      hover
      variant="dark"
      style={{
        width: "400px",
        display: "inline-block",
        float: "right",
        marginRight: "5%",
        marginTop: "100px",
        borderColor: "darkcyan"
      }}>
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

export default AssetTypesTable;