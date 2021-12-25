import { IBaseController } from "@/application/interfaces/IBaseController";
import { LevelFactory, ValidationFactory } from "@/application/factories";
import {
  noContent,
  serverError,
  badRequest,
} from "@/common/helpers/httpHelper";
import { IValidation } from "@/application/interfaces";

class DeleteLevelController implements IBaseController {
  constructor(private validation: IValidation) {}
  async execute(request: any) {
    const { id } = request;
    const deleteLevelService = LevelFactory.deleteLevel();
    try {
      const error = await this.validation.validate({ id: parseInt(id) });
      if (error) {
        return badRequest(error);
      }
      await deleteLevelService.execute(parseInt(id));
      return noContent();
    } catch (error) {
      console.log(error);
      return serverError(error);
    }
  }
}

export default new DeleteLevelController(
  ValidationFactory.deleteLevelValidation()
);
