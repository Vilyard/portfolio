import { SectionContainer } from "@/components";
import { Navbar } from "@/components/Navbar";
import {
  IntroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
} from "@/sections";
import { StyledHome } from "@/styles";
import { SectionIdEnum } from "@/types";

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
    </StyledHome>
  );
}
