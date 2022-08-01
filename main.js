import './style.css'
const second = 1000; 
const minute = 60*second; 
const hour = minute*60; 
const day = hour*24; 
const yyyy = 2022; 
const mm = 0o7;
const dd = 31; 
const h= 1; 
const min = 27; 
const sec = 0;  


const currentTime = new Date(); 
const lastSeen = new Date(yyyy,mm-1,dd,h,min,sec); 
const diff =(currentTime.getTime() - lastSeen.getTime()); 
console.log(diff);
const h2 = document.getElementById("lastActive");
// const para = document.getElementById("para"); 
//  para.innerText = 	`Current Time = ${currentTime} 
//  Last Seen = ${lastSeen}
//  diff = ${currentTime-lastSeen}`
//h2.innerText = diff; 
if(diff===0){
  h2.innerText = `online`;
}
else if(diff<minute){
h2.innerText = "last seen just now"; 
}
else if(diff>= minute && diff<2*minute){
h2.innerText = "last seen a minute ago"; 
}
else if(diff> minute && diff<hour){
h2.innerText = `last seen ${Math.floor(diff/(1000*60))} minutes ago`; 
}
else if(diff>hour && diff<day){
h2.innerText = `last seen ${Math.floor(diff/(1000*60*60))} hours ago at ${h+":"+mm}hrs `;
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
