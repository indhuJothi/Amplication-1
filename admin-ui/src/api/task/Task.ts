import { User } from "../user/User";

export type Task = {
  createdAt: Date;
  estimation: number | null;
  id: string;
  project: string | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
