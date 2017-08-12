"use strict";

// Récupère un segment et retourne un tableau de champs
exports.parseSegment = function(segment) {
  let pipeCount = (segment.match(/\u007C/g) != null) ? segment.match(/\u007C/g).length : 0,
      fieldTable = [];
      
  if(pipeCount != 0){
    for(let i=0; i<pipeCount; i++){
      // Si le segment est vide
      if(segment.charCodeAt(0) == 124) {
	fieldTable[i] = "";
	segment = segment.substring(1,segment.length-1);
      }else{
      fieldTable[i] = segment.substring(0,segment.indexOf("|")+1);
      fieldTable[i] = fieldTable[i].substring(0,fieldTable[i].length -1);
      segment = segment.substring(segment.indexOf("|")+1,segment.length-1);
      }
    }
    fieldTable[pipeCount] = segment;
  }
  for(let b = 0; b<fieldTable.length; b++){
    console.log("Champs #" + b + " = " + fieldTable[b]);
  }
    console.log("\n\n");
  //return pipeCount;
};