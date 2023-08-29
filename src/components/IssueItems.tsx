import React from "react";
import styled from "styled-components";
import { Issue } from "type";
import { useNavigate, Link } from "react-router-dom";

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
      <div>
        {showAD && (
          <SLink to="https://www.wanted.co.kr/">
            <SBennerImg
              alt="광고이미지"
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
            />
          </SLink>
        )}
      </div>
    </>
  );
};

const SIssueList = styled.li`
  border-bottom: 1px solid black;
  padding: 10px 0;
  margin-bottom: 10px;
  cursor: pointer;
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

const SLink = styled(Link)`
  display: block;
  width: 50%;
  margin: 0 auto;
`;
const SBennerImg = styled.img`
  width: 100%;

  object-fit: cover;
`;
export default IssueItems;
