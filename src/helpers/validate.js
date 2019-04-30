/**
 * @Author: harsha
 * @Date:   2019-04-24T01:25:11+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-30T02:32:51+05:30
 */

/**
 * [validate Validate function]
 * @param  {[type]} values [description]
 * @return {[type]}        [description]
 */

export const validate = values => {
  const errors = {};
  if (!values.orgname) {
    errors.orgname = "Please Enter an Organisation name";
  }
  return errors;
};
