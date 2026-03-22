
let newX = 0, newY = 0,startX = 0, startY = 0; 
const card = document.getElementById('card')

card.addEventListener('mousedown', mouseDown)

function mouseDown(e){
    startX = e.clientX
    startY = e.clientY

    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
}

function mouseMove(e){
    newX=startX - e.clientX
    newY=startY - e.clientY 

    startX = e.clientX
    startY = e.clientY

    card.style.top = startY + 'px'
    card.style.left = startX + 'px'
}

function mouseUp(e){
    document.removeEventListener('mousemove', mouseMove)
}

//float window

const myButton = document.getElementById(`myButtonFloat`);
const floatCont = document.getElementById(`floatCont`);

myButton.addEventListener(`click`, event=>{

  if(floatCont.style.visibility ===`hidden`){
         floatCont.style.visibility = `visible`;
         myButton.textContent=`Hide`;
  }
  else{
    floatCont.style.visibility=`hidden`;
    myButton.textContent=`Show`;
  }

});


