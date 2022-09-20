var assert = require('assert');
var ConsecutiveOnes = require('./maxConsecutiveOnes')

const test1 = [1, 0, 1, 1, 1, 0, 1, 1, 1, 1]
const test2 = [1, 1, 4, 1, 1, 1, 0]
const test3 = [1]


describe('findConsecutiveOnes(nums)', function() {
    describe('Max Consecutive Ones at end of array', function() {
        it('Should equal 4', function() {
            assert.equal(ConsecutiveOnes.maxConsecutiveOnes(test1), 4);
        });
    });

    describe('Includes numbers other than 1 or 0', function() {
        it('Should equal 3', function() {
            assert.equal(ConsecutiveOnes.maxConsecutiveOnes(test2), 3);
        });
    });

    describe('Array with one element equal to 1', function() {
        it('Should equal 1', function() {
            assert.equal(ConsecutiveOnes.maxConsecutiveOnes(test3), 1);
        });
    });
});
