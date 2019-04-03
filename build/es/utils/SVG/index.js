import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";

/*
Copyright: Ambrosus Inc.
Email: tech@ambrosus.com
This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/
import React from 'react';

const SVG = props => {
  const {
    src
  } = props,
        otherProps = _objectWithoutPropertiesLoose(props, ["src"]);

  const Wrapper = props.wrapper || 'span';
  return React.createElement(Wrapper, _extends({}, otherProps, {
    dangerouslySetInnerHTML: {
      __html: src
    }
  }));
};

export default SVG;