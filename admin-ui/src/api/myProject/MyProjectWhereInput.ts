import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MyProjectWhereInput = {
  date?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  password?: StringFilter;
  role?: "Admin" | "Manager" | "Employee";
  user?: UserWhereUniqueInput;
};
