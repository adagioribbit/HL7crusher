"use strict";

// Récupère un message et retourne un tableau de segments
exports.parseMessage = function(message, successCallback) {
  let sgmntTable = [],
      prevPos = 0,
      crPos = message.indexOf("\u000D"),
      fsPos = message.indexOf("\u001C");  
  
  while(crPos < fsPos){
    sgmntTable.push(message.slice(prevPos, crPos));
    prevPos = crPos;
    crPos = message.indexOf("\u000D", crPos+1);
  }
  sgmntTable.push(message.slice(prevPos, crPos -1));
  successCallback(sgmntTable);
};