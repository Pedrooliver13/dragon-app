// Packages
import { ReactElement, InputHTMLAttributes, forwardRef } from 'react';

// Styles
import * as Styled from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  error?: string | undefined;
  className?: string;
}

const InputBase = (
  props: InputProps,
  ref: React.LegacyRef<HTMLInputElement> | undefined
): ReactElement => {
  return (
    <Styled.InputContainer className={props.className}>
      <label htmlFor={props?.id}>{props.label}</label>

      <input
        id={props?.id}
        placeholder={props.label}
        className={
          props.error ? props?.className + ' input-error' : props?.className
        }
        ref={ref}
        autoComplete="off"
        {...props}
      />
      {props?.error && <p className="error">{props?.error}</p>}
    </Styled.InputContainer>
  );
};

export const Input = forwardRef(InputBase);
