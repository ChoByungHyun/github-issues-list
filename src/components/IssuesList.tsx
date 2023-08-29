import IssueItems from "components/IssueItems";
import { REQUEST_INFO, octokit } from "config";
import { useDebounce } from "hooks/useDebounce";
import { Octokit } from "octokit";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Skeleton from "styles/Skeleton";
import { Issue } from "type";
import { fetchGitHubIssues } from "../api/getIssueList";

function IssuesList() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchIssues = async (page: number) => {
    setLoading(true);
    const fetchedIssues = await fetchGitHubIssues(page);
    setIssues((prevIssues) => [...prevIssues, ...fetchedIssues]);
    setLoading(false);
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
        {loading && <Skeleton />}
      </ul>
    </SIssueLayout>
  );
}
const SIssueLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export default IssuesList;
