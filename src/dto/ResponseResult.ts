import AssetCurrency from "./AssetCurrency";

export default interface ResponseResult {
  assets: AssetCurrency[];
  entityCount: number;
}