// ================= INIT =================
window.onload = () => {
    initialize();
};

// ================= INITIALIZE =================
function initialize() {
    const saved = localStorage.getItem("qaChecklist");

    if (saved) {
        load();
    } else {
        clearAll(); // ensures clean start (fix for your issue)
    }

    update();
}

// ================= UPDATE =================
function update() {

    let boxes = document.querySelectorAll("input[type='checkbox']");

    let total = {all:0, arch:0, struct:0, mep:0};
    let score = {all:0, arch:0, struct:0, mep:0};

    let missed = [];

    boxes.forEach(box => {
        let w = parseInt(box.dataset.weight) || 1;
        let d = box.dataset.discipline || "arch";

        total.all += w;
        total[d] += w;

        if (box.checked) {
            score.all += w;
            score[d] += w;
        } else {
            missed.push({
                text: box.parentElement.innerText,
                discipline: d
            });
        }
    });

    function calc(s,t){ return t===0?0:Math.round((s/t)*100); }

    document.getElementById("totalScore").innerText = calc(score.all,total.all)+"%";
    document.getElementById("archScore").innerText = calc(score.arch,total.arch)+"%";
    document.getElementById("structScore").innerText = calc(score.struct,total.struct)+"%";
    document.getElementById("mepScore").innerText = calc(score.mep,total.mep)+"%";

    document.getElementById("progress").style.width = calc(score.all,total.all)+"%";

    // SAVE STATE
    localStorage.setItem("qaChecklist",
        JSON.stringify(Array.from(boxes).map(b=>b.checked))
    );

    runRules();
    smartWarnings();
    analytics(missed);
}

// ================= LOAD =================
function load() {
    let saved = JSON.parse(localStorage.getItem("qaChecklist"));
    if (!saved) return;

    document.querySelectorAll("input[type='checkbox']").forEach((box,i)=>{
        box.checked = saved[i] || false;
    });
}

// ================= CLEAR ALL (FIX) =================
function clearAll() {
    document.querySelectorAll("input[type='checkbox']").forEach(box=>{
        box.checked = false;
    });
}

// ================= RESET BUTTON (OPTIONAL) =================
function resetChecklist() {
    localStorage.removeItem("qaChecklist");
    clearAll();
    update();
}

// ================= FILTER =================
function filterDiscipline(type) {
    document.querySelectorAll(".category").forEach(cat => {
        if (type === "all") {
            cat.style.display = "block";
        } else {
            cat.style.display =
                cat.dataset.discipline === type ? "block" : "none";
        }
    });
}

// ================= SEARCH =================
function searchItems() {
    let input = document.getElementById("search").value.toLowerCase();

    document.querySelectorAll("label").forEach(label=>{
        label.style.display =
            label.innerText.toLowerCase().includes(input)
            ? "block" : "none";
    });
}

// ================= RULE ENGINE =================
function runRules() {

    let warnings = [];

    let sections = countChecked("sections");

    if (sections === 0) {
        warnings.push("No sections → building cannot be verified");
    }

    if (find("Column") && !find("Foundation")) {
        warnings.push("Columns without foundation");
    }

    if (find("Stair") && sections === 0) {
        warnings.push("Stair without section");
    }

    document.getElementById("warnings").innerHTML =
        warnings.map(w=>"⚠ "+w).join("<br>");
}

// ================= SMART WARNINGS =================
function smartWarnings() {

    let warnings = [];

    let sections = countChecked("sections");
    let plans = countChecked("plans");
    let elev = countChecked("elev");
    let struct = countDiscipline("struct");
    let mep = countDiscipline("mep");

    if (sections === 0) {
        warnings.push("🔴 CRITICAL: No sections → not buildable");
    }

    if (struct === 0) {
        warnings.push("🔴 CRITICAL: No structural system");
    }

    if (find("Column") && !find("Foundation")) {
        warnings.push("🔴 CRITICAL: Columns without foundation");
    }

    if (plans > 0 && elev === 0) {
        warnings.push("🟠 Plans without elevations");
    }

    if (mep > 3 && struct < 2) {
        warnings.push("🟠 MEP not coordinated with structure");
    }

    if (!find("dimension")) {
        warnings.push("🟡 Missing dimensions");
    }

    if (!find("schedule")) {
        warnings.push("🟡 Missing schedules");
    }

    if (!find("note")) {
        warnings.push("🟡 Missing notes");
    }

    document.getElementById("warnings").innerHTML =
        warnings.map(w=>w).join("<br>");
}

// ================= ANALYTICS =================
function analytics(missed) {

    let groups = {
        documentation: 0,
        coordination: 0,
        technical: 0,
        constructability: 0
    };

    missed.forEach(item => {
        let text = item.text.toLowerCase();

        if (text.includes("title") || text.includes("note") || text.includes("dimension")) {
            groups.documentation++;
        }
        else if (text.includes("align") || text.includes("schedule") || text.includes("grid")) {
            groups.coordination++;
        }
        else if (text.includes("column") || text.includes("beam") || text.includes("mep")) {
            groups.technical++;
        }
        else if (text.includes("section") || text.includes("detail")) {
            groups.constructability++;
        }
    });

    let insights = [];

    if (groups.documentation > 5) {
        insights.push("Weak documentation");
    }
    if (groups.coordination > 5) {
        insights.push("Poor coordination");
    }
    if (groups.technical > 5) {
        insights.push("Technical systems weak");
    }
    if (groups.constructability > 5) {
        insights.push("Low constructability");
    }

    document.getElementById("analytics").innerHTML = `
        <b>Analytics:</b><br>
        Documentation: ${groups.documentation}<br>
        Coordination: ${groups.coordination}<br>
        Technical: ${groups.technical}<br>
        Constructability: ${groups.constructability}<br><br>
        <b>Insights:</b><br>
        ${insights.map(i=>"• "+i).join("<br>")}
    `;
}

// ================= HELPERS =================
function find(text) {
    let found = false;
    document.querySelectorAll("label").forEach(label=>{
        if (label.innerText.toLowerCase().includes(text.toLowerCase())) {
            let cb = label.querySelector("input");
            if (cb.checked) found = true;
        }
    });
    return found;
}

function countDiscipline(d) {
    return document.querySelectorAll(`input[data-discipline='${d}']:checked`).length;
}

function countChecked(cat) {
    return document.querySelectorAll(`[data-cat='${cat}']:checked`).length;
}

// ================= EXPORT =================
function exportPDF() {
    window.print();
}