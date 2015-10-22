getUnit = require('get-unit')

systems = {
  'time':require('./systems/time')
  'byte':require('./systems/byte')
}

class UnitConverter
  constructor:(@value,systemName)->
    @unitSymbol = getUnit(@value)
    @baseValue = Number(@value.replace(@unitSymbol,''))
    if systemName
      system = systems[systemName]
      unit = @_getUnitFromSystem(@unitSymbol,system)
      if unit
        @unit = unit
        @system = system
    else
      for name,system of systems
        unit = @_getUnitFromSystem(@unitSymbol,system)
        if unit
          @unit = unit
          @system = system
          break

    if not @system
      throw new Error('unknown unit system for ' + @value)

  _getUnitFromSystem:(unit,system)->
    return system.units?[unit] or system.units?[system.aliases?[unit]]

  getUnit:()->
    return @unitSymbol

  getBaseUnit:()->
    return

  to:(unit)->
    toUnit = @_getUnitFromSystem(unit,@system)
    if not toUnit
      throw new Error('unknown unit ' + unit + ' for ' + @system.name + ' system')
    value = @baseValue * @unit.ratio
    return value / toUnit.ratio

  toBase:()->
    return @to(@system.baseUnit)

module.exports = UnitConverter