/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

import countStore from '@/store/countStore';

function MinusButton() {
  const { decCount } = countStore();
  const minusCount = () => decCount();
  return (
    <button
      type="button"
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 25px;
        background-color: hotpink;
        border-radius: 4px;
        height: 40px;
        width: 150px;
        color: #fff;
        font-size: 25px;
        font-weight: bold;
      `}
      onClick={minusCount}
    >
      -
    </button>
  );
}

export default MinusButton;
