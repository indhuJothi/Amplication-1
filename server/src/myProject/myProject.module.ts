import { Module } from "@nestjs/common";
import { MyProjectModuleBase } from "./base/myProject.module.base";
import { MyProjectService } from "./myProject.service";
import { MyProjectController } from "./myProject.controller";
import { MyProjectResolver } from "./myProject.resolver";

@Module({
  imports: [MyProjectModuleBase],
  controllers: [MyProjectController],
  providers: [MyProjectService, MyProjectResolver],
  exports: [MyProjectService],
})
export class MyProjectModule {}
