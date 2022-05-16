import { FC } from 'react';
import { Action } from '../CalculatorProvider';
import KeypadButton, { KeypadButtonProps } from './KeypadButton';
import ScientificModeButton from './ScientificModeButton';
import './styles.css';

const actionButtons: KeypadButtonProps[] = [
  { value: Action.One, label: '1', order: 1 },
  { value: Action.Two, label: '2', order: 2 },
  { value: Action.Three, label: '3', order: 3 },

  { value: Action.Four, label: '4', order: 5 },
  { value: Action.Five, label: '5', order: 6 },
  { value: Action.Six, label: '6', order: 7 },

  { value: Action.Seven, label: '7', order: 9 },
  { value: Action.Eight, label: '8', order: 10 },
  { value: Action.Nine, label: '9', order: 11 },

  { value: Action.Clear, label: 'Clear', order: 13 },
  { value: Action.Zero, label: '0', order: 14 },
  { value: Action.Equals, label: '=', order: 15 },

  { value: Action.Plus, label: '+', order: 4 },
  { value: Action.Minus, label: '-', order: 8 },
  { value: Action.Multiply, label: 'x', order: 12 },
  { value: Action.Divide, label: '/', order: 16 },
];

export interface KeypadProps {}

const Keypad: FC<KeypadProps> = () => {
  return (
    <div className='keypad'>
      {actionButtons.map((props) => (
        <KeypadButton {...props} key={props.value} />
      ))}
      <ScientificModeButton />
    </div>
  );
};

export default Keypad;
