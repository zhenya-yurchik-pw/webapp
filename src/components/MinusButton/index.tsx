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
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
      `}
      color="white"
      onClick={minusCount}
    >
      -
    </button>
  );
}

export default MinusButton;
