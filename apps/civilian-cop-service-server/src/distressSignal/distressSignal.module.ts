import { Module } from "@nestjs/common";
import { DistressSignalModuleBase } from "./base/distressSignal.module.base";
import { DistressSignalService } from "./distressSignal.service";
import { DistressSignalController } from "./distressSignal.controller";
import { DistressSignalResolver } from "./distressSignal.resolver";

@Module({
  imports: [DistressSignalModuleBase],
  controllers: [DistressSignalController],
  providers: [DistressSignalService, DistressSignalResolver],
  exports: [DistressSignalService],
})
export class DistressSignalModule {}
