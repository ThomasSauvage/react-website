import { Textarea, TextareaProps } from "@chakra-ui/react";
import {
  Control,
  FieldValues,
  Path,
  PathValue,
  UseFormTrigger,
  useController,
} from "react-hook-form";
import { RHFName } from "./default.types";

export interface TextareaRhfProps<T extends FieldValues, Name extends Path<T>>
  extends TextareaProps {
  control: Control<T>; // Controller attribute from the form
  name: RHFName<T, Name, string>; // Field name from the form

  // Set this for real time validation
  trigger?: UseFormTrigger<T>; // Form trigger validator
}

/** A simple input wrapper for real-time react-hook-form validation
 *
 * ! The `name` must correspond to a field of type `string | null | undefined` in the form
 * Otherwise, name will have the `never` type
 */
const TextareaRhf = <T extends FieldValues, Name extends Path<T>>(
  props: TextareaRhfProps<T, Name>
) => {
  const { control, name, trigger, ...rest } = props;

  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <Textarea
      {...rest}
      value={value ?? ""}
      onChange={(e) => {
        // Replace empty strings by null. This is needed in order for nullable fields to be sent as null instead of ''
        const newValue = e.target.value === "" ? null : e.target.value;

        onChange(newValue as PathValue<T, Path<T>>);
        trigger?.(name);
      }}
      isInvalid={error !== undefined}
    />
  );
};
export default TextareaRhf;
