import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (<Wrapper>
    <NativeSelect value={value} onChange={onChange}>
      {children}
    </NativeSelect>
    <PresentationalBit>
      {displayedValue}
      <Icon id='chevron-down' strokeWidth={1} size={24} style={{marginLeft: '24px'}} />
    </PresentationalBit>
  </Wrapper>);
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
`

const PresentationalBit = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  height: 43px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 10px 12px 16px;
  font-size: ${16 / 16}rem;
  color: ${COLORS.gray700};

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 50px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`

export default Select;
