"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_unit_1 = require("./get-unit");
const systems_1 = require("./systems");
class UnitConverter {
    constructor(value, unitSymbol) {
        this.toBase = () => this.to();
        this.unitSymbol = unitSymbol || get_unit_1.getUnit(value.toString());
        if (this.unitSymbol) {
            this.system = this.systemFromUnitSymbol(this.unitSymbol);
            this.unit = this.getUnitFromSystem(this.unitSymbol, this.system);
        }
        this.baseValue =
            parseFloat(String(value).replace(this.unitSymbol, '')) *
                ((this.unit && this.unit.ratio) || 1);
    }
    systemFromUnitSymbol(unitSymbol) {
        for (const name of Object.keys(systems_1.systems)) {
            const system = systems_1.systems[name];
            if (system.units[unitSymbol] || system.aliases[unitSymbol]) {
                return system;
            }
        }
        throw new Error('unknown system for unit ' + unitSymbol);
    }
    getUnitFromSystem(unitSymbol, system) {
        const _system = system || this.systemFromUnitSymbol(unitSymbol);
        const units = _system.units;
        return units[unitSymbol] || units[_system.aliases[unitSymbol]] || null;
    }
    getUnitSymbol() {
        return this.unitSymbol;
    }
    to(unitSymbol) {
        if (!this.system && !unitSymbol) {
            throw new Error(`you must specify at least one unit (in constructor or in 'to' method)`);
        }
        const system = this.system || this.systemFromUnitSymbol(unitSymbol);
        let toUnit = null;
        try {
            toUnit = this.getUnitFromSystem(unitSymbol || system.baseUnit, system);
        }
        catch (err) {
            toUnit = { ratio: 1 };
        }
        if (!toUnit) {
            throw new Error('unknown unit ' + unitSymbol + ' for ' + system.name + ' system');
        }
        const value = this.baseValue;
        return value / toUnit.ratio;
    }
}
exports.UnitConverter = UnitConverter;
//# sourceMappingURL=UnitConverter.js.map