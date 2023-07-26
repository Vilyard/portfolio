import { TextField, styled } from "@mui/material";

export const StyledInputField = styled(TextField)(({ theme }) => ({
  margin: "0 auto",
  width: "50%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
