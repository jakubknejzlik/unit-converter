import { UnitConverter } from './UnitConverter';

export const convert = (value: string | number, unit?: string) => {
  return new UnitConverter(value, unit);
};

export default convert;
