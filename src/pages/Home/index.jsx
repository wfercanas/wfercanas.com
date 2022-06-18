import React from "react";

import { Navbar } from "../../components/Navbar";
import { Section } from "../../components/Sections";
import { ArticleCard, HeroCard } from "../../components/Cards";
import { MoreAnchor } from "../../components/Anchors";

import { StyledHero, StyledArticles, StyledAnchor } from "./styles";
import { Footer } from "../../components/Footer";

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
        <StyledAnchor>
          <MoreAnchor label="More articles" />
        </StyledAnchor>
      </Section>
      <Section label="Latest project">
        <StyledAnchor>
          <MoreAnchor label="More projects" />
        </StyledAnchor>
      </Section>
      <Footer />
    </>
  );
};

export { HomePage };
