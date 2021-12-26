import { IBaseController } from "@/application/interfaces/IBaseController";
import { DevelopFactory } from "@/application/factories/develop";
import { ok, serverError } from "@/common/helpers/httpHelper";

class ListDevelopController implements IBaseController {
  async execute(_: any) {
    const ListDevelopsService = DevelopFactory.listDevelop();
    try {
      const develops = await ListDevelopsService.execute();
      return ok(develops);
    } catch (error) {
      console.log(error);
      return serverError(error);
    }
  }
}

export default new ListDevelopController();
