import React from "react";

import { Navbar } from "../../components/Navbar";
import { Section } from "../../components/Sections";
import { ArticleCard, HeroCard } from "../../components/Cards";

import { StyledHero, StyledArticles } from "./styles";

const HomePage = ({ articles }) => {
  return (
    <>
      <Navbar />
      <Section label="Latest articles" divider={true}>
        <StyledHero>
          {articles && (
            <HeroCard
              title={articles[0].attributes.title}
              date={articles[0].attributes.published}
              image={articles[0].attributes.coverURL}
            />
          )}
        </StyledHero>
        <StyledArticles>
          {articles &&
            articles.map(
              (article, index) =>
                index !== 0 && (
                  <ArticleCard
                    key={article.id}
                    title={article.attributes.title}
                    date={article.attributes.published}
                    image={article.attributes.coverURL}
                  />
                )
            )}
        </StyledArticles>
      </Section>
    </>
  );
};

export { HomePage };
