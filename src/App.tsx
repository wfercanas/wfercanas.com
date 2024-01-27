import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import { getArticles } from "./loaders/getArticles";
import { getArticle } from "./loaders/getArticle";

import { Home } from "./pages/Home";
import { Error } from "./pages/Error";
import { Article } from "./pages/Article";

import { GlobalStyle } from "./styles";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Home />}
        errorElement={<Error />}
        loader={getArticles}
      />
      <Route path="article/:slug" element={<Article />} loader={getArticle} />
    </>,
  ),
);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
