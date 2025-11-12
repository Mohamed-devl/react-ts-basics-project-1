interface Iprops {
  message: string;
}
const ErrorMessage = ({ message }: Iprops) => {
  return message ? (
    <span className="text-red-500 text-sm block">{message}</span>
  ) : null;
};

export default ErrorMessage;
