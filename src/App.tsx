import { FC } from 'react';
import Calculator from './components/Calculator';
import CalculatorProvider from './components/CalculatorProvider';
import ThemeToggleButton from './components/shared/ThemeToggleButton';

const App: FC = () => {
  return (
    <>
      <ThemeToggleButton />
      <CalculatorProvider>
        <Calculator />
      </CalculatorProvider>
    </>
  );
};

export default App;
