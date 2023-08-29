import React, { useState, useEffect } from "react";
import { Octokit } from "octokit";
import { IssueDetail } from "type";
import IssueDetailItem from "components/IssueDetailItem";
import { useParams } from "react-router-dom";
import { REQUEST_INFO } from "config";

const octokit = new Octokit({
  auth: REQUEST_INFO.PersonalAccessToken,
});
const GetDetailIssue = () => {
  const [issues, setIssues] = useState<IssueDetail>();
  const params = useParams();

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await octokit.request(
          `GET /repos/${REQUEST_INFO.OwnerName}/${REQUEST_INFO.RepoName}/issues/${params.num}`,
          {
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
            },
          }
        );
        const newIssue = {
          number: response.data.number,
          title: response.data.title,
          user: response.data.user,
          updated_at: response.data.updated_at,
          comments: response.data.comments,
          image: response.data.user.avatar_url,
          body: response.data.body,
        };
        setIssues(newIssue);
      } catch (error) {
        console.error("Error fetching issues:", error);
      }
    };

    fetchIssues();
  }, []);
  return issues && <IssueDetailItem issue={issues}></IssueDetailItem>;
};

export default GetDetailIssue;
