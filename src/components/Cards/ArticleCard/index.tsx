import {
  StyledArticle,
  StyledCover,
  StyledMetadataContainer,
  StyledTitle,
  StyledDate,
} from "./styles";

function ArticleCard() {
  return (
    <StyledArticle>
      <StyledCover src="https://res.cloudinary.com/wfercanas/image/upload/w_250/v1655517911/wfercanas.com/teamwork_nhdgpa.jpg" />
      <StyledMetadataContainer>
        <StyledTitle>Human biases in software development</StyledTitle>
        <StyledDate>Jul, 24, 2021</StyledDate>
      </StyledMetadataContainer>
    </StyledArticle>
  );
}

export { ArticleCard };
