import IssueItems from "components/IssueItems";
import { Octokit } from "octokit";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Issue } from "type";
const PersonalAccessToken = process.env.REACT_APP_GITHUB_TOKEN;
const OwnerName = "facebook";
const RepoName = "react";

const octokit = new Octokit({
  auth: PersonalAccessToken,
});

function GetIssue() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await octokit.request(
          `GET /repos/${OwnerName}/${RepoName}/issues?page=${pageNumber}&sort=comments`,
          {
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
            },
          }
        );
        const fetchedIssues: Issue[] = response.data.map((issue: Issue) => ({
          number: issue.number,
          title: issue.title,
          user: issue.user,
          updated_at: issue.updated_at,
          comments: issue.comments,
        }));
        console.log(response.data);

        setIssues(fetchedIssues);
      } catch (error) {
        console.error("Error fetching issues:", error);
      }
    };

    fetchIssues();
  }, []);

  return (
    <SIssueLayout>
      <ul>
        {issues.map((issue, index) => (
          <IssueItems
            key={issue.number}
            issue={issue}
            showAD={index >= 3 && (index - 3) % 4 === 0}
          />
        ))}
      </ul>
    </SIssueLayout>
  );
}
const SIssueLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export default GetIssue;
