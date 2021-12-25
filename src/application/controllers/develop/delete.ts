import { IBaseController } from "@/application/interfaces/IBaseController";
import {
  DevelopFactory,
  ValidationFactory,
} from "@/application/factories/develop";
import { badRequest, ok, serverError } from "@/common/helpers/httpHelper";
import { IValidation } from "@/application/interfaces";

class ListDevelopController implements IBaseController {
  constructor(private validation: IValidation) {}
  async execute(request: any) {
    const deleteDevelopsService = DevelopFactory.deleteDevelop();
    const { id } = request;
    try {
      const error = await this.validation.validate({
        id: parseInt(id),
      });
      if (error) {
        return badRequest(error);
      }
      await deleteDevelopsService.execute(parseInt(id));
      return ok();
    } catch (error) {
      console.log(error);
      return serverError(error);
    }
  }
}

export default new ListDevelopController(
  ValidationFactory.deleteDevelopValidation()
);
