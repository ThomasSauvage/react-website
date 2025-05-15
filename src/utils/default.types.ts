import { type FieldValues, type Path, type PathValue } from "react-hook-form";

/** Strict type for the name of a RHF attribute. Only accepts attributes that extend the third "Type" param */
export type RHFName<
  T extends FieldValues,
  Name extends Path<T>,
  Type
> = PathValue<T, Name> extends Type | null | undefined ? Name : never;
