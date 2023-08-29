import { REQUEST_INFO, octokit } from "config";

export const fetchIssueDetail = async (issueNumber: string) => {
  try {
    const response = await octokit.request(
      `GET /repos/${REQUEST_INFO.OwnerName}/${REQUEST_INFO.RepoName}/issues/${issueNumber}`,
      {
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );

    return {
      number: response.data.number,
      title: response.data.title,
      user: response.data.user,
      updated_at: response.data.updated_at,
      comments: response.data.comments,
      image: response.data.user.avatar_url,
      body: response.data.body,
    };
  } catch (error) {
    console.error("Error fetching issue:", error);
    throw error;
  }
};
