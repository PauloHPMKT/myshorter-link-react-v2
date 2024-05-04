import { apiService } from "../api"
import { Account } from "../../types/interfaces";

export default {
  create: (data: Account.toCreate) => {
    return apiService.post('/users', data);
  }
}
