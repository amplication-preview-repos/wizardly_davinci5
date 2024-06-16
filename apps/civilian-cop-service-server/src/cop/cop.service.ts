import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CopServiceBase } from "./base/cop.service.base";

@Injectable()
export class CopService extends CopServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
