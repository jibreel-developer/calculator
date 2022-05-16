import { ComponentPropsWithoutRef, FC } from 'react';
import './styles.css';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {}

const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button {...props} className={`btn ${className || ''}`}>
      {children}
    </button>
  );
};

export default Button;
