var Addition=require('./Addition.js');
console.log(Addition.AddNumber(1,2));

var localTutor=require('./NodeTutorial.js');
localTutor.NodeTutorial();
localTutor.NodeTutorial.pTutor();

Or use this code
var tut = new localTutor.NodeTutorial();  // Create and save object
tut.pTutor();
