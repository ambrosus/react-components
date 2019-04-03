(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
	(global = global || self, factory(global['Ambrosus react components'] = {}, global.React, global.ReactDOM));
}(this, function (exports, React, ReactDOM) { 'use strict';

	var React__default = 'default' in React ? React['default'] : React;
	ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	function getCjsExportFromNamespace (n) {
		return n && n['default'] || n;
	}

	var _extends_1 = createCommonjsModule(function (module) {
	function _extends() {
	  module.exports = _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	module.exports = _extends;
	});

	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  }
	}

	var arrayWithoutHoles = _arrayWithoutHoles;

	function _iterableToArray(iter) {
	  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
	}

	var iterableToArray = _iterableToArray;

	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance");
	}

	var nonIterableSpread = _nonIterableSpread;

	function _toConsumableArray(arr) {
	  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
	}

	var toConsumableArray = _toConsumableArray;

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

	function _objectWithoutProperties(source, excluded) {
	  if (source == null) return {};
	  var target = objectWithoutPropertiesLoose(source, excluded);
	  var key, i;

	  if (Object.getOwnPropertySymbols) {
	    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

	    for (i = 0; i < sourceSymbolKeys.length; i++) {
	      key = sourceSymbolKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	      target[key] = source[key];
	    }
	  }

	  return target;
	}

	var objectWithoutProperties = _objectWithoutProperties;

	var SVG = function SVG(props) {
	  var src = props.src,
	      otherProps = objectWithoutProperties(props, ["src"]);

	  var Wrapper = props.wrapper || 'span';
	  return React__default.createElement(Wrapper, _extends_1({}, otherProps, {
	    dangerouslySetInnerHTML: {
	      __html: src
	    }
	  }));
	};

	var formatDate = function formatDate(date) {
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
	var numWithCommas = function numWithCommas(val) {
	  var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';
	  return val ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter) : 0;
	};

	var iconSpinner = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjZweCIgIGhlaWdodD0iMjZweCIgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0ibGRzLXJvbGxpbmciIHN0eWxlPSJiYWNrZ3JvdW5kOiBub25lOyI+CiAgICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSJub25lIiBuZy1hdHRyLXN0cm9rZT0ie3tjb25maWcuY29sb3J9fSIgbmctYXR0ci1zdHJva2Utd2lkdGg9Int7Y29uZmlnLndpZHRofX0iIG5nLWF0dHItcj0ie3tjb25maWcucmFkaXVzfX0iIG5nLWF0dHItc3Ryb2tlLWRhc2hhcnJheT0ie3tjb25maWcuZGFzaGFycmF5fX0iIHN0cm9rZT0iaW5oZXJpdCIgc3Ryb2tlLXdpZHRoPSI2IiByPSIzNyIgc3Ryb2tlLWRhc2hhcnJheT0iMTc0LjM1ODM5MjI3NDIzMzUyIDYwLjExOTQ2NDA5MTQxMTE3NCIgdHJhbnNmb3JtPSJyb3RhdGUoMjQ0LjM0NiA1MCA1MCkiPgogICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBjYWxjTW9kZT0ibGluZWFyIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjEuM3MiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KICAgIDwvY2lyY2xlPgo8L3N2Zz4=';

	var _ref = React.createElement(SVG, {
	  className: "spinner SVG",
	  src: iconSpinner
	});

	var Button = function Button(props) {
	  var label = props.label,
	      children = props.children,
	      icon = props.icon,
	      loading = props.loading,
	      className = props.className,
	      type = props.type,
	      disabled = props.disabled,
	      solid = props.solid,
	      outline = props.outline,
	      transparent = props.transparent,
	      primary = props.primary,
	      secondary = props.secondary,
	      light = props.light,
	      otherProps = objectWithoutProperties(props, ["label", "children", "icon", "loading", "className", "type", "disabled", "solid", "outline", "transparent", "primary", "secondary", "light"]);

	  var buttonType = ["".concat(solid && 'solid' || ''), "".concat(outline && 'outline' || ''), "".concat(transparent && 'transparent' || '')].filter(Boolean)[0];
	  var color = ["".concat(primary && 'primary' || ''), "".concat(secondary && 'secondary' || ''), "".concat(light && 'light' || '')].filter(Boolean)[0];
	  var options = ["".concat(loading && 'loading' || '')].filter(Boolean);
	  var classes = ['AMB-Button'].concat(toConsumableArray(options), [buttonType || 'solid', color || 'primary', "".concat(className || '').trim()]).join(' ').trim();
	  return React.createElement("button", _extends_1({}, otherProps, {
	    type: type || 'button',
	    disabled: loading || disabled,
	    className: classes
	  }), icon && React.createElement(SVG, {
	    className: "icon SVG",
	    src: icon
	  }), label, children, loading && _ref);
	};

	/**
	 * Copyright 2018 Ambrosus Inc.
	 * Email: tech@ambrosus.com
	 */

	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	var arrayWithHoles = _arrayWithHoles;

	function _iterableToArrayLimit(arr, i) {
	  var _arr = [];
	  var _n = true;
	  var _d = false;
	  var _e = undefined;

	  try {
	    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);

	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }

	  return _arr;
	}

	var iterableToArrayLimit = _iterableToArrayLimit;

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance");
	}

	var nonIterableRest = _nonIterableRest;

	function _slicedToArray(arr, i) {
	  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
	}

	var slicedToArray = _slicedToArray;

	var iconSuccess = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAyMCAxNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNzA3MTEgNi4yOTI4OUMxLjMxNjU4IDUuOTAyMzcgMC42ODM0MTcgNS45MDIzNyAwLjI5Mjg5MyA2LjI5Mjg5Qy0wLjA5NzYzMTEgNi42ODM0MiAtMC4wOTc2MzEgNy4zMTY1OCAwLjI5Mjg5MyA3LjcwNzExTDEuNzA3MTEgNi4yOTI4OVpNNyAxM0w2LjI5Mjg5IDEzLjcwNzFMNyAxNC40MTQyTDcuNzA3MTEgMTMuNzA3MUw3IDEzWk0xOS43MDcxIDEuNzA3MTFDMjAuMDk3NiAxLjMxNjU4IDIwLjA5NzYgMC42ODM0MTcgMTkuNzA3MSAwLjI5Mjg5M0MxOS4zMTY2IC0wLjA5NzYzMTEgMTguNjgzNCAtMC4wOTc2MzExIDE4LjI5MjkgMC4yOTI4OTNMMTkuNzA3MSAxLjcwNzExWk0wLjI5Mjg5MyA3LjcwNzExTDYuMjkyODkgMTMuNzA3MUw3LjcwNzExIDEyLjI5MjlMMS43MDcxMSA2LjI5Mjg5TDAuMjkyODkzIDcuNzA3MTFaTTcuNzA3MTEgMTMuNzA3MUwxMy43MDcxIDcuNzA3MTFMMTIuMjkyOSA2LjI5Mjg5TDYuMjkyODkgMTIuMjkyOUw3LjcwNzExIDEzLjcwNzFaTTEzLjcwNzEgNy43MDcxMUwxOS43MDcxIDEuNzA3MTFMMTguMjkyOSAwLjI5Mjg5M0wxMi4yOTI5IDYuMjkyODlMMTMuNzA3MSA3LjcwNzExWiIgZmlsbD0iIzQwRDY4NSIvPgo8L3N2Zz4=';

	var iconInfo = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0iIzMzMzMzMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMzIDIwQzMzIDI3LjE3OTcgMjcuMTc5NyAzMyAyMCAzM1YzNUMyOC4yODQzIDM1IDM1IDI4LjI4NDMgMzUgMjBIMzNaTTIwIDMzQzEyLjgyMDMgMzMgNyAyNy4xNzk3IDcgMjBINUM1IDI4LjI4NDMgMTEuNzE1NyAzNSAyMCAzNVYzM1pNNyAyMEM3IDEyLjgyMDMgMTIuODIwMyA3IDIwIDdWNUMxMS43MTU3IDUgNSAxMS43MTU3IDUgMjBIN1pNMjAgN0MyNy4xNzk3IDcgMzMgMTIuODIwMyAzMyAyMEgzNUMzNSAxMS43MTU3IDI4LjI4NDMgNSAyMCA1VjdaTTE5IDEyVjE2SDIxVjEySDE5Wk0xOSAxOFYyOC41SDIxVjE4SDE5WiIvPgo8L3N2Zz4=';

	var iconEyeOpen = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAzNCAxNSIgZmlsbD0iIzMzMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuMTg2MjY3IDcuNDE4NzZDLTAuMTM0NzQyIDcuODY4MTcgLTAuMDMwNjUwNyA4LjQ5MjcyIDAuNDE4NzYyIDguODEzNzNDMC44NjgxNzQgOS4xMzQ3NCAxLjQ5MjcyIDkuMDMwNjUgMS44MTM3MyA4LjU4MTI0TDAuMTg2MjY3IDcuNDE4NzZaTTMyLjE4NjMgOC41ODEyNEMzMi41MDczIDkuMDMwNjUgMzMuMTMxOCA5LjEzNDc0IDMzLjU4MTIgOC44MTM3M0MzNC4wMzA3IDguNDkyNzIgMzQuMTM0NyA3Ljg2ODE3IDMzLjgxMzcgNy40MTg3NkwzMi4xODYzIDguNTgxMjRaTTEgOEMxLjgxMzczIDguNTgxMjQgMS44MTM0NiA4LjU4MTYzIDEuODEzMiA4LjU4MTk5QzEuODEzMTQgOC41ODIwNyAxLjgxMjkgOC41ODI0MSAxLjgxMjc4IDguNTgyNThDMS44MTI1MyA4LjU4MjkyIDEuODEyMzYgOC41ODMxNSAxLjgxMjI3IDguNTgzMjhDMS44MTIwOCA4LjU4MzU0IDEuODEyMTkgOC41ODMzOSAxLjgxMjYgOC41ODI4M0MxLjgxMzQyIDguNTgxNyAxLjgxNTQ0IDguNTc4OTMgMS44MTg2NiA4LjU3NDU3QzEuODI1MTEgOC41NjU4NiAxLjgzNjM2IDguNTUwOCAxLjg1MjQ0IDguNTI5ODJDMS44ODQ2MiA4LjQ4Nzg1IDEuOTM2MTEgOC40MjIyMiAyLjAwNzEyIDguMzM2M0MyLjE0OTIgOC4xNjQ0IDIuMzY5MTQgNy45MTE2NSAyLjY2ODcgNy42MDQ3OUMzLjI2ODIgNi45OTA2NyA0LjE4MzgzIDYuMTYyNjMgNS40Mjk3IDUuMzMyMDVDNy45MTUzMiAzLjY3NDk3IDExLjcyNTMgMiAxNyAyVjBDMTEuMjc0NyAwIDcuMDg0NjggMS44MjUwMyA0LjMyMDMgMy42Njc5NUMyLjk0MTE3IDQuNTg3MzcgMS45MTkzIDUuNTA5MzMgMS4yMzc1NSA2LjIwNzcxQzAuODk2NDg3IDYuNTU3MSAwLjYzOTg2IDYuODUxMjIgMC40NjU1MzQgNy4wNjIxM0MwLjM3ODM0OCA3LjE2NzYyIDAuMzExNjY4IDcuMjUyMzkgMC4yNjUyMzIgNy4zMTI5NkMwLjI0MjAxMSA3LjM0MzI0IDAuMjIzODQzIDcuMzY3NDkgMC4yMTA2OTUgNy4zODUyN0MwLjIwNDEyMSA3LjM5NDE2IDAuMTk4ODAxIDcuNDAxNDMgMC4xOTQ3MzIgNy40MDcwM0MwLjE5MjY5NyA3LjQwOTgzIDAuMTkwOTc0IDcuNDEyMjEgMC4xODk1NjMgNy40MTQxN0MwLjE4ODg1OCA3LjQxNTE1IDAuMTg4MjMxIDcuNDE2MDIgMC4xODc2ODEgNy40MTY3OUMwLjE4NzQwNyA3LjQxNzE3IDAuMTg3MDUzIDcuNDE3NjYgMC4xODY5MTYgNy40MTc4NUMwLjE4NjU4MSA3LjQxODMyIDAuMTg2MjY3IDcuNDE4NzYgMSA4Wk0xNyAyQzIyLjI3NDcgMiAyNi4wODQ3IDMuNjc0OTcgMjguNTcwMyA1LjMzMjA1QzI5LjgxNjIgNi4xNjI2MyAzMC43MzE4IDYuOTkwNjcgMzEuMzMxMyA3LjYwNDc5QzMxLjYzMDkgNy45MTE2NSAzMS44NTA4IDguMTY0NCAzMS45OTI5IDguMzM2M0MzMi4wNjM5IDguNDIyMjIgMzIuMTE1NCA4LjQ4Nzg1IDMyLjE0NzYgOC41Mjk4MkMzMi4xNjM2IDguNTUwOCAzMi4xNzQ5IDguNTY1ODYgMzIuMTgxMyA4LjU3NDU3QzMyLjE4NDYgOC41Nzg5MyAzMi4xODY2IDguNTgxNyAzMi4xODc0IDguNTgyODNDMzIuMTg3OCA4LjU4MzM5IDMyLjE4NzkgOC41ODM1NCAzMi4xODc3IDguNTgzMjhDMzIuMTg3NiA4LjU4MzE1IDMyLjE4NzUgOC41ODI5MiAzMi4xODcyIDguNTgyNThDMzIuMTg3MSA4LjU4MjQxIDMyLjE4NjkgOC41ODIwNyAzMi4xODY4IDguNTgxOTlDMzIuMTg2NSA4LjU4MTYzIDMyLjE4NjMgOC41ODEyNCAzMyA4QzMzLjgxMzcgNy40MTg3NiAzMy44MTM0IDcuNDE4MzIgMzMuODEzMSA3LjQxNzg1QzMzLjgxMjkgNy40MTc2NiAzMy44MTI2IDcuNDE3MTcgMzMuODEyMyA3LjQxNjc5QzMzLjgxMTggNy40MTYwMiAzMy44MTExIDcuNDE1MTUgMzMuODEwNCA3LjQxNDE3QzMzLjgwOSA3LjQxMjIxIDMzLjgwNzMgNy40MDk4MyAzMy44MDUzIDcuNDA3MDNDMzMuODAxMiA3LjQwMTQzIDMzLjc5NTkgNy4zOTQxNiAzMy43ODkzIDcuMzg1MjdDMzMuNzc2MiA3LjM2NzQ5IDMzLjc1OCA3LjM0MzI0IDMzLjczNDggNy4zMTI5NkMzMy42ODgzIDcuMjUyMzkgMzMuNjIxNyA3LjE2NzYyIDMzLjUzNDUgNy4wNjIxM0MzMy4zNjAxIDYuODUxMjIgMzMuMTAzNSA2LjU1NzEgMzIuNzYyNCA2LjIwNzcxQzMyLjA4MDcgNS41MDkzMyAzMS4wNTg4IDQuNTg3MzcgMjkuNjc5NyAzLjY2Nzk1QzI2LjkxNTMgMS44MjUwMyAyMi43MjUzIDAgMTcgMFYyWk0yMCAxMEMyMCAxMS42NTY5IDE4LjY1NjkgMTMgMTcgMTNWMTVDMTkuNzYxNCAxNSAyMiAxMi43NjE0IDIyIDEwSDIwWk0xNyAxM0MxNS4zNDMxIDEzIDE0IDExLjY1NjkgMTQgMTBIMTJDMTIgMTIuNzYxNCAxNC4yMzg2IDE1IDE3IDE1VjEzWk0xNCAxMEMxNCA4LjM0MzE1IDE1LjM0MzEgNyAxNyA3VjVDMTQuMjM4NiA1IDEyIDcuMjM4NTggMTIgMTBIMTRaTTE3IDdDMTguNjU2OSA3IDIwIDguMzQzMTUgMjAgMTBIMjJDMjIgNy4yMzg1OCAxOS43NjE0IDUgMTcgNVY3WiIvPgo8L3N2Zz4=';

	var iconEyeClose = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAzNCAxNCIgZmlsbD0iIzMzMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMzLjgxMzcgMS41ODEyNEMzNC4xMzQ3IDEuMTMxODMgMzQuMDMwNyAwLjUwNzI3NiAzMy41ODEyIDAuMTg2MjY3QzMzLjEzMTggLTAuMTM0NzQyIDMyLjUwNzMgLTAuMDMwNjUwNyAzMi4xODYzIDAuNDE4NzYyTDMzLjgxMzcgMS41ODEyNFpNMS44MTM3MyAwLjQxODc2MkMxLjQ5MjcyIC0wLjAzMDY1MDcgMC44NjgxNzQgLTAuMTM0NzQyIDAuNDE4NzYyIDAuMTg2MjY3Qy0wLjAzMDY1MDcgMC41MDcyNzYgLTAuMTM0NzQyIDEuMTMxODMgMC4xODYyNjcgMS41ODEyNEwxLjgxMzczIDAuNDE4NzYyWk0xNiAxM0MxNiAxMy41NTIzIDE2LjQ0NzcgMTQgMTcgMTRDMTcuNTUyMyAxNCAxOCAxMy41NTIzIDE4IDEzSDE2Wk0yMi44IDcuNEMyMi40Njg2IDYuOTU4MTcgMjEuODQxOCA2Ljg2ODYzIDIxLjQgNy4yQzIwLjk1ODIgNy41MzEzNyAyMC44Njg2IDguMTU4MTcgMjEuMiA4LjZMMjIuOCA3LjRaTTI0LjIgMTIuNkMyNC41MzE0IDEzLjA0MTggMjUuMTU4MiAxMy4xMzE0IDI1LjYgMTIuOEMyNi4wNDE4IDEyLjQ2ODYgMjYuMTMxNCAxMS44NDE4IDI1LjggMTEuNEwyNC4yIDEyLjZaTTEyLjg5NDQgOC40NDcyQzEzLjE0MTQgNy45NTMyMiAxMi45NDEyIDcuMzUyNTUgMTIuNDQ3MiA3LjEwNTU3QzExLjk1MzIgNi44NTg1OCAxMS4zNTI1IDcuMDU4ODIgMTEuMTA1NiA3LjU1MjhMMTIuODk0NCA4LjQ0NzJaTTkuMTA1NjQgMTEuNTUyOEM4Ljg1ODY1IDEyLjA0NjggOS4wNTg4OSAxMi42NDc1IDkuNTUyODcgMTIuODk0NEMxMC4wNDY4IDEzLjE0MTQgMTAuNjQ3NSAxMi45NDEyIDEwLjg5NDUgMTIuNDQ3Mkw5LjEwNTY0IDExLjU1MjhaTTI3LjYgNS4yQzI3LjE1ODIgNC44Njg2MyAyNi41MzE0IDQuOTU4MTcgMjYuMiA1LjRDMjUuODY4NiA1Ljg0MTgzIDI1Ljk1ODIgNi40Njg2MyAyNi40IDYuOEwyNy42IDUuMlpNMzAuNCA5LjhDMzAuODQxOCAxMC4xMzE0IDMxLjQ2ODYgMTAuMDQxOCAzMS44IDkuNkMzMi4xMzE0IDkuMTU4MTcgMzIuMDQxOCA4LjUzMTM3IDMxLjYgOC4yTDMwLjQgOS44Wk03LjYgNi44QzguMDQxODMgNi40Njg2MyA4LjEzMTM3IDUuODQxODMgNy44IDUuNEM3LjQ2ODYzIDQuOTU4MTcgNi44NDE4MyA0Ljg2ODYzIDYuNCA1LjJMNy42IDYuOFpNMi40IDguMkMxLjk1ODE3IDguNTMxMzcgMS44Njg2MyA5LjE1ODE3IDIuMiA5LjZDMi41MzEzNyAxMC4wNDE4IDMuMTU4MTcgMTAuMTMxNCAzLjYgOS44TDIuNCA4LjJaTTMzIDFDMzIuMTg2MyAwLjQxODc2MiAzMi4xODY1IDAuNDE4Mzc1IDMyLjE4NjggMC40MTgwMTRDMzIuMTg2OSAwLjQxNzkyOSAzMi4xODcxIDAuNDE3NTk1IDMyLjE4NzIgMC40MTc0MjVDMzIuMTg3NSAwLjQxNzA4NCAzMi4xODc2IDAuNDE2ODQ5IDMyLjE4NzcgMC40MTY3MThDMzIuMTg3OSAwLjQxNjQ1NiAzMi4xODc4IDAuNDE2NjEgMzIuMTg3NCAwLjQxNzE3NUMzMi4xODY2IDAuNDE4MzA0IDMyLjE4NDYgMC40MjEwNzMgMzIuMTgxMyAwLjQyNTQyOUMzMi4xNzQ5IDAuNDM0MTQzIDMyLjE2MzYgMC40NDkyIDMyLjE0NzYgMC40NzAxODJDMzIuMTE1NCAwLjUxMjE1MiAzMi4wNjM5IDAuNTc3Nzc2IDMxLjk5MjkgMC42NjM2OTdDMzEuODUwOCAwLjgzNTU5NyAzMS42MzA5IDEuMDg4MzUgMzEuMzMxMyAxLjM5NTIxQzMwLjczMTggMi4wMDkzMyAyOS44MTYyIDIuODM3MzcgMjguNTcwMyAzLjY2Nzk1QzI2LjA4NDcgNS4zMjUwMyAyMi4yNzQ3IDcgMTcgN1Y5QzIyLjcyNTMgOSAyNi45MTUzIDcuMTc0OTcgMjkuNjc5NyA1LjMzMjA1QzMxLjA1ODggNC40MTI2MyAzMi4wODA3IDMuNDkwNjcgMzIuNzYyNCAyLjc5MjI5QzMzLjEwMzUgMi40NDI5IDMzLjM2MDEgMi4xNDg3OCAzMy41MzQ1IDEuOTM3ODdDMzMuNjIxNyAxLjgzMjM4IDMzLjY4ODMgMS43NDc2MSAzMy43MzQ4IDEuNjg3MDRDMzMuNzU4IDEuNjU2NzYgMzMuNzc2MiAxLjYzMjUxIDMzLjc4OTMgMS42MTQ3M0MzMy43OTU5IDEuNjA1ODQgMzMuODAxMiAxLjU5ODU3IDMzLjgwNTMgMS41OTI5N0MzMy44MDczIDEuNTkwMTcgMzMuODA5IDEuNTg3NzkgMzMuODEwNCAxLjU4NTgzQzMzLjgxMTEgMS41ODQ4NSAzMy44MTE4IDEuNTgzOTggMzMuODEyMyAxLjU4MzIxQzMzLjgxMjYgMS41ODI4MyAzMy44MTI5IDEuNTgyMzQgMzMuODEzMSAxLjU4MjE1QzMzLjgxMzQgMS41ODE2OCAzMy44MTM3IDEuNTgxMjQgMzMgMVpNMTcgN0MxMS43MjUzIDcgNy45MTUzMiA1LjMyNTAzIDUuNDI5NyAzLjY2Nzk1QzQuMTgzODMgMi44MzczNyAzLjI2ODIgMi4wMDkzMyAyLjY2ODcgMS4zOTUyMUMyLjM2OTE0IDEuMDg4MzUgMi4xNDkyIDAuODM1NTk3IDIuMDA3MTIgMC42NjM2OTdDMS45MzYxMSAwLjU3Nzc3NiAxLjg4NDYyIDAuNTEyMTUyIDEuODUyNDQgMC40NzAxODJDMS44MzYzNiAwLjQ0OTIgMS44MjUxMSAwLjQzNDE0MyAxLjgxODY2IDAuNDI1NDI5QzEuODE1NDQgMC40MjEwNzMgMS44MTM0MiAwLjQxODMwNCAxLjgxMjYgMC40MTcxNzVDMS44MTIxOSAwLjQxNjYxIDEuODEyMDggMC40MTY0NTYgMS44MTIyNyAwLjQxNjcxOEMxLjgxMjM2IDAuNDE2ODQ5IDEuODEyNTMgMC40MTcwODQgMS44MTI3OCAwLjQxNzQyNUMxLjgxMjkgMC40MTc1OTUgMS44MTMxNCAwLjQxNzkyOSAxLjgxMzIgMC40MTgwMTRDMS44MTM0NiAwLjQxODM3NSAxLjgxMzczIDAuNDE4NzYyIDEgMUMwLjE4NjI2NyAxLjU4MTI0IDAuMTg2NTgxIDEuNTgxNjggMC4xODY5MTYgMS41ODIxNUMwLjE4NzA1MyAxLjU4MjM0IDAuMTg3NDA3IDEuNTgyODMgMC4xODc2ODEgMS41ODMyMUMwLjE4ODIzMSAxLjU4Mzk4IDAuMTg4ODU4IDEuNTg0ODUgMC4xODk1NjMgMS41ODU4M0MwLjE5MDk3NCAxLjU4Nzc5IDAuMTkyNjk3IDEuNTkwMTcgMC4xOTQ3MzIgMS41OTI5N0MwLjE5ODgwMSAxLjU5ODU3IDAuMjA0MTIxIDEuNjA1ODQgMC4yMTA2OTUgMS42MTQ3M0MwLjIyMzg0MyAxLjYzMjUxIDAuMjQyMDExIDEuNjU2NzYgMC4yNjUyMzIgMS42ODcwNEMwLjMxMTY2OCAxLjc0NzYxIDAuMzc4MzQ4IDEuODMyMzggMC40NjU1MzQgMS45Mzc4N0MwLjYzOTg2IDIuMTQ4NzggMC44OTY0ODcgMi40NDI5IDEuMjM3NTUgMi43OTIyOUMxLjkxOTMgMy40OTA2NyAyLjk0MTE3IDQuNDEyNjMgNC4zMjAzIDUuMzMyMDVDNy4wODQ2OCA3LjE3NDk3IDExLjI3NDcgOSAxNyA5VjdaTTE2IDhWMTNIMThWOEgxNlpNMjEuMiA4LjZMMjQuMiAxMi42TDI1LjggMTEuNEwyMi44IDcuNEwyMS4yIDguNlpNMTEuMTA1NiA3LjU1MjhMOS4xMDU2NCAxMS41NTI4TDEwLjg5NDUgMTIuNDQ3MkwxMi44OTQ0IDguNDQ3MkwxMS4xMDU2IDcuNTUyOFpNMjYuNCA2LjhMMzAuNCA5LjhMMzEuNiA4LjJMMjcuNiA1LjJMMjYuNCA2LjhaTTYuNCA1LjJMMi40IDguMkwzLjYgOS44TDcuNiA2LjhMNi40IDUuMloiLz4KPC9zdmc+';

	var _ref$1 = React__default.createElement("div", {
	  className: "border"
	});

	var _ref2 = React__default.createElement(SVG, {
	  className: "SVG",
	  src: iconSuccess
	});

	var _ref3 = React__default.createElement(SVG, {
	  className: "SVG",
	  src: iconInfo
	});

	var Input = React__default.forwardRef(function (props, ref) {
	  var _useState = React.useState('text'),
	      _useState2 = slicedToArray(_useState, 2),
	      type = _useState2[0],
	      setType = _useState2[1];

	  var _useState3 = React.useState(false),
	      _useState4 = slicedToArray(_useState3, 2),
	      touched = _useState4[0],
	      setTouched = _useState4[1];

	  var inputRef = React.useRef(null);

	  var label = props.label,
	      check = props.check,
	      className = props.className,
	      value = props.value,
	      onChange = props.onChange,
	      onFocus = props.onFocus,
	      onBlur = props.onBlur,
	      error = props.error,
	      disabled = props.disabled,
	      light = props.light,
	      info = props.info,
	      placeholder = props.placeholder,
	      children = props.children,
	      name = props.name,
	      otherProps = objectWithoutProperties(props, ["label", "check", "className", "value", "onChange", "onFocus", "onBlur", "error", "disabled", "light", "info", "placeholder", "children", "name"]);

	  React.useEffect(function () {
	    return setType(otherProps.type || 'text');
	  }, []);

	  var togglePassword = function togglePassword() {
	    setType(type === 'text' ? 'password' : 'text');
	  };

	  var _onChange = function _onChange(event) {
	    if (onChange) {
	      onChange(event);
	    }
	  };

	  var _onFocus = function _onFocus(event) {
	    if (onFocus) {
	      onFocus(event);
	    }
	  };

	  var _onBlur = function _onBlur(event) {
	    setTouched(true);

	    if (onBlur) {
	      onBlur(event);
	    }
	  };

	  var classes = ['AMB-Input', "".concat(light && 'light' || ''), "".concat(disabled && 'disabled' || ''), "".concat(touched && !error && 'valid' || ''), "".concat(className || '').trim()].filter(Boolean);

	  if (error && touched) {
	    classes.push('error');
	  }

	  var _value = children && children.toString() || value;

	  var meta = {
	    info: info,
	    check: check && touched && !error && !!String(inputRef && inputRef.current && inputRef.current.value).trim(),
	    password: otherProps.type === 'password'
	  };
	  return React__default.createElement("label", _extends_1({
	    className: classes.join(' ').trim()
	  }, otherProps, {
	    ref: ref
	  }), label && React__default.createElement("span", {
	    className: "title"
	  }, label), React__default.createElement("div", {
	    className: "input"
	  }, React__default.createElement("input", {
	    ref: inputRef,
	    type: type,
	    value: _value,
	    onChange: _onChange,
	    onFocus: _onFocus,
	    onBlur: _onBlur,
	    placeholder: placeholder,
	    disabled: disabled,
	    name: name
	  }), _ref$1, (meta.info || meta.check || meta.password) && React__default.createElement("div", {
	    className: "meta"
	  }, meta.check && _ref2, meta.password && React__default.createElement(SVG, {
	    onClick: togglePassword,
	    className: "SVG",
	    src: type === 'password' ? iconEyeOpen : iconEyeClose
	  }), meta.info && React__default.createElement("div", {
	    className: "info"
	  }, _ref3, React__default.createElement("span", {
	    className: "message",
	    dangerouslySetInnerHTML: {
	      __html: info
	    }
	  })))), error && touched && React__default.createElement("p", {
	    className: "message"
	  }, error));
	});

	/**
	 * Copyright 2018 Ambrosus Inc.
	 * Email: tech@ambrosus.com
	 */

	var _ref$2 = React__default.createElement(SVG, {
	  className: "SVG",
	  src: iconSuccess
	});

	var _ref2$1 = React__default.createElement(SVG, {
	  className: "SVG",
	  src: iconInfo
	});

	var _ref3$1 = React__default.createElement("div", {
	  className: "border"
	});

	function Textarea(props) {
	  var _useState = React.useState(false),
	      _useState2 = slicedToArray(_useState, 2),
	      touched = _useState2[0],
	      setTouched = _useState2[1];

	  var inputRef = React.useRef(null);
	  var onFocus = React.useCallback(function () {
	    return setTouched(true);
	  }, [touched]);

	  var label = props.label,
	      check = props.check,
	      className = props.className,
	      name = props.name,
	      value = props.value,
	      onChange = props.onChange,
	      children = props.children,
	      error = props.error,
	      disabled = props.disabled,
	      light = props.light,
	      info = props.info,
	      otherProps = objectWithoutProperties(props, ["label", "check", "className", "name", "value", "onChange", "children", "error", "disabled", "light", "info"]);

	  var classes = ['AMB-Textarea', "".concat(light && 'light' || ''), "".concat(disabled && 'disabled' || ''), "".concat(touched && !error && 'valid' || ''), "".concat(className || '').trim()].filter(Boolean);

	  if (error && touched) {
	    classes.push('error');
	  }

	  var _value = children && children.toString() || value;

	  var meta = {
	    info: info,
	    check: check && touched && !error && !!String(inputRef && inputRef.current && inputRef.current.value).trim()
	  };
	  return React__default.createElement("label", _extends_1({
	    className: classes.join(' ').trim()
	  }, otherProps), React__default.createElement("div", {
	    className: "title"
	  }, React__default.createElement("span", null, label), (meta.info || meta.check) && React__default.createElement("div", {
	    className: "meta"
	  }, meta.check && _ref$2, meta.info && React__default.createElement("div", {
	    className: "info"
	  }, _ref2$1, React__default.createElement("span", {
	    className: "message",
	    dangerouslySetInnerHTML: {
	      __html: info
	    }
	  })))), React__default.createElement("div", {
	    className: "textarea"
	  }, React__default.createElement("textarea", {
	    ref: inputRef,
	    value: _value,
	    onChange: onChange,
	    onFocus: onFocus,
	    spellCheck: false,
	    disabled: disabled,
	    name: name
	  }), _ref3$1), error && touched && React__default.createElement("p", {
	    className: "message"
	  }, error));
	}

	/**
	 * Copyright 2018 Ambrosus Inc.
	 * Email: tech@ambrosus.com
	 */

	var _ref$3 = React__default.createElement(SVG, {
	  className: "SVG icon",
	  src: iconSuccess
	});

	var Checkbox = function Checkbox(props) {
	  var label = props.label,
	      className = props.className,
	      value = props.value,
	      disabled = props.disabled,
	      checked = props.checked,
	      onChange = props.onChange,
	      children = props.children,
	      light = props.light,
	      name = props.name,
	      otherProps = objectWithoutProperties(props, ["label", "className", "value", "disabled", "checked", "onChange", "children", "light", "name"]);

	  var classes = ['AMB-Checkbox', "".concat(light && 'light' || ''), "".concat(disabled && 'disabled' || ''), "".concat(className || '').trim()].filter(Boolean);
	  return React__default.createElement("div", _extends_1({
	    className: classes.join(' ').trim()
	  }, otherProps), React__default.createElement("label", null, React__default.createElement("div", {
	    className: "checkbox"
	  }, React__default.createElement("input", {
	    type: "checkbox",
	    value: value,
	    checked: checked,
	    onChange: onChange,
	    disabled: disabled,
	    name: name
	  }), _ref$3)), (children || label) && React__default.createElement("span", {
	    className: "label"
	  }, children || label));
	};

	/**
	 * Copyright 2018 Ambrosus Inc.
	 * Email: tech@ambrosus.com
	 */

	var _ref$4 = React__default.createElement("div", {
	  className: "switch"
	});

	var Switch = function Switch(props) {
	  var label = props.label,
	      className = props.className,
	      value = props.value,
	      name = props.name,
	      checked = props.checked,
	      disabled = props.disabled,
	      onChange = props.onChange,
	      children = props.children,
	      light = props.light,
	      otherProps = objectWithoutProperties(props, ["label", "className", "value", "name", "checked", "disabled", "onChange", "children", "light"]);

	  var classes = ['AMB-Switch', "".concat(light && 'light' || ''), "".concat(disabled && 'disabled' || ''), "".concat(className || '').trim()].filter(Boolean);
	  return React__default.createElement("div", _extends_1({
	    className: classes.join(' ').trim()
	  }, otherProps), React__default.createElement("label", null, React__default.createElement("div", {
	    className: "checkbox"
	  }, React__default.createElement("input", {
	    type: "checkbox",
	    value: value,
	    checked: checked,
	    onChange: onChange,
	    disabled: disabled,
	    name: name
	  }), _ref$4)), (children || label) && React__default.createElement("span", {
	    className: "label"
	  }, children || label));
	};

	/**
	 * Copyright 2018 Ambrosus Inc.
	 * Email: tech@ambrosus.com
	 */

	var _ref$5 = React__default.createElement("div", {
	  className: "radio"
	});

	var Radio = function Radio(props) {
	  var className = props.className,
	      name = props.name,
	      checked = props.checked,
	      light = props.light,
	      onChange = props.onChange,
	      value = props.value,
	      label = props.label,
	      children = props.children,
	      disabled = props.disabled,
	      otherProps = objectWithoutProperties(props, ["className", "name", "checked", "light", "onChange", "value", "label", "children", "disabled"]);

	  var classes = ['AMB-Radio', "".concat(className || '').trim(), "".concat(light && 'light' || ''), "".concat(disabled && 'disabled' || '')].filter(Boolean);
	  return React__default.createElement("label", _extends_1({
	    className: classes.join(' ').trim()
	  }, otherProps), React__default.createElement("input", {
	    type: "radio",
	    name: name,
	    value: value,
	    onChange: onChange,
	    disabled: disabled
	  }), _ref$5, React__default.createElement("span", {
	    className: "label"
	  }, children || label || value));
	};

	/**
	 * Copyright 2018 Ambrosus Inc.
	 * Email: tech@ambrosus.com
	 */

	var global$1 = (typeof global !== "undefined" ? global :
	            typeof self !== "undefined" ? self :
	            typeof window !== "undefined" ? window : {});

	if (typeof global$1.setTimeout === 'function') ;
	if (typeof global$1.clearTimeout === 'function') ;

	// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
	var performance = global$1.performance || {};
	var performanceNow =
	  performance.now        ||
	  performance.mozNow     ||
	  performance.msNow      ||
	  performance.oNow       ||
	  performance.webkitNow  ||
	  function(){ return (new Date()).getTime() };

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	var printWarning = function() {};

	{
	  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
	  var loggedTypeFailures = {};

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );

	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	var checkPropTypes_1 = checkPropTypes;

	var printWarning$1 = function() {};

	{
	  printWarning$1 = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret_1) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning$1(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      printWarning$1('Invalid argument supplied to oneOf, expected an instance of array.');
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.');
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning$1(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = objectAssign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes_1;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	var propTypes = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	{
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
	}
	});
	var propTypes_1 = propTypes.elementType;
	var propTypes_2 = propTypes.bool;
	var propTypes_3 = propTypes.func;
	var propTypes_4 = propTypes.object;
	var propTypes_5 = propTypes.oneOfType;
	var propTypes_6 = propTypes.element;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	function componentWillMount() {
	  // Call this.constructor.gDSFP to support sub-classes.
	  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
	  if (state !== null && state !== undefined) {
	    this.setState(state);
	  }
	}

	function componentWillReceiveProps(nextProps) {
	  // Call this.constructor.gDSFP to support sub-classes.
	  // Use the setState() updater to ensure state isn't stale in certain edge cases.
	  function updater(prevState) {
	    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
	    return state !== null && state !== undefined ? state : null;
	  }
	  // Binding "this" is important for shallow renderer support.
	  this.setState(updater.bind(this));
	}

	function componentWillUpdate(nextProps, nextState) {
	  try {
	    var prevProps = this.props;
	    var prevState = this.state;
	    this.props = nextProps;
	    this.state = nextState;
	    this.__reactInternalSnapshotFlag = true;
	    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
	      prevProps,
	      prevState
	    );
	  } finally {
	    this.props = prevProps;
	    this.state = prevState;
	  }
	}

	// React may warn about cWM/cWRP/cWU methods being deprecated.
	// Add a flag to suppress these warnings for this special case.
	componentWillMount.__suppressDeprecationWarning = true;
	componentWillReceiveProps.__suppressDeprecationWarning = true;
	componentWillUpdate.__suppressDeprecationWarning = true;

	function polyfill(Component) {
	  var prototype = Component.prototype;

	  if (!prototype || !prototype.isReactComponent) {
	    throw new Error('Can only polyfill class components');
	  }

	  if (
	    typeof Component.getDerivedStateFromProps !== 'function' &&
	    typeof prototype.getSnapshotBeforeUpdate !== 'function'
	  ) {
	    return Component;
	  }

	  // If new component APIs are defined, "unsafe" lifecycles won't be called.
	  // Error if any of these lifecycles are present,
	  // Because they would work differently between older and newer (16.3+) versions of React.
	  var foundWillMountName = null;
	  var foundWillReceivePropsName = null;
	  var foundWillUpdateName = null;
	  if (typeof prototype.componentWillMount === 'function') {
	    foundWillMountName = 'componentWillMount';
	  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
	    foundWillMountName = 'UNSAFE_componentWillMount';
	  }
	  if (typeof prototype.componentWillReceiveProps === 'function') {
	    foundWillReceivePropsName = 'componentWillReceiveProps';
	  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
	    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
	  }
	  if (typeof prototype.componentWillUpdate === 'function') {
	    foundWillUpdateName = 'componentWillUpdate';
	  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
	    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
	  }
	  if (
	    foundWillMountName !== null ||
	    foundWillReceivePropsName !== null ||
	    foundWillUpdateName !== null
	  ) {
	    var componentName = Component.displayName || Component.name;
	    var newApiName =
	      typeof Component.getDerivedStateFromProps === 'function'
	        ? 'getDerivedStateFromProps()'
	        : 'getSnapshotBeforeUpdate()';

	    throw Error(
	      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
	        componentName +
	        ' uses ' +
	        newApiName +
	        ' but also contains the following legacy lifecycles:' +
	        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
	        (foundWillReceivePropsName !== null
	          ? '\n  ' + foundWillReceivePropsName
	          : '') +
	        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
	        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
	        'https://fb.me/react-async-component-lifecycle-hooks'
	    );
	  }

	  // React <= 16.2 does not support static getDerivedStateFromProps.
	  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
	  // Newer versions of React will ignore these lifecycles if gDSFP exists.
	  if (typeof Component.getDerivedStateFromProps === 'function') {
	    prototype.componentWillMount = componentWillMount;
	    prototype.componentWillReceiveProps = componentWillReceiveProps;
	  }

	  // React <= 16.2 does not support getSnapshotBeforeUpdate.
	  // As a workaround, use cWU to invoke the new lifecycle.
	  // Newer versions of React will ignore that lifecycle if gSBU exists.
	  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
	    if (typeof prototype.componentDidUpdate !== 'function') {
	      throw new Error(
	        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
	      );
	    }

	    prototype.componentWillUpdate = componentWillUpdate;

	    var componentDidUpdate = prototype.componentDidUpdate;

	    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
	      prevProps,
	      prevState,
	      maybeSnapshot
	    ) {
	      // 16.3+ will not execute our will-update method;
	      // It will pass a snapshot value to did-update though.
	      // Older versions will require our polyfilled will-update value.
	      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
	      // Because for <= 15.x versions this might be a "prevContext" object.
	      // We also can't just check "__reactInternalSnapshot",
	      // Because get-snapshot might return a falsy value.
	      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
	      var snapshot = this.__reactInternalSnapshotFlag
	        ? this.__reactInternalSnapshot
	        : maybeSnapshot;

	      componentDidUpdate.call(this, prevProps, prevState, snapshot);
	    };
	  }

	  return Component;
	}

	var reactLifecyclesCompat_es = /*#__PURE__*/Object.freeze({
		polyfill: polyfill
	});

	var entry = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var mergeClassNames = function mergeClassNames() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  return args.reduce(function (classList, arg) {
	    return typeof arg === 'string' || arg instanceof Array ? classList.concat(arg) : classList;
	  }, []).filter(function (className) {
	    return className;
	  }).join(' ');
	};

	exports.default = mergeClassNames;
	});

	unwrapExports(entry);

	var dates = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getISOLocalDate = exports.getISOLocalMonth = exports.isWeekend = exports.getDecadeLabel = exports.getCenturyLabel = exports.getDaysInMonth = exports.getValueRange = exports.getRange = exports.getEndPrevious2 = exports.getEndPrevious = exports.getEnd = exports.getBeginNext2 = exports.getBeginPrevious2 = exports.getBeginNext = exports.getBeginPrevious = exports.getBegin = exports.getWeekNumber = exports.getDayRange = exports.getEndOfDay = exports.getBeginOfDay = exports.getBeginOfNextMonth = exports.getEndOfPreviousMonth = exports.getBeginOfPreviousMonth = exports.getMonthRange = exports.getBeginOfWeek = exports.getEndOfMonth = exports.getBeginOfMonth = exports.getBeginOfNextYear = exports.getEndOfPreviousYear = exports.getBeginOfPreviousYear = exports.getYearRange = exports.getEndOfYear = exports.getBeginOfYear = exports.getBeginOfNextDecade = exports.getEndOfPreviousDecade = exports.getBeginOfPreviousDecade = exports.getDecadeRange = exports.getEndOfDecade = exports.getBeginOfDecade = exports.getBeginOfDecadeYear = exports.getBeginOfNextCentury = exports.getEndOfPreviousCentury = exports.getBeginOfPreviousCentury = exports.getCenturyRange = exports.getEndOfCentury = exports.getBeginOfCentury = exports.getBeginOfCenturyYear = exports.getDayOfWeek = exports.getDay = exports.getMonthIndex = exports.getMonth = exports.getYear = void 0;

	function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

	function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

	function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

	function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

	function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

	function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

	function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

	function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

	var _map = _toConsumableArray(Array(7)).map(function (el, index) {
	  return index;
	}),
	    _map2 = _slicedToArray(_map, 7),
	    // eslint-disable-next-line no-unused-vars
	SUNDAY = _map2[0],
	    MONDAY = _map2[1],
	    TUESDAY = _map2[2],
	    WEDNESDAY = _map2[3],
	    THURSDAY = _map2[4],
	    FRIDAY = _map2[5],
	    SATURDAY = _map2[6];
	/* Simple getters - getting a property of a given point in time */


	var getYear = function getYear(date) {
	  if (date instanceof Date) {
	    return date.getFullYear();
	  }

	  if (typeof date === 'number') {
	    return date;
	  }

	  var year = parseInt(date, 10);

	  if (typeof date === 'string' && !isNaN(year)) {
	    return year;
	  }

	  throw new Error("Failed to get year from date: ".concat(date, "."));
	};

	exports.getYear = getYear;

	var getMonth = function getMonth(date) {
	  return date.getMonth() + 1;
	};

	exports.getMonth = getMonth;

	var getMonthIndex = function getMonthIndex(date) {
	  return date.getMonth();
	};

	exports.getMonthIndex = getMonthIndex;

	var getDay = function getDay(date) {
	  return date.getDate();
	};

	exports.getDay = getDay;

	var getDayOfWeek = function getDayOfWeek(date) {
	  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ISO 8601';
	  var weekday = date.getDay();

	  switch (calendarType) {
	    case 'ISO 8601':
	      // Shifts days of the week so that Monday is 0, Sunday is 6
	      return (weekday + 6) % 7;

	    case 'Arabic':
	      return (weekday + 1) % 7;

	    case 'Hebrew':
	    case 'US':
	      return weekday;

	    default:
	      throw new Error('Unsupported calendar type.');
	  }
	};
	/* Complex getters - getting a property somehow related to a given point in time */


	exports.getDayOfWeek = getDayOfWeek;

	var getBeginOfCenturyYear = function getBeginOfCenturyYear(date) {
	  var year = getYear(date) - 1;
	  return year + -year % 100 + 1;
	};

	exports.getBeginOfCenturyYear = getBeginOfCenturyYear;

	var getBeginOfCentury = function getBeginOfCentury(date) {
	  var beginOfCenturyYear = getBeginOfCenturyYear(date);
	  return new Date(beginOfCenturyYear, 0, 1);
	};

	exports.getBeginOfCentury = getBeginOfCentury;

	var getEndOfCentury = function getEndOfCentury(date) {
	  var beginOfCenturyYear = getBeginOfCenturyYear(date);
	  return new Date(beginOfCenturyYear + 100, 0, 1, 0, 0, 0, -1);
	};

	exports.getEndOfCentury = getEndOfCentury;

	var getCenturyRange = function getCenturyRange(date) {
	  return [getBeginOfCentury(date), getEndOfCentury(date)];
	};

	exports.getCenturyRange = getCenturyRange;

	var getBeginOfPreviousCentury = function getBeginOfPreviousCentury(date) {
	  var previousCenturyYear = getYear(date) - 100;
	  return getBeginOfCentury(previousCenturyYear);
	};

	exports.getBeginOfPreviousCentury = getBeginOfPreviousCentury;

	var getEndOfPreviousCentury = function getEndOfPreviousCentury(date) {
	  var previousCenturyYear = getYear(date) - 100;
	  return getEndOfCentury(previousCenturyYear);
	};

	exports.getEndOfPreviousCentury = getEndOfPreviousCentury;

	var getBeginOfNextCentury = function getBeginOfNextCentury(date) {
	  var nextCenturyYear = getYear(date) + 100;
	  return getBeginOfCentury(nextCenturyYear);
	};

	exports.getBeginOfNextCentury = getBeginOfNextCentury;

	var getBeginOfDecadeYear = function getBeginOfDecadeYear(date) {
	  var year = getYear(date) - 1;
	  return year + -year % 10 + 1;
	};

	exports.getBeginOfDecadeYear = getBeginOfDecadeYear;

	var getBeginOfDecade = function getBeginOfDecade(date) {
	  var beginOfDecadeYear = getBeginOfDecadeYear(date);
	  return new Date(beginOfDecadeYear, 0, 1);
	};

	exports.getBeginOfDecade = getBeginOfDecade;

	var getEndOfDecade = function getEndOfDecade(date) {
	  var beginOfDecadeYear = getBeginOfDecadeYear(date);
	  return new Date(beginOfDecadeYear + 10, 0, 1, 0, 0, 0, -1);
	};

	exports.getEndOfDecade = getEndOfDecade;

	var getDecadeRange = function getDecadeRange(date) {
	  return [getBeginOfDecade(date), getEndOfDecade(date)];
	};

	exports.getDecadeRange = getDecadeRange;

	var getBeginOfPreviousDecade = function getBeginOfPreviousDecade(date) {
	  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
	  var previousDecadeYear = getBeginOfDecadeYear(date) - offset;
	  return getBeginOfDecade(previousDecadeYear);
	};

	exports.getBeginOfPreviousDecade = getBeginOfPreviousDecade;

	var getEndOfPreviousDecade = function getEndOfPreviousDecade(date) {
	  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
	  var previousDecadeYear = getBeginOfDecadeYear(date) - offset;
	  return getEndOfDecade(previousDecadeYear);
	};

	exports.getEndOfPreviousDecade = getEndOfPreviousDecade;

	var getBeginOfNextDecade = function getBeginOfNextDecade(date) {
	  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
	  var nextDecadeYear = getBeginOfDecadeYear(date) + offset;
	  return getBeginOfDecade(nextDecadeYear);
	};
	/**
	 * Returns the beginning of a given year.
	 *
	 * @param {Date} date Date.
	 */


	exports.getBeginOfNextDecade = getBeginOfNextDecade;

	var getBeginOfYear = function getBeginOfYear(date) {
	  var year = getYear(date);
	  return new Date(year, 0, 1);
	};
	/**
	 * Returns the end of a given year.
	 *
	 * @param {Date} date Date.
	 */


	exports.getBeginOfYear = getBeginOfYear;

	var getEndOfYear = function getEndOfYear(date) {
	  var year = getYear(date);
	  return new Date(year + 1, 0, 1, 0, 0, 0, -1);
	};
	/**
	 * Returns an array with the beginning and the end of a given year.
	 *
	 * @param {Date} date Date.
	 */


	exports.getEndOfYear = getEndOfYear;

	var getYearRange = function getYearRange(date) {
	  return [getBeginOfYear(date), getEndOfYear(date)];
	};

	exports.getYearRange = getYearRange;

	var getBeginOfPreviousYear = function getBeginOfPreviousYear(date) {
	  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	  var previousYear = getYear(date) - offset;
	  return getBeginOfYear(previousYear);
	};

	exports.getBeginOfPreviousYear = getBeginOfPreviousYear;

	var getEndOfPreviousYear = function getEndOfPreviousYear(date) {
	  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	  var previousYear = getYear(date) - offset;
	  return getEndOfYear(previousYear);
	};

	exports.getEndOfPreviousYear = getEndOfPreviousYear;

	var getBeginOfNextYear = function getBeginOfNextYear(date) {
	  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	  var nextYear = getYear(date) + offset;
	  return getBeginOfYear(nextYear);
	};
	/**
	 * Returns the beginning of a given month.
	 *
	 * @param {Date} date Date.
	 */


	exports.getBeginOfNextYear = getBeginOfNextYear;

	var getBeginOfMonth = function getBeginOfMonth(date) {
	  var year = getYear(date);
	  var monthIndex = getMonthIndex(date);
	  return new Date(year, monthIndex, 1);
	};
	/**
	 * Returns the end of a given month.
	 *
	 * @param {Date} date Date.
	 */


	exports.getBeginOfMonth = getBeginOfMonth;

	var getEndOfMonth = function getEndOfMonth(date) {
	  var year = getYear(date);
	  var monthIndex = getMonthIndex(date);
	  return new Date(year, monthIndex + 1, 1, 0, 0, 0, -1);
	};
	/**
	 * Returns the beginning of a given week.
	 *
	 * @param {Date} date Date.
	 * @param {String} calendarType Calendar type. Can be ISO 8601 or US.
	 */


	exports.getEndOfMonth = getEndOfMonth;

	var getBeginOfWeek = function getBeginOfWeek(date) {
	  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ISO 8601';
	  var year = getYear(date);
	  var monthIndex = getMonthIndex(date);
	  var day = date.getDate() - getDayOfWeek(date, calendarType);
	  return new Date(year, monthIndex, day);
	};
	/**
	 * Returns an array with the beginning and the end of a given month.
	 *
	 * @param {Date} date Date.
	 */


	exports.getBeginOfWeek = getBeginOfWeek;

	var getMonthRange = function getMonthRange(date) {
	  return [getBeginOfMonth(date), getEndOfMonth(date)];
	};

	exports.getMonthRange = getMonthRange;

	var getDifferentMonth = function getDifferentMonth(date, offset) {
	  var year = getYear(date);
	  var previousMonthIndex = getMonthIndex(date) + offset;
	  return new Date(year, previousMonthIndex, 1);
	};

	var getBeginOfPreviousMonth = function getBeginOfPreviousMonth(date) {
	  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	  var previousMonth = getDifferentMonth(date, -offset);
	  return getBeginOfMonth(previousMonth);
	};

	exports.getBeginOfPreviousMonth = getBeginOfPreviousMonth;

	var getEndOfPreviousMonth = function getEndOfPreviousMonth(date) {
	  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	  var previousMonth = getDifferentMonth(date, -offset);
	  return getEndOfMonth(previousMonth);
	};

	exports.getEndOfPreviousMonth = getEndOfPreviousMonth;

	var getBeginOfNextMonth = function getBeginOfNextMonth(date) {
	  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	  var nextMonth = getDifferentMonth(date, offset);
	  return getBeginOfMonth(nextMonth);
	};

	exports.getBeginOfNextMonth = getBeginOfNextMonth;

	var getBeginOfDay = function getBeginOfDay(date) {
	  var year = getYear(date);
	  var monthIndex = getMonthIndex(date);
	  var day = getDay(date);
	  return new Date(year, monthIndex, day);
	};

	exports.getBeginOfDay = getBeginOfDay;

	var getEndOfDay = function getEndOfDay(date) {
	  var year = getYear(date);
	  var monthIndex = getMonthIndex(date);
	  var day = getDay(date);
	  return new Date(year, monthIndex, day + 1, 0, 0, 0, -1);
	};
	/**
	 * Returns an array with the beginning and the end of a given day.
	 *
	 * @param {Date} date Date.
	 */


	exports.getEndOfDay = getEndOfDay;

	var getDayRange = function getDayRange(date) {
	  return [getBeginOfDay(date), getEndOfDay(date)];
	};
	/**
	 * Gets week number according to ISO 8601 or US standard.
	 * In ISO 8601, Arabic and Hebrew week 1 is the one with January 4.
	 * In US calendar week 1 is the one with January 1.
	 *
	 * @param {Date} date Date.
	 * @param {String} calendarType Calendar type. Can be ISO 8601 or US.
	 */


	exports.getDayRange = getDayRange;

	var getWeekNumber = function getWeekNumber(date) {
	  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ISO 8601';
	  var calendarTypeForWeekNumber = calendarType === 'US' ? 'US' : 'ISO 8601';
	  var beginOfWeek = getBeginOfWeek(date, calendarTypeForWeekNumber);
	  var year = getYear(date) + 1;
	  var dayInWeekOne;
	  var beginOfFirstWeek; // Look for the first week one that does not come after a given date

	  do {
	    dayInWeekOne = new Date(year, 0, calendarTypeForWeekNumber === 'ISO 8601' ? 4 : 1);
	    beginOfFirstWeek = getBeginOfWeek(dayInWeekOne, calendarTypeForWeekNumber);
	    year -= 1;
	  } while (date - beginOfFirstWeek < 0);

	  return Math.round((beginOfWeek - beginOfFirstWeek) / (8.64e7 * 7)) + 1;
	};
	/**
	 * Returns the beginning of a given range.
	 *
	 * @param {String} rangeType Range type (e.g. 'day')
	 * @param {Date} date Date.
	 */


	exports.getWeekNumber = getWeekNumber;

	var getBegin = function getBegin(rangeType, date) {
	  switch (rangeType) {
	    case 'century':
	      return getBeginOfCentury(date);

	    case 'decade':
	      return getBeginOfDecade(date);

	    case 'year':
	      return getBeginOfYear(date);

	    case 'month':
	      return getBeginOfMonth(date);

	    case 'day':
	      return getBeginOfDay(date);

	    default:
	      throw new Error("Invalid rangeType: ".concat(rangeType));
	  }
	};

	exports.getBegin = getBegin;

	var getBeginPrevious = function getBeginPrevious(rangeType, date) {
	  switch (rangeType) {
	    case 'century':
	      return getBeginOfPreviousCentury(date);

	    case 'decade':
	      return getBeginOfPreviousDecade(date);

	    case 'year':
	      return getBeginOfPreviousYear(date);

	    case 'month':
	      return getBeginOfPreviousMonth(date);

	    default:
	      throw new Error("Invalid rangeType: ".concat(rangeType));
	  }
	};

	exports.getBeginPrevious = getBeginPrevious;

	var getBeginNext = function getBeginNext(rangeType, date) {
	  switch (rangeType) {
	    case 'century':
	      return getBeginOfNextCentury(date);

	    case 'decade':
	      return getBeginOfNextDecade(date);

	    case 'year':
	      return getBeginOfNextYear(date);

	    case 'month':
	      return getBeginOfNextMonth(date);

	    default:
	      throw new Error("Invalid rangeType: ".concat(rangeType));
	  }
	};

	exports.getBeginNext = getBeginNext;

	var getBeginPrevious2 = function getBeginPrevious2(rangeType, date) {
	  switch (rangeType) {
	    case 'decade':
	      return getBeginOfPreviousDecade(date, 100);

	    case 'year':
	      return getBeginOfPreviousYear(date, 10);

	    case 'month':
	      return getBeginOfPreviousMonth(date, 12);

	    default:
	      throw new Error("Invalid rangeType: ".concat(rangeType));
	  }
	};

	exports.getBeginPrevious2 = getBeginPrevious2;

	var getBeginNext2 = function getBeginNext2(rangeType, date) {
	  switch (rangeType) {
	    case 'decade':
	      return getBeginOfNextDecade(date, 100);

	    case 'year':
	      return getBeginOfNextYear(date, 10);

	    case 'month':
	      return getBeginOfNextMonth(date, 12);

	    default:
	      throw new Error("Invalid rangeType: ".concat(rangeType));
	  }
	};
	/**
	 * Returns the end of a given range.
	 *
	 * @param {String} rangeType Range type (e.g. 'day')
	 * @param {Date} date Date.
	 */


	exports.getBeginNext2 = getBeginNext2;

	var getEnd = function getEnd(rangeType, date) {
	  switch (rangeType) {
	    case 'century':
	      return getEndOfCentury(date);

	    case 'decade':
	      return getEndOfDecade(date);

	    case 'year':
	      return getEndOfYear(date);

	    case 'month':
	      return getEndOfMonth(date);

	    case 'day':
	      return getEndOfDay(date);

	    default:
	      throw new Error("Invalid rangeType: ".concat(rangeType));
	  }
	};

	exports.getEnd = getEnd;

	var getEndPrevious = function getEndPrevious(rangeType, date) {
	  switch (rangeType) {
	    case 'century':
	      return getEndOfPreviousCentury(date);

	    case 'decade':
	      return getEndOfPreviousDecade(date);

	    case 'year':
	      return getEndOfPreviousYear(date);

	    case 'month':
	      return getEndOfPreviousMonth(date);

	    default:
	      throw new Error("Invalid rangeType: ".concat(rangeType));
	  }
	};

	exports.getEndPrevious = getEndPrevious;

	var getEndPrevious2 = function getEndPrevious2(rangeType, date) {
	  switch (rangeType) {
	    case 'decade':
	      return getEndOfPreviousDecade(date, 100);

	    case 'year':
	      return getEndOfPreviousYear(date, 10);

	    case 'month':
	      return getEndOfPreviousMonth(date, 12);

	    default:
	      throw new Error("Invalid rangeType: ".concat(rangeType));
	  }
	};
	/**
	 * Returns an array with the beginning and the end of a given range.
	 *
	 * @param {String} rangeType Range type (e.g. 'day')
	 * @param {Date} date Date.
	 */


	exports.getEndPrevious2 = getEndPrevious2;

	var getRange = function getRange(rangeType, date) {
	  switch (rangeType) {
	    case 'century':
	      return getCenturyRange(date);

	    case 'decade':
	      return getDecadeRange(date);

	    case 'year':
	      return getYearRange(date);

	    case 'month':
	      return getMonthRange(date);

	    case 'day':
	      return getDayRange(date);

	    default:
	      throw new Error("Invalid rangeType: ".concat(rangeType));
	  }
	};
	/**
	 * Creates a range out of two values, ensuring they are in order and covering entire period ranges.
	 *
	 * @param {String} rangeType Range type (e.g. 'day')
	 * @param {Date} date1 First date.
	 * @param {Date} date2 Second date.
	 */


	exports.getRange = getRange;

	var getValueRange = function getValueRange(rangeType, date1, date2) {
	  var rawNextValue = [date1, date2].sort(function (a, b) {
	    return a - b;
	  });
	  return [getBegin(rangeType, rawNextValue[0]), getEnd(rangeType, rawNextValue[1])];
	};
	/**
	 * Returns a number of days in a month of a given date.
	 *
	 * @param {Date} date Date.
	 */


	exports.getValueRange = getValueRange;

	var getDaysInMonth = function getDaysInMonth(date) {
	  var year = getYear(date);
	  var monthIndex = getMonthIndex(date);
	  return new Date(year, monthIndex + 1, 0).getDate();
	};

	exports.getDaysInMonth = getDaysInMonth;

	var toYearLabel = function toYearLabel(_ref) {
	  var _ref2 = _slicedToArray(_ref, 2),
	      start = _ref2[0],
	      end = _ref2[1];

	  return "".concat(getYear(start), " \u2013 ").concat(getYear(end));
	};
	/**
	 * Returns a string labelling a century of a given date.
	 * For example, for 2017 it will return 2001-2100.
	 *
	 * @param {Date|String|Number} date Date or a year as a string or as a number.
	 */


	var getCenturyLabel = function getCenturyLabel(date) {
	  return toYearLabel(getCenturyRange(date));
	};
	/**
	 * Returns a string labelling a century of a given date.
	 * For example, for 2017 it will return 2011-2020.
	 *
	 * @param {Date|String|Number} date Date or a year as a string or as a number.
	 */


	exports.getCenturyLabel = getCenturyLabel;

	var getDecadeLabel = function getDecadeLabel(date) {
	  return toYearLabel(getDecadeRange(date));
	};
	/**
	 * Returns a boolean determining whether a given date is on Saturday or Sunday.
	 *
	 * @param {Date} date Date.
	 */


	exports.getDecadeLabel = getDecadeLabel;

	var isWeekend = function isWeekend(date) {
	  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ISO 8601';
	  var weekday = date.getDay();

	  switch (calendarType) {
	    case 'Arabic':
	    case 'Hebrew':
	      return weekday === FRIDAY || weekday === SATURDAY;

	    case 'ISO 8601':
	    case 'US':
	      return weekday === SATURDAY || weekday === SUNDAY;

	    default:
	      throw new Error('Unsupported calendar type.');
	  }
	};
	/**
	 * Returns local month in ISO-like format (YYYY-MM).
	 */


	exports.isWeekend = isWeekend;

	var getISOLocalMonth = function getISOLocalMonth(value) {
	  if (!value) {
	    return value;
	  }

	  var date = new Date(value);

	  if (isNaN(date.getTime())) {
	    throw new Error("Invalid date: ".concat(value));
	  }

	  var year = getYear(date);
	  var month = "0".concat(getMonth(date)).slice(-2);
	  return "".concat(year, "-").concat(month);
	};
	/**
	 * Returns local date in ISO-like format (YYYY-MM-DD).
	 */


	exports.getISOLocalMonth = getISOLocalMonth;

	var getISOLocalDate = function getISOLocalDate(value) {
	  if (!value) {
	    return value;
	  }

	  var date = new Date(value);

	  if (isNaN(date.getTime())) {
	    throw new Error("Invalid date: ".concat(value));
	  }

	  var year = getYear(date);
	  var month = "0".concat(getMonth(date)).slice(-2);
	  var day = "0".concat(getDay(date)).slice(-2);
	  return "".concat(year, "-").concat(month, "-").concat(day);
	};

	exports.getISOLocalDate = getISOLocalDate;
	});

	unwrapExports(dates);
	var dates_1 = dates.getISOLocalDate;
	var dates_2 = dates.getISOLocalMonth;
	var dates_3 = dates.isWeekend;
	var dates_4 = dates.getDecadeLabel;
	var dates_5 = dates.getCenturyLabel;
	var dates_6 = dates.getDaysInMonth;
	var dates_7 = dates.getValueRange;
	var dates_8 = dates.getRange;
	var dates_9 = dates.getEndPrevious2;
	var dates_10 = dates.getEndPrevious;
	var dates_11 = dates.getEnd;
	var dates_12 = dates.getBeginNext2;
	var dates_13 = dates.getBeginPrevious2;
	var dates_14 = dates.getBeginNext;
	var dates_15 = dates.getBeginPrevious;
	var dates_16 = dates.getBegin;
	var dates_17 = dates.getWeekNumber;
	var dates_18 = dates.getDayRange;
	var dates_19 = dates.getEndOfDay;
	var dates_20 = dates.getBeginOfDay;
	var dates_21 = dates.getBeginOfNextMonth;
	var dates_22 = dates.getEndOfPreviousMonth;
	var dates_23 = dates.getBeginOfPreviousMonth;
	var dates_24 = dates.getMonthRange;
	var dates_25 = dates.getBeginOfWeek;
	var dates_26 = dates.getEndOfMonth;
	var dates_27 = dates.getBeginOfMonth;
	var dates_28 = dates.getBeginOfNextYear;
	var dates_29 = dates.getEndOfPreviousYear;
	var dates_30 = dates.getBeginOfPreviousYear;
	var dates_31 = dates.getYearRange;
	var dates_32 = dates.getEndOfYear;
	var dates_33 = dates.getBeginOfYear;
	var dates_34 = dates.getBeginOfNextDecade;
	var dates_35 = dates.getEndOfPreviousDecade;
	var dates_36 = dates.getBeginOfPreviousDecade;
	var dates_37 = dates.getDecadeRange;
	var dates_38 = dates.getEndOfDecade;
	var dates_39 = dates.getBeginOfDecade;
	var dates_40 = dates.getBeginOfDecadeYear;
	var dates_41 = dates.getBeginOfNextCentury;
	var dates_42 = dates.getEndOfPreviousCentury;
	var dates_43 = dates.getBeginOfPreviousCentury;
	var dates_44 = dates.getCenturyRange;
	var dates_45 = dates.getEndOfCentury;
	var dates_46 = dates.getBeginOfCentury;
	var dates_47 = dates.getBeginOfCenturyYear;
	var dates_48 = dates.getDayOfWeek;
	var dates_49 = dates.getDay;
	var dates_50 = dates.getMonthIndex;
	var dates_51 = dates.getMonth;
	var dates_52 = dates.getYear;

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308,
	    NAN = 0 / 0;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Creates a function that invokes `func`, with the `this` binding and arguments
	 * of the created function, while it's called less than `n` times. Subsequent
	 * calls to the created function return the result of the last `func` invocation.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Function
	 * @param {number} n The number of calls at which `func` is no longer invoked.
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new restricted function.
	 * @example
	 *
	 * jQuery(element).on('click', _.before(5, addContactToList));
	 * // => Allows adding up to 4 contacts to the list.
	 */
	function before(n, func) {
	  var result;
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  n = toInteger(n);
	  return function() {
	    if (--n > 0) {
	      result = func.apply(this, arguments);
	    }
	    if (n <= 1) {
	      func = undefined;
	    }
	    return result;
	  };
	}

	/**
	 * Creates a function that is restricted to invoking `func` once. Repeat calls
	 * to the function return the value of the first invocation. The `func` is
	 * invoked with the `this` binding and arguments of the created function.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new restricted function.
	 * @example
	 *
	 * var initialize = _.once(createApplication);
	 * initialize();
	 * initialize();
	 * // => `createApplication` is invoked once
	 */
	function once(func) {
	  return before(2, func);
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;

	  return result === result ? (remainder ? result - remainder : result) : 0;
	}

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	var lodash_once = once;

	var entry$1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.getUserLocale = exports.getUserLocales = void 0;

	var _lodash = _interopRequireDefault(lodash_once);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

	function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

	function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

	function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

	var filterDuplicates = function filterDuplicates(arr) {
	  return arr.filter(function (el, index, self) {
	    return self.indexOf(el) === index;
	  });
	};

	var fixLowercaseProperties = function fixLowercaseProperties(arr) {
	  return arr.map(function (el) {
	    if (!el || el.indexOf('-') === -1 || el.toLowerCase() !== el) {
	      return el;
	    }

	    var splitEl = el.split('-');
	    return "".concat(splitEl[0], "-").concat(splitEl[1].toUpperCase());
	  });
	};

	var getUserLocales = (0, _lodash.default)(function () {
	  var languageList = [];

	  if (typeof window !== 'undefined') {
	    if (window.navigator.languages) {
	      languageList.push.apply(languageList, _toConsumableArray(window.navigator.languages));
	    }

	    if (window.navigator.language) {
	      languageList.push(window.navigator.language);
	    }

	    if (window.navigator.userLanguage) {
	      languageList.push(window.navigator.userLanguage);
	    }

	    if (window.navigator.browserLanguage) {
	      languageList.push(window.navigator.browserLanguage);
	    }

	    if (window.navigator.systemLanguage) {
	      languageList.push(window.navigator.systemLanguage);
	    }
	  }

	  languageList.push('en-US'); // Fallback

	  return fixLowercaseProperties(filterDuplicates(languageList));
	});
	exports.getUserLocales = getUserLocales;
	var getUserLocale = (0, _lodash.default)(function () {
	  return getUserLocales()[0];
	});
	exports.getUserLocale = getUserLocale;
	var _default = getUserLocale;
	exports.default = _default;
	});

	unwrapExports(entry$1);
	var entry_1 = entry$1.getUserLocale;
	var entry_2 = entry$1.getUserLocales;

	var dateFormatter = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.formatShortWeekday = exports.formatWeekday = exports.formatMonth = exports.formatMonthYear = exports.formatLongDate = exports.formatDate = void 0;

	var _getUserLocale = _interopRequireDefault(entry$1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var formatterCache = {};
	/**
	 * Gets Intl-based date formatter from formatter cache. If it doesn't exist in cache
	 * just yet, it will be created on the fly.
	 */

	var getFormatter = function getFormatter(locale, options) {
	  if (!locale) {
	    // Default parameter is not enough as it does not protect us from null values
	    // eslint-disable-next-line no-param-reassign
	    locale = (0, _getUserLocale.default)();
	  }

	  var stringifiedOptions = JSON.stringify(options);

	  if (!formatterCache[locale]) {
	    formatterCache[locale] = {};
	  }

	  if (!formatterCache[locale][stringifiedOptions]) {
	    formatterCache[locale][stringifiedOptions] = function (n) {
	      return n.toLocaleString(locale, options);
	    };
	  }

	  return formatterCache[locale][stringifiedOptions];
	};
	/**
	 * Changes the hour in a Date to ensure right date formatting even if DST is messed up.
	 * Workaround for bug in WebKit and Firefox with historical dates.
	 * For more details, see:
	 * https://bugs.chromium.org/p/chromium/issues/detail?id=750465
	 * https://bugzilla.mozilla.org/show_bug.cgi?id=1385643
	 *
	 * @param {Date} date Date.
	 */


	var toSafeHour = function toSafeHour(date) {
	  var safeDate = new Date(date);
	  return new Date(safeDate.setHours(12));
	};

	var formatDate = function formatDate(locale, date) {
	  return getFormatter(locale, {
	    day: 'numeric',
	    month: 'numeric',
	    year: 'numeric'
	  })(toSafeHour(date));
	};

	exports.formatDate = formatDate;

	var formatLongDate = function formatLongDate(locale, date) {
	  return getFormatter(locale, {
	    day: 'numeric',
	    month: 'long',
	    year: 'numeric'
	  })(toSafeHour(date));
	};

	exports.formatLongDate = formatLongDate;

	var formatMonthYear = function formatMonthYear(locale, date) {
	  return getFormatter(locale, {
	    month: 'long',
	    year: 'numeric'
	  })(toSafeHour(date));
	};

	exports.formatMonthYear = formatMonthYear;

	var formatMonth = function formatMonth(locale, date) {
	  return getFormatter(locale, {
	    month: 'long'
	  })(toSafeHour(date));
	};

	exports.formatMonth = formatMonth;

	var formatWeekday = function formatWeekday(locale, date) {
	  return getFormatter(locale, {
	    weekday: 'long'
	  })(toSafeHour(date));
	};

	exports.formatWeekday = formatWeekday;

	var formatShortWeekday = function formatShortWeekday(locale, date) {
	  return getFormatter(locale, {
	    weekday: 'short'
	  })(toSafeHour(date));
	};

	exports.formatShortWeekday = formatShortWeekday;
	});

	unwrapExports(dateFormatter);
	var dateFormatter_1 = dateFormatter.formatShortWeekday;
	var dateFormatter_2 = dateFormatter.formatWeekday;
	var dateFormatter_3 = dateFormatter.formatMonth;
	var dateFormatter_4 = dateFormatter.formatMonthYear;
	var dateFormatter_5 = dateFormatter.formatLongDate;
	var dateFormatter_6 = dateFormatter.formatDate;

	var propTypes$1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.tileProps = exports.tileGroupProps = exports.isView = exports.isClassName = exports.isViews = exports.isValue = exports.isMaxDate = exports.isMinDate = exports.isCalendarType = void 0;

	var _propTypes = _interopRequireDefault(propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	var calendarTypes = ['ISO 8601', 'US', 'Arabic', 'Hebrew'];
	var allViews = ['century', 'decade', 'year', 'month'];

	var isCalendarType = _propTypes.default.oneOf(calendarTypes);

	exports.isCalendarType = isCalendarType;

	var isMinDate = function isMinDate(props, propName, componentName) {
	  var minDate = props[propName];

	  if (minDate) {
	    if (!(minDate instanceof Date)) {
	      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(minDate), "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
	    }

	    var maxDate = props.maxDate;

	    if (maxDate && minDate > maxDate) {
	      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(minDate), "` supplied to `").concat(componentName, "`, minDate cannot be larger than maxDate."));
	    }
	  } // Everything is fine


	  return null;
	};

	exports.isMinDate = isMinDate;

	var isMaxDate = function isMaxDate(props, propName, componentName) {
	  var maxDate = props[propName];

	  if (maxDate) {
	    if (!(maxDate instanceof Date)) {
	      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(maxDate), "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
	    }

	    var minDate = props.minDate;

	    if (minDate && maxDate < minDate) {
	      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(maxDate), "` supplied to `").concat(componentName, "`, maxDate cannot be smaller than minDate."));
	    }
	  } // Everything is fine


	  return null;
	};

	exports.isMaxDate = isMaxDate;

	var isValue = _propTypes.default.oneOfType([_propTypes.default.instanceOf(Date), _propTypes.default.arrayOf(_propTypes.default.instanceOf(Date))]);

	exports.isValue = isValue;

	var isViews = _propTypes.default.arrayOf(_propTypes.default.oneOf(allViews));

	exports.isViews = isViews;

	var isClassName = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]);

	exports.isClassName = isClassName;

	var isView = function isView(props, propName, componentName) {
	  var view = props[propName];
	  var views = props.views;
	  var allowedViews = views || allViews;

	  if (allowedViews.indexOf(view) === -1) {
	    return new Error("Invalid prop `".concat(propName, "` of value `").concat(view, "` supplied to `").concat(componentName, "`, expected one of [").concat(['a', 'b', 'c', 'd', 'e'].map(function (a) {
	      return "\"".concat(a, "\"");
	    }).join(', '), "]."));
	  } // Everything is fine


	  return null;
	};

	exports.isView = isView;

	isView.isRequired = function (props, propName, componentName) {
	  var view = props[propName];

	  if (!view) {
	    return new Error("The prop `".concat(propName, "` is marked as required in `").concat(componentName, "`, but its value is `").concat(view, "`."));
	  }

	  return isView(props, propName, componentName);
	};

	var tileGroupProps = {
	  activeStartDate: _propTypes.default.instanceOf(Date).isRequired,
	  hover: _propTypes.default.instanceOf(Date),
	  locale: _propTypes.default.string,
	  maxDate: isMaxDate,
	  minDate: isMinDate,
	  onClick: _propTypes.default.func,
	  onMouseOver: _propTypes.default.func,
	  tileClassName: _propTypes.default.oneOfType([_propTypes.default.func, isClassName]),
	  tileContent: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.node]),
	  value: isValue,
	  valueType: _propTypes.default.string
	};
	exports.tileGroupProps = tileGroupProps;
	var tileProps = {
	  activeStartDate: _propTypes.default.instanceOf(Date).isRequired,
	  classes: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
	  date: _propTypes.default.instanceOf(Date).isRequired,
	  locale: _propTypes.default.string,
	  maxDate: isMaxDate,
	  minDate: isMinDate,
	  onClick: _propTypes.default.func,
	  onMouseOver: _propTypes.default.func,
	  style: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])),
	  tileClassName: _propTypes.default.oneOfType([_propTypes.default.func, isClassName]),
	  tileContent: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.node]),
	  tileDisabled: _propTypes.default.func
	};
	exports.tileProps = tileProps;
	});

	unwrapExports(propTypes$1);
	var propTypes_1$1 = propTypes$1.tileProps;
	var propTypes_2$1 = propTypes$1.tileGroupProps;
	var propTypes_3$1 = propTypes$1.isView;
	var propTypes_4$1 = propTypes$1.isClassName;
	var propTypes_5$1 = propTypes$1.isViews;
	var propTypes_6$1 = propTypes$1.isValue;
	var propTypes_7 = propTypes$1.isMaxDate;
	var propTypes_8 = propTypes$1.isMinDate;
	var propTypes_9 = propTypes$1.isCalendarType;

	var Navigation_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;

	var _react = _interopRequireWildcard(React__default);

	var _propTypes = _interopRequireDefault(propTypes);







	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var Navigation =
	/*#__PURE__*/
	function (_PureComponent) {
	  _inherits(Navigation, _PureComponent);

	  function Navigation() {
	    var _getPrototypeOf2;

	    var _this;

	    _classCallCheck(this, Navigation);

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Navigation)).call.apply(_getPrototypeOf2, [this].concat(args)));

	    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickPrevious", function () {
	      var _this$props = _this.props,
	          date = _this$props.activeStartDate,
	          view = _this$props.view,
	          setActiveStartDate = _this$props.setActiveStartDate;
	      setActiveStartDate((0, dates.getBeginPrevious)(view, date));
	    });

	    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickNext", function () {
	      var _this$props2 = _this.props,
	          date = _this$props2.activeStartDate,
	          view = _this$props2.view,
	          setActiveStartDate = _this$props2.setActiveStartDate;
	      setActiveStartDate((0, dates.getBeginNext)(view, date));
	    });

	    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickPrevious2", function () {
	      var _this$props3 = _this.props,
	          date = _this$props3.activeStartDate,
	          view = _this$props3.view,
	          setActiveStartDate = _this$props3.setActiveStartDate;
	      setActiveStartDate((0, dates.getBeginPrevious2)(view, date));
	    });

	    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickNext2", function () {
	      var _this$props4 = _this.props,
	          date = _this$props4.activeStartDate,
	          view = _this$props4.view,
	          setActiveStartDate = _this$props4.setActiveStartDate;
	      setActiveStartDate((0, dates.getBeginNext2)(view, date));
	    });

	    return _this;
	  }

	  _createClass(Navigation, [{
	    key: "render",
	    value: function render() {
	      var label = this.label;
	      var _this$props5 = this.props,
	          date = _this$props5.activeStartDate,
	          drillUp = _this$props5.drillUp,
	          navigationLabel = _this$props5.navigationLabel,
	          next2Label = _this$props5.next2Label,
	          nextLabel = _this$props5.nextLabel,
	          prev2Label = _this$props5.prev2Label,
	          prevLabel = _this$props5.prevLabel,
	          view = _this$props5.view;
	      var className = 'react-calendar__navigation';
	      return _react.default.createElement("div", {
	        className: className,
	        style: {
	          display: 'flex'
	        }
	      }, prev2Label !== null && view !== 'century' && _react.default.createElement("button", {
	        className: "".concat(className, "__arrow ").concat(className, "__prev2-button"),
	        disabled: this.prev2ButtonDisabled,
	        onClick: this.onClickPrevious2,
	        type: "button"
	      }, prev2Label), _react.default.createElement("button", {
	        className: "".concat(className, "__arrow ").concat(className, "__prev-button"),
	        disabled: this.prevButtonDisabled,
	        onClick: this.onClickPrevious,
	        type: "button"
	      }, prevLabel), _react.default.createElement("button", {
	        className: "react-calendar__navigation__label",
	        onClick: drillUp,
	        disabled: !this.drillUpAvailable,
	        style: {
	          flexGrow: 1
	        },
	        type: "button"
	      }, navigationLabel ? navigationLabel({
	        date: date,
	        view: view,
	        label: label
	      }) : label), _react.default.createElement("button", {
	        className: "".concat(className, "__arrow ").concat(className, "__next-button"),
	        disabled: this.nextButtonDisabled,
	        onClick: this.onClickNext,
	        type: "button"
	      }, nextLabel), next2Label !== null && view !== 'century' && _react.default.createElement("button", {
	        className: "".concat(className, "__arrow ").concat(className, "__next2-button"),
	        disabled: this.next2ButtonDisabled,
	        onClick: this.onClickNext2,
	        type: "button"
	      }, next2Label));
	    }
	  }, {
	    key: "drillUpAvailable",
	    get: function get() {
	      var _this$props6 = this.props,
	          view = _this$props6.view,
	          views = _this$props6.views;
	      return views.indexOf(view) > 0;
	    }
	  }, {
	    key: "prevButtonDisabled",
	    get: function get() {
	      var _this$props7 = this.props,
	          date = _this$props7.activeStartDate,
	          minDate = _this$props7.minDate,
	          view = _this$props7.view;
	      var previousActiveStartDate = (0, dates.getBeginPrevious)(view, date);

	      if (previousActiveStartDate.getFullYear() < 1000) {
	        return true;
	      }

	      var previousActiveEndDate = (0, dates.getEndPrevious)(view, date);
	      return minDate && minDate >= previousActiveEndDate;
	    }
	  }, {
	    key: "prev2ButtonDisabled",
	    get: function get() {
	      var _this$props8 = this.props,
	          date = _this$props8.activeStartDate,
	          minDate = _this$props8.minDate,
	          view = _this$props8.view;
	      var previousActiveStartDate = (0, dates.getBeginPrevious2)(view, date);

	      if (previousActiveStartDate.getFullYear() < 1000) {
	        return true;
	      }

	      var previousActiveEndDate = (0, dates.getEndPrevious2)(view, date);
	      return minDate && minDate >= previousActiveEndDate;
	    }
	  }, {
	    key: "nextButtonDisabled",
	    get: function get() {
	      var _this$props9 = this.props,
	          date = _this$props9.activeStartDate,
	          maxDate = _this$props9.maxDate,
	          view = _this$props9.view;
	      var nextActiveStartDate = (0, dates.getBeginNext)(view, date);
	      return maxDate && maxDate <= nextActiveStartDate;
	    }
	  }, {
	    key: "next2ButtonDisabled",
	    get: function get() {
	      var _this$props10 = this.props,
	          date = _this$props10.activeStartDate,
	          maxDate = _this$props10.maxDate,
	          view = _this$props10.view;
	      var nextActiveStartDate = (0, dates.getBeginNext2)(view, date);
	      return maxDate && maxDate <= nextActiveStartDate;
	    }
	  }, {
	    key: "label",
	    get: function get() {
	      var _this$props11 = this.props,
	          date = _this$props11.activeStartDate,
	          formatMonthYear = _this$props11.formatMonthYear,
	          locale = _this$props11.locale,
	          view = _this$props11.view;

	      switch (view) {
	        case 'century':
	          return (0, dates.getCenturyLabel)(date);

	        case 'decade':
	          return (0, dates.getDecadeLabel)(date);

	        case 'year':
	          return (0, dates.getYear)(date);

	        case 'month':
	          return formatMonthYear(locale, date);

	        default:
	          throw new Error("Invalid view: ".concat(view, "."));
	      }
	    }
	  }]);

	  return Navigation;
	}(_react.PureComponent);

	exports.default = Navigation;
	Navigation.defaultProps = {
	  formatMonthYear: dateFormatter.formatMonthYear,
	  next2Label: '»',
	  nextLabel: '›',
	  prev2Label: '«',
	  prevLabel: '‹'
	};
	Navigation.propTypes = {
	  activeStartDate: _propTypes.default.instanceOf(Date).isRequired,
	  drillUp: _propTypes.default.func.isRequired,
	  formatMonthYear: _propTypes.default.func,
	  locale: _propTypes.default.string,
	  maxDate: _propTypes.default.instanceOf(Date),
	  minDate: _propTypes.default.instanceOf(Date),
	  next2Label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
	  nextLabel: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
	  navigationLabel: _propTypes.default.func,
	  prev2Label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
	  prevLabel: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
	  setActiveStartDate: _propTypes.default.func.isRequired,
	  view: propTypes$1.isView.isRequired,
	  views: propTypes$1.isViews.isRequired
	};
	});

	unwrapExports(Navigation_1);

	var Flex_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;

	var _react = _interopRequireDefault(React__default);

	var _propTypes = _interopRequireDefault(propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

	function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

	var toPercent = function toPercent(num) {
	  return "".concat(num, "%");
	};

	var Flex = function Flex(_ref) {
	  var children = _ref.children,
	      className = _ref.className,
	      direction = _ref.direction,
	      count = _ref.count,
	      offset = _ref.offset,
	      style = _ref.style,
	      wrap = _ref.wrap,
	      otherProps = _objectWithoutProperties(_ref, ["children", "className", "direction", "count", "offset", "style", "wrap"]);

	  return _react.default.createElement("div", _extends({
	    className: className,
	    style: _objectSpread({
	      display: 'flex',
	      flexDirection: direction,
	      flexWrap: wrap ? 'wrap' : 'no-wrap'
	    }, style)
	  }, otherProps), _react.default.Children.map(children, function (child, index) {
	    return _react.default.cloneElement(child, _objectSpread({}, child.props, {
	      style: {
	        flexBasis: toPercent(100 / count),
	        maxWidth: toPercent(100 / count),
	        overflow: 'hidden',
	        marginLeft: offset && index === 0 ? toPercent(100 * offset / count) : null
	      }
	    }));
	  }));
	};

	Flex.propTypes = {
	  children: _propTypes.default.node,
	  className: _propTypes.default.string,
	  count: _propTypes.default.number.isRequired,
	  direction: _propTypes.default.string,
	  offset: _propTypes.default.number,
	  style: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])),
	  wrap: _propTypes.default.bool
	};
	var _default = Flex;
	exports.default = _default;
	});

	unwrapExports(Flex_1);

	var utils = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getTileClasses = exports.between = exports.doRangesOverlap = exports.isRangeWithinRange = exports.isValueWithinRange = exports.callIfDefined = exports.mergeFunctions = void 0;



	/**
	 * Returns a function that, when called, calls all the functions
	 * passed to it, applying its arguments to them.
	 *
	 * @param {Function[]} functions
	 */
	var mergeFunctions = function mergeFunctions() {
	  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
	    functions[_key] = arguments[_key];
	  }

	  return function () {
	    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    return functions.filter(Boolean).forEach(function (f) {
	      return f.apply(void 0, args);
	    });
	  };
	};
	/**
	 * Calls a function, if it's defined, with specified arguments
	 * @param {Function} fn
	 * @param {Object} args
	 */


	exports.mergeFunctions = mergeFunctions;

	var callIfDefined = function callIfDefined(fn) {
	  if (fn && typeof fn === 'function') {
	    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	      args[_key3 - 1] = arguments[_key3];
	    }

	    fn.apply(void 0, args);
	  }
	};

	exports.callIfDefined = callIfDefined;

	var isValueWithinRange = function isValueWithinRange(value, range) {
	  return range[0] <= value && range[1] >= value;
	};

	exports.isValueWithinRange = isValueWithinRange;

	var isRangeWithinRange = function isRangeWithinRange(greaterRange, smallerRange) {
	  return greaterRange[0] <= smallerRange[0] && greaterRange[1] >= smallerRange[1];
	};

	exports.isRangeWithinRange = isRangeWithinRange;

	var doRangesOverlap = function doRangesOverlap(range1, range2) {
	  return isValueWithinRange(range1[0], range2) || isValueWithinRange(range1[1], range2);
	};
	/**
	 * Returns a value no smaller than min and no larger than max.
	 *
	 * @param {*} value Value to return.
	 * @param {*} min Minimum return value.
	 * @param {*} max Maximum return value.
	 */


	exports.doRangesOverlap = doRangesOverlap;

	var between = function between(value, min, max) {
	  if (min && min > value) {
	    return min;
	  }

	  if (max && max < value) {
	    return max;
	  }

	  return value;
	};

	exports.between = between;

	var getTileClasses = function getTileClasses() {
	  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      value = _ref.value,
	      valueType = _ref.valueType,
	      date = _ref.date,
	      dateType = _ref.dateType,
	      hover = _ref.hover;

	  var className = 'react-calendar__tile';
	  var classes = [className];

	  if (!date) {
	    return classes;
	  }

	  if (!(date instanceof Array) && !dateType) {
	    throw new Error('getTileClasses(): Unable to get tile activity classes because one or more required arguments were not passed.');
	  }

	  var now = new Date();
	  var dateRange = date instanceof Array ? date : (0, dates.getRange)(dateType, date);

	  if (isValueWithinRange(now, dateRange)) {
	    classes.push("".concat(className, "--now"));
	  }

	  if (!value) {
	    return classes;
	  }

	  if (!(value instanceof Array) && !valueType) {
	    throw new Error('getTileClasses(): Unable to get tile activity classes because one or more required arguments were not passed.');
	  }

	  var valueRange = value instanceof Array ? value : (0, dates.getRange)(valueType, value);

	  if (isRangeWithinRange(valueRange, dateRange)) {
	    classes.push("".concat(className, "--active"));
	  } else if (doRangesOverlap(valueRange, dateRange)) {
	    classes.push("".concat(className, "--hasActive"));
	  } else if (hover && ( // Date before value
	  dateRange[1] < valueRange[0] && isRangeWithinRange([hover, valueRange[0]], dateRange) || // Date after value
	  dateRange[0] > valueRange[1] && isRangeWithinRange([valueRange[1], hover], dateRange))) {
	    classes.push("".concat(className, "--hover"));
	  }

	  var isRangeStart = isValueWithinRange(valueRange[0], dateRange);
	  var isRangeEnd = isValueWithinRange(valueRange[1], dateRange);

	  if (isRangeStart) {
	    classes.push("".concat(className, "--rangeStart"));
	  }

	  if (isRangeEnd) {
	    classes.push("".concat(className, "--rangeEnd"));
	  }

	  if (isRangeStart && isRangeEnd) {
	    classes.push("".concat(className, "--rangeBothEnds"));
	  }

	  return classes;
	};

	exports.getTileClasses = getTileClasses;
	});

	unwrapExports(utils);
	var utils_1 = utils.getTileClasses;
	var utils_2 = utils.between;
	var utils_3 = utils.doRangesOverlap;
	var utils_4 = utils.isRangeWithinRange;
	var utils_5 = utils.isValueWithinRange;
	var utils_6 = utils.callIfDefined;
	var utils_7 = utils.mergeFunctions;

	var TileGroup_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;

	var _react = _interopRequireDefault(React__default);

	var _propTypes = _interopRequireDefault(propTypes);

	var _Flex = _interopRequireDefault(Flex_1);





	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

	function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

	function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

	var TileGroup = function TileGroup(_ref) {
	  var className = _ref.className,
	      count = _ref.count,
	      dateTransform = _ref.dateTransform,
	      dateType = _ref.dateType,
	      end = _ref.end,
	      hover = _ref.hover,
	      offset = _ref.offset,
	      start = _ref.start,
	      step = _ref.step,
	      Tile = _ref.tile,
	      value = _ref.value,
	      valueType = _ref.valueType,
	      tileProps = _objectWithoutProperties(_ref, ["className", "count", "dateTransform", "dateType", "end", "hover", "offset", "start", "step", "tile", "value", "valueType"]);

	  var tiles = [];

	  for (var point = start; point <= end; point += step) {
	    var date = dateTransform(point);
	    tiles.push(_react.default.createElement(Tile, _extends({
	      classes: (0, utils.getTileClasses)({
	        value: value,
	        valueType: valueType,
	        date: date,
	        dateType: dateType,
	        hover: hover
	      }),
	      date: date,
	      point: point,
	      key: date.getTime()
	    }, tileProps)));
	  }

	  return _react.default.createElement(_Flex.default, {
	    className: className,
	    count: count,
	    offset: offset,
	    wrap: true
	  }, tiles);
	};

	TileGroup.propTypes = _objectSpread({}, propTypes$1.tileGroupProps, {
	  activeStartDate: _propTypes.default.instanceOf(Date),
	  count: _propTypes.default.number,
	  dateTransform: _propTypes.default.func.isRequired,
	  offset: _propTypes.default.number,
	  tile: _propTypes.default.func.isRequired,
	  step: _propTypes.default.number
	});
	TileGroup.defaultProps = {
	  count: 3,
	  step: 1
	};
	var _default = TileGroup;
	exports.default = _default;
	});

	unwrapExports(TileGroup_1);

	var Tile_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;

	var _react = _interopRequireWildcard(React__default);

	var _propTypes = _interopRequireDefault(propTypes);

	var _mergeClassNames = _interopRequireDefault(entry);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var Tile =
	/*#__PURE__*/
	function (_Component) {
	  _inherits(Tile, _Component);

	  function Tile() {
	    var _getPrototypeOf2;

	    var _this;

	    _classCallCheck(this, Tile);

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tile)).call.apply(_getPrototypeOf2, [this].concat(args)));

	    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

	    return _this;
	  }

	  _createClass(Tile, [{
	    key: "render",
	    value: function render() {
	      var _this$props = this.props,
	          activeStartDate = _this$props.activeStartDate,
	          children = _this$props.children,
	          classes = _this$props.classes,
	          date = _this$props.date,
	          formatAbbr = _this$props.formatAbbr,
	          locale = _this$props.locale,
	          maxDate = _this$props.maxDate,
	          maxDateTransform = _this$props.maxDateTransform,
	          minDate = _this$props.minDate,
	          minDateTransform = _this$props.minDateTransform,
	          onClick = _this$props.onClick,
	          onMouseOver = _this$props.onMouseOver,
	          style = _this$props.style,
	          tileDisabled = _this$props.tileDisabled,
	          view = _this$props.view;
	      var _this$state = this.state,
	          tileClassName = _this$state.tileClassName,
	          tileContent = _this$state.tileContent;
	      return _react.default.createElement("button", {
	        className: (0, _mergeClassNames.default)(classes, tileClassName),
	        disabled: minDate && minDateTransform(minDate) > date || maxDate && maxDateTransform(maxDate) < date || tileDisabled && tileDisabled({
	          activeStartDate: activeStartDate,
	          date: date,
	          view: view
	        }),
	        onClick: onClick && function () {
	          return onClick(date);
	        },
	        onMouseOver: onMouseOver && function () {
	          return onMouseOver(date);
	        },
	        onFocus: onMouseOver && function () {
	          return onMouseOver(date);
	        },
	        style: style,
	        type: "button"
	      }, formatAbbr ? _react.default.createElement("abbr", {
	        "aria-label": formatAbbr(locale, date)
	      }, children) : children, tileContent);
	    }
	  }], [{
	    key: "getDerivedStateFromProps",
	    value: function getDerivedStateFromProps(nextProps, prevState) {
	      var date = nextProps.date,
	          tileClassName = nextProps.tileClassName,
	          tileContent = nextProps.tileContent,
	          view = nextProps.view;
	      var nextState = {};

	      if (tileClassName !== prevState.tileClassNameProps) {
	        nextState.tileClassName = typeof tileClassName === 'function' ? tileClassName({
	          date: date,
	          view: view
	        }) : tileClassName;
	        nextState.tileClassNameProps = tileClassName;
	      }

	      if (tileContent !== prevState.tileContentProps) {
	        nextState.tileContent = typeof tileContent === 'function' ? tileContent({
	          date: date,
	          view: view
	        }) : tileContent;
	        nextState.tileContentProps = tileContent;
	      }

	      return nextState;
	    }
	  }]);

	  return Tile;
	}(_react.Component);

	exports.default = Tile;
	Tile.propTypes = _objectSpread({}, propTypes$1.tileProps, {
	  children: _propTypes.default.node.isRequired,
	  formatAbbr: _propTypes.default.func,
	  maxDateTransform: _propTypes.default.func.isRequired,
	  minDateTransform: _propTypes.default.func.isRequired
	});
	});

	unwrapExports(Tile_1);

	var Decade_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;

	var _react = _interopRequireDefault(React__default);

	var _propTypes = _interopRequireDefault(propTypes);

	var _Tile = _interopRequireDefault(Tile_1);





	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

	function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

	function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

	function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

	function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

	function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

	function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

	var className = 'react-calendar__century-view__decades__decade';

	var Decade = function Decade(_ref) {
	  var classes = _ref.classes,
	      point = _ref.point,
	      otherProps = _objectWithoutProperties(_ref, ["classes", "point"]);

	  return _react.default.createElement(_Tile.default, _extends({}, otherProps, {
	    classes: [].concat(_toConsumableArray(classes), [className]),
	    maxDateTransform: dates.getEndOfDecade,
	    minDateTransform: dates.getBeginOfDecade,
	    view: "century"
	  }), (0, dates.getDecadeLabel)(point));
	};

	Decade.propTypes = _objectSpread({}, propTypes$1.tileProps, {
	  point: _propTypes.default.number.isRequired
	});
	var _default = Decade;
	exports.default = _default;
	});

	unwrapExports(Decade_1);

	var Decades_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;

	var _react = _interopRequireWildcard(React__default);

	var _TileGroup = _interopRequireDefault(TileGroup_1);

	var _Decade = _interopRequireDefault(Decade_1);





	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	var Decades =
	/*#__PURE__*/
	function (_PureComponent) {
	  _inherits(Decades, _PureComponent);

	  function Decades() {
	    _classCallCheck(this, Decades);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Decades).apply(this, arguments));
	  }

	  _createClass(Decades, [{
	    key: "render",
	    value: function render() {
	      return _react.default.createElement(_TileGroup.default, _extends({}, this.props, {
	        className: "react-calendar__century-view__decades",
	        dateTransform: dates.getBeginOfDecade,
	        dateType: "decade",
	        end: this.end,
	        start: this.start,
	        step: 10,
	        tile: _Decade.default
	      }));
	    }
	  }, {
	    key: "start",
	    get: function get() {
	      var activeStartDate = this.props.activeStartDate;
	      return (0, dates.getBeginOfCenturyYear)(activeStartDate);
	    }
	  }, {
	    key: "end",
	    get: function get() {
	      return this.start + 99;
	    }
	  }]);

	  return Decades;
	}(_react.PureComponent);

	exports.default = Decades;
	Decades.propTypes = _objectSpread({}, propTypes$1.tileGroupProps);
	});

	unwrapExports(Decades_1);

	var CenturyView_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;

	var _react = _interopRequireWildcard(React__default);

	var _propTypes = _interopRequireDefault(propTypes);

	var _Decades = _interopRequireDefault(Decades_1);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	var CenturyView =
	/*#__PURE__*/
	function (_PureComponent) {
	  _inherits(CenturyView, _PureComponent);

	  function CenturyView() {
	    _classCallCheck(this, CenturyView);

	    return _possibleConstructorReturn(this, _getPrototypeOf(CenturyView).apply(this, arguments));
	  }

	  _createClass(CenturyView, [{
	    key: "renderDecades",
	    value: function renderDecades() {
	      return _react.default.createElement(_Decades.default, this.props);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react.default.createElement("div", {
	        className: "react-calendar__century-view"
	      }, this.renderDecades());
	    }
	  }]);

	  return CenturyView;
	}(_react.PureComponent);

	exports.default = CenturyView;
	CenturyView.propTypes = {
	  activeStartDate: _propTypes.default.instanceOf(Date).isRequired,
	  locale: _propTypes.default.string,
	  maxDate: propTypes$1.isMaxDate,
	  minDate: propTypes$1.isMinDate,
	  onChange: _propTypes.default.func,
	  setActiveRange: _propTypes.default.func,
	  value: propTypes$1.isValue,
	  valueType: _propTypes.default.string
	};
	});

	unwrapExports(CenturyView_1);

	var Year_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;

	var _react = _interopRequireDefault(React__default);

	var _propTypes = _interopRequireDefault(propTypes);

	var _Tile = _interopRequireDefault(Tile_1);





	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

	function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

	function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

	function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

	function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

	function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

	function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

	var className = 'react-calendar__decade-view__years__year';

	var Year = function Year(_ref) {
	  var classes = _ref.classes,
	      point = _ref.point,
	      otherProps = _objectWithoutProperties(_ref, ["classes", "point"]);

	  return _react.default.createElement(_Tile.default, _extends({}, otherProps, {
	    classes: [].concat(_toConsumableArray(classes), [className]),
	    maxDateTransform: dates.getEndOfYear,
	    minDateTransform: dates.getBeginOfYear,
	    view: "decade"
	  }), point);
	};

	Year.propTypes = _objectSpread({}, propTypes$1.tileProps, {
	  point: _propTypes.default.number.isRequired
	});
	var _default = Year;
	exports.default = _default;
	});

	unwrapExports(Year_1);

	var Years_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;

	var _react = _interopRequireWildcard(React__default);

	var _TileGroup = _interopRequireDefault(TileGroup_1);

	var _Year = _interopRequireDefault(Year_1);





	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	var Years =
	/*#__PURE__*/
	function (_PureComponent) {
	  _inherits(Years, _PureComponent);

	  function Years() {
	    _classCallCheck(this, Years);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Years).apply(this, arguments));
	  }

	  _createClass(Years, [{
	    key: "render",
	    value: function render() {
	      return _react.default.createElement(_TileGroup.default, _extends({}, this.props, {
	        className: "react-calendar__decade-view__years",
	        dateTransform: function dateTransform(year) {
	          return new Date(year, 0, 1);
	        },
	        dateType: "year",
	        end: this.end,
	        start: this.start,
	        tile: _Year.default
	      }));
	    }
	  }, {
	    key: "start",
	    get: function get() {
	      var activeStartDate = this.props.activeStartDate;
	      return (0, dates.getBeginOfDecadeYear)(activeStartDate);
	    }
	  }, {
	    key: "end",
	    get: function get() {
	      return this.start + 9;
	    }
	  }]);

	  return Years;
	}(_react.PureComponent);

	exports.default = Years;
	Years.propTypes = _objectSpread({}, propTypes$1.tileGroupProps);
	});

	unwrapExports(Years_1);

	var DecadeView_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;

	var _react = _interopRequireWildcard(React__default);

	var _propTypes = _interopRequireDefault(propTypes);

	var _Years = _interopRequireDefault(Years_1);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	var DecadeView =
	/*#__PURE__*/
	function (_PureComponent) {
	  _inherits(DecadeView, _PureComponent);

	  function DecadeView() {
	    _classCallCheck(this, DecadeView);

	    return _possibleConstructorReturn(this, _getPrototypeOf(DecadeView).apply(this, arguments));
	  }

	  _createClass(DecadeView, [{
	    key: "renderYears",
	    value: function renderYears() {
	      return _react.default.createElement(_Years.default, this.props);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react.default.createElement("div", {
	        className: "react-calendar__decade-view"
	      }, this.renderYears());
	    }
	  }]);

	  return DecadeView;
	}(_react.PureComponent);

	exports.default = DecadeView;
	DecadeView.propTypes = {
	  activeStartDate: _propTypes.default.instanceOf(Date).isRequired,
	  locale: _propTypes.default.string,
	  maxDate: propTypes$1.isMaxDate,
	  minDate: propTypes$1.isMinDate,
	  onChange: _propTypes.default.func,
	  setActiveRange: _propTypes.default.func,
	  value: propTypes$1.isValue,
	  valueType: _propTypes.default.string
	};
	});

	unwrapExports(DecadeView_1);

	var Month_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;

	var _react = _interopRequireDefault(React__default);

	var _propTypes = _interopRequireDefault(propTypes);

	var _Tile = _interopRequireDefault(Tile_1);







	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

	function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

	function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

	function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

	function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

	function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

	function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

	var className = 'react-calendar__year-view__months__month';

	var Month = function Month(_ref) {
	  var classes = _ref.classes,
	      date = _ref.date,
	      formatMonth = _ref.formatMonth,
	      locale = _ref.locale,
	      otherProps = _objectWithoutProperties(_ref, ["classes", "date", "formatMonth", "locale"]);

	  return _react.default.createElement(_Tile.default, _extends({}, otherProps, {
	    classes: [].concat(_toConsumableArray(classes), [className]),
	    date: date,
	    formatAbbr: dateFormatter.formatMonthYear,
	    locale: locale,
	    maxDateTransform: dates.getEndOfMonth,
	    minDateTransform: dates.getBeginOfMonth,
	    view: "year"
	  }), formatMonth(locale, date));
	};

	Month.defaultProps = {
	  formatMonth: dateFormatter.formatMonth
	};
	Month.propTypes = _objectSpread({}, propTypes$1.tileProps, {
	  formatMonth: _propTypes.default.func
	});
	var _default = Month;
	exports.default = _default;
	});

	unwrapExports(Month_1);

	var Months_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;

	var _react = _interopRequireWildcard(React__default);

	var _propTypes = _interopRequireDefault(propTypes);

	var _TileGroup = _interopRequireDefault(TileGroup_1);

	var _Month = _interopRequireDefault(Month_1);





	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var Months =
	/*#__PURE__*/
	function (_PureComponent) {
	  _inherits(Months, _PureComponent);

	  function Months() {
	    var _getPrototypeOf2;

	    var _this;

	    _classCallCheck(this, Months);

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Months)).call.apply(_getPrototypeOf2, [this].concat(args)));

	    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "start", 0);

	    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "end", 11);

	    return _this;
	  }

	  _createClass(Months, [{
	    key: "render",
	    value: function render() {
	      var _this2 = this;

	      return _react.default.createElement(_TileGroup.default, _extends({}, this.props, {
	        className: "react-calendar__year-view__months",
	        dateTransform: function dateTransform(monthIndex) {
	          return new Date(_this2.year, monthIndex, 1);
	        },
	        dateType: "month",
	        end: this.end,
	        start: this.start,
	        tile: _Month.default
	      }));
	    }
	  }, {
	    key: "year",
	    get: function get() {
	      var activeStartDate = this.props.activeStartDate;
	      return (0, dates.getYear)(activeStartDate);
	    }
	  }]);

	  return Months;
	}(_react.PureComponent);

	exports.default = Months;
	Months.propTypes = _objectSpread({}, propTypes$1.tileGroupProps, {
	  locale: _propTypes.default.string
	});
	});

	unwrapExports(Months_1);

	var YearView_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;

	var _react = _interopRequireWildcard(React__default);

	var _propTypes = _interopRequireDefault(propTypes);

	var _Months = _interopRequireDefault(Months_1);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	var YearView =
	/*#__PURE__*/
	function (_PureComponent) {
	  _inherits(YearView, _PureComponent);

	  function YearView() {
	    _classCallCheck(this, YearView);

	    return _possibleConstructorReturn(this, _getPrototypeOf(YearView).apply(this, arguments));
	  }

	  _createClass(YearView, [{
	    key: "renderMonths",
	    value: function renderMonths() {
	      return _react.default.createElement(_Months.default, this.props);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react.default.createElement("div", {
	        className: "react-calendar__year-view"
	      }, this.renderMonths());
	    }
	  }]);

	  return YearView;
	}(_react.PureComponent);

	exports.default = YearView;
	YearView.propTypes = {
	  activeStartDate: _propTypes.default.instanceOf(Date).isRequired,
	  formatMonth: _propTypes.default.func,
	  locale: _propTypes.default.string,
	  maxDate: propTypes$1.isMaxDate,
	  minDate: propTypes$1.isMinDate,
	  onChange: _propTypes.default.func,
	  setActiveRange: _propTypes.default.func,
	  value: propTypes$1.isValue,
	  valueType: _propTypes.default.string
	};
	});

	unwrapExports(YearView_1);

	var Day_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;

	var _react = _interopRequireDefault(React__default);

	var _propTypes = _interopRequireDefault(propTypes);

	var _Tile = _interopRequireDefault(Tile_1);







	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

	function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

	function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

	function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

	function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

	function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

	function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

	var className = 'react-calendar__month-view__days__day';

	var Day = function Day(_ref) {
	  var calendarType = _ref.calendarType,
	      classes = _ref.classes,
	      currentMonthIndex = _ref.currentMonthIndex,
	      date = _ref.date,
	      otherProps = _objectWithoutProperties(_ref, ["calendarType", "classes", "currentMonthIndex", "date"]);

	  return _react.default.createElement(_Tile.default, _extends({}, otherProps, {
	    classes: [].concat(_toConsumableArray(classes), [className, (0, dates.isWeekend)(date, calendarType) ? "".concat(className, "--weekend") : null, date.getMonth() !== currentMonthIndex ? "".concat(className, "--neighboringMonth") : null]),
	    date: date,
	    formatAbbr: dateFormatter.formatLongDate,
	    maxDateTransform: dates.getEndOfDay,
	    minDateTransform: dates.getBeginOfDay,
	    view: "month"
	  }), (0, dates.getDay)(date));
	};

	Day.propTypes = _objectSpread({}, propTypes$1.tileProps, {
	  currentMonthIndex: _propTypes.default.number.isRequired
	});
	var _default = Day;
	exports.default = _default;
	});

	unwrapExports(Day_1);

	var Days_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;

	var _react = _interopRequireWildcard(React__default);

	var _propTypes = _interopRequireDefault(propTypes);

	var _TileGroup = _interopRequireDefault(TileGroup_1);

	var _Day = _interopRequireDefault(Day_1);





	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

	function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

	function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	var Days =
	/*#__PURE__*/
	function (_PureComponent) {
	  _inherits(Days, _PureComponent);

	  function Days() {
	    _classCallCheck(this, Days);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Days).apply(this, arguments));
	  }

	  _createClass(Days, [{
	    key: "render",
	    value: function render() {
	      var _this = this;

	      var monthIndex = this.monthIndex;

	      var _this$props = this.props,
	          showFixedNumberOfWeeks = _this$props.showFixedNumberOfWeeks,
	          showNeighboringMonth = _this$props.showNeighboringMonth,
	          otherProps = _objectWithoutProperties(_this$props, ["showFixedNumberOfWeeks", "showNeighboringMonth"]);

	      return _react.default.createElement(_TileGroup.default, _extends({}, otherProps, {
	        className: "react-calendar__month-view__days",
	        count: 7,
	        dateTransform: function dateTransform(day) {
	          return new Date(_this.year, monthIndex, day);
	        },
	        dateType: "day",
	        end: this.end,
	        offset: this.offset,
	        start: this.start,
	        tile: _Day.default // Tile props
	        ,
	        currentMonthIndex: monthIndex
	      }));
	    }
	  }, {
	    key: "offset",
	    get: function get() {
	      var _this$props2 = this.props,
	          showFixedNumberOfWeeks = _this$props2.showFixedNumberOfWeeks,
	          showNeighboringMonth = _this$props2.showNeighboringMonth;

	      if (showFixedNumberOfWeeks || showNeighboringMonth) {
	        return 0;
	      }

	      var _this$props3 = this.props,
	          activeStartDate = _this$props3.activeStartDate,
	          calendarType = _this$props3.calendarType;
	      return (0, dates.getDayOfWeek)(activeStartDate, calendarType);
	    }
	    /**
	     * Defines on which day of the month the grid shall start. If we simply show current
	     * month, we obviously start on day one, but if showNeighboringMonth is set to
	     * true, we need to find the beginning of the week the first day of the month is in.
	     */

	  }, {
	    key: "start",
	    get: function get() {
	      var _this$props4 = this.props,
	          showFixedNumberOfWeeks = _this$props4.showFixedNumberOfWeeks,
	          showNeighboringMonth = _this$props4.showNeighboringMonth;

	      if (showFixedNumberOfWeeks || showNeighboringMonth) {
	        var _this$props5 = this.props,
	            activeStartDate = _this$props5.activeStartDate,
	            calendarType = _this$props5.calendarType;
	        return -(0, dates.getDayOfWeek)(activeStartDate, calendarType) + 1;
	      }

	      return 1;
	    }
	    /**
	     * Defines on which day of the month the grid shall end. If we simply show current
	     * month, we need to stop on the last day of the month, but if showNeighboringMonth
	     * is set to true, we need to find the end of the week the last day of the month is in.
	     */

	  }, {
	    key: "end",
	    get: function get() {
	      var _this$props6 = this.props,
	          activeStartDate = _this$props6.activeStartDate,
	          showFixedNumberOfWeeks = _this$props6.showFixedNumberOfWeeks,
	          showNeighboringMonth = _this$props6.showNeighboringMonth;
	      var daysInMonth = (0, dates.getDaysInMonth)(activeStartDate);

	      if (showFixedNumberOfWeeks) {
	        // Always show 6 weeks
	        return this.start + 6 * 7 - 1;
	      }

	      if (showNeighboringMonth) {
	        var year = this.year,
	            monthIndex = this.monthIndex;
	        var calendarType = this.props.calendarType;
	        var activeEndDate = new Date(year, monthIndex, daysInMonth);
	        return daysInMonth + (7 - (0, dates.getDayOfWeek)(activeEndDate, calendarType) - 1);
	      }

	      return daysInMonth;
	    }
	  }, {
	    key: "year",
	    get: function get() {
	      var activeStartDate = this.props.activeStartDate;
	      return (0, dates.getYear)(activeStartDate);
	    }
	  }, {
	    key: "monthIndex",
	    get: function get() {
	      var activeStartDate = this.props.activeStartDate;
	      return (0, dates.getMonthIndex)(activeStartDate);
	    }
	  }]);

	  return Days;
	}(_react.PureComponent);

	exports.default = Days;
	Days.propTypes = _objectSpread({
	  calendarType: propTypes$1.isCalendarType.isRequired,
	  showFixedNumberOfWeeks: _propTypes.default.bool,
	  showNeighboringMonth: _propTypes.default.bool
	}, propTypes$1.tileGroupProps);
	});

	unwrapExports(Days_1);

	var Weekdays_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;

	var _react = _interopRequireWildcard(React__default);

	var _propTypes = _interopRequireDefault(propTypes);

	var _Flex = _interopRequireDefault(Flex_1);







	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	var Weekdays =
	/*#__PURE__*/
	function (_Component) {
	  _inherits(Weekdays, _Component);

	  function Weekdays() {
	    _classCallCheck(this, Weekdays);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Weekdays).apply(this, arguments));
	  }

	  _createClass(Weekdays, [{
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(nextProps) {
	      var _this$props = this.props,
	          calendarType = _this$props.calendarType,
	          locale = _this$props.locale;
	      return nextProps.calendarType !== calendarType || nextProps.locale !== locale;
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this$props2 = this.props,
	          calendarType = _this$props2.calendarType,
	          formatShortWeekday = _this$props2.formatShortWeekday,
	          locale = _this$props2.locale;
	      var beginOfMonth = this.beginOfMonth,
	          year = this.year,
	          monthIndex = this.monthIndex;
	      var weekdays = [];

	      for (var weekday = 1; weekday <= 7; weekday += 1) {
	        var weekdayDate = new Date(year, monthIndex, weekday - (0, dates.getDayOfWeek)(beginOfMonth, calendarType));
	        var abbr = (0, dateFormatter.formatWeekday)(locale, weekdayDate);
	        weekdays.push(_react.default.createElement("div", {
	          className: "react-calendar__month-view__weekdays__weekday",
	          key: weekday,
	          style: {
	            flexGrow: 1
	          }
	        }, _react.default.createElement("abbr", {
	          title: abbr,
	          "aria-label": abbr
	        }, formatShortWeekday(locale, weekdayDate).replace('.', ''))));
	      }

	      return _react.default.createElement(_Flex.default, {
	        className: "react-calendar__month-view__weekdays",
	        count: 7
	      }, weekdays);
	    }
	  }, {
	    key: "beginOfMonth",
	    get: function get() {
	      var activeStartDate = this.props.activeStartDate;
	      return (0, dates.getBeginOfMonth)(activeStartDate);
	    }
	  }, {
	    key: "year",
	    get: function get() {
	      var beginOfMonth = this.beginOfMonth;
	      return (0, dates.getYear)(beginOfMonth);
	    }
	  }, {
	    key: "monthIndex",
	    get: function get() {
	      var beginOfMonth = this.beginOfMonth;
	      return (0, dates.getMonthIndex)(beginOfMonth);
	    }
	  }]);

	  return Weekdays;
	}(_react.Component);

	exports.default = Weekdays;
	Weekdays.defaultProps = {
	  formatShortWeekday: dateFormatter.formatShortWeekday
	};
	Weekdays.propTypes = {
	  calendarType: propTypes$1.isCalendarType.isRequired,
	  formatShortWeekday: _propTypes.default.func,
	  locale: _propTypes.default.string,
	  activeStartDate: _propTypes.default.instanceOf(Date).isRequired
	};
	});

	unwrapExports(Weekdays_1);

	var WeekNumber_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;

	var _react = _interopRequireDefault(React__default);

	var _propTypes = _interopRequireDefault(propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var WeekNumber = function WeekNumber(_ref) {
	  var date = _ref.date,
	      onClickWeekNumber = _ref.onClickWeekNumber,
	      weekNumber = _ref.weekNumber;
	  return onClickWeekNumber ? _react.default.createElement("button", {
	    className: "react-calendar__tile",
	    onClick: function onClick() {
	      return onClickWeekNumber(weekNumber, date);
	    },
	    style: {
	      flexGrow: 1
	    },
	    type: "button"
	  }, _react.default.createElement("span", null, weekNumber)) : _react.default.createElement("div", {
	    className: "react-calendar__tile",
	    style: {
	      flexGrow: 1
	    }
	  }, _react.default.createElement("span", null, weekNumber));
	};

	WeekNumber.propTypes = {
	  date: _propTypes.default.instanceOf(Date).isRequired,
	  onClickWeekNumber: _propTypes.default.func,
	  weekNumber: _propTypes.default.number.isRequired
	};
	var _default = WeekNumber;
	exports.default = _default;
	});

	unwrapExports(WeekNumber_1);

	var WeekNumbers_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;

	var _react = _interopRequireWildcard(React__default);

	var _propTypes = _interopRequireDefault(propTypes);

	var _WeekNumber = _interopRequireDefault(WeekNumber_1);

	var _Flex = _interopRequireDefault(Flex_1);





	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	var WeekNumbers =
	/*#__PURE__*/
	function (_PureComponent) {
	  _inherits(WeekNumbers, _PureComponent);

	  function WeekNumbers() {
	    _classCallCheck(this, WeekNumbers);

	    return _possibleConstructorReturn(this, _getPrototypeOf(WeekNumbers).apply(this, arguments));
	  }

	  _createClass(WeekNumbers, [{
	    key: "render",
	    value: function render() {
	      var dates = this.dates,
	          numberOfWeeks = this.numberOfWeeks,
	          weekNumbers = this.weekNumbers;
	      var onClickWeekNumber = this.props.onClickWeekNumber;
	      return _react.default.createElement(_Flex.default, {
	        className: "react-calendar__month-view__weekNumbers",
	        count: numberOfWeeks,
	        direction: "column",
	        style: {
	          flexBasis: 'calc(100% * (1 / 8)',
	          flexShrink: 0
	        }
	      }, weekNumbers.map(function (weekNumber, weekIndex) {
	        return _react.default.createElement(_WeekNumber.default, {
	          date: dates[weekIndex],
	          key: weekNumber,
	          onClickWeekNumber: onClickWeekNumber,
	          weekNumber: weekNumber
	        });
	      }));
	    }
	  }, {
	    key: "startWeekday",
	    get: function get() {
	      var _this$props = this.props,
	          activeStartDate = _this$props.activeStartDate,
	          calendarType = _this$props.calendarType;
	      return (0, dates.getDayOfWeek)(activeStartDate, calendarType);
	    }
	  }, {
	    key: "numberOfDays",
	    get: function get() {
	      var activeStartDate = this.props.activeStartDate;
	      return (0, dates.getDaysInMonth)(activeStartDate);
	    }
	  }, {
	    key: "numberOfWeeks",
	    get: function get() {
	      var showFixedNumberOfWeeks = this.props.showFixedNumberOfWeeks;

	      if (showFixedNumberOfWeeks) {
	        return 6;
	      }

	      var days = this.numberOfDays - (7 - this.startWeekday);
	      return 1 + Math.ceil(days / 7);
	    }
	  }, {
	    key: "year",
	    get: function get() {
	      var activeStartDate = this.props.activeStartDate;
	      return (0, dates.getYear)(activeStartDate);
	    }
	  }, {
	    key: "monthIndex",
	    get: function get() {
	      var activeStartDate = this.props.activeStartDate;
	      return (0, dates.getMonthIndex)(activeStartDate);
	    }
	  }, {
	    key: "day",
	    get: function get() {
	      var activeStartDate = this.props.activeStartDate;
	      return (0, dates.getDay)(activeStartDate);
	    }
	  }, {
	    key: "dates",
	    get: function get() {
	      var year = this.year,
	          monthIndex = this.monthIndex,
	          numberOfWeeks = this.numberOfWeeks,
	          day = this.day;
	      var calendarType = this.props.calendarType;
	      var dates$1 = [];

	      for (var index = 0; index < numberOfWeeks; index += 1) {
	        dates$1.push((0, dates.getBeginOfWeek)(new Date(year, monthIndex, day + index * 7), calendarType));
	      }

	      return dates$1;
	    }
	  }, {
	    key: "weekNumbers",
	    get: function get() {
	      var dates$1 = this.dates;
	      var calendarType = this.props.calendarType;
	      return dates$1.map(function (date) {
	        return (0, dates.getWeekNumber)(date, calendarType);
	      });
	    }
	  }]);

	  return WeekNumbers;
	}(_react.PureComponent);

	exports.default = WeekNumbers;
	WeekNumbers.propTypes = {
	  activeStartDate: _propTypes.default.instanceOf(Date).isRequired,
	  calendarType: propTypes$1.isCalendarType.isRequired,
	  onClickWeekNumber: _propTypes.default.func,
	  showFixedNumberOfWeeks: _propTypes.default.bool
	};
	});

	unwrapExports(WeekNumbers_1);

	var MonthView_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;

	var _react = _interopRequireWildcard(React__default);

	var _propTypes = _interopRequireDefault(propTypes);

	var _Days = _interopRequireDefault(Days_1);

	var _Weekdays = _interopRequireDefault(Weekdays_1);

	var _WeekNumbers = _interopRequireDefault(WeekNumbers_1);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

	function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

	function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	var MonthView =
	/*#__PURE__*/
	function (_PureComponent) {
	  _inherits(MonthView, _PureComponent);

	  function MonthView() {
	    _classCallCheck(this, MonthView);

	    return _possibleConstructorReturn(this, _getPrototypeOf(MonthView).apply(this, arguments));
	  }

	  _createClass(MonthView, [{
	    key: "renderWeekdays",
	    value: function renderWeekdays() {
	      var _this$props = this.props,
	          activeStartDate = _this$props.activeStartDate,
	          formatShortWeekday = _this$props.formatShortWeekday,
	          locale = _this$props.locale;
	      return _react.default.createElement(_Weekdays.default, {
	        calendarType: this.calendarType,
	        locale: locale,
	        activeStartDate: activeStartDate,
	        formatShortWeekday: formatShortWeekday
	      });
	    }
	  }, {
	    key: "renderWeekNumbers",
	    value: function renderWeekNumbers() {
	      var showWeekNumbers = this.props.showWeekNumbers;

	      if (!showWeekNumbers) {
	        return null;
	      }

	      var _this$props2 = this.props,
	          activeStartDate = _this$props2.activeStartDate,
	          onClickWeekNumber = _this$props2.onClickWeekNumber,
	          showFixedNumberOfWeeks = _this$props2.showFixedNumberOfWeeks;
	      return _react.default.createElement(_WeekNumbers.default, {
	        activeStartDate: activeStartDate,
	        calendarType: this.calendarType,
	        onClickWeekNumber: onClickWeekNumber,
	        showFixedNumberOfWeeks: showFixedNumberOfWeeks
	      });
	    }
	  }, {
	    key: "renderDays",
	    value: function renderDays() {
	      var _this$props3 = this.props,
	          calendarType = _this$props3.calendarType,
	          onClickWeekNumber = _this$props3.onClickWeekNumber,
	          showWeekNumbers = _this$props3.showWeekNumbers,
	          childProps = _objectWithoutProperties(_this$props3, ["calendarType", "onClickWeekNumber", "showWeekNumbers"]);

	      return _react.default.createElement(_Days.default, _extends({
	        calendarType: this.calendarType
	      }, childProps));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var showWeekNumbers = this.props.showWeekNumbers;
	      var className = 'react-calendar__month-view';
	      return _react.default.createElement("div", {
	        className: [className, showWeekNumbers ? "".concat(className, "--weekNumbers") : ''].join(' ')
	      }, _react.default.createElement("div", {
	        style: {
	          display: 'flex',
	          alignItems: 'flex-end'
	        }
	      }, this.renderWeekNumbers(), _react.default.createElement("div", {
	        style: {
	          flexGrow: 1,
	          width: '100%'
	        }
	      }, this.renderWeekdays(), this.renderDays())));
	    }
	  }, {
	    key: "calendarType",
	    get: function get() {
	      var _this$props4 = this.props,
	          calendarType = _this$props4.calendarType,
	          locale = _this$props4.locale;

	      if (calendarType) {
	        return calendarType;
	      }

	      switch (locale) {
	        case 'en-CA':
	        case 'en-US':
	        case 'es-AR':
	        case 'es-BO':
	        case 'es-CL':
	        case 'es-CO':
	        case 'es-CR':
	        case 'es-DO':
	        case 'es-EC':
	        case 'es-GT':
	        case 'es-HN':
	        case 'es-MX':
	        case 'es-NI':
	        case 'es-PA':
	        case 'es-PE':
	        case 'es-PR':
	        case 'es-SV':
	        case 'es-VE':
	        case 'pt-BR':
	          return 'US';
	        // ar-LB, ar-MA intentionally missing

	        case 'ar':
	        case 'ar-AE':
	        case 'ar-BH':
	        case 'ar-DZ':
	        case 'ar-EG':
	        case 'ar-IQ':
	        case 'ar-JO':
	        case 'ar-KW':
	        case 'ar-LY':
	        case 'ar-OM':
	        case 'ar-QA':
	        case 'ar-SA':
	        case 'ar-SD':
	        case 'ar-SY':
	        case 'ar-YE':
	        case 'dv':
	        case 'dv-MV':
	        case 'ps':
	        case 'ps-AR':
	          return 'Arabic';

	        case 'he':
	        case 'he-IL':
	          return 'Hebrew';

	        default:
	          return 'ISO 8601';
	      }
	    }
	  }]);

	  return MonthView;
	}(_react.PureComponent);

	exports.default = MonthView;
	MonthView.propTypes = {
	  activeStartDate: _propTypes.default.instanceOf(Date).isRequired,
	  calendarType: propTypes$1.isCalendarType,
	  formatShortWeekday: _propTypes.default.func,
	  locale: _propTypes.default.string,
	  maxDate: propTypes$1.isMaxDate,
	  minDate: propTypes$1.isMinDate,
	  onChange: _propTypes.default.func,
	  onClickWeekNumber: _propTypes.default.func,
	  setActiveRange: _propTypes.default.func,
	  showFixedNumberOfWeeks: _propTypes.default.bool,
	  showNeighboringMonth: _propTypes.default.bool,
	  showWeekNumbers: _propTypes.default.bool,
	  value: propTypes$1.isValue,
	  valueType: _propTypes.default.string
	};
	});

	unwrapExports(MonthView_1);

	var Calendar_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;

	var _react = _interopRequireWildcard(React__default);

	var _propTypes = _interopRequireDefault(propTypes);



	var _mergeClassNames = _interopRequireDefault(entry);

	var _Navigation = _interopRequireDefault(Navigation_1);

	var _CenturyView = _interopRequireDefault(CenturyView_1);

	var _DecadeView = _interopRequireDefault(DecadeView_1);

	var _YearView = _interopRequireDefault(YearView_1);

	var _MonthView = _interopRequireDefault(MonthView_1);







	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

	function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

	function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

	function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

	var allViews = ['century', 'decade', 'year', 'month'];
	var allValueTypes = [].concat(_toConsumableArray(allViews.slice(1)), ['day']);

	var datesAreDifferent = function datesAreDifferent(date1, date2) {
	  return date1 && !date2 || !date1 && date2 || date1 && date2 && date1.getTime() !== date2.getTime();
	};
	/**
	 * Returns views array with disallowed values cut off.
	 */


	var getLimitedViews = function getLimitedViews(minDetail, maxDetail) {
	  return allViews.slice(allViews.indexOf(minDetail), allViews.indexOf(maxDetail) + 1);
	};

	var getView = function getView(view, minDetail, maxDetail) {
	  if (view && getLimitedViews(minDetail, maxDetail).indexOf(view) !== -1) {
	    return view;
	  }

	  return getLimitedViews(minDetail, maxDetail).pop();
	};
	/**
	 * Determines whether a given view is allowed with currently applied settings.
	 */


	var isViewAllowed = function isViewAllowed(view, minDetail, maxDetail) {
	  var views = getLimitedViews(minDetail, maxDetail);
	  return views.indexOf(view) !== -1;
	};
	/**
	 * Returns value type that can be returned with currently applied settings.
	 */


	var getValueType = function getValueType(maxDetail) {
	  return allValueTypes[allViews.indexOf(maxDetail)];
	};

	var getValueFrom = function getValueFrom(value) {
	  if (!value) {
	    return null;
	  }

	  var rawValueFrom = value instanceof Array && value.length === 2 ? value[0] : value;

	  if (!rawValueFrom) {
	    return null;
	  }

	  var valueFromDate = new Date(rawValueFrom);

	  if (isNaN(valueFromDate.getTime())) {
	    throw new Error("Invalid date: ".concat(value));
	  }

	  return valueFromDate;
	};

	var getDetailValueFrom = function getDetailValueFrom(value, minDate, maxDate, maxDetail) {
	  var valueFrom = getValueFrom(value);

	  if (!valueFrom) {
	    return null;
	  }

	  var detailValueFrom = (0, dates.getBegin)(getValueType(maxDetail), valueFrom);
	  return (0, utils.between)(detailValueFrom, minDate, maxDate);
	};

	var getValueTo = function getValueTo(value) {
	  if (!value) {
	    return null;
	  }

	  var rawValueTo = value instanceof Array && value.length === 2 ? value[1] : value;

	  if (!rawValueTo) {
	    return null;
	  }

	  var valueToDate = new Date(rawValueTo);

	  if (isNaN(valueToDate.getTime())) {
	    throw new Error("Invalid date: ".concat(value));
	  }

	  return valueToDate;
	};

	var getDetailValueTo = function getDetailValueTo(value, minDate, maxDate, maxDetail) {
	  var valueTo = getValueTo(value);

	  if (!valueTo) {
	    return null;
	  }

	  var detailValueTo = (0, dates.getEnd)(getValueType(maxDetail), valueTo);
	  return (0, utils.between)(detailValueTo, minDate, maxDate);
	};

	var getDetailValueArray = function getDetailValueArray(value, minDate, maxDate, maxDetail) {
	  if (value instanceof Array) {
	    return value;
	  }

	  return [getDetailValueFrom(value, minDate, maxDate, maxDetail), getDetailValueTo(value, minDate, maxDate, maxDetail)];
	};

	var getActiveStartDate = function getActiveStartDate(props) {
	  var activeStartDate = props.activeStartDate,
	      maxDate = props.maxDate,
	      maxDetail = props.maxDetail,
	      minDate = props.minDate,
	      minDetail = props.minDetail,
	      value = props.value,
	      view = props.view;
	  var rangeType = getView(view, minDetail, maxDetail);
	  var valueFrom = getDetailValueFrom(value, minDate, maxDate, maxDetail) || activeStartDate || new Date();
	  return (0, dates.getBegin)(rangeType, valueFrom);
	};

	var Calendar =
	/*#__PURE__*/
	function (_Component) {
	  _inherits(Calendar, _Component);

	  function Calendar() {
	    var _getPrototypeOf2;

	    var _this;

	    _classCallCheck(this, Calendar);

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Calendar)).call.apply(_getPrototypeOf2, [this].concat(args)));

	    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

	    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setActiveStartDate", function (activeStartDate) {
	      var onActiveDateChange = _this.props.onActiveDateChange;

	      _this.setState({
	        activeStartDate: activeStartDate
	      }, function () {
	        var view = _this.state.view;
	        (0, utils.callIfDefined)(onActiveDateChange, {
	          activeStartDate: activeStartDate,
	          view: view
	        });
	      });
	    });

	    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "drillDown", function (activeStartDate) {
	      if (!_this.drillDownAvailable) {
	        return;
	      }

	      var _this$props = _this.props,
	          maxDetail = _this$props.maxDetail,
	          minDetail = _this$props.minDetail,
	          onDrillDown = _this$props.onDrillDown;
	      var views = getLimitedViews(minDetail, maxDetail);

	      _this.setState(function (prevState) {
	        var nextView = views[views.indexOf(prevState.view) + 1];
	        return {
	          activeStartDate: activeStartDate,
	          view: nextView
	        };
	      }, function () {
	        var view = _this.state.view;
	        (0, utils.callIfDefined)(onDrillDown, {
	          activeStartDate: activeStartDate,
	          view: view
	        });
	      });
	    });

	    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "drillUp", function () {
	      if (!_this.drillUpAvailable) {
	        return;
	      }

	      var _this$props2 = _this.props,
	          maxDetail = _this$props2.maxDetail,
	          minDetail = _this$props2.minDetail,
	          onDrillUp = _this$props2.onDrillUp;
	      var views = getLimitedViews(minDetail, maxDetail);

	      _this.setState(function (prevState) {
	        var nextView = views[views.indexOf(prevState.view) - 1];
	        var activeStartDate = (0, dates.getBegin)(nextView, prevState.activeStartDate);
	        return {
	          activeStartDate: activeStartDate,
	          view: nextView
	        };
	      }, function () {
	        var _this$state = _this.state,
	            activeStartDate = _this$state.activeStartDate,
	            view = _this$state.view;
	        (0, utils.callIfDefined)(onDrillUp, {
	          activeStartDate: activeStartDate,
	          view: view
	        });
	      });
	    });

	    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (value) {
	      var _this$props3 = _this.props,
	          onChange = _this$props3.onChange,
	          selectRange = _this$props3.selectRange;
	      var nextValue;
	      var callback;

	      if (selectRange) {
	        var previousValue = _this.state.value; // Range selection turned on

	        if (!previousValue || [].concat(previousValue).length !== 1 // 0 or 2 - either way we're starting a new array
	        ) {
	            // First value
	            nextValue = (0, dates.getBegin)(_this.valueType, value);
	          } else {
	          // Second value
	          nextValue = (0, dates.getValueRange)(_this.valueType, previousValue, value);

	          callback = function callback() {
	            return (0, utils.callIfDefined)(onChange, nextValue);
	          };
	        }
	      } else {
	        // Range selection turned off
	        nextValue = _this.getProcessedValue(value);

	        callback = function callback() {
	          return (0, utils.callIfDefined)(onChange, nextValue);
	        };
	      }

	      _this.setState({
	        value: nextValue
	      }, callback);
	    });

	    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseOver", function (value) {
	      _this.setState({
	        hover: value
	      });
	    });

	    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseOut", function () {
	      _this.setState({
	        hover: null
	      });
	    });

	    return _this;
	  }

	  _createClass(Calendar, [{
	    key: "getProcessedValue",

	    /**
	     * Gets current value in a desired format.
	     */
	    value: function getProcessedValue(value) {
	      var _this$props4 = this.props,
	          minDate = _this$props4.minDate,
	          maxDate = _this$props4.maxDate,
	          maxDetail = _this$props4.maxDetail,
	          returnValue = _this$props4.returnValue;

	      switch (returnValue) {
	        case 'start':
	          return getDetailValueFrom(value, minDate, maxDate, maxDetail);

	        case 'end':
	          return getDetailValueTo(value, minDate, maxDate, maxDetail);

	        case 'range':
	          return getDetailValueArray(value, minDate, maxDate, maxDetail);

	        default:
	          throw new Error('Invalid returnValue.');
	      }
	    }
	  }, {
	    key: "renderContent",
	    value: function renderContent() {
	      var _this$props5 = this.props,
	          calendarType = _this$props5.calendarType,
	          locale = _this$props5.locale,
	          maxDate = _this$props5.maxDate,
	          minDate = _this$props5.minDate,
	          renderChildren = _this$props5.renderChildren,
	          selectRange = _this$props5.selectRange,
	          tileClassName = _this$props5.tileClassName,
	          tileContent = _this$props5.tileContent,
	          tileDisabled = _this$props5.tileDisabled;
	      var _this$state2 = this.state,
	          activeStartDate = _this$state2.activeStartDate,
	          hover = _this$state2.hover,
	          value = _this$state2.value,
	          view = _this$state2.view;
	      var onMouseOver = this.onMouseOver,
	          valueType = this.valueType;
	      var commonProps = {
	        activeStartDate: activeStartDate,
	        hover: hover,
	        locale: locale,
	        maxDate: maxDate,
	        minDate: minDate,
	        onMouseOver: selectRange ? onMouseOver : null,
	        tileClassName: tileClassName,
	        tileContent: tileContent || renderChildren,
	        // For backwards compatibility
	        tileDisabled: tileDisabled,
	        value: value,
	        valueType: valueType
	      };
	      var clickAction = this.drillDownAvailable ? this.drillDown : this.onChange;

	      switch (view) {
	        case 'century':
	          {
	            var onClickDecade = this.props.onClickDecade;
	            return _react.default.createElement(_CenturyView.default, _extends({
	              onClick: (0, utils.mergeFunctions)(clickAction, onClickDecade)
	            }, commonProps));
	          }

	        case 'decade':
	          {
	            var onClickYear = this.props.onClickYear;
	            return _react.default.createElement(_DecadeView.default, _extends({
	              onClick: (0, utils.mergeFunctions)(clickAction, onClickYear)
	            }, commonProps));
	          }

	        case 'year':
	          {
	            var _this$props6 = this.props,
	                formatMonth = _this$props6.formatMonth,
	                onClickMonth = _this$props6.onClickMonth;
	            return _react.default.createElement(_YearView.default, _extends({
	              formatMonth: formatMonth,
	              onClick: (0, utils.mergeFunctions)(clickAction, onClickMonth)
	            }, commonProps));
	          }

	        case 'month':
	          {
	            var _this$props7 = this.props,
	                formatShortWeekday = _this$props7.formatShortWeekday,
	                onClickDay = _this$props7.onClickDay,
	                onClickWeekNumber = _this$props7.onClickWeekNumber,
	                showFixedNumberOfWeeks = _this$props7.showFixedNumberOfWeeks,
	                showNeighboringMonth = _this$props7.showNeighboringMonth,
	                showWeekNumbers = _this$props7.showWeekNumbers;
	            return _react.default.createElement(_MonthView.default, _extends({
	              calendarType: calendarType,
	              formatShortWeekday: formatShortWeekday,
	              onClick: (0, utils.mergeFunctions)(clickAction, onClickDay),
	              onClickWeekNumber: onClickWeekNumber,
	              showFixedNumberOfWeeks: showFixedNumberOfWeeks,
	              showNeighboringMonth: showNeighboringMonth,
	              showWeekNumbers: showWeekNumbers
	            }, commonProps));
	          }

	        default:
	          throw new Error("Invalid view: ".concat(view, "."));
	      }
	    }
	  }, {
	    key: "renderNavigation",
	    value: function renderNavigation() {
	      var showNavigation = this.props.showNavigation;

	      if (!showNavigation) {
	        return null;
	      }

	      var _this$props8 = this.props,
	          formatMonthYear = _this$props8.formatMonthYear,
	          locale = _this$props8.locale,
	          maxDate = _this$props8.maxDate,
	          maxDetail = _this$props8.maxDetail,
	          minDate = _this$props8.minDate,
	          minDetail = _this$props8.minDetail,
	          next2Label = _this$props8.next2Label,
	          nextLabel = _this$props8.nextLabel,
	          navigationLabel = _this$props8.navigationLabel,
	          prev2Label = _this$props8.prev2Label,
	          prevLabel = _this$props8.prevLabel;
	      var _this$state3 = this.state,
	          activeRange = _this$state3.activeRange,
	          activeStartDate = _this$state3.activeStartDate,
	          view = _this$state3.view;
	      return _react.default.createElement(_Navigation.default, {
	        activeRange: activeRange,
	        activeStartDate: activeStartDate,
	        drillUp: this.drillUp,
	        formatMonthYear: formatMonthYear,
	        locale: locale,
	        maxDate: maxDate,
	        minDate: minDate,
	        next2Label: next2Label,
	        nextLabel: nextLabel,
	        navigationLabel: navigationLabel,
	        prev2Label: prev2Label,
	        prevLabel: prevLabel,
	        setActiveStartDate: this.setActiveStartDate,
	        view: view,
	        views: getLimitedViews(minDetail, maxDetail)
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this$props9 = this.props,
	          className = _this$props9.className,
	          selectRange = _this$props9.selectRange;
	      var value = this.state.value;
	      var onMouseOut = this.onMouseOut;
	      var valueArray = [].concat(value);
	      return _react.default.createElement("div", {
	        className: (0, _mergeClassNames.default)('react-calendar', selectRange && valueArray.length === 1 && 'react-calendar--selectRange', className),
	        onMouseOut: selectRange ? onMouseOut : null,
	        onBlur: selectRange ? onMouseOut : null
	      }, this.renderNavigation(), this.renderContent());
	    }
	  }, {
	    key: "drillDownAvailable",
	    get: function get() {
	      var _this$props10 = this.props,
	          maxDetail = _this$props10.maxDetail,
	          minDetail = _this$props10.minDetail;
	      var view = this.state.view;
	      var views = getLimitedViews(minDetail, maxDetail);
	      return views.indexOf(view) < views.length - 1;
	    }
	  }, {
	    key: "drillUpAvailable",
	    get: function get() {
	      var _this$props11 = this.props,
	          maxDetail = _this$props11.maxDetail,
	          minDetail = _this$props11.minDetail;
	      var view = this.state.view;
	      var views = getLimitedViews(minDetail, maxDetail);
	      return views.indexOf(view) > 0;
	    }
	  }, {
	    key: "valueType",
	    get: function get() {
	      var maxDetail = this.props.maxDetail;
	      return getValueType(maxDetail);
	    }
	  }], [{
	    key: "getDerivedStateFromProps",
	    value: function getDerivedStateFromProps(nextProps, prevState) {
	      var minDate = nextProps.minDate,
	          maxDate = nextProps.maxDate,
	          minDetail = nextProps.minDetail,
	          maxDetail = nextProps.maxDetail;
	      var nextState = {};
	      /**
	       * If the next activeStartDate is different from the current one, update
	       * activeStartDate (for display) and activeStartDateProps (for future comparisons)
	       */

	      var nextActiveStartDate = getActiveStartDate(nextProps);

	      if (datesAreDifferent(nextActiveStartDate, prevState.activeStartDateProps)) {
	        nextState.activeStartDate = nextActiveStartDate;
	        nextState.activeStartDateProps = nextActiveStartDate;
	      }
	      /**
	       * If the next view is different from the current one, and the previously set view is not
	       * valid based on minDetail and maxDetail, get a new one.
	       */


	      var nextView = getView(nextProps.view, minDetail, maxDetail);

	      if (nextView !== prevState.viewProps && !isViewAllowed(prevState.view, minDetail, maxDetail)) {
	        nextState.view = nextView;
	        nextState.viewProps = nextView;
	      }
	      /**
	       * If the next value is different from the current one (with an exception of situation in
	       * which values provided are limited by minDate and maxDate so that the dates are the same),
	       * get a new one.
	       */


	      var values = [nextProps.value, prevState.valueProps];

	      if (nextState.view // Allowed view changed
	      || datesAreDifferent.apply(void 0, _toConsumableArray(values.map(function (value) {
	        return getValueFrom(value, minDate, maxDate, maxDetail);
	      }))) || datesAreDifferent.apply(void 0, _toConsumableArray(values.map(function (value) {
	        return getValueTo(value, minDate, maxDate, maxDetail);
	      })))) {
	        nextState.value = nextProps.value;
	        nextState.valueProps = nextProps.value;
	      }

	      if (!nextProps.selectRange && prevState.hover) {
	        nextState.hover = null;
	      }

	      return nextState;
	    }
	  }]);

	  return Calendar;
	}(_react.Component);

	exports.default = Calendar;
	Calendar.defaultProps = {
	  maxDetail: 'month',
	  minDetail: 'century',
	  returnValue: 'start',
	  showNavigation: true,
	  showNeighboringMonth: true,
	  view: 'month'
	};
	Calendar.propTypes = {
	  activeStartDate: _propTypes.default.instanceOf(Date),
	  calendarType: propTypes$1.isCalendarType,
	  className: propTypes$1.isClassName,
	  formatMonth: _propTypes.default.func,
	  formatMonthYear: _propTypes.default.func,
	  formatShortWeekday: _propTypes.default.func,
	  locale: _propTypes.default.string,
	  maxDate: propTypes$1.isMaxDate,
	  maxDetail: _propTypes.default.oneOf(allViews),
	  minDate: propTypes$1.isMinDate,
	  minDetail: _propTypes.default.oneOf(allViews),
	  navigationLabel: _propTypes.default.func,
	  next2Label: _propTypes.default.node,
	  nextLabel: _propTypes.default.node,
	  onActiveDateChange: _propTypes.default.func,
	  onChange: _propTypes.default.func,
	  onClickDay: _propTypes.default.func,
	  onClickDecade: _propTypes.default.func,
	  onClickMonth: _propTypes.default.func,
	  onClickWeekNumber: _propTypes.default.func,
	  onClickYear: _propTypes.default.func,
	  onDrillDown: _propTypes.default.func,
	  onDrillUp: _propTypes.default.func,
	  prev2Label: _propTypes.default.node,
	  prevLabel: _propTypes.default.node,
	  renderChildren: _propTypes.default.func,
	  // For backwards compatibility
	  returnValue: _propTypes.default.oneOf(['start', 'end', 'range']),
	  selectRange: _propTypes.default.bool,
	  showFixedNumberOfWeeks: _propTypes.default.bool,
	  showNavigation: _propTypes.default.bool,
	  showNeighboringMonth: _propTypes.default.bool,
	  showWeekNumbers: _propTypes.default.bool,
	  tileClassName: _propTypes.default.oneOfType([_propTypes.default.func, propTypes$1.isClassName]),
	  tileContent: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.node]),
	  tileDisabled: _propTypes.default.func,
	  value: _propTypes.default.oneOfType([_propTypes.default.string, propTypes$1.isValue]),
	  view: _propTypes.default.oneOf(allViews)
	};
	(0, reactLifecyclesCompat_es.polyfill)(Calendar);
	});

	unwrapExports(Calendar_1);

	function styleInject(css, ref) {
	  if ( ref === void 0 ) ref = {};
	  var insertAt = ref.insertAt;

	  if (!css || typeof document === 'undefined') { return; }

	  var head = document.head || document.getElementsByTagName('head')[0];
	  var style = document.createElement('style');
	  style.type = 'text/css';

	  if (insertAt === 'top') {
	    if (head.firstChild) {
	      head.insertBefore(style, head.firstChild);
	    } else {
	      head.appendChild(style);
	    }
	  } else {
	    head.appendChild(style);
	  }

	  if (style.styleSheet) {
	    style.styleSheet.cssText = css;
	  } else {
	    style.appendChild(document.createTextNode(css));
	  }
	}

	var css = ".react-calendar {\n  width: 350px;\n  max-width: 100%;\n  background: white;\n  border: 1px solid #a0a096;\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 1.125em;\n}\n.react-calendar,\n.react-calendar *,\n.react-calendar *:before,\n.react-calendar *:after {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.react-calendar button {\n  margin: 0;\n  border: 0;\n  outline: none;\n}\n.react-calendar button:enabled:hover {\n  cursor: pointer;\n}\n.react-calendar__navigation {\n  height: 44px;\n  margin-bottom: 1em;\n}\n.react-calendar__navigation button {\n  min-width: 44px;\n  background: none;\n}\n.react-calendar__navigation button:enabled:hover,\n.react-calendar__navigation button:enabled:focus {\n  background-color: #e6e6e6;\n}\n.react-calendar__navigation button[disabled] {\n  background-color: #f0f0f0;\n}\n.react-calendar__month-view__weekdays {\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 0.75em;\n}\n.react-calendar__month-view__weekdays__weekday {\n  padding: 0.5em;\n}\n.react-calendar__month-view__weekNumbers {\n  font-weight: bold;\n}\n.react-calendar__month-view__weekNumbers .react-calendar__tile {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75em;\n  padding: calc(0.75em / 0.75) calc(0.5em / 0.75);\n}\n.react-calendar__month-view__days__day--weekend {\n  color: red;\n}\n.react-calendar__month-view__days__day--neighboringMonth {\n  color: #969696;\n}\n.react-calendar__year-view .react-calendar__tile,\n.react-calendar__decade-view .react-calendar__tile,\n.react-calendar__century-view .react-calendar__tile {\n  padding: 2em 0.5em;\n}\n.react-calendar__tile {\n  max-width: 100%;\n  text-align: center;\n  padding: 0.75em 0.5em;\n  background: none;\n}\n.react-calendar__tile:disabled {\n  background-color: #f0f0f0;\n}\n.react-calendar__tile:enabled:hover,\n.react-calendar__tile:enabled:focus {\n  background-color: #e6e6e6;\n}\n.react-calendar__tile--hasActive {\n  background: #76baff;\n}\n.react-calendar__tile--hasActive:enabled:hover,\n.react-calendar__tile--hasActive:enabled:focus {\n  background: #a9d4ff;\n}\n.react-calendar__tile--active {\n  background: #006edc;\n  color: white;\n}\n.react-calendar__tile--active:enabled:hover,\n.react-calendar__tile--active:enabled:focus {\n  background: #1087ff;\n}\n.react-calendar--selectRange .react-calendar__tile--hover {\n  background-color: #e6e6e6;\n}\n";
	styleInject(css);

	var Calendar = /*#__PURE__*/Object.freeze({
		default: css
	});

	getCjsExportFromNamespace(Calendar);

	var entry$2 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	Object.defineProperty(exports, "Calendar", {
	  enumerable: true,
	  get: function get() {
	    return _Calendar.default;
	  }
	});
	Object.defineProperty(exports, "CenturyView", {
	  enumerable: true,
	  get: function get() {
	    return _CenturyView.default;
	  }
	});
	Object.defineProperty(exports, "DecadeView", {
	  enumerable: true,
	  get: function get() {
	    return _DecadeView.default;
	  }
	});
	Object.defineProperty(exports, "YearView", {
	  enumerable: true,
	  get: function get() {
	    return _YearView.default;
	  }
	});
	Object.defineProperty(exports, "MonthView", {
	  enumerable: true,
	  get: function get() {
	    return _MonthView.default;
	  }
	});
	exports.default = void 0;

	var _Calendar = _interopRequireDefault(Calendar_1);

	var _CenturyView = _interopRequireDefault(CenturyView_1);

	var _DecadeView = _interopRequireDefault(DecadeView_1);

	var _YearView = _interopRequireDefault(YearView_1);

	var _MonthView = _interopRequireDefault(MonthView_1);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// File is created during build phase and placed in dist directory
	// eslint-disable-next-line import/no-unresolved
	var _default = _Calendar.default;
	exports.default = _default;
	});

	var Calendar$1 = unwrapExports(entry$2);

	function CalendarInput(props) {
	  var _useState = React.useState(false),
	      _useState2 = slicedToArray(_useState, 2),
	      calendar = _useState2[0],
	      setCalendar = _useState2[1];

	  var _useState3 = React.useState(''),
	      _useState4 = slicedToArray(_useState3, 2),
	      date = _useState4[0],
	      setDate = _useState4[1];

	  var inputRef = React.useRef(null);
	  var calendarRef = React.useRef(null);

	  var daterange = props.daterange,
	      value = props.value,
	      onChange = props.onChange,
	      onFocus = props.onFocus,
	      onBlur = props.onBlur,
	      otherProps = objectWithoutProperties(props, ["daterange", "value", "onChange", "onFocus", "onBlur"]);

	  var onChoose = function onChoose(_date) {
	    if (!!daterange) {
	      setDate("".concat(formatDate(new Date(_date[0].toString())), " - ").concat(formatDate(new Date(_date[1].toString()))));
	    } else {
	      setDate(formatDate(new Date(_date.toString())));
	    }

	    closeCalendar();
	  };

	  var _onChange = function _onChange(event) {
	    setDate(event.target.value);

	    if (onChange) {
	      onChange(event);
	    }
	  };

	  var handleClickOutsideCalendar = function handleClickOutsideCalendar(event) {
	    if (calendarRef && calendarRef.current && !inputRef.current.contains(event.target) && !calendarRef.current.contains(event.target) && !event.target.classList.contains('react-calendar__tile')) {
	      closeCalendar();
	    }
	  };

	  var openCalendar = function openCalendar() {
	    setCalendar(true);
	    window.addEventListener('click', handleClickOutsideCalendar);
	  };

	  var closeCalendar = function closeCalendar() {
	    setCalendar(false);
	    window.removeEventListener('click', handleClickOutsideCalendar);
	  };

	  var _placeholder = formatDate(new Date());

	  return React__default.createElement("div", {
	    className: "AMB-CalendarInput"
	  }, React__default.createElement(Input, _extends_1({}, otherProps, {
	    value: date,
	    placeholder: _placeholder,
	    onChange: _onChange,
	    onClick: function onClick() {
	      return !otherProps.disabled && openCalendar();
	    },
	    ref: inputRef
	  })), calendar && React__default.createElement("div", {
	    className: "calendar",
	    ref: calendarRef
	  }, React__default.createElement(Calendar$1, {
	    onChange: onChoose,
	    selectRange: !!daterange
	  })));
	}

	/**
	 * Copyright 2018 Ambrosus Inc.
	 * Email: tech@ambrosus.com
	 */

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	var defineProperty = _defineProperty;

	function useForm(validate) {
	  var _useState = React.useState({}),
	      _useState2 = slicedToArray(_useState, 2),
	      values = _useState2[0],
	      setValues = _useState2[1];

	  var _useState3 = React.useState({}),
	      _useState4 = slicedToArray(_useState3, 2),
	      errors = _useState4[0],
	      setErrors = _useState4[1];

	  var _useState5 = React.useState(false),
	      _useState6 = slicedToArray(_useState5, 2),
	      valid = _useState6[0],
	      setValid = _useState6[1];

	  React.useEffect(function () {
	    setValid(Object.keys(errors).length === 0);
	  }, [errors]);
	  React.useEffect(function () {
	    var _errors = validate(values);

	    if (JSON.stringify(errors) !== JSON.stringify(_errors)) {
	      setErrors(_errors);
	    }
	  }, [values]);

	  var onBlur = function onBlur(event) {
	    event.persist();

	    var _values = _extends_1({}, values, defineProperty({}, event.target.name, event.target.value));

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

	function capitalize(value) {
	  return "".concat(value.charAt(0).toUpperCase()).concat(value.slice(1));
	}

	function validate(value, type) {
	  var required = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
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

	/**
	 * Copyright 2018 Ambrosus Inc.
	 * Email: tech@ambrosus.com
	 */

	/**
	 * Copyright 2018 Ambrosus Inc.
	 * Email: tech@ambrosus.com
	 */

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var classCallCheck = _classCallCheck;

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	var createClass = _createClass;

	var _typeof_1 = createCommonjsModule(function (module) {
	function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

	function _typeof(obj) {
	  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
	    module.exports = _typeof = function _typeof(obj) {
	      return _typeof2(obj);
	    };
	  } else {
	    module.exports = _typeof = function _typeof(obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
	    };
	  }

	  return _typeof(obj);
	}

	module.exports = _typeof;
	});

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	var assertThisInitialized = _assertThisInitialized;

	function _possibleConstructorReturn(self, call) {
	  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
	    return call;
	  }

	  return assertThisInitialized(self);
	}

	var possibleConstructorReturn = _possibleConstructorReturn;

	var getPrototypeOf = createCommonjsModule(function (module) {
	function _getPrototypeOf(o) {
	  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	module.exports = _getPrototypeOf;
	});

	var setPrototypeOf = createCommonjsModule(function (module) {
	function _setPrototypeOf(o, p) {
	  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	module.exports = _setPrototypeOf;
	});

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) setPrototypeOf(subClass, superClass);
	}

	var inherits = _inherits;

	var iconCross = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0iNjg2QkMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMS43MDcxMSAwLjI5Mjg5NUMxLjMxNjU4IC0wLjA5NzYyOTMgMC42ODM0MTkgLTAuMDk3NjI5MyAwLjI5Mjg5NCAwLjI5Mjg5NUMtMC4wOTc2MyAwLjY4MzQxOSAtMC4wOTc2MyAxLjMxNjU4IDAuMjkyODk0IDEuNzA3MTFMMS43MDcxMSAwLjI5Mjg5NVpNMTYuMjkyOSAxNy43MDcxQzE2LjY4MzQgMTguMDk3NiAxNy4zMTY2IDE4LjA5NzYgMTcuNzA3MSAxNy43MDcxQzE4LjA5NzYgMTcuMzE2NiAxOC4wOTc2IDE2LjY4MzQgMTcuNzA3MSAxNi4yOTI5TDE2LjI5MjkgMTcuNzA3MVpNMC4yOTI4OTMgMTYuMjkyOUMtMC4wOTc2MzExIDE2LjY4MzQgLTAuMDk3NjMxMSAxNy4zMTY2IDAuMjkyODkzIDE3LjcwNzFDMC42ODM0MTggMTguMDk3NiAxLjMxNjU4IDE4LjA5NzYgMS43MDcxMSAxNy43MDcxTDAuMjkyODkzIDE2LjI5MjlaTTE3LjcwNzEgMS43MDcxMUMxOC4wOTc2IDEuMzE2NTggMTguMDk3NiAwLjY4MzQxNyAxNy43MDcxIDAuMjkyODkzQzE3LjMxNjYgLTAuMDk3NjMxMSAxNi42ODM0IC0wLjA5NzYzMTEgMTYuMjkyOSAwLjI5Mjg5M0wxNy43MDcxIDEuNzA3MTFaTTAuMjkyODk0IDEuNzA3MTFMMTYuMjkyOSAxNy43MDcxTDE3LjcwNzEgMTYuMjkyOUwxLjcwNzExIDAuMjkyODk1TDAuMjkyODk0IDEuNzA3MTFaTTEuNzA3MTEgMTcuNzA3MUwxNy43MDcxIDEuNzA3MTFMMTYuMjkyOSAwLjI5Mjg5M0wwLjI5Mjg5MyAxNi4yOTI5TDEuNzA3MTEgMTcuNzA3MVoiLz4KPC9zdmc+';

	var iconBurger = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxOCAxNCIgZmlsbD0iIzk5OSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wLjU5OTk5OCAxQzAuNTk5OTk4IDAuNjY4NjMxIDAuODY4NjI4IDAuNDAwMDAyIDEuMiAwLjQwMDAwMkgxNi44QzE3LjEzMTQgMC40MDAwMDIgMTcuNCAwLjY2ODYzMSAxNy40IDFDMTcuNCAxLjMzMTM3IDE3LjEzMTQgMS42IDE2LjggMS42SDEuMkMwLjg2ODYyOCAxLjYgMC41OTk5OTggMS4zMzEzNyAwLjU5OTk5OCAxWk0wLjU5OTk5OCA3QzAuNTk5OTk4IDYuNjY4NjMgMC44Njg2MjggNi40IDEuMiA2LjRIMTYuOEMxNy4xMzE0IDYuNCAxNy40IDYuNjY4NjMgMTcuNCA3QzE3LjQgNy4zMzEzNyAxNy4xMzE0IDcuNiAxNi44IDcuNkgxLjJDMC44Njg2MjggNy42IDAuNTk5OTk4IDcuMzMxMzcgMC41OTk5OTggN1pNMC41OTk5OTggMTNDMC41OTk5OTggMTIuNjY4NiAwLjg2ODYyOCAxMi40IDEuMiAxMi40SDEyQzEyLjMzMTQgMTIuNCAxMi42IDEyLjY2ODYgMTIuNiAxM0MxMi42IDEzLjMzMTQgMTIuMzMxNCAxMy42IDEyIDEzLjZIMS4yQzAuODY4NjI4IDEzLjYgMC41OTk5OTggMTMuMzMxNCAwLjU5OTk5OCAxM1oiLz4KPC9zdmc+';

	var root = document.getElementById('root');

	var Sidemenu =
	/*#__PURE__*/
	function (_Component) {
	  inherits(Sidemenu, _Component);

	  function Sidemenu(props) {
	    var _this;

	    classCallCheck(this, Sidemenu);

	    _this = possibleConstructorReturn(this, getPrototypeOf(Sidemenu).call(this, props));
	    _this.state = {
	      open: false
	    };

	    _this.onOpen = function () {
	      var onOpen = _this.props.onOpen;
	      var onClose = _this.props.onClose;

	      if (onOpen && _this.isFunction(onOpen) && onClose && _this.isFunction(onClose)) {
	        onOpen();
	      } else {
	        _this.setState({
	          open: true
	        });
	      }
	    };

	    _this.onClose = function () {
	      var onOpen = _this.props.onOpen;
	      var onClose = _this.props.onClose;

	      if (onOpen && _this.isFunction(onOpen) && onClose && _this.isFunction(onClose)) {
	        onClose();
	      } else {
	        _this.setState({
	          open: false
	        });
	      }
	    };

	    return _this;
	  }

	  createClass(Sidemenu, [{
	    key: "isFunction",
	    value: function isFunction(functionToCheck) {
	      return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var open = this.state.open;
	      var onOpen = this.props.onOpen;
	      var onClose = this.props.onClose;

	      if (onOpen && this.isFunction(onOpen) && onClose && this.isFunction(onClose)) {
	        open = this.props.open;
	      }

	      if (open) {
	        document.body.style.overflow = 'hidden';
	      } else {
	        document.body.style.removeProperty('overflow');
	      }

	      var classes = ['AMB-Sidemenu', "".concat(open ? 'open' : '')].filter(Boolean);
	      var icon = this.props.hasOwnProperty('icon') ? this.props.icon : true;
	      return React__default.createElement(React__default.Fragment, null, icon && React__default.createElement(SVG, {
	        className: "AMB-Sidemenu__icon",
	        onClick: this.onOpen,
	        src: this.props.iconSrc || iconBurger
	      }), open && ReactDOM.createPortal(React__default.createElement("div", {
	        className: classes.join(' ').trim()
	      }, React__default.createElement("aside", null, this.props.header && React__default.createElement("header", null, this.props.header), React__default.createElement("main", null, this.props.children), React__default.createElement("footer", null, React__default.createElement(SVG, {
	        className: "close",
	        onClick: this.onClose,
	        src: iconCross
	      }))), React__default.createElement("div", {
	        className: "overlay",
	        onClick: this.onClose
	      })), this.props.portal || root));
	    }
	  }]);

	  return Sidemenu;
	}(React.Component);

	/*
	Copyright: Ambrosus Inc.
	Email: tech@ambrosus.com
	This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
	If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
	This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
	*/

	var Tabs =
	/*#__PURE__*/
	function (_Component) {
	  inherits(Tabs, _Component);

	  function Tabs(props) {
	    var _this;

	    classCallCheck(this, Tabs);

	    _this = possibleConstructorReturn(this, getPrototypeOf(Tabs).call(this, props));
	    _this.tabListRef = void 0;

	    _this.onClickTabItem = function (event, label) {
	      _this.calcLine(event, event.currentTarget);

	      _this.setState({
	        active: label
	      });
	    };

	    _this.calcLine = function (event) {
	      var activeChild = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	      if (!activeChild) {
	        var children = Array.from(_this.tabListRef.current.children);
	        activeChild = children.find(function (child) {
	          return child.classList.contains('active');
	        });
	      }

	      var parentElement = activeChild.parentElement;
	      var parentX = parentElement.getBoundingClientRect().x;

	      var _activeChild$getBound = activeChild.getBoundingClientRect(),
	          x = _activeChild$getBound.x,
	          width = _activeChild$getBound.width;

	      var header = parentElement.parentElement;
	      header.scrollLeft = x;

	      _this.setState({
	        line: {
	          width: width,
	          left: x - parentX
	        }
	      });
	    };

	    _this.tabListRef = React__default.createRef();

	    var _children = Array.isArray(_this.props.children) && _this.props.children || [_this.props.children].filter(Boolean);

	    var active = _children.find(function (child) {
	      return child.props.active && !child.props.disabled;
	    }) || _children[0] || {
	      props: {}
	    };
	    var index = _this.props.active || 0;
	    index = index > _children.length - 1 ? 0 : index;
	    var activeFromParent = _children[index];
	    active = !activeFromParent.props.disabled && activeFromParent.props.label || active.props.label;
	    _this.state = {
	      active: active,
	      loaded: false,
	      line: {
	        left: 0,
	        width: 0
	      }
	    };
	    return _this;
	  }

	  createClass(Tabs, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this.setState({
	        loaded: true
	      });
	      this.calcLine();
	      window.addEventListener('resize', this.calcLine);
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      window.removeEventListener('resize', this.calcLine);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;

	      var line = this.state.line;
	      var children = Array.isArray(this.props.children) && this.props.children || [this.props.children].filter(Boolean);
	      return React__default.createElement("div", {
	        className: "AMB-Tabs ".concat(this.props.light ? 'light' : '').trim()
	      }, React__default.createElement("header", null, React__default.createElement("div", {
	        className: "tabList",
	        ref: this.tabListRef
	      }, children.map(function (child) {
	        return React__default.createElement("button", {
	          key: child.props.label,
	          type: "button",
	          className: "tab ".concat(child.props.label === _this2.state.active ? 'active' : '').trim(),
	          onClick: function onClick(e) {
	            return _this2.onClickTabItem(e, child.props.label);
	          },
	          disabled: child.props.disabled
	        }, child.props.label);
	      })), this.state.loaded && React__default.createElement("span", {
	        className: "line",
	        style: {
	          left: line.left,
	          width: line.width
	        }
	      })), React__default.createElement("div", {
	        className: "tabContent"
	      }, children.map(function (child) {
	        return child.props.label === _this2.state.active && child.props.children;
	      })));
	    }
	  }]);

	  return Tabs;
	}(React.Component);

	/*
	Copyright: Ambrosus Inc.
	Email: tech@ambrosus.com
	This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
	If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
	This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
	*/

	var Tab = function Tab(props) {
	  return React__default.createElement("div", {
	    className: "AMB-Tab"
	  }, props.children);
	};

	/*
	Copyright: Ambrosus Inc.
	Email: tech@ambrosus.com
	This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
	If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
	This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
	*/

	var Paragraph = function Paragraph(props) {
	  var className = props.className,
	      content = props.content,
	      children = props.children,
	      light = props.light,
	      otherProps = objectWithoutProperties(props, ["className", "content", "children", "light"]);

	  var classes = ['AMB-Paragraph', className || '', light && 'light' || ''].join(' ').trim();
	  var innerHTML = content && {
	    __html: content
	  } || undefined;
	  return React__default.createElement(React__default.Fragment, null, innerHTML && React__default.createElement("p", _extends_1({
	    className: classes
	  }, otherProps, {
	    dangerouslySetInnerHTML: innerHTML
	  })) || React__default.createElement("p", _extends_1({
	    className: classes
	  }, otherProps), children));
	};

	/*
	Copyright: Ambrosus Inc.
	Email: tech@ambrosus.com
	This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
	If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
	This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
	*/

	var _Number = function _Number(props) {
	  var className = props.className,
	      _value = props.value,
	      fixed = props.fixed,
	      delimiter = props.delimiter,
	      otherProps = objectWithoutProperties(props, ["className", "value", "fixed", "delimiter"]);

	  var classes = ['AMB-Number', className || ''].join(' ').trim();

	  var _String$split = String(_value).split('.'),
	      _String$split2 = slicedToArray(_String$split, 2),
	      value = _String$split2[0],
	      decimals = _String$split2[1];

	  value = numWithCommas(value, delimiter && delimiter.thousands || ',');

	  if (fixed !== false && fixed) {
	    decimals = String(Number("0.".concat(decimals || 0)).toFixed(fixed || 2)).split('.')[1];
	  }

	  return React__default.createElement("span", _extends_1({
	    className: classes
	  }, otherProps), React__default.createElement("span", {
	    className: "value"
	  }, value), decimals && fixed !== 0 && React__default.createElement("span", {
	    className: "decimals"
	  }, delimiter && delimiter.decimals || '.', decimals));
	};

	/*
	Copyright: Ambrosus Inc.
	Email: tech@ambrosus.com
	This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
	If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
	This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
	*/

	var Currency = function Currency(props) {
	  var className = props.className,
	      symbol = props.symbol,
	      value = props.value,
	      fixed = props.fixed,
	      side = props.side,
	      delimiter = props.delimiter,
	      otherProps = objectWithoutProperties(props, ["className", "symbol", "value", "fixed", "side", "delimiter"]);

	  var classes = ['AMB-Currency', className || ''].join(' ').trim();

	  var _symbol = symbol || '$';

	  return React__default.createElement("span", _extends_1({
	    className: classes
	  }, otherProps), side === 'left' && React__default.createElement("span", {
	    className: "symbol left"
	  }, _symbol), React__default.createElement(_Number, {
	    value: value,
	    fixed: fixed,
	    delimiter: delimiter
	  }), side !== 'left' && React__default.createElement("span", {
	    className: "symbol right"
	  }, _symbol));
	};

	/*
	Copyright: Ambrosus Inc.
	Email: tech@ambrosus.com
	This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
	If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
	This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
	*/

	/**
	 * Copyright 2018 Ambrosus Inc.
	 * Email: tech@ambrosus.com
	 */

	exports.Button = Button;
	exports.CalendarInput = CalendarInput;
	exports.Checkbox = Checkbox;
	exports.Currency = Currency;
	exports.Input = Input;
	exports.Number = _Number;
	exports.Paragraph = Paragraph;
	exports.Radio = Radio;
	exports.SVG = SVG;
	exports.Sidemenu = Sidemenu;
	exports.Switch = Switch;
	exports.Tab = Tab;
	exports.Tabs = Tabs;
	exports.Textarea = Textarea;
	exports.formatDate = formatDate;
	exports.numWithCommas = numWithCommas;
	exports.useForm = useForm;
	exports.validate = validate;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
