var UnitParser = require('./lib/UnitParser');

module.exports = function(value,systemName){
    return new UnitParser(value,systemName);
}