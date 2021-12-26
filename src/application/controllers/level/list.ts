import { IBaseController } from "@/application/interfaces/IBaseController";
import { LevelFactory } from "@/application/factories/level";
import { ok, serverError } from "@/common/helpers/httpHelper";

class ListLevelController implements IBaseController {
  async execute(_: any) {
    const ListLevelsService = LevelFactory.listLevel();
    try {
      const levels = await ListLevelsService.execute();
      return ok(levels);
    } catch (error) {
      console.log(error);
      return serverError(error);
    }
  }
}

export default new ListLevelController();
