import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CivilianServiceBase } from "./base/civilian.service.base";

@Injectable()
export class CivilianService extends CivilianServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
