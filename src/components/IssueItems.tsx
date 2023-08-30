import React from "react";
import styled from "styled-components";
import { Issue } from "type";
import { useNavigate, Link } from "react-router-dom";
import issueStyles from "styles/SIssueList";
interface IssueItemsProps {
  issue: Issue;
  showAD: boolean;
}

const IssueItems: React.FC<IssueItemsProps> = ({ issue, showAD }) => {
  const navigate = useNavigate();
  function goToIssueDetail() {
    navigate(`/${issue.number}`);
  }
  const date = new Date(issue.created_at);

  const formattedDate = date.toISOString().slice(0, 11).replace("T", " ");

  return (
    <>
      <issueStyles.SIssueListLayout onClick={goToIssueDetail}>
        <issueStyles.SIssueListContainer>
          <issueStyles.SIssueTitle>
            #{issue.number} {issue.title}
          </issueStyles.SIssueTitle>
          <div>
            작성자: {issue.user.login},작성일: {formattedDate}
          </div>
        </issueStyles.SIssueListContainer>
        <issueStyles.SCommentLayout>
          코멘트: {issue.comments}
        </issueStyles.SCommentLayout>
      </issueStyles.SIssueListLayout>
      <div>
        {showAD && (
          <SLink to="https://www.wanted.co.kr/">
            <SBennerImg
              alt="광고이미지"
              src="https://github.com/ChoByungHyun/github-issues-list/assets/102468625/cd80d4c5-11c8-4884-8ebd-1800d7118bd8"
            />
          </SLink>
        )}
      </div>
    </>
  );
};

const SLink = styled(Link)`
  display: block;
  width: 100%;
  margin: 0 auto;
`;
const SBennerImg = styled.img`
  width: 100%;
  height: 80px;
  object-fit: contain;
`;
export default IssueItems;
