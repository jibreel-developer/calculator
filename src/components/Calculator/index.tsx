import { FC, useEffect } from 'react';
import { Action } from '../CalculatorProvider';
import { useCalculator } from '../CalculatorProvider/hooks';
import Display from '../Display';
import Keypad from '../Keypad';
import './styles.css';

export interface CalculatorProps {}

const Calculator: FC<CalculatorProps> = () => {
  const { callAction } = useCalculator();

  useEffect(() => {
    function keyupEvent(event: KeyboardEvent) {
      callAction(`${event.key}` as Action);
    }

    window.addEventListener('keyup', keyupEvent);

    return () => window.removeEventListener('keyup', keyupEvent);
  });

  return (
    <div className='calculator-container'>
      <Display />
      <Keypad />
    </div>
  );
};

export default Calculator;
