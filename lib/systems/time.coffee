module.exports = {
  name:'time',
  baseUnit:'ms',
  units:{
    'ns':{ratio:0.000001},
    'µs':{ratio:0.001},
    'ms':{ratio:1}
    's':{ratio:1000},
    'm':{ratio:60*1000},
    'h':{ratio:3600*1000},
    'd':{ratio:3600*1000*24},
    'w':{ratio:3600*1000*24*7}
  },
  aliases:{
    'sec':'s',
    'min':'m'
  }
}