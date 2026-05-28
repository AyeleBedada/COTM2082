const lecturerData = [

{
name:"A. A.",
section:"01",
tasks:["✓","!","✓","!","✓","✗","✓","✗","✗"]
},

{
name:"A. B.",
section:"02",
tasks:["✓","✓","✓","✓","✓","✓","✓","✓","✗"]
},

{
name:"K. T.",
section:"03",
tasks:["✓","✓","✓","✓","✓","✓","✓","✓","✗"]
},

{
name:"M. H.",
section:"04",
tasks:["✓","✓","✓","✓","✓","✗","✓","✓","✗"]
}

];

const tableBody = document.getElementById("ttTableBody");

lecturerData.forEach(item=>{

  const completed = item.tasks.filter(
    t => t === "✓"
  ).length;

  const total = item.tasks.length;

  const percentage = Math.round(
    (completed / total) * 100
  );

  let progressColor = "#16a34a";

  if(percentage < 50){
    progressColor = "#dc2626";
  }
  else if(percentage < 80){
    progressColor = "#f59e0b";
  }

  const row = document.createElement("tr");

  row.innerHTML = `

    <td>
      <strong>${item.name}</strong>
    </td>

    <td>${item.section}</td>

    ${item.tasks.map(task=>{

      let cls = "complete";

      if(task === "✗"){
        cls = "missing";
      }

      if(task === "!"){
        cls = "warning";
      }

      return `
        <td class="tt-cell ${cls}">
          ${task}
        </td>
      `;

    }).join("")}

    <td>

      <div class="tt-progress-wrap">

        <div
          class="tt-progress-bar"
          style="
            width:${percentage}%;
            background:${progressColor};
          ">
        </div>

      </div>

      <div class="tt-progress-text">
        ${percentage}% Complete
      </div>

    </td>

  `;

  tableBody.appendChild(row);

});