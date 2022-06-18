import React, { useState, useEffect } from "react";
import { HomePage } from "../../pages/Home";

import { HK_API, HK_ARTICLES_ENDPOINT } from "../../utils/api";

const HomeContainer = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getLastArticles() {
      try {
        const response = await fetch(`${HK_API}${HK_ARTICLES_ENDPOINT}`);
        const { data } = await response.json();
        setArticles(data);
      } catch (error) {
        console.error(error);
      }
    }

    getLastArticles();
  }, []);

  if (articles.length) {
    return <HomePage heroArticle={articles[0].attributes} />;
  }

  return <HomePage />;
};

export { HomeContainer };
