import { Button } from "@mui/material";
import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { CustomInputFields } from "../CustomInputFields";
import { LABELS } from "./utils/labels";
import { CustomFormContainer, CustomFormInputFieldsContainer } from "@/styles";
import { inputFields } from "./data";

export const CustomForm: FC = () => {
  const methods = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <CustomFormContainer>
          {inputFields.map((field, i) => (
            <CustomFormInputFieldsContainer key={i}>
              <CustomInputFields
                key={field.id}
                id={field.id}
                control={methods.control}
                label={field.label}
                variant="outlined"
                multiline={field.multiline}
              />
            </CustomFormInputFieldsContainer>
          ))}
          <Button
            variant="contained"
            disableElevation={true}
            disableRipple={true}
            disableFocusRipple={true}
            type="submit"
          >
            {LABELS.btnSubmit}
          </Button>
        </CustomFormContainer>
      </form>
    </FormProvider>
  );
};
