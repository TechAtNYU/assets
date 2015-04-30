'use strict';

var CircleCI = require('circleci');

var ci = new CircleCI({
	auth: process.env.CircleCIKey
});

var runBuild = function() {
	ci.startBuild({
		username: 'TechAtNYU',
		project: process.env.ProjectName,
		branch: process.env.ProjectBranch
	}).then(function(build) {
		console.log(build);
	});
};

runBuild();
