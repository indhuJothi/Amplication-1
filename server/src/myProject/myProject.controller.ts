import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MyProjectService } from "./myProject.service";
import { MyProjectControllerBase } from "./base/myProject.controller.base";

@swagger.ApiTags("my-projects")
@common.Controller("my-projects")
export class MyProjectController extends MyProjectControllerBase {
  constructor(
    protected readonly service: MyProjectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
