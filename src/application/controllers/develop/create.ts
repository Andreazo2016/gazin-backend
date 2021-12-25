import {
  IBaseController,
  HttpResponse,
  IValidation,
} from "@/application/interfaces";
import {
  DevelopFactory,
  ValidationFactory,
} from "@/application/factories/develop";
import { serverError, badRequest, created } from "@/common/helpers/httpHelper";

class CreateDevelopController implements IBaseController {
  constructor(private validation: IValidation) {}
  async execute(request: any): Promise<HttpResponse> {
    const createDevelopService = DevelopFactory.createDevelop();
    const { levelId, name, sex, dateOfBirth, age, hobby } = request;
    try {
      const error = await this.validation.validate({
        levelId,
        name,
        sex,
        dateOfBirth,
        age,
        hobby,
      });
      if (error) {
        return badRequest(error);
      }
      await createDevelopService.execute({
        levelId,
        name,
        sex,
        dateOfBirth,
        age,
        hobby,
      });
      return created();
    } catch (error) {
      console.log(error);
      return serverError(error);
    }
  }
}

export default new CreateDevelopController(
  ValidationFactory.createDevelopValidation()
);
