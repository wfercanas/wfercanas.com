import React, { useState, useEffect } from "react";
import { HomePageUI } from "./interface";

import { HK_API, HK_ARTICLES_ENDPOINT } from "../../api/endpoints";
import { latestArticlesQuery } from "../../api/queries/latestArticles";

const HomePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getLastArticles() {
      try {
        const response = await fetch(
          `${HK_API}${HK_ARTICLES_ENDPOINT}?${latestArticlesQuery}`
        );
        const { data } = await response.json();
        setArticles(data);
      } catch (error) {
        console.error(error);
      }
    }

    getLastArticles();
  }, []);

  return <HomePageUI articles={articles} />;
};

export { HomePage };
