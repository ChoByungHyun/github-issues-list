import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { IssueDetail } from "type";
import remarkGfm from "remark-gfm";
import issueStyles from "styles/SIssueList";
import styled from "styled-components";
interface IssueItemsProps {
  issue: IssueDetail;
}
const IssueDetailItem: React.FC<IssueItemsProps> = ({ issue }) => {
  const date = new Date(issue.created_at);

  const formattedDate = date.toISOString().slice(0, 11).replace("T", " ");
  return (
    <>
      <SIssueDetailLayout>
        <issueStyles.SIssueDetailTitle>
          <SProfileImg src={issue.user.avatar_url} alt="프로필이미지" />
          <issueStyles.SIssueListContainer>
            <issueStyles.SIssueTitle>
              #{issue.number} {issue.title}
            </issueStyles.SIssueTitle>
            <div>
              작성자: {issue.user.login},작성일: {formattedDate}
            </div>
          </issueStyles.SIssueListContainer>
        </issueStyles.SIssueDetailTitle>
        <issueStyles.SCommentLayout>
          코멘트: {issue.comments}
        </issueStyles.SCommentLayout>
      </SIssueDetailLayout>
      <SBodyContent>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{issue.body}</ReactMarkdown>
      </SBodyContent>
    </>
  );
};
const SBodyContent = styled.div`
  max-width: 900px;
  word-wrap: break-word;
  overflow: auto;
`;
const SIssueDetailLayout = styled(issueStyles.SIssueListLayout)`
  cursor: auto;
`;
const SProfileImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;
export default IssueDetailItem;
