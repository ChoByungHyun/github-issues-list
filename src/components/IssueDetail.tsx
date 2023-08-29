import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IssueDetail } from "type";
import { fetchIssueDetail } from "api/getIssueDetail";
import IssueDetailItem from "components/IssueDetailItem";
import Skeleton from "styles/Skeleton";

const GetDetailIssue = () => {
  const [issues, setIssues] = useState<IssueDetail>();
  const params = useParams<{ num: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (params.num) {
          const issueNumber = params.num;
          const issueDetail = await fetchIssueDetail(issueNumber);
          setIssues(issueDetail);
        }
      } catch (error) {
        console.error("Error fetching issue:", error);
      }
    };

    fetchData();
  }, [params.num]);

  return issues ? <IssueDetailItem issue={issues} /> : <Skeleton />;
};

export default GetDetailIssue;
