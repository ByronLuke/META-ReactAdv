import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Social Media-esque site",
    description:
      "a social media-esque website using a React frontend, with a backend powered by C# and .NET, and SQL tables for data storage. The site allows users to create profiles, log in, register new users, store and manage friends, explore job listings and company profiles, and will eventually feature an event page.",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Local Tex-African Coffee Shop",
    description:
      "A frontend-only website for a Tex-African coffee shop, blending the styles of Texas and Africa. The site showcases various coffee options and allows users to add their own custom blends. The entire site was developed using pure JavaScript, offering an interactive and culturally rich experience for coffee enthusiasts.🔥️",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Your favorite Movies",
    description:
      "A frontend app that enables users to manage their favorite movies list. The app allows users to add, edit, and delete movies, providing a simple and interactive way to keep track of personal movie preferences.",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Wolf Conservation",
    description:
      "User created an informational website using HTML5 and advanced CSS features. The site complements a research paper on the relocation of California gray wolves.",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
