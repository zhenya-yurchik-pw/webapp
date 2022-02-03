/** @jsxRuntime classic */
/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/react';

import countStore from '@/store/countStore';

export default function Counter() {
  const { count } = countStore();
  return (
    <div
      css={css`
        color: #000;
        font-size: 60px;
        font-weight: bold;
      `}
    >
      {count}
    </div>
  );
}
