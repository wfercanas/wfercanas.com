import { Header } from "./components/Header";
import { ArticleCard } from "./components/Cards/ArticleCard";

import { GlobalStyle } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <h1>Articles</h1>
        <ArticleCard />
      </main>
    </>
  );
}

export default App;
