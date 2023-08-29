import React from "react";
import { Issue, IssueDetail } from "type";

interface IssueItemsProps {
  issue: IssueDetail;
}
const IssueDetailItem: React.FC<IssueItemsProps> = ({ issue }) => {
  return (
    <>
      <div>
        <img src={issue.user.avatar_url} alt=""></img>
        Issue #{issue.number}: {issue.title}, {issue.user.login},
        {issue.updated_at}, {issue.comments},{issue.body}
      </div>
    </>
  );
};

export default IssueDetailItem;
