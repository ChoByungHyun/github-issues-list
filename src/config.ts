import { Octokit } from "octokit";

export const REQUEST_INFO = {
  PersonalAccessToken: process.env.REACT_APP_GITHUB_TOKEN,
  OwnerName: "facebook",
  RepoName: "react",
};
export const octokit = new Octokit({
  auth: process.env.PersonalAccessToken,
});
