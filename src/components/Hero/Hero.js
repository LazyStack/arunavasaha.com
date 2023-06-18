import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  
  <Section row nopadding>
    <LeftSection>
      <SectionText >
        Hi there I'm
      <SectionTitle main center>
        Arunava Saha
      </SectionTitle>
      
    </SectionText>
      <SectionText>
      I have 2.5 years of experience in backend development working on delivery inventory and tool management projects for one of the market leaders in Aerospace Corporation. Always passionate to learn and work on new technologies.
      </SectionText>
      <SectionText><br></br></SectionText>
      <Button onClick ={() => window.location = 'https://drive.google.com/file/d/15qjJZwy0FeLguBRlQppcgM7oaY9HUHVH/view?usp=drive_link'} >Download Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;