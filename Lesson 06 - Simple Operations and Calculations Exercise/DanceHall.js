function danceHallCapacity(roomData){

let roomX = Number(roomData[0]);
let roomY = Number(roomData[1]);
let roomS = roomX * roomY;

let benchS = roomS * 0.1;

let wardrobeX = Number(roomData[2]);
let wardrobeS = wardrobeX**2;

let freeSpace = roomS - wardrobeS - benchS;

let dancerS = Number(0.004);                                        // Dancer area in m2
let dancerMovementS = Number(0.7);                                  // Additional space required by a dancer to move freely
let spacePerDancer = dancerS + dancerMovementS;                     // Total space required by a dancer to dance

let roomCapacity = Math.floor(freeSpace / spacePerDancer);          // Deriving the number of dancers that can fit in and dance comfortably


console.log(roomCapacity);

}


danceHallCapacity(['50', '25', '2']);