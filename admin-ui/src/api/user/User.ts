import { MyProject } from "../myProject/MyProject";
import { Task } from "../task/Task";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  myProjects?: Array<MyProject>;
  roles: Array<string>;
  tasks?: Array<Task>;
  updatedAt: Date;
  username: string;
};
