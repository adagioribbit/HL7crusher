"use strict";

// Récupère un buffer sous forme de chaîne et retourne un tableau de messages
exports.parseBuffer = function(msgString, successCallback) {
  let msgCount = msgString.match(/\u000B/g).length,
      msgTable = [];
  
  for(let i=0; i<msgCount; i++){
    msgTable[i] = msgString.substring(msgString.indexOf("\u000B")+1,msgString.indexOf("\u001C")+2);
    msgString = msgString.substring(msgString.indexOf("\u001C")+1,msgString.length);
  }
  successCallback(msgTable);
};