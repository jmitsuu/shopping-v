export interface TuserCreate {
  name: string;
  email: string;
  password: string;
  acess_level?: Number;
}

export interface TuserSignin {
  email: string;
  password: string;
}
