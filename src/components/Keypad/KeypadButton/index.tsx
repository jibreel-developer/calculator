import { FC } from 'react';
import Button from '../../shared/Button';
import { Action } from '../../CalculatorProvider';
import { useCalculator } from '../../CalculatorProvider/hooks';
import './styles.css';

export interface KeypadButtonProps {
  label: string;
  value: Action;
  order: number;
}

const KeypadButton: FC<KeypadButtonProps> = ({ value, label, order }) => {
  const { callAction } = useCalculator();

  return (
    <Button
      className='keypad-btn'
      style={{ order }}
      onClick={() => callAction(value)}
    >
      {label}
    </Button>
  );
};

export default KeypadButton;
