import { FC, useState } from 'react';
import Button from '../../shared/Button';
import { Action } from '../../CalculatorProvider';

import KeypadButton, { KeypadButtonProps } from '../KeypadButton';
import './styles.css';

export interface ScientificModeButtonProps {}

const actionButtons: KeypadButtonProps[] = [
  { value: Action.ChangeSign, label: '-/+', order: 18 },
  { value: Action.Square, label: 'square', order: 19 },
  { value: Action.SquareRoot, label: 'sq. root', order: 20 },
];

const ScientificModeButton: FC<ScientificModeButtonProps> = () => {
  const [scientificModeOn, setScientificModeOn] = useState(false);

  return (
    <>
      <Button
        onClick={() => setScientificModeOn((bool) => !bool)}
        style={{ order: 17, width: '100%' }}
      >
        {scientificModeOn ? 'Off' : 'On'} Scientific Mode
      </Button>
      {scientificModeOn &&
        actionButtons.map((props) => (
          <KeypadButton {...props} key={props.value} />
        ))}
    </>
  );
};

export default ScientificModeButton;
