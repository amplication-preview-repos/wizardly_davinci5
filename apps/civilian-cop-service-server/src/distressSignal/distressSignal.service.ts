import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DistressSignalServiceBase } from "./base/distressSignal.service.base";

@Injectable()
export class DistressSignalService extends DistressSignalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
