import React from 'react';
import styled from '@emotion/styled';

import countStore from '@/store/countStore';

const StyledPlusButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  border-radius: 4px;
  color: ${(props) => props.color};
  width: 50px;
  height: 20px;
  margin-bottom: 15px;
`;

function PlusButton() {
  const { incCount } = countStore();
  const plusOne = () => incCount();
  return (
    <StyledPlusButton color="white" onClick={plusOne}>
      +
    </StyledPlusButton>
  );
}

export default PlusButton;
