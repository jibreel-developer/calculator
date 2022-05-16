import { FC } from 'react';
import { useCalculator } from '../CalculatorProvider/hooks';
import './styles.css';

export interface DisplayProps {}

const Display: FC<DisplayProps> = () => {
  const { value } = useCalculator();

  return <div className='display'>{value}</div>;
};

export default Display;
