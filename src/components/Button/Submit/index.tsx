import React from "react";

type TSubmitButtonProps = React.ComponentProps<"button">;
const SubmitButton = ({ children, ...props }: TSubmitButtonProps) => {
  return (
    <button
      {...props}
      type="submit"
      className="flex h-8 w-8 items-center justify-center rounded-r-md bg-black hover:bg-gray-800"
    >
      {children}
    </button>
  );
};

export default SubmitButton;
