import React from 'react';

import PlusButton from '@/components/PlusButton';
import Counter from '@/components/Counter';
import MinusButton from '@/components/MinusButton';

import StyledCountPage from './styles';

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
