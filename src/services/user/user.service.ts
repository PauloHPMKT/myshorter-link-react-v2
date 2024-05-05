import { apiService } from "../api"
import { Account } from "../../types/Account";

export default {
  create: async (data: Account.toCreate) => {
    return await apiService.post('/users', data);
  },
  login: async (data: Account.toLogin) => {
    return await apiService.post('/auth/login', data);
  },
  validadeAccess: async () => {
    return await apiService.get('/auth/me');
  },
  signout: () => {}
}
