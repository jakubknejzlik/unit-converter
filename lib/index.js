"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnitConverter_1 = require("./UnitConverter");
exports.convert = (value, unit) => {
    return new UnitConverter_1.UnitConverter(value, unit);
};
exports.default = exports.convert;
//# sourceMappingURL=index.js.map