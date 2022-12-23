import axios from "axios";
import {apiBaseUrl} from "../../apiBaseUrl";
import AssetTypes from "../dto/AssetTypes";
import AssetCurrency from "../dto/AssetCurrency";

class ApiService {

  async getTypes() {
    const data = await axios.get<AssetTypes>(apiBaseUrl.concat("/types"));
    return data.data;
  }

  async convert(from: string, to: string) {
    const data = await axios.get<AssetCurrency>(apiBaseUrl.concat(`/convert?from=${from}&to=${to}`));
    return data.data;
  }
}

export default new ApiService();