"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUnit = (s) => {
    if (typeof s !== 'string') {
        throw new Error('expected a string');
    }
    const unit = s.replace(/([0-9]|\.|\,)+([\S]+)?/, '$2').trim();
    if (!unit) {
        return null;
    }
    return unit;
};
//# sourceMappingURL=get-unit.js.map