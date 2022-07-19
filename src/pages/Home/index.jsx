import React, { useState, useEffect } from "react";
import { HomePageUI } from "./interface";

import { HK_API, HK_ARTICLES_ENDPOINT } from "../../api/endpoints";
import { latestArticlesQuery } from "../../api/queries/latestArticles";

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    getLastArticles();
  }, []);

  useEffect(() => {
    if (articles.length > 0) {
      setLoading(false);
    }
  }, [articles]);

  return <HomePageUI articles={articles} loading={loading} />;
};

export { HomePage };
