import React from "react";
import styled from "styled-components";
import { Issue } from "type";
import { useNavigate } from "react-router-dom";

interface IssueItemsProps {
  issue: Issue;
  showAD: boolean;
}

const IssueItems: React.FC<IssueItemsProps> = ({ issue, showAD }) => {
  const navigate = useNavigate();
  function goToIssueDetail() {
    navigate(`/issue/${issue.number}`);
  }
  return (
    <>
      <SIssueList onClick={goToIssueDetail}>
        Issue #{issue.number}: {issue.title}, {issue.user.login},
        {issue.updated_at}, {issue.comments}
      </SIssueList>
      <div>{showAD && "AD"}</div>
    </>
  );
};

const SIssueList = styled.li`
  border-bottom: 1px solid black;
  padding: 10px 0;
  &:last-child {
    border-bottom: none;
  }
`;

export default IssueItems;
