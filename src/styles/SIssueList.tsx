import styled from "styled-components";

const issueStyles = {
  SIssueTitle: styled.div`
    font-size: 18px;
  `,

  SIssueListContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,

  SIssueListLayout: styled.li`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
    padding: 10px 0;
    margin-bottom: 10px;
    cursor: pointer;
    &:last-child {
      border-bottom: none;
      margin-bottom: 0;
    }
  `,

  SIssueDetailTitle: styled.div`
    display: flex;
  `,
  SCommentLayout: styled.div`
    white-space: nowrap;
    position: relative;
    top: 10px;
  `,
};
export default issueStyles;
