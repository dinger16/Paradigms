var assert = require('assert');
var parity = require('./parityAnalysis')

const first = 0;
const second = 249;
const third = 824;
const fourth = 17;
const fifth = 520;


describe('parityAnalysis(n)', function() {
    describe('Input: 0', function() {
        it('Should return true', function() {
            assert.equal(parity.parityAnalysis(first), true);
        });
    });

    describe('Input: 249', function() {
        it('Should return true', function() {
            assert.equal(parity.parityAnalysis(second), true);
        });
    });

    describe('Input: 824', function() {
        it('Should return true', function() {
            assert.equal(parity.parityAnalysis(third), true);
        });
    });

    describe('Input: 17', function() {
        it('Should return false', function() {
            assert.equal(parity.parityAnalysis(fourth), false);
        });
    });

    describe('Input: 520', function() {
        it('Should return false', function() {
            assert.equal(parity.parityAnalysis(fifth), false);
        });
    });
});