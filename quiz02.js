const quizData = [

/* EASY */

{q:"1. Construction drafting primarily serves as:",a:["Artistic drawing","Technical communication","Decoration","Personal expression"],correct:1,level:"easy"},

{q:"2. What does drafting translate design ideas into?",a:["Emotions","Quantifiable geometry","Stories","Conceptual diagrams only"],correct:1,level:"easy"},

{q:"3. Working drawings are mainly used for:",a:["Construction execution","Concept sketches","Design brainstorming","Artistic exploration"],correct:0,level:"easy"},

{q:"4. Which drawing reveals layering and assembly logic?",a:["Section drawing","Perspective","Rendering","Diagram"],correct:0,level:"easy"},

{q:"5. Drafting requires knowledge of:",a:["Materials and construction systems","Only color theory","Only software","Only geometry"],correct:0,level:"easy"},

/* MEDIUM */

{q:"6. Drafting acts as an epistemic instrument because it:",a:["Produces knowledge about constructability","Creates artistic drawings","Improves aesthetics","Reduces project cost"],correct:0,level:"medium"},

{q:"7. Graphic hierarchy in drafting mainly controls:",a:["Communication clarity","Project cost","Construction speed","Material price"],correct:0,level:"medium"},

{q:"8. Sections help reveal:",a:["Load transfer and layering","Only plan geometry","Exterior color","Landscape layout"],correct:0,level:"medium"},

{q:"9. Working drawings function simultaneously in which domains?",a:["Technical, contractual, economic","Artistic, historical, cultural","Conceptual, graphic, visual","Academic, personal, aesthetic"],correct:0,level:"medium"},

{q:"10. Poor drafting tends to:",a:["Conceal design conflicts","Solve structural problems","Reduce documentation effort","Improve coordination"],correct:0,level:"medium"},

{q:"11. Working drawings must eliminate:",a:["Ambiguity","Dimensions","Details","Schedules"],correct:0,level:"medium"},

{q:"12. Schedules in drawings usually list:",a:["Doors, windows, finishes","Design concepts","Building ideas","Urban diagrams"],correct:0,level:"medium"},

{q:"13. Specifications primarily define:",a:["Material quality and performance","Spatial layout","Building height","Structural grid"],correct:0,level:"medium"},

{q:"14. Drawings mainly communicate:",a:["Geometry and dimensions","Testing procedures","Legal clauses","Contract payments"],correct:0,level:"medium"},

{q:"15. Documentation risk commonly arises from:",a:["Omission, ambiguity, inconsistency","Drawing color","Drawing scale","Drawing software"],correct:0,level:"medium"},

/* HARD */

{q:"16. Construction drafting can be described theoretically as:",a:["Mediation between abstraction and materiality","Pure artistic representation","Decoration of architecture","Software modeling"],correct:0,level:"hard"},

{q:"17. The ontological status of drafting is:",a:["Process","Contract document","Legal artifact","Final product"],correct:0,level:"hard"},

{q:"18. The ontological status of working drawings is:",a:["Contractual product","Design sketch","Concept diagram","Drafting exercise"],correct:0,level:"hard"},

{q:"19. Audience for drafting is mainly:",a:["Design team","Contractor","Client","Authorities"],correct:0,level:"hard"},

{q:"20. Audience for working drawings includes:",a:["Contractors and authorities","Only designers","Only students","Only architects"],correct:0,level:"hard"},

{q:"21. Duplication of specification text in drawings increases:",a:["Risk of contradiction","Drawing quality","Construction speed","Material durability"],correct:0,level:"hard"},

{q:"22. Specifications answer which type of question?",a:["What quality and performance","Where elements are","How big elements are","What layout is used"],correct:0,level:"hard"},

{q:"23. Drawings answer which questions?",a:["Where, how big, and arrangement","Material testing","Contract payment","Warranty conditions"],correct:0,level:"hard"},

{q:"24. Omission in documentation means:",a:["Missing required information","Incorrect dimension","Too many drawings","Color mismatch"],correct:0,level:"hard"},

{q:"25. Ambiguity in documentation means:",a:["Unclear instructions","Missing drawings","Too many notes","Wrong scale"],correct:0,level:"hard"},

{q:"26. Clear documentation reduces:",a:["Professional liability","Construction quality","Coordination","Structural safety"],correct:0,level:"hard"},

{q:"27. Ethical responsibility in documentation relates to:",a:["Public safety and professional duty","Drawing style","Graphic elegance","Software choice"],correct:0,level:"hard"},

{q:"28. Risk management strategies include:",a:["Cross-checking and coordination","Ignoring conflicts","Reducing documentation","Avoiding details"],correct:0,level:"hard"},

{q:"29. Working drawings influence project cost by:",a:["Defining scope and quantities","Reducing drawing sheets","Changing design style","Altering concept"],correct:0,level:"hard"},

{q:"30. Professional accountability increases when:",a:["Documents are issued for construction","Students draw sketches","Concept design begins","Ideas are discussed"],correct:0,level:"hard"}

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