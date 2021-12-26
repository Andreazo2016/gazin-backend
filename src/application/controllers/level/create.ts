import {
  IBaseController,
  HttpResponse,
  IValidation,
} from "@/application/interfaces";
import { ValidationFactory, LevelFactory } from "@/application/factories/level";
import { serverError, badRequest, created } from "@/common/helpers/httpHelper";

class CreateLevelController implements IBaseController {
  constructor(private validation: IValidation) {}
  async execute(request: any): Promise<HttpResponse> {
    const createLevelService = LevelFactory.createLevel();
    const { level } = request;
    try {
      const error = await this.validation.validate({ level });
      if (error) {
        return badRequest(error);
      }
      await createLevelService.execute({ level });
      return created();
    } catch (error) {
      console.log(error);
      return serverError(error);
    }
  }
}

export default new CreateLevelController(
  ValidationFactory.createLevelValidation()
);
