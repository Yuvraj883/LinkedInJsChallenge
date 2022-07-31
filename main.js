const second = 1000; 
const minute = 60*second; 
const hour = minute*60; 
const day = hour*24; 

const currentTime = new Date(); 
const lastSeen = new Date(2022,6,31,12,35,0); 
const diff =(currentTime.getTime() - lastSeen.getTime()); 
console.log(diff);
const h2 = document.getElementById("header");
const para = document.getElementById("para"); 
 para.innerText = 	`Current Time = ${currentTime} 
 Last Seen = ${lastSeen}
 diff = ${currentTime-lastSeen}`
//h2.innerText = diff; 
if(diff===0){
h2.innerText = "Online"; 
}
else if(diff<= minute){
h2.innerText = "Last seen just now"+diff; 
}
else if(diff> minute && diff<hour){
h2.innerText = `last seen ${Math.floor(diff/(1000*60))} minutes ago`; 
}
else if(diff>hour && diff<day){
h2.innerText = `last seen ${Math.floor(diff/(1000*60*60))} hours ago`;
}
else if(diff>day && diff<day*30){
h2.innerText = `last seen ${Math.floor(diff/(day))} days ago`; 
}
else if(diff>day*30){
h2.innerText = "Last Seen more than a month ago"; 
}
else{
  h2.innerText = "None of the conditions match"; 
}
// let diff = currentTime-lastSeen; 
// if(currentTime-lastSeen === 0){
//   console.log("Online"); 
// }else if(currentTime-lastSeen<=1000*60){
// console.log("Last seen just now");
// }else if(currentTime-lastSeen>=1000*60 && currentTime-lastSeen)
