import IssueItems from "components/IssueItems";
import { useDebounce } from "hooks/useDebounce";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Skeleton from "styles/Skeleton";
import { Issue } from "type";
import { fetchGitHubIssues } from "../api/getIssueList";
import useIntersectionObserver from "hooks/useIntersectionObserver";

const TERM_OF_AD = 4;

function IssuesList() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [ref, inView] = useIntersectionObserver({ threshold: 0.3 });

  useEffect(() => {
    fetchIssues(pageNumber);
  }, [pageNumber]);

  useEffect(() => {
    if (inView) setPageNumber((prev) => prev + 1);
  }, [inView]);

  const fetchIssues = async (page: number) => {
    setLoading(true);
    const fetchedIssues = await fetchGitHubIssues(page);
    setIssues((prevIssues) => [...prevIssues, ...fetchedIssues]);
    setLoading(false);
  };

  return (
    <SIssueLayout>
      <ul>
        {issues.map((issue, index) => (
          <IssueItems
            key={issue.number}
            issue={issue}
            showAD={(index + 1) % TERM_OF_AD === 0}
          />
        ))}
        {loading && <Skeleton />}
        {!loading && <div ref={ref} style={{ height: "10px" }}></div>}
      </ul>
    </SIssueLayout>
  );
}
const SIssueLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export default IssuesList;
