import { apiService } from "../api"

interface UserToCreate {
  name: string;
  email: string;
  password: string;
}

export default {
  create: (data: UserToCreate) => {
    return apiService.post('/users', data);
  }
}
