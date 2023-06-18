import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel :+91-9475595763">+91-9475595763</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Mail</LinkTitle>
          <LinkItem href="mailto :sarunava.official@gmail.com">sarunava.official@gmail.com</LinkItem>
        </LinkColumn>

      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>What separates design from art is that design is meant to be… functional.</Slogan>
        </CompanyContainer>
       <SocialContainer>
        <SocialIcons href = "https://github.com/LazyStack">
          <AiFillGithub size = "3rem"></AiFillGithub>
        </SocialIcons>
        <SocialIcons href = "https://www.linkedin.com/in/arunava-saha-3759a3164/">
          <AiFillLinkedin size = "3rem"></AiFillLinkedin>
        </SocialIcons>
        </SocialContainer>

      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
