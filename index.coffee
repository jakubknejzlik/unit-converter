UnitConverter = require('./lib/UnitConverter');

module.exports = (value,systemName)->
  return new UnitConverter(value,systemName)