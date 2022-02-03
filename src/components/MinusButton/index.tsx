/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

import countStore from '../../store/countStore';

// const StyledMinusButton = css({
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   backgroundColor: 'red',
//   width: '50px',
//   height: '20px',
//   marginBottom: '25px',
// });

// const StyledMinusButton = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: red;
//   color: ${(props) => props.color};
//   width: 50px;
//   height: 20px;
//   margin-bottom: 25px;
// `;

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
