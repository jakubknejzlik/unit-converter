import { convert } from '../lib/index';

describe('unit parsing', () => {
  it('should parse units', () => {
    const values = ['100kb', '20s', '200h'];
    const units = ['kb', 's', 'h'];

    for (const i of Object.keys(values)) {
      const p = convert(values[i]);
      expect(p.getUnitSymbol()).toBe(units[i]);
    }
  });

  it('should convert unit to base', () => {
    const values = ['20s', '200h'];
    const bases = [20000, 200 * 3600 * 1000];

    for (const i of Object.keys(values)) {
      const p = convert(values[i]);
      expect(p.toBase()).toEqual(bases[i]);
    }
  });

  it('should convert to unit from base', () => {
    const bases = [20 * 1000, 200 * 3600 * 1000];

    for (const i of Object.keys(bases)) {
      const p = convert(bases[i]);
      expect(p.to('s')).toEqual(bases[i] / 1000);
    }
  });

  it('should convert unit to another unit', () => {
    const values = [
      { input: '15s', unit: 'm', result: 0.25 },
      { input: '15sec', unit: 'm', result: 0.25 },
      { input: '2h', unit: 's', result: 3600 * 2 },
      { input: '1024MB', unit: 'GB', result: 1 },
      { input: 24 * 3600 * 10 + 's', unit: 'd', result: 10 },
    ];

    for (const i of Object.keys(values)) {
      const value = values[i];
      const p = convert(value.input);
      expect(p.to(value.unit)).toEqual(value.result);
    }
  });

  it('should fail with unknown unit', () => {
    expect(() => {
      convert('7blah');
    }).toThrow('blah');
  });
});
