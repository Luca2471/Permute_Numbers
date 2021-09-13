const assert = require('assert');
const Solution = require('../SolutionAND.js');

describe('solution', function () {
    let solution;

    beforeEach(function () {
        solution = new Solution('326ABC');
    });

    it('should have a input', function() {
        const actual = solution.input; 
        assert.strictEqual(actual, '326ABC');
    });

    it('should separate every character', function() {
        const actual = solution.alphanumericCharactersSeparated;
        assert.deepStrictEqual(actual, ['3','2','6','A','B','C']);
    })

    it('should have only have numbers', function() {
        const actual = solution.filteredInputs;
        assert.deepStrictEqual(actual, ['3','2','6']);
    })

    it('should return 6 combinations', function() {
        const actual = solution.permuteSortedInDescendingOrder.length;
        assert.deepStrictEqual(actual, 6);
    })

    it('should return 6 combinations, in descending order', function() {
        const actual = solution.permuteSortedInDescendingOrder;
        assert.deepStrictEqual(actual, ["632","623","362","326","263","236"]);
    })
})
