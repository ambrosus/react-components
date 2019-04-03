export { default as SVG } from './SVG';
export var formatDate = function formatDate(date) {
  var datetime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0 ".concat(minutes) : minutes;
  var strTime = "".concat(hours, ":").concat(minutes, " ").concat(ampm);
  return "".concat(date.getMonth() + 1, "/").concat(date.getDate(), "/").concat(date.getFullYear()).concat(datetime ? " ".concat(strTime) : '');
};
export var numWithCommas = function numWithCommas(val) {
  var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';
  return val ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter) : 0;
};