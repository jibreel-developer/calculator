import { useContext } from 'react';
import { CalculatorContext } from '.';

export function useCalculator() {
  return useContext(CalculatorContext);
}
