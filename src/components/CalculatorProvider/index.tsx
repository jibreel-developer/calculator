import { createContext, FC, ReactNode, useState } from 'react';

export interface CalculatorProviderProps {
  children?: ReactNode;
}

export enum Action {
  One = '1',
  Two = '2',
  Three = '3',
  Four = '4',
  Five = '5',
  Six = '6',
  Seven = '7',
  Eight = '8',
  Nine = '9',
  Zero = '0',

  Clear = 'c',
  Equals = '=',
  Plus = '+',
  Minus = '-',
  Multiply = '*',
  Divide = '/',

  ChangeSign = '-/+',
  Square = 'sq',
  SquareRoot = 'sq root',
}

type Operation = Action.Plus | Action.Minus | Action.Multiply | Action.Divide;

const allowedActions = Object.values(Action);

interface ICalculatorContext {
  value: string;
  callAction: (value: Action) => void;
}

export const CalculatorContext = createContext<ICalculatorContext>({
  value: '0',
  callAction: () => {},
});

const CalculatorProvider: FC<CalculatorProviderProps> = ({ children }) => {
  const [value, setValue] = useState('0');
  const [lastValue, setLastValue] = useState('0');

  // TODO: try to remove this
  const [startNewValue, setStartNewValue] = useState<boolean>(true);

  const [operation, setOperation] = useState<Operation | null>(null);

  const calculate = () => {
    if (!operation) return value;
    return `${eval(`${+lastValue} ${operation} ${+value}`)}`;
  };

  const resetAllExceptValue = () => {
    setLastValue('0');
    setOperation(null);
    setStartNewValue(true);
  };

  const callAction = (action: Action) => {
    if (!allowedActions.includes(action)) return;

    switch (action) {
      case Action.Clear:
        setValue('0');
        resetAllExceptValue();
        break;

      case Action.Plus:
      case Action.Minus:
      case Action.Multiply:
      case Action.Divide: {
        const val = calculate();
        setValue(val);
        setLastValue(val);
        setStartNewValue(true);
        setOperation(action);
        break;
      }

      case Action.Equals: {
        const val = calculate();
        setValue(val);
        resetAllExceptValue();
        break;
      }

      case Action.ChangeSign:
        setValue(`${+value * -1}`);
        break;

      case Action.Square:
        setValue(`${(+value) ** 2}`);
        resetAllExceptValue(); // setting lastValue to 0 and last operation to null because scope not clear
        break;

      case Action.SquareRoot:
        setValue(`${Math.sqrt(+value)}`);
        resetAllExceptValue(); // setting lastValue to 0 and last operation to null because scope not clear
        break;

      default:
        setValue((prevValue) => {
          if (prevValue == '0' || startNewValue) return action;
          return prevValue + action;
        });
        setStartNewValue(false);
        break;
    }
  };

  return (
    <CalculatorContext.Provider value={{ value, callAction }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;
