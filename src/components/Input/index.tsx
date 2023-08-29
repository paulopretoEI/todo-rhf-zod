import { cn } from "@utils/cn";
import React from "react";
import { FieldError } from "react-hook-form";

export type TInputProps = {
  error?: FieldError;
} & React.ComponentProps<"input">;
const Input = React.forwardRef<HTMLInputElement, TInputProps>(
  ({ error, ...props }, ref) => (
    <input
      {...props}
      ref={ref}
      aria-invalid={error ? "true" : "false"}
      aria-required={props.required ? "true" : "false"}
      className={cn(
        `h-8 w-full rounded-l-md border-2 border-r-0 border-black px-2 focus:outline-none`,
        props.className,
      )}
    />
  ),
);

export default Input;
