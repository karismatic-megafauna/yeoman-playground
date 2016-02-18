import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './Counter';
import counter from './reducers';

const store = createStore(counter);
const mountPoint = document.getElementById('mountPoint');

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

// render();
// store.subscribe(render);
export default connect(
  counterSelector,
  counterMapDispatch,
)(Counter);

