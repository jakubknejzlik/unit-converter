UnitParser = require('./lib/UnitParser');

module.exports = (value,systemName)->
  return new UnitParser(value,systemName)