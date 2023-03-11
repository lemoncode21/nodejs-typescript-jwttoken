import { Users } from "../models/Users";
import { UsersRepo } from "../repository/UsersRepo";
import Authentication from "../utils/Authentication";

interface IAuthenticationService {
  login(email: string, password: string): Promise<string>;
  register(
    email: string,
    password: string,
    nama: string,
    username: string
  ): Promise<void>;
}

export class AuthenticationService implements IAuthenticationService {
  async login(email: string, password: string): Promise<string> {
    const users = await new UsersRepo().findByEmail(email);

    if (!users) {
      throw new Error("Bad Request!");
    }
    // check password
    let compare = await Authentication.passwordCompare(
      password,
      users.password
    );

    // generate token
    if (compare) {
      return Authentication.generateToken(
        users.id,
        users.email,
        users.name,
        users.username
      );
    }
    return "";
  }
  async register(
    email: string,
    password: string,
    name: string,
    username: string
  ): Promise<void> {
    try {
      const hashedPassword: string = await Authentication.passwordHash(
        password
      );
      const new_users = new Users();
      new_users.email = email;
      new_users.password = hashedPassword;
      new_users.username = username;
      new_users.name = name;

      await new UsersRepo().save(new_users);
    } catch (error) {
      throw new Error("Error login!");
    }
  }
}
