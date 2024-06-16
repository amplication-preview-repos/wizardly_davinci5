import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CopService } from "./cop.service";
import { CopControllerBase } from "./base/cop.controller.base";

@swagger.ApiTags("cops")
@common.Controller("cops")
export class CopController extends CopControllerBase {
  constructor(protected readonly service: CopService) {
    super(service);
  }
}
