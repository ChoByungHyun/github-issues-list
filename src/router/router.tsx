import App from "App";
import IssueDetail from "pages/IssueDetail";
import IssueList from "pages/IssueList";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "issuelist",
        element: <IssueList />,
      },
      {
        path: "issuedetail",
        element: <IssueDetail />,
      },
    ],
  },
]);

export default router;
