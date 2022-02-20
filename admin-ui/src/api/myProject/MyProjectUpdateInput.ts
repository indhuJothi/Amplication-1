import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MyProjectUpdateInput = {
  date?: Date | null;
  email?: string | null;
  name?: string;
  password?: string;
  role?: "Admin" | "Manager" | "Employee";
  user?: UserWhereUniqueInput;
};
