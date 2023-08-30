export interface Issue {
  number: number;
  title: string;
  user: {
    login: string;
  };
  created_at: string;
  comments: number;
  body: string;
}
export interface IssueDetail {
  number: number;
  title: string;
  user: {
    login: string;
    avatar_url: string;
  };
  created_at: string;
  comments: number;
  body: string;
}
