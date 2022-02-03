export default class StockController {
  private static _instance: StockController;

  public static get instance(): StockController {
    if (!StockController._instance) {
      StockController._instance = new StockController();
    }
    return StockController._instance;
  }

  public create = async () => {};

  public read = async () => {};

  public update = async () => {};

  public delete = async () => {};

  public list = async () => {};
}
