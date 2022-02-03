import React from 'react';

import countStore from '@/store/countStore';

export default function Counter() {
  const { count } = countStore();
  return <div>{count}</div>;
}
