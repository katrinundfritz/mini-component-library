import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {

  const Styles = {
    small: {
      height: 24,
      fontSize: 14,
      iconSize: 12,
      margin: 10,
      borderThickness: 1
    },
    large: {
      height: 36,
      fontSize: 18,
      iconSize: 24,
      margin: 16,
      borderThickness: 2
    }
  }

  const styles = Styles[size];

  if (!styles) {
    throw new Error(`Unknown size passed to IconInput: ${size}`);
  }

  return <Wrapper style={{ '--border-thickness': styles.borderThickness + 'px' }}>
    <VisuallyHidden>{label}</VisuallyHidden>
    <Icon id={icon} size={styles.iconSize} strokeWidth={styles.borderThickness} />
    <TextInput
      {...delegated}
      style={{
        '--width': (styles.width / 16) + 'rem',
        '--height': (styles.height / 16) + 'rem',
        '--border-thickness': styles.borderThickness + 'px',
        '--fontSize': (styles.fontSize / 16) + 'rem',
        marginLeft: styles.margin
      }}
    />
  </Wrapper>
};

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  color: ${COLORS.gray500};
  border-bottom: var(--border-thickness) solid ${COLORS.black};

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: 1px dotted #212121;
    outline: 50px auto -webkit-focus-ring-color;
  }
`

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  border: none;
  width: 100%;
  font-size: var(--fontSize);
  padding: 4px 1px;
  color: inherit;

  &:focus-visible {
    outline: none;
  }

  &:not(:placeholder-shown) {
    font-weight: 700;
  }

  &:hover::placeholder {
    color: ${COLORS.gray500};
  }
`

export default IconInput;
