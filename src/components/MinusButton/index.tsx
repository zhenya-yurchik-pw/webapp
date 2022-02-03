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
        height: 20px;
        width: 50px;
      `}
      color="white"
      onClick={minusCount}
    >
      -
    </button>
  );
}

export default MinusButton;
