import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

const <%= tool %> = React.createClass({
  propTypes: {
    aProp: PropTypes.string,
  }

  // TODO: figure out what component is
  render() {
    return (
      // TODO: define the store
      <Provider store={store}>
        <Component passedDownProp={aProp} />
      </Provider>
    )
  },
});

export default <%= tool %>;
