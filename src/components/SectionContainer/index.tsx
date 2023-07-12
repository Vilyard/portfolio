import { FC } from "react";
import { SectionContainerProps } from "./types";
import { Box, Container } from "@mui/material";

export const SectionContainer: FC<SectionContainerProps> = ({
  children,
  sectionId,
}) => {
  return (
    <Container id={sectionId} key={sectionId}>
      <Box minHeight="100vh">{children}</Box>
    </Container>
  );
};
