var UnitParser = require('./lib/UnitParser');

module.exports = function(value){
    return new UnitParser(value);
}