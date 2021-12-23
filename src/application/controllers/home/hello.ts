import { HttpResponse, IBaseController } from "@/application/interfaces";
import { ok } from "@/common/helpers/httpHelper";

class HelloController implements IBaseController {
  async execute(_: any): Promise<HttpResponse> {
    return ok({ message: "Server Alive" });
  }
}

export default new HelloController();
