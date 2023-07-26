import {
  FooterContainer,
  FooterLinkContainer,
  FooterTyopgraphy,
  StyledGithubIcon,
  StyledLinkedInIcon,
} from "@/styles";
import Link from "next/link";
import { FC } from "react";
import { LABELS } from "./utils/labels";

export const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterTyopgraphy variant="body2">
        &copy; {new Date().getFullYear()} {LABELS.name}
      </FooterTyopgraphy>
      <FooterLinkContainer>
        <Link href="https://github.com/vilyard" target="_blank" rel="noopener">
          <StyledGithubIcon />
        </Link>
        <Link
          href="https://www.linkedin.com/in/vilyard/"
          target="_blank"
          rel="noopener"
        >
          <StyledLinkedInIcon />
        </Link>
      </FooterLinkContainer>
    </FooterContainer>
  );
};
