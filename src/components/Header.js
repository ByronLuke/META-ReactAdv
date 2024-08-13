import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, IconButton } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: byron.tech30@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/ByronLuke",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/byronluke-pc/",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((social, index) => (
                <IconButton
                  key={index}
                  as="a"
                  href={social.url}
                  icon={<FontAwesomeIcon icon={social.icon} />}
                  isRound
                  variant="ghost"
                  colorScheme="whiteAlpha"
                />
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <Box
                as="a"
                href="#projects"
                onClick={handleClick("projects")}
                cursor="pointer"
                fontWeight="bold"
              >
                Projects
              </Box>
              <Box
                as="a"
                href="#contactme"
                onClick={handleClick("contactme")}
                cursor="pointer"
                fontWeight="bold"
              >
                Contact Me
              </Box>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
