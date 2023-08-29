// api.ts

import { octokit } from "config";
import { REQUEST_INFO } from "config";
import { Issue } from "type";

export async function fetchGitHubIssues(page: number): Promise<Issue[]> {
  try {
    const response = await octokit.request(
      `GET /repos/${REQUEST_INFO.OwnerName}/${REQUEST_INFO.RepoName}/issues?page=${page}&sort=comments`,
      {
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );
    const fetchedIssues: Issue[] = response.data.map((issue: any) => ({
      number: issue.number,
      title: issue.title,
      user: issue.user,
      updated_at: issue.updated_at,
      comments: issue.comments,
    }));
    return fetchedIssues;
  } catch (error) {
    console.error("이슈를 불러오는 중 에러 발생:", error);
    return [];
  }
}
