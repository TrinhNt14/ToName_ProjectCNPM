var language = "vi";
var sound = "off";
var music = "on";
var audioTheme = 0;
var audioWrong = 1;
var audioCorrect = 2;
var audioCompleted = 3;
var audioCongratulation = 4;
var audioQuestion = 5;
var tagName;
var expressDragObject = false;
var mainBig = $("#mainBig");
var dragObject;
var part = [];
var checkPart = [];
var idPart;
var checkEffect = [];
var pointsReward = 1000;
var scoreLesson;
var pointsRewardLesson = [];
var inputTagName = JSON.parse(JSON.stringify(tag_Name[0]));
var inputTagLocation;
var inputLine;
var inputQuestion = JSON.parse(JSON.stringify(question[0]));
var partNumber = 0;
var loopEffectNumber = 10;
var Lesson = 1;
var lessonNumber = JSON.parse(JSON.stringify(lesson)).length;
for(var i=0; i<lessonNumber; i++){
    pointsRewardLesson.push(100*(i+1));
}
var lineContext = $("#line")[0].getContext("2d");