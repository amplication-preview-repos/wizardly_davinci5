import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DistressSignalService } from "./distressSignal.service";
import { DistressSignalControllerBase } from "./base/distressSignal.controller.base";

@swagger.ApiTags("distressSignals")
@common.Controller("distressSignals")
export class DistressSignalController extends DistressSignalControllerBase {
  constructor(protected readonly service: DistressSignalService) {
    super(service);
  }
}
