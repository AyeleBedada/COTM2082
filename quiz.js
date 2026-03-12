const quizData = [

/* EASY */
{q:"1. What is the main purpose of building codes?",a:["Safety of occupants","Improve beauty","Reduce cost","Increase building height"],correct:0,level:"easy"},
{q:"2. Who enforces building codes?",a:["Architect","Building authority","Contractor","Client"],correct:1,level:"easy"},
{q:"3. Specifications mainly describe:",a:["Drawing scale","Materials and workmanship","Project location","Budget"],correct:1,level:"easy"},
{q:"4. Which is the earliest design stage?",a:["Working drawing","Bubble diagram","Preliminary drawing","Construction drawing"],correct:1,level:"easy"},
{q:"5. Which professional prepares architectural drawings?",a:["Architect","Lawyer","Accountant","Supplier"],correct:0,level:"easy"},

/* MEDIUM */

{q:"6. Standards are usually prepared by:",a:["Technical organizations","Clients","Contractors","Builders"],correct:0,level:"medium"},
{q:"7. Specifications help ensure compliance with:",a:["Client taste","Codes and standards","Site shape","Budget"],correct:1,level:"medium"},
{q:"8. Which stage presents design concept to the client?",a:["Schematic design","Working drawings","Construction","Inspection"],correct:0,level:"medium"},
{q:"9. What drawing element shows materials in section?",a:["Leaders","Hatching","Tags","Dimensions"],correct:1,level:"medium"},
{q:"10. Dimensions communicate:",a:["Exact size","Material quality","Design concept","Lighting"],correct:0,level:"medium"},
{q:"11. Who designs structural systems?",a:["Structural engineer","Architect","Contractor","Supplier"],correct:0,level:"medium"},
{q:"12. Working drawings are used for:",a:["Construction","Sketching ideas","Brainstorming","Presentation"],correct:0,level:"medium"},
{q:"13. Leaders point to:",a:["Notes or elements","Dimensions","Doors","Windows"],correct:0,level:"medium"},
{q:"14. Preliminary drawings include:",a:["Coordinated design","Concept sketches only","No dimensions","Material samples"],correct:0,level:"medium"},
{q:"15. Which document is legally mandatory?",a:["Codes","Sketches","Notes","Bubble diagrams"],correct:0,level:"medium"},

/* HARD */

{q:"16. Codes, standards and specifications relate as:",a:["Codes reference standards and specs apply them","Standards replace codes","Specs replace codes","Codes replace specs"],correct:0,level:"hard"},
{q:"17. Who coordinates different engineering disciplines?",a:["Architect","Contractor","Supplier","Technician"],correct:0,level:"hard"},
{q:"18. Tags identify:",a:["Doors and elements","Dimensions","Levels","Structure"],correct:0,level:"hard"},
{q:"19. Which drawing stage has highest technical detail?",a:["Working drawings","Bubble diagrams","Schematic","Concept"],correct:0,level:"hard"},
{q:"20. Symbols improve:",a:["Communication","Construction cost","Drawing complexity","Site area"],correct:0,level:"hard"},
{q:"21. Construction execution responsibility:",a:["Contractor","Architect","Client","Engineer"],correct:0,level:"hard"},
{q:"22. Approximate layout appears in:",a:["Schematic design","Working drawing","Construction phase","Inspection"],correct:0,level:"hard"},
{q:"23. Specifications ensure:",a:["Code compliance","Drawing style","Site planning","Client approval"],correct:0,level:"hard"},
{q:"24. Notes in drawings provide:",a:["Technical instructions","Pictures","Geometry","Scale"],correct:0,level:"hard"},
{q:"25. Permit approval usually uses:",a:["Preliminary drawings","Bubble diagrams","Concept sketch","Working details"],correct:0,level:"hard"},
{q:"26. Who checks regulatory compliance?",a:["Building officer","Client","Supplier","Interior designer"],correct:0,level:"hard"},
{q:"27. Symbols make drawings:",a:["Standardized","Confusing","Decorative","Complex"],correct:0,level:"hard"},
{q:"28. Most flexible stage for design changes:",a:["Bubble diagram","Working drawings","Construction stage","Inspection"],correct:0,level:"hard"},
{q:"29. Full coordination occurs during:",a:["Working drawings","Bubble stage","Concept sketch","Idea phase"],correct:0,level:"hard"},
{q:"30. Contractor follows instructions mainly in:",a:["Specifications","Bubble diagrams","Sketches","Concept plans"],correct:0,level:"hard"}

];

let easy=0;
let medium=0;
let hard=0;

function loadQuiz(){

const container=document.getElementById("quiz");

quizData.forEach((item,index)=>{

let qDiv=document.createElement("div");
qDiv.classList.add("question");
qDiv.innerText=item.q;

let ansDiv=document.createElement("div");
ansDiv.classList.add("answers");

item.a.forEach((option,i)=>{

let label=document.createElement("label");

let input=document.createElement("input");
input.type="radio";
input.name="q"+index;

input.onclick=function(){

if(i===item.correct){

label.classList.add("correct");

if(item.level==="easy") easy++;
if(item.level==="medium") medium++;
if(item.level==="hard") hard++;

}else{

label.classList.add("wrong");

ansDiv.children[item.correct].classList.add("correct");

}

updateScore();

};

label.appendChild(input);
label.append(option);

ansDiv.appendChild(label);

});

container.appendChild(qDiv);
container.appendChild(ansDiv);

});

}

function updateScore(){

document.getElementById("easyScore").innerText=easy;
document.getElementById("mediumScore").innerText=medium;
document.getElementById("hardScore").innerText=hard;

document.getElementById("totalScore").innerText=easy+medium+hard;

}

loadQuiz();