'use strict';

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const rq = require('request')

module.exports = {
    GetConfiguration: function () {

        return process.env;
        // var a1 = process.env.A1;    
        // var a2 = process.env.A2;             
        // var a3 = process.env.A3;        
    },
};




