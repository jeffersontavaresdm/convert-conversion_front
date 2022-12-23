import Table from 'react-bootstrap/Table';
import AssetTypes from "../dto/AssetTypes";

interface AssetTypesTableProps {
  types: AssetTypes;
}

const AssetTypesTable = (props: AssetTypesTableProps) => {
  let count = 0;

  const distinctAssets = props
    .types
    .currencyTypes
    .filter((asset, i, arr) => arr.findIndex(t => t.split("/")[0] === asset.split("/")[0]) === i)

  return (
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
        borderColor: "darkcyan"
      }}>
      <thead>
      <tr>
        <th>#</th>
        <th>Currency Code</th>
        <th>Currency Name</th>
      </tr>
      </thead>
      <tbody>
      {
        distinctAssets.map(asset => {
          count = count + 1;
          return (
            <tr key={count}>
              <td>{count}</td>
              <td>{asset.split("/")[0]}</td>
              <td>{asset.split("/")[1]}</td>
            </tr>
          )
        })
      }
      </tbody>
    </Table>
  );
}

export default AssetTypesTable;