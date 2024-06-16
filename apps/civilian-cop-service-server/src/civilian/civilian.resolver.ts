import * as graphql from "@nestjs/graphql";
import { CivilianResolverBase } from "./base/civilian.resolver.base";
import { Civilian } from "./base/Civilian";
import { CivilianService } from "./civilian.service";

@graphql.Resolver(() => Civilian)
export class CivilianResolver extends CivilianResolverBase {
  constructor(protected readonly service: CivilianService) {
    super(service);
  }
}
