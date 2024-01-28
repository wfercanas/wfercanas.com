import { Text } from "../../../design/data/Text";
import { Stack } from "../../../design/layout/Stack";

import GrowthLogo from "../../../assets/icons/growth.png";

import { StyledArticle, StyledCover, StyledLink } from "./styles";

interface IArticleCard {
  title: string;
  category: string;
  slug: string;
  published_at: string;
  id: string;
}

function ArticleCard(props: IArticleCard) {
  const { title, category, slug, published_at } = props;
  return (
    <StyledArticle>
      <StyledLink to={`/article/${slug}`}>
        <Stack gap="16px">
          <StyledCover src={categoryLogo(category)} />
          <Stack direction="column">
            <Text as="h3">{title}</Text>
            <Text>
              {new Date(published_at).toLocaleDateString("en-EN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Text>
          </Stack>
        </Stack>
      </StyledLink>
    </StyledArticle>
  );
}

function categoryLogo(category: string) {
  switch (category) {
    case "growth":
      return GrowthLogo;
    default:
      return GrowthLogo;
  }
}

export { ArticleCard };
