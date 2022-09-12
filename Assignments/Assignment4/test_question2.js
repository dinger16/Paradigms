var assert = require('assert');
var findConsecutiveOnes = require('./question2')

const noOnes = [13, 421, 2, -1, 5, 4, 4, 3, 90]
const fiveOnes = [1, 1, 0, 4, 1, 1, 1, 1, 3, 2, 1, 1, 1, 1, 1, 0, 1, 1, 1, 5, 6]


describe('findConsecutiveOnes(nums)', function() {
    describe('No Ones', function() {
        it('Should equal 0', function() {
            assert.equal(findConsecutiveOnes.findConsecutiveOnes(noOnes), 0);
        });
    });

    describe('Five Ones', function() {
        it('Should equal 5', function() {
            assert.equal(findConsecutiveOnes.findConsecutiveOnes(fiveOnes), 5);
        });
    });
});

