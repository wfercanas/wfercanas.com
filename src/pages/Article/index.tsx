import Markdown from "markdown-to-jsx";
import { useLoaderData, useParams } from "react-router-dom";
import { IArticle } from "../../types/article";

function Article() {
  const { slug } = useParams();
  const data = useLoaderData() as IArticle[];
  const article = data.find((article) => article.slug === slug);

  return article ? (
    <>
      <Markdown>{`# ${article.title}`}</Markdown>
      <Markdown>{article.content}</Markdown>
    </>
  ) : (
    <p>No article</p>
  );
}

export { Article };
