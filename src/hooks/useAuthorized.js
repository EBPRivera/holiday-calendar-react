import _ from "lodash";
import { useSelector } from "react-redux";

const useAuthorized = () => {
  const { token } = useSelector((state) => state.user);

  return !_.isNull(token);
};

export default useAuthorized;
