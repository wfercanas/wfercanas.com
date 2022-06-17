import React from "react";

import {
  StyledFooter,
  StyledFooterContainer,
  StyledSocialMediaContainer,
  StyledSocialMediaList,
  StyledSocialMediaListItem,
  StyledSocialMediaAnchor,
  StyledSocialMediaIcon,
  StyledNameContainer,
  StyledName,
} from "./styles";

import twitter from "../../../assets/icons/twitter.png";
import medium from "../../../assets/icons/medium.png";
import instagram from "../../../assets/icons/instagram.png";
import twitch from "../../../assets/icons/twitch.png";
import linkedin from "../../../assets/icons/linkedin.png";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterContainer>
        <StyledSocialMediaContainer>
          <StyledSocialMediaList>
            <StyledSocialMediaListItem>
              <StyledSocialMediaAnchor
                href="https://www.linkedin.com/in/wfercanas/"
                target="_blank"
              >
                <StyledSocialMediaIcon src={linkedin} alt="LinkedIn" />
              </StyledSocialMediaAnchor>
            </StyledSocialMediaListItem>
            <StyledSocialMediaListItem>
              <StyledSocialMediaAnchor
                href="https://twitter.com/wfercanas"
                target="_blank"
              >
                <StyledSocialMediaIcon src={twitter} alt="Twitter" />
              </StyledSocialMediaAnchor>
            </StyledSocialMediaListItem>
            <StyledSocialMediaListItem>
              <StyledSocialMediaAnchor
                href="https://medium.com/@wfercanas"
                target="_blank"
              >
                <StyledSocialMediaIcon src={medium} alt="Medium" />
              </StyledSocialMediaAnchor>
            </StyledSocialMediaListItem>
            <StyledSocialMediaListItem>
              <StyledSocialMediaAnchor
                href="https://www.instagram.com/wfercanas/"
                target="_blank"
              >
                <StyledSocialMediaIcon src={instagram} alt="Instagram" />
              </StyledSocialMediaAnchor>
            </StyledSocialMediaListItem>
            <StyledSocialMediaListItem>
              <StyledSocialMediaAnchor
                href="https://www.twitch.tv/wfercanas"
                target="_blank"
              >
                <StyledSocialMediaIcon src={twitch} alt="Twitch" />
              </StyledSocialMediaAnchor>
            </StyledSocialMediaListItem>
          </StyledSocialMediaList>
        </StyledSocialMediaContainer>
        <StyledNameContainer>
          <StyledName>wfercanas.com</StyledName>
        </StyledNameContainer>
      </StyledFooterContainer>
    </StyledFooter>
  );
};

export { Footer };
