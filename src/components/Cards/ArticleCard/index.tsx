import { Text } from "../../../design/data/Text";
import { Stack } from "../../../design/layout/Stack";

import GrowthLogo from "../../../assets/icons/growth.png";
import JavaScriptLogo from "../../../assets/icons/js.png";
import TypeScriptLogo from "../../../assets/icons/ts.png";
import FrontendLogo from "../../../assets/icons/frontend.png";
import ReactLogo from "../../../assets/icons/react.png";

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
    case "frontend":
      return FrontendLogo;
    case "javascript":
      return JavaScriptLogo;
    case "typescript":
      return TypeScriptLogo;
    case "react":
      return ReactLogo;
    default:
      return GrowthLogo;
  }
}

export { ArticleCard };
