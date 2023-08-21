import { StyledInputField } from "@/styles";
import { FC } from "react";
import { ICustomInputFields } from "./types";
import { useController } from "react-hook-form";

export const CustomInputFields: FC<ICustomInputFields> = ({
  id,
  variant,
  label,
  control,
  multiline,
}) => {
  const { field } = useController({
    name: id,
    control,
  });

  return (
    <StyledInputField
      ref={field.ref}
      value={field.value}
      variant={variant}
      id={id}
      label={label}
      InputLabelProps={{ shrink: true }}
      multiline={multiline}
    />
  );
};
