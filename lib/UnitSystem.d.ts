export interface UnitSystemUnit {
    ratio: number;
}
export interface UnitSystem {
    name: string;
    baseUnit: string;
    units: {
        [key: string]: UnitSystemUnit;
    };
    aliases: {
        [key: string]: string;
    };
}
