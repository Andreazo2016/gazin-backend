import { IBaseController } from "@/application/interfaces/IBaseController";
import {
  DevelopFactory,
  ValidationFactory,
} from "@/application/factories/develop";
import { badRequest, ok, serverError } from "@/common/helpers/httpHelper";
import { IValidation } from "@/application/interfaces";

class UpdateDevelopController implements IBaseController {
  constructor(private validation: IValidation) {}
  async execute(request: any) {
    const updateDevelopsService = DevelopFactory.updateDevelop();
    const { id, ...params } = request;
    try {
      const error = await this.validation.validate({
        id: parseInt(id),
      });
      if (error) {
        return badRequest(error);
      }
      await updateDevelopsService.execute({ id: parseInt(id), ...params });
      return ok();
    } catch (error) {
      console.log(error);
      return serverError(error);
    }
  }
}

export default new UpdateDevelopController(
  ValidationFactory.updateDevelopValidation()
);
