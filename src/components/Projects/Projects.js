import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { GridContainer } from './ProjectsStyles';
import { ExternalLinks } from "../Cards/CardStyles";

import { projects } from '../../constants/constants';
import ProjectCard from "../Cards/ProjectCard";

const fetchUserCountry = async () => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    const userIP = data.ip;
    const countryResponse = await fetch(
      `https://ipapi.co/${userIP}/languages/`
    );
    console.log(countryResponse);
    const country = await countryResponse.text();

    console.log(country);
  } catch (error) {
    console.error("Error fetching user country:", error);
  }
}

const Projects = () => {
  fetchUserCountry();
  return (
    <Section id="projects">
      <SectionDivider divider />
      <SectionTitle>Latest Projects</SectionTitle>
      <GridContainer>
        {projects
          .sort((a, b) => a.order - b.order)
          .map(card => <ProjectCard item={card} key={card.id} />)
          .slice(0, 3)
        }
      </GridContainer>
      <ExternalLinks href='/all-projects' className="link-to" title="See more projects">See more</ExternalLinks>
    </Section>
  )
};

export default Projects;