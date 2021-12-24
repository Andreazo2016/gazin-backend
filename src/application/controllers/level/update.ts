import {
  IBaseController,
  HttpResponse,
  IValidation,
} from "@/application/interfaces";
import { ValidationFactory, LevelFactory } from "@/application/factories";
import { serverError, ok, badRequest } from "@/common/helpers/httpHelper";

class UpdateLevelController implements IBaseController {
  constructor(private validation: IValidation) {}
  async execute(request: any): Promise<HttpResponse> {
    const updateLevelService = LevelFactory.updateLevel();
    const { id, level } = request;
    try {
      const error = await this.validation.validate({ id: parseInt(id), level });
      if (error) {
        return badRequest(error);
      }
      await updateLevelService.execute({ id: parseInt(id), level });
      return ok({});
    } catch (error) {
      console.log(error);
      return serverError(error);
    }
  }
}

export default new UpdateLevelController(
  ValidationFactory.updateLevelValidation()
);
