import { Module } from "@nestjs/common";
import { CopModuleBase } from "./base/cop.module.base";
import { CopService } from "./cop.service";
import { CopController } from "./cop.controller";
import { CopResolver } from "./cop.resolver";

@Module({
  imports: [CopModuleBase],
  controllers: [CopController],
  providers: [CopService, CopResolver],
  exports: [CopService],
})
export class CopModule {}
