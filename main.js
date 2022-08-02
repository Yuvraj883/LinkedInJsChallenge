// import { splitVendorChunk } from 'vite';
import './style.css'
const second = 1000; 
const minute = 60*second; 
const hour = minute*60; 
const day = hour*24; 
let yyyy = null; 
let mm = null;
let dd = null; 
let h= null; //2022-08-02-4-48-20
let min = null; 
let sec = null;  
const time = document.getElementById("input-time"); 
// time.innerText= "Hello this is the God speaking!"
const submit = document.getElementsByClassName("submit-btn")[0]; 
let currentTime = null; 
let lastSeen = null; 
let diff = null; 
//console.log(diff);
const h2 = document.getElementById("lastActive");
// const para = document.getElementById("para"); 
//  para.innerText = 	`Current Time = ${currentTime} 
//  Last Seen = ${lastSeen}
//  diff = ${currentTime-lastSeen}`
//h2.innerText = diff; 
//alert("Javascript connected")


// function yuvraj(){

// }

function findLastSeen(){
  if(diff===0){
    h2.innerText = `online`;
  }
  else if(diff>0 && diff<minute){
  h2.innerText = "last seen just now"; 
  }
  else if(diff>= minute && diff<2*minute){
  h2.innerText = "last seen a minute ago"; 
  }
  else if(diff> minute && diff<hour){
  h2.innerText = `last seen ${Math.floor(diff/(minute))} minutes ago`; 
  }
  else if(diff>hour && diff<day){
  h2.innerText = `last seen ${Math.floor(diff/(hour))} hours ago at ${lastSeen.getHours()+":"+ lastSeen.getMinutes()}hrs `;
  }
  else if(diff>day && diff<day*30){
  h2.innerText = `last seen ${Math.floor(diff/(day))} days ago`; 
  }
  else if(diff>day*30){
  h2.innerText = "last Seen more than a month ago"; 
  }
  else{
    h2.innerText = "Invalid input"; 
  }

}

submit.addEventListener("click", onSubmit);
function onSubmit(){
  const s = time.value;
 const arr= s.split("-");
  yyyy =parseInt(arr[0]);
  mm = parseInt(arr[1]); 
  dd = parseInt(arr[2]); 
  h = parseInt(arr[3]); 
  min = parseInt(arr[4]); 
  sec = parseInt(arr[5]);
  lastSeen = new Date(yyyy,mm-1,dd,h,min,sec); 
  currentTime = new Date();
  diff = (currentTime.getTime() - lastSeen.getTime());
  console.log(lastSeen); 


  findLastSeen(); 

}
// const dummyBtn = document.querySelector(".dummyBtn"); 
// dummyBtn.addEventListener("click", btn2Clicked()=>{
//   alert("Alert");
// });
