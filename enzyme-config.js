/**
 * @Author: harsha
 * @Date:   2019-05-03T16:01:41+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-03T16:02:56+05:30
 */
import "babel-polyfill";

const Enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

global.window = {
  setTimeout: callback => {
    callback();
  },
  fetch: callback => {
    callback();
  }
};
