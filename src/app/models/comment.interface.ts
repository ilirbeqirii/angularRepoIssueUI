import { IUser } from "./user.interface";

export interface Comment {
  id: number;
  user: IUser;
  created_at: string;
  body: string;
}
