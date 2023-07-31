import { Footer, Navbar, SectionContainer } from "@/components";
import {
  IntroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
} from "@/sections";
import { StyledHome, theme } from "@/styles";
import { SectionIdEnum } from "@/types";
import { ThemeProvider } from "@mui/material";

const sections = [
  {
    sectionId: SectionIdEnum.intro,
    component: <IntroSection />,
  },
  {
    sectionId: SectionIdEnum.about,
    component: <AboutSection />,
  },
  {
    sectionId: SectionIdEnum.skills,
    component: <SkillsSection />,
  },
  {
    sectionId: SectionIdEnum.projects,
    component: <ProjectsSection />,
  },
  {
    sectionId: SectionIdEnum.contact,
    component: <ContactSection />,
  },
];

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <StyledHome>
        <Navbar>
          {sections.map(({ component, sectionId }) => {
            return (
              <SectionContainer key={sectionId} sectionId={sectionId}>
                {component}
              </SectionContainer>
            );
          })}
        </Navbar>
        <Footer />
      </StyledHome>
    </ThemeProvider>
  );
}
