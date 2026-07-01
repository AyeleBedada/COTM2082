/*==================================================
Construction Technology & Management Challenge
script.js
PART 4A
==================================================*/

/*==============================
DOM REFERENCES
==============================*/

const welcomeScreen = document.getElementById("welcomeScreen");
const gameScreen = document.getElementById("gameScreen");
const finishScreen = document.getElementById("finishScreen");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const questionElement = document.getElementById("question");
const questionType = document.getElementById("questionType");
const choicesElement = document.getElementById("choices");

const feedback = document.getElementById("feedback");
const resultTitle = document.getElementById("resultTitle");
const explanation = document.getElementById("explanation");

const scoreElement = document.getElementById("score");
const xpElement = document.getElementById("xp");
const counterElement = document.getElementById("questionCounter");

const progressLine = document.getElementById("progressLine");

const finalScore = document.getElementById("finalScore");
const summary = document.getElementById("summary");


/*==============================
GAME STATE
==============================*/

let score = 0;
let xp = 0;

let streak = 0;

let questionNumber = 0;

let currentQuestion = null;

let questionPool = [];

let usedQuestions = [];

const QUESTIONS_PER_GAME = 40;


/*==============================
QUESTION TYPES
==============================*/

const QUESTION_TYPES = [

"courseToCode",

"codeToCourse",

"courseToYear",

"courseToSemester",

"courseToECTS",

"courseToPrerequisite",

"prerequisiteToCourse",

"courseToFullLocation"

];


/*==============================
UTILITY FUNCTIONS
==============================*/

function random(max){

return Math.floor(Math.random()*max);

}

function shuffle(array){

for(let i=array.length-1;i>0;i--){

const j=Math.floor(Math.random()*(i+1));

[array[i],array[j]]=[array[j],array[i]];

}

return array;

}

function clone(obj){

return JSON.parse(JSON.stringify(obj));

}

function capitalize(text){

if(!text)return "";

return text.charAt(0).toUpperCase()+text.slice(1);

}

function unique(arr){

return [...new Set(arr)];

}


/*==============================
COURSE LOOKUPS
==============================*/

function getCourse(name){

return courses.find(c=>c.course===name);

}

function coursesInSemester(year,semester){

return courses.filter(c=>

c.year===year &&

c.semester===semester

);

}

function courseNamesInSemester(year,semester){

return coursesInSemester(year,semester)

.map(c=>c.course);

}

function randomCourse(){

return courses[random(courses.length)];

}

function randomDifferentCourse(course){

let pick;

do{

pick=randomCourse();

}

while(pick.course===course.course);

return pick;

}


/*==============================
QUESTION POOL
==============================*/

function buildQuestionPool(){

questionPool=[];

courses.forEach(course=>{

QUESTION_TYPES.forEach(type=>{

if(type==="courseToPrerequisite"){

if(course.prerequisite==="None" ||

course.prerequisite==="")

return;

}

if(type==="prerequisiteToCourse"){

if(course.prerequisite==="None" ||

course.prerequisite==="")

return;

}

questionPool.push({

type:type,

course:course

});

});

});

shuffle(questionPool);

}


/*==============================
SMART DISTRACTORS
==============================*/

function pickDistractors(correctCourse,count=3){

let list=[];

courses.forEach(c=>{

if(c.course!==correctCourse.course)

list.push(c.course);

});

shuffle(list);

return list.slice(0,count);

}

function pickCodeDistractors(correctCourse){

let list=[];

courses.forEach(c=>{

if(c.code!==correctCourse.code)

list.push(c.code);

});

shuffle(list);

return list.slice(0,3);

}

function pickECTSDistractors(correctCourse){

let values=courses

.map(c=>c.ects);

values=unique(values);

values=values.filter(v=>v!==correctCourse.ects);

shuffle(values);

return values.slice(0,3);

}

function pickSemesterDistractors(correctCourse){

const values=[

"Year I Semester I",

"Year I Semester II",

"Year II Semester I",

"Year II Semester II",

"Year III Semester I",

"Year III Semester II",

"Year IV Semester I",

"Year IV Semester II",

"Year V Semester I",

"Year V Semester II",

"Elective"

];

const correct=formatSemester(correctCourse);

return shuffle(

values.filter(v=>v!==correct)

).slice(0,3);

}


/*==============================
FORMATTERS
==============================*/

function yearText(year){

return [

"", "Year I",

"Year II",

"Year III",

"Year IV",

"Year V"

][year];

}

function semesterText(semester){

if(semester===3)

return "Elective";

return semester===1 ?

"Semester I"

:

"Semester II";

}

function formatSemester(course){

if(course.semester===3)

return "Elective";

return yearText(course.year)

+" "+

semesterText(course.semester);

}


/*==============================
QUESTION FACTORY
==============================*/

function nextQuestion(){

if(questionPool.length===0){

buildQuestionPool();

}

if(questionNumber>=QUESTIONS_PER_GAME){

finishGame();

return;

}

currentQuestion=

questionPool.pop();

usedQuestions.push(currentQuestion);

questionNumber++;

counterElement.textContent=

questionNumber;

generateQuestion(currentQuestion);

}


/*==============================
START GAME
==============================*/

function startGame(){

score=0;

xp=0;

streak=0;

questionNumber=0;

usedQuestions=[];

scoreElement.textContent=0;

xpElement.textContent=0;

feedback.classList.add("hidden");

welcomeScreen.classList.remove("active");

finishScreen.classList.remove("active");

gameScreen.classList.add("active");

buildQuestionPool();

nextQuestion();

}


/*==============================
BUTTONS
==============================*/

startBtn.addEventListener(

"click",

startGame

);

restartBtn.addEventListener(

"click",

startGame

);