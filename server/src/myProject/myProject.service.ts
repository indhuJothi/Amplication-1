import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MyProjectServiceBase } from "./base/myProject.service.base";

@Injectable()
export class MyProjectService extends MyProjectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
