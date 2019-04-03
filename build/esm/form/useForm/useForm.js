import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useState, useEffect } from 'react';

function useForm(validate) {
  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var _useState3 = useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      errors = _useState4[0],
      setErrors = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      valid = _useState6[0],
      setValid = _useState6[1];

  useEffect(function () {
    setValid(Object.keys(errors).length === 0);
  }, [errors]);
  useEffect(function () {
    var _errors = validate(values);

    if (JSON.stringify(errors) !== JSON.stringify(_errors)) {
      setErrors(_errors);
    }
  }, [values]);

  var onBlur = function onBlur(event) {
    event.persist();

    var _values = _extends({}, values, _defineProperty({}, event.target.name, event.target.value));

    if (JSON.stringify(values) !== JSON.stringify(_values)) {
      setValues(_values);
    }

    var _errors = validate(_values);

    if (JSON.stringify(errors) !== JSON.stringify(_errors)) {
      setErrors(_errors);
    }
  };

  return {
    values: values,
    errors: errors,
    valid: valid,
    onBlur: onBlur
  };
}

export default useForm;