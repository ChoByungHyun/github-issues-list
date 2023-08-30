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
    navigate(`/issue/${issue.number}`);
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
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
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
