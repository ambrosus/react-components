"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validate;

function capitalize(value) {
  return "".concat(value.charAt(0).toUpperCase()).concat(value.slice(1));
}

function validate(value, type) {
  var required = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var options = arguments.length > 3 ? arguments[3] : undefined;
  var pattern;

  if (required && typeof value === 'string' && !value.trim() || !value) {
    return "".concat(capitalize(type), " is required.");
  }

  switch (type) {
    case 'email':
      pattern = /^([0-9a-zA-Z]([-.+\w]*[0-9a-zA-Z])*@(([0-9a-zA-Z])+([-\w]*[0-9a-zA-Z])*\.)+[a-zA-Z]{2,9})$/;

      if (!pattern.test(value)) {
        return 'Email is invalid.';
      }

      return '';

    case 'password':
      pattern = /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}))/;

      if (!pattern.test(value)) {
        return 'Password is weak. Use at least 8 characters, one lowercase, one uppercase letter and a number.';
      }

      return '';

    default:
      return '';
  }
}