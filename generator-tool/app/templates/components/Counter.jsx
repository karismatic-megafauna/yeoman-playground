import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import counter from './redux/ducks/counter.js';
import conterSelector from './redux/selectors/counter.js';
import conterMapDispatch from './redux/dispatch/counter.js';

const store = createStore(counter);
const mountPoint = document.getElementById('mountPoint');

// TODO: make this a react component
function render() {
  ReactDom.render(
    <div>
      <div>
        {store.getState()}
      </div>
      <Button onClick={this.props.increment()}>
        increment
      </Button>
      <Button onDecrement={this.props.decrement()}>
        decrement
      </Button>
    </div>,
    mountPoint
  )
}

// TODO: connect it to this component
export default connect(
  counterSelector,
  counterMapDispatch,
)(Counter);

