'use strict'
const testReg = /abc/;

const tokenSpec = {
    sinus: /sin\s*\(\s*(\d*|\w)\s*\)/
}

console.log(tokenSpec.sinus.exec('a + sin(123)')[0].length);

function lexer(str) {
    
}