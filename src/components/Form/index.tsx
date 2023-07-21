import { Button } from "@mui/material";
import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { CustomInputFields } from "../CustomInputFields";
import { LABELS } from "./utils/labels";

export const CustomForm: FC = () => {
  const methods = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <CustomInputFields
          id={LABELS.nameId}
          control={methods.control}
          label={LABELS.nameLabel}
          variant="outlined"
        />
        <CustomInputFields
          id={LABELS.emailId}
          control={methods.control}
          label={LABELS.emailLabel}
          variant="outlined"
        />
        <CustomInputFields
          id={LABELS.msgId}
          control={methods.control}
          label={LABELS.msgLabel}
          variant="outlined"
        />
        <Button
          variant="contained"
          disableElevation={true}
          disableRipple={true}
          disableFocusRipple={true}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </FormProvider>
  );
};
