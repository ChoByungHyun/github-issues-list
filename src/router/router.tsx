import App from "App";
import ErrorPage from "pages/ErrorPage";
import IssueDetailPage from "pages/IssueDetailPage";
import IssueListPage from "pages/IssueListPage";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <IssueListPage />,
      },
      {
        path: "issue/:num",
        element: <IssueDetailPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
