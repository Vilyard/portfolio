import { Box, styled } from "@mui/material";

export const CustomFormContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  border: "2px solid black",
  alignItems: "center",
  padding: 30,
});

export const CustomFormInputFieldsContainer = styled(Box)(({ theme }) => ({
  padding: 20,
  display: "flex",
  width: "50%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
