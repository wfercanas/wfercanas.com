import styled from "styled-components";

const StyledFooter = styled.footer``;

const StyledFooterContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StyledSocialMediaContainer = styled.div`
  background-color: var(--n400);
  color: var(--n10);
  border-top-right-radius: 16px;
  display: flex;
  justify-content: flex-end;
`;

const StyledSocialMediaList = styled.ul`
  width: 500px;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
`;

const StyledSocialMediaListItem = styled.li`
  margin: 0;
  cursor: default;
`;

const StyledSocialMediaAnchor = styled.a``;

const StyledSocialMediaIcon = styled.img`
  width: 32px;
`;

const StyledNameContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
`;

const StyledName = styled.p`
  text-align: end;
  width: 500px;
  color: var(--n900);
  font-size: var(--fs-h600);
  cursor: default;
`;

export {
  StyledFooter,
  StyledFooterContainer,
  StyledSocialMediaContainer,
  StyledSocialMediaList,
  StyledSocialMediaListItem,
  StyledSocialMediaAnchor,
  StyledSocialMediaIcon,
  StyledNameContainer,
  StyledName,
};
