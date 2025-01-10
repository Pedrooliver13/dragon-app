// Packages
import { forwardRef, ReactElement } from 'react';
import { CircleNotch } from 'phosphor-react';

// Styles
import * as Styled from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  $variant?: 'primary' | 'secondary';
}

export const ButtonBase = (
  props: ButtonProps,
  ref: React.Ref<HTMLButtonElement>
): ReactElement => {
  const isDisabledButton = props?.disabled || props?.isLoading;

  return (
    <Styled.ButtonContainer
      {...props}
      variant={props?.$variant || 'primary'}
      disabled={isDisabledButton}
      ref={ref}
    >
      {props?.isLoading && (
        <CircleNotch size={24} weight="light" className="loading" />
      )}
      {props?.children}
    </Styled.ButtonContainer>
  );
};

export const Button = forwardRef(ButtonBase);
