import { useLoaderData, useParams } from "react-router-dom";
import Markdown from "markdown-to-jsx";

import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { IArticle } from "../../types/article";

import { Figcaption } from "../../design/data/Figcaption";
import { Figure } from "../../design/data/Figure";

import { StyledArticle } from "./styles";
import { Divider } from "../../design/layout/Divider";

const options = {
  overrides: {
    figure: {
      component: Figure,
    },
    figcaption: {
      component: Figcaption,
    },
    code: {
      component: SyntaxHighlighter,
      props: {
        language: "js",
        style: nightOwl,
        customStyle: {
          padding: "32px",
          borderRadius: "8px",
        },
      },
    },
    hr: {
      component: Divider,
    },
  },
};

function Article() {
  const { slug } = useParams();
  const data = useLoaderData() as IArticle[];
  const article = data.find((article) => article.slug === slug);

  return article ? (
    <StyledArticle>
      <Markdown>{`# ${article.title}`}</Markdown>
      <Markdown options={options}>{article.content}</Markdown>
    </StyledArticle>
  ) : (
    <p>No article</p>
  );
}

export { Article };
