import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CivilianService } from "./civilian.service";
import { CivilianControllerBase } from "./base/civilian.controller.base";

@swagger.ApiTags("civilians")
@common.Controller("civilians")
export class CivilianController extends CivilianControllerBase {
  constructor(protected readonly service: CivilianService) {
    super(service);
  }
}
