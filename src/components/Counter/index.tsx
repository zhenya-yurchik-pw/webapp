import React from 'react';
import countStore from '../../store/countStore';

function Counter() {
  const { count } = countStore();
  return <div>{count}</div>;
}

export default Counter;
