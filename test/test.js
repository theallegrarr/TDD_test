const assert = require('chai').assert;
const myApp = require('../src/main.js');

describe("Factorial", function() {
	// body...
	describe("handle valid input", function() {
		// body...
		it("should return 6 as factorial for 3", function() {
			// body...
			assert.equal(myApp.computeFactorial(3), 6);
		});

		it("should return 120 as factorial for 5", function() {
			// body...
			assert.equal(myApp.computeFactorial(5), 120);
		});
	})

	describe("handle invalid input", function() {
		// body...
		it("should return undefined as factorial for -5", function() {
			// body...
			assert.equal(myApp.computeFactorial(-5), 'undefined');
		});
	})
})

