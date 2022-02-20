import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { MyProjectResolverBase } from "./base/myProject.resolver.base";
import { MyProject } from "./base/MyProject";
import { MyProjectService } from "./myProject.service";

@graphql.Resolver(() => MyProject)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MyProjectResolver extends MyProjectResolverBase {
  constructor(
    protected readonly service: MyProjectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
