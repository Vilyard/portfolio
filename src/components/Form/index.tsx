import { Box, Button } from "@mui/material";
import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { CustomInputFields } from "../CustomInputFields";
import { LABELS } from "./utils/labels";
import { CustomFormContainer } from "@/styles";

export const CustomForm: FC = () => {
  const methods = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const inputFields = [
    {
      id: LABELS.nameId,
      label: LABELS.nameLabel,
    },
    {
      id: LABELS.emailId,
      label: LABELS.emailLabel,
    },
    {
      id: LABELS.msgId,
      label: LABELS.msgLabel,
      multiline: true,
    },
  ];

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <CustomFormContainer>
          {inputFields.map((field, i) => (
            <Box
              key={i}
              sx={{
                padding: 2,
              }}
            >
              <CustomInputFields
                key={field.id}
                id={field.id}
                control={methods.control}
                label={field.label}
                variant="outlined"
                multiline={field.multiline}
              />
            </Box>
          ))}
          <Button
            variant="contained"
            disableElevation={true}
            disableRipple={true}
            disableFocusRipple={true}
            type="submit"
          >
            Submit
          </Button>
        </CustomFormContainer>
      </form>
    </FormProvider>
  );
};
