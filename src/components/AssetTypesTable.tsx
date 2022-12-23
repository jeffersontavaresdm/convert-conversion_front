import Table from 'react-bootstrap/Table';

interface AssetTypesTableProps {
  types: string[];
}

const AssetTypesTable = (props: AssetTypesTableProps) => {
  let count = 0;

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
        marginTop: "100px",
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
        props.types.map(asset => {
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