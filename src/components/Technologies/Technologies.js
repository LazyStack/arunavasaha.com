import React from 'react';
import { DiFirebase, DiReact, DiAngularSimple } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
      <SectionDivider/>
      <SectionTitle main>Technologies</SectionTitle>
      <SectionText>
        Simple But Significant
      </SectionText>
      <List>
        <ListItem>
          <DiFirebase size="3rem">
          </DiFirebase>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Spring Boot <br/>
              AWS RDS <br />
              Microsoft SQL Server
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <DiReact size="3rem"/>
          
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              React
            </ListParagraph>
          </ListContainer>
        </ListItem>
  

        <ListItem>
            <DiAngularSimple size="3rem"/>
            <ListContainer>
              <ListTitle>Frameworks</ListTitle>
              <ListParagraph>
                ASP.NET 
              </ListParagraph>
            </ListContainer>
        </ListItem>
     
       </List>
  </Section>

);

export default Technologies;
