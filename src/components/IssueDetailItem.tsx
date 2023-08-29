import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Issue, IssueDetail } from "type";
import remarkGfm from "remark-gfm";
interface IssueItemsProps {
  issue: IssueDetail;
}
const IssueDetailItem: React.FC<IssueItemsProps> = ({ issue }) => {
  return (
    <>
      <div>
        <img src={issue.user.avatar_url} alt=""></img>
        Issue #{issue.number}: {issue.title}, {issue.user.login},
        {issue.updated_at}, {issue.comments},
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{issue.body}</ReactMarkdown>
      </div>
    </>
  );
};

export default IssueDetailItem;
