import css from './ErrorMessage.module.css';

export interface ErrorMessageProps {
  message?: string;
  children?: React.ReactNode;
}

const DEFAULT_ERROR_MESSAGE = 'Something went wrong. Try again later!';

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message = DEFAULT_ERROR_MESSAGE,
  children,
}) => {
  return (
    <div className={css.errorMessageContainer}>
      <div className={css.messageText}>{message}</div>
      {children}
    </div>
  );
};

export default ErrorMessage;
