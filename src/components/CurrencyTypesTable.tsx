import Table from "react-bootstrap/Table";
import { FunctionComponent } from "react";

interface CurrencyTypesTableProps {
  types: string[];
}

const CurrencyTypesTable: FunctionComponent<CurrencyTypesTableProps> = ({ types }) => {
  return (
    <Table
      striped
      bordered
      hover
      variant="dark"
      style={ { border: "2px solid darkcyan", textAlign: "center" } }
    >
      <thead >
      <tr >
        <th >Codigo</th >
        <th >Nome</th >
      </tr >
      </thead >
      <tbody >
      {
        types.map(asset => {
          return (
            <tr key={ asset } >
              <td >{ asset.split("/")[0] }</td >
              <td >{ asset.split("/")[1] }</td >
            </tr >
          )
        })
      }
      </tbody >
    </Table >
  );
}

export default CurrencyTypesTable;