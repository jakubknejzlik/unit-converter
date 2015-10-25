getUnit = require('get-unit')

systems = {
  'time':require('./systems/time')
  'byte':require('./systems/byte')
}

class UnitConverter
  constructor:(value,@unitSymbol)->
    try
      @unitSymbol = @unitSymbol or getUnit(value)
      [@system,@unit] = @_systemFromUnitSymbol(@unitSymbol)
    catch err

    @baseValue = parseFloat(String(value).replace(@unitSymbol,'')) * (@unit?.ratio or 1)

  _systemFromUnitSymbol:(unitSymbol)->
    for name,system of systems
      _unit = @_getUnitFromSystem(unitSymbol,system)
      if _unit
        return [system,_unit]
    throw new Error('unknown system for unit ' + unitSymbol)

  _getUnitFromSystem:(unit,system)->
    return system.units?[unit] or system.units?[system.aliases?[unit]]

  getUnitSymbol:()->
    return @unitSymbol

  getBaseUnit:()->
    return

  to:(unitSymbol)->
    if not @system and not unitSymbol
      throw new Error('you must specify at least one unit')
    system = @system or @_systemFromUnitSymbol(unitSymbol)[0]

    toUnit = null
    try
      toUnit = @_getUnitFromSystem(unitSymbol or system.baseUnit,system)
    catch
      toUnit = {ratio:1}

    if not toUnit
      throw new Error('unknown unit ' + unitSymbol + ' for ' + system.name + ' system')

    value = @baseValue
    return value / toUnit.ratio

  toBase:()->
    return @to()

module.exports = UnitConverter