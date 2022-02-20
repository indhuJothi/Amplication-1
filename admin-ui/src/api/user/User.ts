import { MyProject } from "../myProject/MyProject";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  myProjects?: Array<MyProject>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
