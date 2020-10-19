// Write your JavaScript code here.
// Remember to pay attention to page loading!

const takeoff = document.querySelector('#takeoff');
const landing = document.querySelector('#landing');
const abort = document.querySelector('#missionAbort')


window.addEventListener("load",function(event){
    let takeOffButton = document.getElementById("takeoff");
    let landButton = document.getElementById("landing");
    let upButton = document.getElementById("upButton");
    let downButton = document.getElementById("downButton");
    let rightButton = document.getElementById("rightButton");
    let leftButton = document.getElementById("leftButton");
  

    takeOffButton.addEventListener("click",function(event){
     let shuttleConfirm = window.confirm("Confirm that the shuttle is ready for takeoff.")
     if (shuttleConfirm){
          flightStatus.innerHTML = "Shuttle in Flight.";
          shuttleBackground.style.backgroundColor = "blue";
          spaceShuttleHeight.innerHTML = "10,000";
  }
    });
  landButton.addEventListener("click", function(event){
   window.alert("The shuttle is landing. Landing gear engaged.");
           flightStatus.innerHTML ="Shuttle is landing.";
           shuttleBackground.style.backgroundColor = "green";
           spaceShuttleHeight.innerHTML = "0";   
});
    
missionAbort.addEventListener("click",function(event){
    let missionAbortConfirm = window.confirm("Confirm that you want to abort the mission");
    if(missionAbortConfirm){
    flightStatus.innerHTML = "Mission Aborted.";
    shuttleBackground.style.backgroundColor = "green";
    spaceShuttleHeight.innerHTML = "0"; 
    }
});
let rocketImage= document.getElementById("rocket");
rocketImage.style.position="relative";
rocketImage.style.top= "20px";
rocketImage.style.left="20px";
rocketImage.style.visibility="visible";

let vertPosString = rocketImage.style.top;
let vertPos = Number(vertPosString.split("px")[0]);
let horPosString = rocketImage.style.left;
let horPos = Number(horPosString.split("px")[0]);

leftButton.addEventListener("click",function(event){
    horPos -= 10;
    rocketImage.style.left =`${horPos}px`;
});
rightButton.addEventListener("click",function(event){
  horPos +=10;
  rocketImage.style.left =`${horPos}px`;
});

upButton.addEventListener("click",function(event){
  vertPos -=10;
  rocketImage.style.top =`${vertPos}px`;
  spaceShuttleHeight.innerHTML =Number(spaceShuttleHeight.innerHTML) - 10000;
});

downButton.addEventListener("click",function(event){
  vertPos +=10;
  rocketImage.style.top =`${vertPos}px`;
  spaceShuttleHeight.innerHTML =Number(spaceShuttleHeight.innerHTML) + 10000;
});
});

