import axios from "axios";
import {apiBaseUrl} from "../../apiBaseUrl";
import AssetTypes from "../dto/AssetTypes";

export class ApiService {

  async getTypes() {
    const data = await axios.get<AssetTypes>(apiBaseUrl.concat("/types"));
    return data.data;
  }
}

export default new ApiService();