var exec = require('child_process').exec
  , sh = require('execSync').run
  , CircleCI = require('circleci');

var ci = new CircleCI({
  auth: process.env.CircleCIKey
});

var runBuild = function(){
  ci.startBuild({
    username: "TechAtNYU",
    project: process.env.ProjectName,
    branch: process.env.ProjectBranch
  }).then(function(build){
    console.log(build);
  });
};

setTimeout(function() { 
  runBuild(); 
}, 3600000);