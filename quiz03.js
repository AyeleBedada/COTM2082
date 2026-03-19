const quizData = [

{q:"Which component is responsible for transferring loads to the soil?",a:["Roof","Foundation","Wall","Ceiling"],correct:1},
{q:"What does DPC prevent?",a:["Heat loss","Air leakage","Rising damp","Structural failure"],correct:2},
{q:"What is the function of a sub-base?",a:["Decoration","Load distribution","Lighting","Ventilation"],correct:1},
{q:"Which foundation type is used for weak soil?",a:["Strip","Pad","Raft","Deep"],correct:3},
{q:"NGL stands for?",a:["New Ground Level","Natural Ground Level","Nominal Ground Level","Normal Grade Line"],correct:1},
{q:"FFL refers to?",a:["Foundation Floor Level","Finished Floor Level","Final Frame Level","Floor Finish Line"],correct:1},
{q:"Which is a deep foundation?",a:["Strip footing","Pad footing","Pile","Raft"],correct:2},
{q:"Which drawing shows vertical relationships?",a:["Plan","Elevation","Section","Detail"],correct:2},
{q:"Which is a primary superstructure element?",a:["Window","Wall","Finish","Fixture"],correct:1},
{q:"Which element provides vertical circulation?",a:["Floor","Wall","Stair","Roof"],correct:2},
{q:"Which system removes wastewater?",a:["Electrical","HVAC","Sanitary","Structural"],correct:2},
{q:"Which drawing shows pipe routing?",a:["Structural plan","Plumbing layout","Elevation","Section"],correct:1},
{q:"Which is NOT a secondary element?",a:["Door","Window","Wall","Balustrade"],correct:2},
{q:"What is a raft foundation?",a:["Column base","Continuous slab","Pile type","Wall type"],correct:1},
{q:"Which protects against lateral soil pressure?",a:["Slab","Beam","Retaining wall","Roof"],correct:2},
{q:"Which drawing shows reinforcement?",a:["Elevation","Detail","Section","Schedule"],correct:1},
{q:"Which element encloses space?",a:["Foundation","Wall","Pile","Beam"],correct:1},
{q:"What does HVAC stand for?",a:["Heat Vent Air Control","Heating Ventilation Air Conditioning","High Voltage AC","Heat Value Air Cooling"],correct:1},
{q:"Which is a fixed fitting?",a:["Chair","Table","Sink","Desk"],correct:2},
{q:"Which drawing shows horizontal layout?",a:["Section","Elevation","Plan","Detail"],correct:2},

// 20 more advanced questions
{q:"Which factor determines foundation depth?",a:["Color","Soil strength","Paint","Furniture"],correct:1},
{q:"Which prevents moisture under slab?",a:["DPC","DPM","Insulation","Concrete"],correct:1},
{q:"Which drawing integrates all systems?",a:["Plan","Detail","Coordination drawing","Section"],correct:2},
{q:"Which element distributes load horizontally?",a:["Column","Beam","Pile","Soil"],correct:1},
{q:"Which is part of site works?",a:["Beam","Drainage","Column","Slab"],correct:1},
{q:"Which ensures safety on stairs?",a:["Paint","Balustrade","Tile","Wall"],correct:1},
{q:"Which drawing shows slope of roof?",a:["Plan","Section","Roof plan","Detail"],correct:2},
{q:"Which material symbol represents soil?",a:["Hatch pattern","Dots","Lines","Blank"],correct:0},
{q:"Which element supports floors?",a:["Column","Window","Door","Tile"],correct:0},
{q:"Which system provides lighting?",a:["Sanitary","Electrical","HVAC","Structural"],correct:1},
{q:"Which element is below ground?",a:["Roof","Wall","Foundation","Ceiling"],correct:2},
{q:"Which prevents wall moisture?",a:["DPM","DPC","Paint","Tile"],correct:1},
{q:"Which drawing shows building exterior?",a:["Plan","Section","Elevation","Detail"],correct:2},
{q:"Which is NOT a service?",a:["Electrical","HVAC","Sanitary","Wall"],correct:3},
{q:"Which is a loose fitting?",a:["Cabinet","Sink","Chair","Basin"],correct:2},
{q:"Which layer improves drainage under slab?",a:["Paint","Sub-base","Tile","Glass"],correct:1},
{q:"Which drawing shows dimensions?",a:["All drawings","Only plan","Only section","None"],correct:0},
{q:"Which element carries vertical loads?",a:["Beam","Column","Tile","Glass"],correct:1},
{q:"Which is used in ventilation?",a:["Pipe","Duct","Beam","Wall"],correct:1},
{q:"Which ensures coordination?",a:["Single drawing","Separate drawings","Integrated drawings","Sketch"],correct:2},
{q:"Which component transfers loads to soil?",a:["Roof","Foundation","Wall","Ceiling"],correct:1},
{q:"What does DPC prevent?",a:["Heat loss","Air leakage","Rising damp","Structural failure"],correct:2},
{q:"What is sub-base function?",a:["Decoration","Load distribution","Lighting","Ventilation"],correct:1},
{q:"Which is deep foundation?",a:["Strip","Pad","Raft","Pile"],correct:3},
{q:"NGL means?",a:["New","Natural Ground Level","Normal","None"],correct:1},
];

let easy=0;
let medium=0;
let hard=0;

function loadQuiz(){

const container=document.getElementById("quiz");

quizData.forEach((item,index)=>{

let q=document.createElement("div");
q.className="question";
q.innerText=item.q;

let ans=document.createElement("div");
ans.className="answers";

item.a.forEach((opt,i)=>{

let label=document.createElement("label");

let radio=document.createElement("input");
radio.type="radio";
radio.name="q"+index;

radio.onclick=function(){

if(i===item.correct){

label.classList.add("correct");

if(item.level==="easy") easy++;
if(item.level==="medium") medium++;
if(item.level==="hard") hard++;

}else{

label.classList.add("wrong");
ans.children[item.correct].classList.add("correct");

}

updateScore();

};

label.appendChild(radio);
label.append(opt);

ans.appendChild(label);

});

container.appendChild(q);
container.appendChild(ans);

});

}

function updateScore(){

document.getElementById("easyScore").innerText=easy;
document.getElementById("mediumScore").innerText=medium;
document.getElementById("hardScore").innerText=hard;

document.getElementById("totalScore").innerText=easy+medium+hard;

}

loadQuiz();