import { Box, Typography, styled } from "@mui/material";

export const StyledSkillContainer = styled(Box)({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  gap: 50,
});

export const StyledSkillOverview = styled(Typography)({});

export const StyledSkillMappedName = styled(Typography)({});

export const StyledSkillMappedDescription = styled(Typography)({});

export const StyledSkillMappedText = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 25,
  width: "100%",
  padding: 20,
});

export const StyledSkillMappedData = styled(Box)({
  display: "flex",
  padding: 20,
  border: "2px solid black",
  gap: 25,
  flexDirection: "column",
  width: "100%",
});
