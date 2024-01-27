import { useLoaderData } from "react-router-dom";

import { ArticleCard } from "../../components/Cards/ArticleCard";
import { Header } from "../../components/Header";
import { IArticle } from "../../types/article";

function Home() {
  const articles = useLoaderData() as IArticle[];
  return (
    <>
      <Header />
      {articles.length > 0 ? (
        articles.map((article) => (
          <ArticleCard
            key={article.id}
            id={article.id}
            title={article.title}
            slug={article.slug}
            published_at={article.published_at}
            category={article.category}
          />
        ))
      ) : (
        <p>No articles</p>
      )}
    </>
  );
}

export { Home };
