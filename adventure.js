var name = prompt("Hey there, what is your name?");
console.log("Nice to meet you, " + name + ". You'll be working with Scully and Mulder on this week's X file. We have two X-files to choose from. We could find a monster in Nevada or look for Mulder's sister in Virginia.");

var city = prompt("Are we going to 'Nevada' or 'Virginia?");

if(city === "Nevada") {
  console.log("Pack your bags, " + name +", we're going to VEGAS!");
} else{
  console.log("We're going to find my sister, " + name + ", I just know it.");
}

console.log("Wow that was a fast trip! Where do we go first? On a scale of one to ten how much should we go to the wcene of the crime over starting with local law enforcement?");
var firstMove = prompt("'1' being 'law enforcement, obviously we're playing by the books'. '10' being 'staight to the crime scene to get to the botom of this!");

if((firstMove< 5) && (city==='Nevada')) {
  console.log("Sure, " + name +" because when I think of Las Vegas I think of outstanding police work.");
} else if ((firstMove<5) && (city ==='Virginia')) {
  console.log("Listen, " + name + ", I think it's best if we kept this investigation amongst ourselves");
} else if ((firstMove>5) && (city==='Nevada')) {
  console.log("Excellent, into the Dante's 7th circle of hell we go!");
} else{
  console.log("Off to a hushed forest majesty");
}

console.log("Grrr Scully's been abducted again! Do we pace and wait for her to free herself, scramble to help her or focus on the task at hand?")
var Scully= prompt("We should 'wait', 'scramble' or 'focus'");

if ((city==='Nevada') && (Scully==='wait')){
  console.log("Yeah, 108 degrees in arid wasteland without water never killed anyone");
}else if ((city==='Nevada') && (Scully==='scramble')){
  console.log("We're only a couple states off from area 51. Aliens!!");
}else if ((city==='Nevada') && (Scully==='focus')){
  console.log("Scully loves Las Vegas, it's the locals who need my aid in spewing out endless loops of random theories!");
}else if ((city==='Virginia') && (Scully==='wait')){
  console.log("My sister is close now, Scully would understand");
}else if ((city==='Virginia') && (Scully==='scramble')){
  console.log("My sister's been gone 20 years, she can wait another day... SCULLY!");
}else {
  console.log("I bet the same abductors who took my sister have Scully now!");
}

console.log("Mission accomplished, "+ name +", see ya next week!")
