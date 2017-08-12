"use strict";

// Récupère un segment et retourne un tableau de champs
exports.parseSegment = function(segment, successCallback) {
  let fieldTable = [],
      prevPos = 0,
      pipePos = segment.indexOf("\u007C");
  
  while(pipePos != -1){
    fieldTable.push(segment.slice(prevPos, pipePos));
    prevPos = pipePos + 1;
    pipePos = segment.indexOf("\u007C", pipePos+1);
  }
  fieldTable.push(segment.slice(prevPos, segment.length));
  successCallback(fieldTable);
};