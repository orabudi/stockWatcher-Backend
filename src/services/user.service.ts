/* eslint-disable @typescript-eslint/no-empty-function */
export default class UserService {
  private static _instance: UserService;

  public static get instance(): UserService {
    if (!UserService._instance) {
      UserService._instance = new UserService();
    }
    return UserService._instance;
  }

  public create = async () => {};

  public read = async () => {};

  public update = async () => {};

  public delete = async () => {};

  public list = async () => {};
}
