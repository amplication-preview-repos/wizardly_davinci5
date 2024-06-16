import * as graphql from "@nestjs/graphql";
import { CopResolverBase } from "./base/cop.resolver.base";
import { Cop } from "./base/Cop";
import { CopService } from "./cop.service";

@graphql.Resolver(() => Cop)
export class CopResolver extends CopResolverBase {
  constructor(protected readonly service: CopService) {
    super(service);
  }
}
