import { CustomForm } from "@/components";
import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { LABELS } from "./utils/labels";

export const ContactSection: FC = () => {
  return (
    <Box>
      <Typography>{LABELS.introLabel}</Typography>
      <CustomForm />
    </Box>
  );
};
