'use strict';

angular.module('keikii').filter('durationFormat', function () {
		return function (input) {
			input = input || '';
			var out = '';
			var dur = moment.duration(input, 'minutes');
			return dur.format('HH:mm:ss');
		};
	})
	.controller('BookController',
	['$scope', function ($scope) {

				$scope.myTime = 3361;

		$scope.genres = [
			"Urban Fantasy",
			"Paranormal Romance",
			"Fantasy",
			"Fiction",
			"Young Adult",
			"Science Fiction",
			"Epic"
		]

		$scope.creatures = [
			"Angel",
			"Demon",
			"Dragon",
			"Fae",
			"Ghost",
			"Gods",
			"Halfbreeds",
			"Vampires",
			"Weres/Shifters",
			"Witches",
			"Zombies",
			"Others"
		]
		$scope.jobs = [
			"Detective",
			"Slayer",
			"Powerhouse"
		]
		$scope.loves = [
			"Baby",
			"Crying",
			"Death",
			"Kids",
			"Mate",
			"Pregnancy",
			"Sex",
			"Triangle"
		]
		$scope.worlds = [
			"Apocalypse",
			"Post-Apocalypse",
			"Unknown",
			"Known",
			"Coming Out",
			"Otherworld",
		]
		$scope.annoyances = [
			"Essential",
			"Nonessential",
			"Cliffhanger",
			"Ascension",
			"Memory Loss",
			"Shitty SO",
			"Time Travel",
		]

		$scope.controls = [
			"Can't Find",
			"Edited",
			"Audio",
			"Chaptered",
			"Uploaded",
		]

	}]);