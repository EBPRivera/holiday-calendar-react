import _ from "lodash";

const getErrors = (e) => {
  try {
    let errors = e.response.data;
    if (!(errors instanceof Object)) return [errors];
    else {
      return _.map(errors.errors, (error) => error);
    }
  } catch {
    return [e.message];
  }
};

export default getErrors;
