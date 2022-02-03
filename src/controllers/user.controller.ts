export default class UserController {
  private static _instance: UserController;

  public static get instance(): UserController {
    if (!UserController._instance) {
      UserController._instance = new UserController();
    }
    return UserController._instance;
  }

  public create = async () => {};

  public read = async () => {};

  public update = async () => {};

  public delete = async () => {};

  public list = async () => {};
}
