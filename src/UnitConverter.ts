import { getUnit } from './get-unit';
import { UnitSystem, UnitSystemUnit } from './UnitSystem';
import { systems } from './systems';

export class UnitConverter {
  private unitSymbol: string;
  private unit: UnitSystemUnit;
  private system?: UnitSystem;
  private baseValue: number;

  constructor(value: string | number, unitSymbol?: string) {
    this.unitSymbol = unitSymbol || getUnit(value.toString());
    if (this.unitSymbol) {
      this.system = this.systemFromUnitSymbol(this.unitSymbol);
      this.unit = this.getUnitFromSystem(this.unitSymbol, this.system);
    }

    this.baseValue =
      parseFloat(String(value).replace(this.unitSymbol, '')) *
      ((this.unit && this.unit.ratio) || 1);
  }

  private systemFromUnitSymbol(unitSymbol: string): UnitSystem {
    for (const name of Object.keys(systems)) {
      const system = systems[name];
      if (system.units[unitSymbol] || system.aliases[unitSymbol]) {
        return system;
      }
    }
    throw new Error('unknown system for unit ' + unitSymbol);
  }

  private getUnitFromSystem(
    unitSymbol: string,
    system?: UnitSystem,
  ): UnitSystemUnit | null {
    const _system = system || this.systemFromUnitSymbol(unitSymbol);
    const units = _system.units;
    return units[unitSymbol] || units[_system.aliases[unitSymbol]] || null;
  }

  getUnitSymbol() {
    return this.unitSymbol;
  }

  to(unitSymbol?: string) {
    if (!this.system && !unitSymbol) {
      throw new Error(
        `you must specify at least one unit (in constructor or in 'to' method)`,
      );
    }
    const system = this.system || this.systemFromUnitSymbol(unitSymbol);
    let toUnit = null;
    try {
      toUnit = this.getUnitFromSystem(unitSymbol || system.baseUnit, system);
    } catch (err) {
      toUnit = { ratio: 1 };
    }
    if (!toUnit) {
      throw new Error(
        'unknown unit ' + unitSymbol + ' for ' + system.name + ' system',
      );
    }
    const value = this.baseValue;
    return value / toUnit.ratio;
  }

  toBase = () => this.to();
}
