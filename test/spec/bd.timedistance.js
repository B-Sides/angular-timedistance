'use strict';

describe('Module: bd.timedistance', function () {
  var scope, timedistanceFilter, now;

  // load the controller's module
  beforeEach(module('bd.timedistance'));

  beforeEach(inject(function ($injector, $rootScope, $filter) {
    scope = $rootScope;
		timedistanceFilter = $filter('timeDistance');
		now = new Date();
  }));

  afterEach(function() {
    scope.$destroy();
  });

  describe('timedistance', function () {
		var	SECONDS = 1000;
		var	MINUTES = SECONDS * 60;
		var	HOURS = MINUTES * 60;
		var	DAYS = HOURS * 24;
		var YEARS = DAYS * 365;
		
		// Past.

		it('should return about 1 hour', function () {
			var then = now - 50 * MINUTES;
			expect(timedistanceFilter(then)).toEqual('about 1 hour');
		});

		it('should return less than a minute', function () {
			var then = now - 15 * SECONDS;
			expect(timedistanceFilter(then)).toEqual('less than a minute');
		});

		it('should return less about 3 years', function () {
			var then = now - 3 * YEARS;
			expect(timedistanceFilter(then)).toEqual('about 3 years');
		});

		it('should return 3 days', function () {
			var then = now - 60 * HOURS;
			expect(timedistanceFilter(then)).toEqual('3 days');
		});

		it('should return 1 minute', function () {
			var then = now - 76 * SECONDS;
			expect(timedistanceFilter(then)).toEqual('1 minute');
		});

		it('should return about 1 year', function () {
			var then = now - 1 * YEARS - 3 * DAYS;
			expect(timedistanceFilter(then)).toEqual('about 1 year');
		});

		it('should return over 3 years', function () {
			var then = now - 3 * YEARS - 183 * DAYS;
			expect(timedistanceFilter(then)).toEqual('over 3 years');
		});

		it('should return about 4 years', function () {
			var then = now - 4 * YEARS - 9 * DAYS - 30 * MINUTES - 5 * SECONDS;
			expect(timedistanceFilter(then)).toEqual('about 4 years');
		});

		// Present.

		it('should return less than a minute', function () {
			var then = now;
			expect(timedistanceFilter(then)).toEqual('less than a minute');
		});

		// Future.
		
		it('should return about 1 hour', function () {
			var then = new Date(now.getTime() + 50 * MINUTES);
			expect(timedistanceFilter(then)).toEqual('about 1 hour');
		});

		it('should return less than a minute', function () {
			var then = new Date(now.getTime() + 15 * SECONDS);
			expect(timedistanceFilter(then)).toEqual('less than a minute');
		});

		it('should return less about 3 years', function () {
			var then = new Date(now.getTime() + 3 * YEARS);
			expect(timedistanceFilter(then)).toEqual('about 3 years');
		});

		it('should return 3 days', function () {
			var then = new Date(now.getTime() + 60 * HOURS);
			expect(timedistanceFilter(then)).toEqual('3 days');
		});

		it('should return 1 minute', function () {
			var then = new Date(now.getTime() + 76 * SECONDS);
			expect(timedistanceFilter(then)).toEqual('1 minute');
		});

		it('should return about 1 year', function () {
			var then = new Date(now.getTime() + 1 * YEARS + 3 * DAYS);
			expect(timedistanceFilter(then)).toEqual('about 1 year');
		});

		it('should return over 3 years', function () {
			var then = new Date(now.getTime() + 3 * YEARS + 183 * DAYS);
			expect(timedistanceFilter(then)).toEqual('over 3 years');
		});

		it('should return about 4 years', function () {
			var then = new Date(now.getTime() + 4 * YEARS + 9 * DAYS + 30 * MINUTES + 5 * SECONDS);
			expect(timedistanceFilter(then)).toEqual('about 4 years');
		});
  });
});
