type TErrorFieldProps = {
  error: string;
};
const ErrorField = ({ error }: TErrorFieldProps) => {
  return (
    <span className="text-red-500" role="alert">
      {error}
    </span>
  );
};

export default ErrorField;
