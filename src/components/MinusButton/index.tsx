import React from 'react';
import styled from '@emotion/styled';
import countStore from '../../store/countStore';

const StyledMinusButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: ${(props) => props.color};
  width: 50px;
  height: 20px;
  margin-bottom: 25px;
`;

function MinusButton() {
  const { decCount } = countStore();
  const minusCount = () => decCount();
  return (
    <StyledMinusButton color="white" onClick={minusCount}>
      -
    </StyledMinusButton>
  );
}

export default MinusButton;
