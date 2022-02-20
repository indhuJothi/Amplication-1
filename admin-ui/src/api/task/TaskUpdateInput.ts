import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskUpdateInput = {
  estimation?: number | null;
  project?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
