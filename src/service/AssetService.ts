import CurrencyTypes from "../dto/CurrencyTypes";
import AssetCurrency from "../dto/AssetCurrency";
import ResponseResult from "../dto/ResponseResult";
import axiosClient from "../../axiosClientConfig";

class ApiService {

  async getTypes() {
    let response = await axiosClient.get<CurrencyTypes>("/types");
    return response.data;
  }

  async convert(from: string, to: string) {
    return await axiosClient
      .get<AssetCurrency>(`/convert?from=${ from }&to=${ to }`)
      .catch(error => {
        return error
      });
  }

  async allConversions(page: number | undefined = 0, limit: number | undefined = 100) {
    let response = await axiosClient.get<ResponseResult>(`/all?page=${ (page - 1) }&limit=${ limit }`);
    return response.data;
  }
}

export default new ApiService();