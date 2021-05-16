/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 8,
    borderRadius: 4,
    innerBorderRadius: 4,
    padding: 0,
  },
  medium: {
    height: 12,
    borderRadius: 4,
    innerBorderRadius: 4,
    padding: 0,
  },
  large: {
    height: 24,
    borderRadius: 8,
    innerBorderRadius: 4,
    padding: 4,
  },
}

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return <Wrapper
    role="progressbar"
    aria-valuenow={value}
    aria-valuemin="0"
    aria-valuemax="100"
    style={{
      '--height': styles.height + 'px',
      '--border-radius': styles.borderRadius + 'px',
      '--inner-border-radius': styles.innerBorderRadius + 'px',
      '--padding': styles.padding + 'px'
    }}
  >
    <IndicatorWrapper style={{'--border-radius': styles.borderRadius + 'px'}}>
      <Indicator value={value}>
        <VisuallyHidden >{value}%</VisuallyHidden>
      </Indicator>
    </IndicatorWrapper>
  </Wrapper>;
};

const Wrapper = styled.div`
  width: 370px;
  height: var(--height);
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--border-radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);

`

const IndicatorWrapper = styled.div`
  border-radius: var(--inner-border-radius);
  /* Trim off corners when progress bar is near full*/
  overflow: hidden;
  height: 100%;
`

const Indicator = styled.div`
  width: ${props => props.value}%;
  height: 100%;
  background-color: ${COLORS.primary};
`

export default ProgressBar;
