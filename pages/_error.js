// @flow

import React, {
  PureComponent
}                 from 'react';

type Props = any;
type State = any;

class Error extends PureComponent<Props, State> {
  render() {
    return (
      <h1>
        Sorry but this time... It threw an error...
      </h1>
    );
  }
}

export default Error;
