import { User } from "../user/User";

export type MyProject = {
  createdAt: Date;
  date: Date | null;
  email: string | null;
  id: string;
  name: string;
  password: string;
  role?: "Admin" | "Manager" | "Employee";
  updatedAt: Date;
  user?: User;
};
