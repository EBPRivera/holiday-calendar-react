import _ from "lodash";
import { Alert } from "react-bootstrap";
import classNames from "classnames";

const ErrorAlert = ({ className, errors }) => {
  return (
    <Alert className={classNames(className, "c-error-alert")} variant="danger">
      <ul>
        {_.map(errors, (error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
    </Alert>
  );
};

export default ErrorAlert;
