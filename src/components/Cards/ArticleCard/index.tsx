import {
  StyledArticle,
  StyledCover,
  StyledContentContainer,
  StyledExcerpt,
  StyledMetadataContainer,
  StyledReadMoreButton,
  StyledTitle,
  StyledDate,
} from "./style";

function ArticleCard() {
  return (
    <StyledArticle>
      <StyledCover src="https://res.cloudinary.com/wfercanas/image/upload/w_250/v1655517911/wfercanas.com/teamwork_nhdgpa.jpg" />
      <StyledContentContainer>
        <StyledMetadataContainer>
          <StyledTitle>Human biases in software development</StyledTitle>
          <StyledDate>Jul, 24, 2021</StyledDate>
        </StyledMetadataContainer>
        <StyledExcerpt>
          This article is a reaction to the “8 Cognitive Biases in Software
          Development” article written by Matthieu in its webpage The Valuable
          Dev. I plan to make a quick brief of the key topics of that article,
          highlight certain positions and debate some others. Let’s go!...
        </StyledExcerpt>
        <StyledReadMoreButton>Read more</StyledReadMoreButton>
      </StyledContentContainer>
    </StyledArticle>
  );
}

export { ArticleCard };
