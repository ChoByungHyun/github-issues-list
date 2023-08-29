import App from "App";
import Error from "pages/Error";
import IssueDetail from "pages/IssueDetail";
import IssueList from "pages/IssueList";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <IssueList />,
      },
      {
        path: "issue/:num",
        element: <IssueDetail />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
