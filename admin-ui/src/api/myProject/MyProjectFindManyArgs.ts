import { MyProjectWhereInput } from "./MyProjectWhereInput";
import { MyProjectOrderByInput } from "./MyProjectOrderByInput";

export type MyProjectFindManyArgs = {
  where?: MyProjectWhereInput;
  orderBy?: MyProjectOrderByInput;
  skip?: number;
  take?: number;
};
