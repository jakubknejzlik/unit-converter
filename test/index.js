var assert = require('assert');
var convert = require('../index')

describe('unit parsing',function(){
    it('should parse units',function(){
        var values = ['100kb','20s','200h'];
        var units = ['kb','s','h'];

        for(var i in values){
            var p = convert(values[i]);
            assert.equal(p.getUnit(),units[i]);
        }
    })

    it('should convert unit to base',function(){
        var values = ['20s','200h'];
        var bases = [20*1000,200*3600*1000];

        for(var i in values){
            var p = convert(values[i],'time');
            assert.equal(p.toBase(),bases[i]);
        }
    })

    it('should convert unit to another unit',function(){
        var values = [
            {input:'15s',unit:'m',result:0.25},
            {input:'15sec',unit:'m',result:0.25},
            {input:'2h',unit:'s',result:3600*2},
            {input:'1024MB',unit:'GB',result:1},
            {input:24*3600*10+'s',unit:'d',result:10}
        ]

        for(var i in values){
            var value = values[i];
            var p = convert(value.input);
            assert.equal(p.to(value.unit),value.result);
        }
    })
})