/**
 * @Author: harsha
 * @Date:   2019-04-28T04:41:42+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-28T04:45:21+05:30
 */

const merge = require("webpack-merge");
const base = require("./webpack.base.js");

module.exports = merge(base, {
  mode: "production"
});
