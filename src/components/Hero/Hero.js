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
      A Backend Web Developer passionate about creating interactive applications and learning more frameworks.
      </SectionText>
      <SectionText><br></br></SectionText>
      <Button onClick ={() => window.location = 'https://google.com'} >Download Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;