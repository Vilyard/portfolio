import { CustomForm } from "@/components";
import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { LABELS } from "./utils/labels";
import { ContactContainer } from "@/styles/Contact.styled";

export const ContactSection: FC = () => {
  return (
    <ContactContainer>
      <Typography>{LABELS.introLabel}</Typography>
      <CustomForm />
    </ContactContainer>
  );
};
