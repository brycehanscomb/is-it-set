const expect = require('expect.js');
const isSet = require('../index.js');

describe('The basics', function() {

	it('should be available, as a function', function() {
		expect(isSet).not.to.be(undefined);
		expect(isSet).to.be.a('function');
	});

	it('should return false when called with no arguments', function() {
		expect(function() {
			isSet();
		}).not.to.throwError();
	});

});

describe('The inputs that return false', function() {

	it('should return false when called with "null"', function() {
		expect(
			isSet(null)
		).to.be(false);
	});

	it('should return false when called with "undefined"', function() {
		expect(
			isSet(undefined)
		).to.be(false);
	});

	it('should return false when called with an empty string', function() {
		expect(
			isSet('')
		).to.be(false);
	});

});

describe('inputs that return true', function() {

	describe('booleans', function() {

		it('should return true when called with "true"', function() {
			expect(
				isSet(true)
			).to.be(true);
		});

		it('should return true when called with "false"', function() {
			expect(
				isSet(false)
			).to.be(true);
		});
	});

	describe('numbers', function() {

		it('should return true when called with "-1"', function() {
			expect(
				isSet(-1)
			).to.be(true);
		});

		it('should return true when called with "0"', function() {
			expect(
				isSet(0)
			).to.be(true);
		});

		it('should return true when called with "-0"', function() {
			expect(
				isSet(-0)
			).to.be(true);
		});

		it('should return true when called with "1"', function() {
			expect(
				isSet(1)
			).to.be(true);
		});

		it('should return true when called with "Infinity"', function() {
			expect(
				isSet(Infinity)
			).to.be(true);
		});

		it('should return true when called with "Pi"', function() {
			expect(
				isSet(Math.PI)
			).to.be(true);
		});

	});

	describe('strings', function() {

		it('should return true when called with empty string + whitespace', function() {
			expect(
				isSet(' ')
			).to.be(true);
		});

		it('should return true when called with empty string + control chars', function() {
			expect(
				isSet('\n')
			).to.be(true);

			expect(
				isSet('\r')
			).to.be(true);
		});

		it('should return true when called with non-empty strings', function() {

			expect(
				isSet('a')
			).to.be(true);

			expect(
				isSet('""')
			).to.be(true);

			expect(
				isSet('\'\'')
			).to.be(true);

			expect(
				isSet('\'')
			).to.be(true);
		});

	});

	describe('non-primitive data types', function() {

		it('should return true when called with an Object', function() {
			expect(
				isSet({})
			).to.be(true);

			expect(
				isSet({ a: 5 })
			).to.be(true);
		});

		it('should return true when called with an Array', function() {
			expect(
				isSet([])
			).to.be(true);

			expect(
				isSet([undefined])
			).to.be(true);

			expect(
				isSet([null])
			).to.be(true);

			expect(
				isSet([''])
			).to.be(true);
		});

		it('should return true when called with complex objects', function() {
			expect(
				isSet(new String(''))
			).to.be(true);

			expect(
				isSet(Date)
			).to.be(true);

			expect(
				isSet(new Date())
			).to.be(true);

			expect(
				isSet(Math)
			).to.be(true);

			expect(
				isSet(function() {})
			).to.be(true);
		});

	});

});