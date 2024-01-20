import styled from "@emotion/styled";

const StyledArticle = styled.article`
  display: flex;
  gap: 16px;
`;

const StyledCover = styled.img`
  max-width: 250px;
  height: fit-content;
`;

const StyledMetadataContainer = styled.div``;

const StyledTitle = styled.p`
  margin: 0;
  font-weight: bold;
`;

const StyledDate = styled.p`
  margin: 0;
`;

export {
  StyledArticle,
  StyledCover,
  StyledMetadataContainer,
  StyledTitle,
  StyledDate,
};
