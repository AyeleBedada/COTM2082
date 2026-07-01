let score=0,streak=0,lives=3,current,qNum=0,maxQ=30;

function rand(a){return a[Math.floor(Math.random()*a.length)]}

function sameType(type,correct){
if(type==="semester") return [...new Set(courses.map(c=>c[4]))].filter(x=>x!==correct);
if(type==="code") return courses.map(c=>c[1]).filter(x=>x!==correct);
if(type==="ects") return [...new Set(courses.map(c=>String(c[2])))]
.filter(x=>x!==correct);
if(type==="prerequisite") return [...new Set(courses.map(c=>c[3]))]
.filter(x=>x!==correct);
}

function makeQuestion(){
let c=rand(courses);
let types=["semester","code","ects","prerequisite"];
let type=rand(types);

if(type==="semester")
return {type,c,q:`Which semester is "${c[0]}" offered in?`,a:c[4]};

if(type==="code")
return {type,c,q:`What is the course code of "${c[0]}"?`,a:c[1]};

if(type==="ects")
return {type,c,q:`How many ECTS does "${c[0]}" carry?`,a:String(c[2])};

return {type,c,q:`What is the prerequisite of "${c[0]}"?`,a:c[3]};
}

function nextQuestion(){
if(qNum>=maxQ || lives<=0){
let percent=Math.round((score/(maxQ*10))*100);
question.innerHTML="🎓 Quiz Completed";
answers.innerHTML="";
feedback.innerHTML=`Final Score: ${score}<br>Accuracy: ${percent}%`;
return;
}

qNum++;
count.innerText=qNum;
current=makeQuestion();
question.innerHTML=current.q;

let pool=sameType(current.type,current.a);
let opts=[current.a];

while(opts.length<4){
let pick=rand(pool);
if(!opts.includes(pick)) opts.push(pick);
}

opts.sort(()=>Math.random()-0.5);

answers.innerHTML="";
opts.forEach(o=>{
let b=document.createElement("button");
b.className="ans";
b.innerText=o;
b.onclick=()=>check(b,o);
answers.appendChild(b);
});
}

function explain(c){
let sameSemester=courses.filter(x=>x[4]===c[4]).map(x=>x[0]).join(", ");
return `
Course: <b>${c[0]}</b><br>
Code: <b>${c[1]}</b><br>
Semester: <b>${c[4]}</b><br>
ECTS: <b>${c[2]}</b><br>
Prerequisite: <b>${c[3]}</b><br>
Other courses in this semester: ${sameSemester}
`;
}

function check(btn,val){
let buttons=document.querySelectorAll(".ans");
buttons.forEach(b=>b.disabled=true);

if(val===current.a){
btn.classList.add("correct");
score+=10;
streak++;

feedback.innerHTML=`
✅ Correct.<br><br>
You answered correctly. Here is the complete academic profile:<br><br>
${explain(current.c)}
`;
}else{
btn.classList.add("wrong");
buttons.forEach(b=>{
if(b.innerText===current.a) b.classList.add("correct");
});
lives--;
streak=0;

feedback.innerHTML=`
❌ Incorrect.<br><br>
You selected <b>${val}</b>, but the correct answer is <b>${current.a}</b>.<br><br>
Here is the correct academic profile:<br><br>
${explain(current.c)}
`;
}

scoreEl.innerText=score;
streakEl.innerText=streak;
livesEl.innerText=lives;

document.getElementById("score").innerText=score;
document.getElementById("streak").innerText=streak;
document.getElementById("lives").innerText=lives;

document.querySelectorAll("circle").forEach((c,i)=>{
if(score>=((i+1)*60)) c.classList.add("done");
});
}

nextQuestion();