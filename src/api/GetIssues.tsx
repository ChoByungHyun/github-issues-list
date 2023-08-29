import IssueItems from "components/IssueItems";
import { REQUEST_INFO, octokit } from "config";
import { useDebounce } from "hooks/useDebounce";
import { Octokit } from "octokit";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Issue } from "type";

function GetIssue() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchIssues = async (page: number) => {
    setLoading(true);
    try {
      const response = await octokit.request(
        `GET /repos/${REQUEST_INFO.OwnerName}/${REQUEST_INFO.RepoName}/issues?page=${page}&sort=comments`,
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
      setIssues((prevIssues) => [...prevIssues, ...fetchedIssues]);
    } catch (error) {
      console.error("Error fetching issues:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      !loading &&
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 500
    ) {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  };

  const debouncedHandleScroll = useDebounce(handleScroll, 300);

  useEffect(() => {
    window.addEventListener("scroll", debouncedHandleScroll);
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [loading, pageNumber]);

  useEffect(() => {
    fetchIssues(pageNumber);
  }, [pageNumber]);

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
