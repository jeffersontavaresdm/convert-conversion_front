import ApiService from "../service/AssetService";
import React from "react";
import AssetTypes from "../dto/AssetTypes";

interface FirstComponentProps {
  setTypes: (assetTypes: AssetTypes) => void
}

export const GetTypesButtonComponent = (props: FirstComponentProps) => {
  return (
    <button style={{
      margin: "8px",
      fontWeight: "bold",
      fontSize: "30px",
      color: "darkgoldenrod",
      backgroundColor: "black",
      width: "200px",
      height: "100px",
      border: "3px solid cyan",
      borderRadius: "30px",
      textAlign: "center"
    }} onClick={() => (async () => props.setTypes(await ApiService.getTypes()))()}
    >
      Button
    </button>
  )
}