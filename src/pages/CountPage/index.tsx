import React from 'react';
import styled from '@emotion/styled';

import Counter from 'components/Counter';
import MinusButton from 'components/MinusButton';
import PlusButton from 'components/PlusButton';

const StyledCountPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

function CountPage() {
  return (
    <StyledCountPage>
      <div>
        <PlusButton />
        <MinusButton />
      </div>
      <Counter />
    </StyledCountPage>
  );
}

export default CountPage;
