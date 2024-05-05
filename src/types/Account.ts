
export namespace Account {
  export interface toCreate {
    name: string;
    email: string;
    password: string;
  }

  export interface toLogin {
    email: string;
    password: string;
  }
}
