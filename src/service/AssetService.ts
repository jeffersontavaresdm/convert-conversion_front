import axios from "axios";
import {apiBaseUrl} from "../../apiBaseUrl";
import CurrencyTypes from "../dto/CurrencyTypes";
import AssetCurrency from "../dto/AssetCurrency";

class ApiService {

  async getTypes() {
    const data = await axios.get<CurrencyTypes>(apiBaseUrl.concat("/types"));
    return data.data;
  }

  async convert(from: string, to: string) {
    return await axios
      .get<AssetCurrency>(apiBaseUrl.concat(`/convert?from=${from}&to=${to}`))
      .catch(error => {return error});
  }
}

export default new ApiService();