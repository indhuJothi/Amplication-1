import { MyProject as TMyProject } from "../api/myProject/MyProject";

export const MYPROJECT_TITLE_FIELD = "name";

export const MyProjectTitle = (record: TMyProject): string => {
  return record.name || record.id;
};
