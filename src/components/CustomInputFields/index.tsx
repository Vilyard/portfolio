import { StyledInputField } from "@/styles";
import { FC } from "react";
import { ICustomInputFields } from "./types";
import { useController } from "react-hook-form";

export const CustomInputFields: FC<ICustomInputFields> = ({
  id,
  variant,
  label,
  control,
}) => {
  const { field } = useController({
    name: id,
    control,
  });
  return (
    <>
      <StyledInputField
        ref={field.ref}
        variant={variant}
        id={id}
        label={label}
      />
    </>
  );
};
