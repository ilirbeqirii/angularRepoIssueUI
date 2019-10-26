import { IUser } from "./user.interface";

export interface Issue {
  id: number;
  url: string;
  repository_url: string;
  comments_url: string;
  number: number;
  title: string;
  user: IUser;
  state: string;
  comments: number;
  created_at: string;
  body: string;
}
