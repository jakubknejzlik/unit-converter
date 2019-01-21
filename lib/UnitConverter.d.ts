export declare class UnitConverter {
    private unitSymbol;
    private unit;
    private system?;
    private baseValue;
    constructor(value: string | number, unitSymbol?: string);
    private systemFromUnitSymbol;
    private getUnitFromSystem;
    getUnitSymbol(): string;
    to(unitSymbol?: string): number;
    toBase: () => number;
}
