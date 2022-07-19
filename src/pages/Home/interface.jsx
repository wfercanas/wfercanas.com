import React from "react";

import { Section } from "../../components/Sections";
import { ArticleCard, HeroCard } from "../../components/Cards";
import { MoreAnchor } from "../../components/Anchors";

import {
  StyledPage,
  StyledHero,
  StyledArticles,
  StyledAnchor,
  StyledSpinnerContainer,
  StyledSpinner,
} from "./styles";

import spinner from "../../assets/icons/spinner.svg";

const HomePageUI = ({ articles, loading }) => {
  if (loading) {
    return (
      <StyledPage>
        <StyledSpinnerContainer>
          <StyledSpinner src={spinner} alt="Spinner" />
        </StyledSpinnerContainer>
      </StyledPage>
    );
  }

  return (
    <StyledPage>
      <Section label="Latest articles" divider={true}>
        <StyledHero>
          {articles.length > 0 && (
            <HeroCard
              title={articles[0].attributes.title}
              date={articles[0].attributes.published}
              alt={articles[0].attributes.cover.alt}
              image={articles[0].attributes.cover.url}
              figcaption={articles[0].attributes.cover.figcaption}
            />
          )}
        </StyledHero>
        <StyledArticles>
          {articles.length > 0 &&
            articles.map(
              (article, index) =>
                index !== 0 && (
                  <ArticleCard
                    key={article.id}
                    title={article.attributes.title}
                    date={article.attributes.published}
                    alt={article.attributes.cover.alt}
                    image={article.attributes.cover.url}
                    categories={article.attributes.categories.data}
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
    </StyledPage>
  );
};

export { HomePageUI };
