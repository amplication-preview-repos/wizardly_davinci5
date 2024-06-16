import * as graphql from "@nestjs/graphql";
import { DistressSignalResolverBase } from "./base/distressSignal.resolver.base";
import { DistressSignal } from "./base/DistressSignal";
import { DistressSignalService } from "./distressSignal.service";

@graphql.Resolver(() => DistressSignal)
export class DistressSignalResolver extends DistressSignalResolverBase {
  constructor(protected readonly service: DistressSignalService) {
    super(service);
  }
}
