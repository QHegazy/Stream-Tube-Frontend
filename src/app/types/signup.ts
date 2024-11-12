import { SignupFrom } from '../interfaces/signup-from';


export class Signup implements SignupFrom {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  constructor(
    username: string,
    email: string,
    password: string,
    confirmPassword: string
  ) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }
}
