"use strict";

// Récupère un buffer sous forme de chaîne et retourne un tableau de messages
exports.parseBuffer = function(msgString) {
  //let localBuf = buffer.toString();
  let msgCount = msgString.match(/\u000B/g).length;
  let msgTable = [];
  
  for(let i=0; i<msgCount; i++){
    msgTable[i] = msgString.substring(msgString.indexOf("\u000B")+1,msgString.indexOf("\u001C"));
    msgString = msgString.substring(msgString.indexOf("\u001C")+1,msgString.length);
  }
  return msgTable;
};