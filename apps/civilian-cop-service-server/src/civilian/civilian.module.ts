import { Module } from "@nestjs/common";
import { CivilianModuleBase } from "./base/civilian.module.base";
import { CivilianService } from "./civilian.service";
import { CivilianController } from "./civilian.controller";
import { CivilianResolver } from "./civilian.resolver";

@Module({
  imports: [CivilianModuleBase],
  controllers: [CivilianController],
  providers: [CivilianService, CivilianResolver],
  exports: [CivilianService],
})
export class CivilianModule {}
