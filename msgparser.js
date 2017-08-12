"use strict";

// Récupère un buffer et retourne un tableau messages
exports.parseBuffer = function(msgBuffer, successCallback) {
  let msgTable = [],
      vtPos = msgBuffer.indexOf("\u000B"),
      fsPos = msgBuffer.indexOf("\u001C");
      
  while(vtPos != -1){
    msgTable.push(msgBuffer.slice(vtPos+1,fsPos+2));
    vtPos = msgBuffer.indexOf("\u000B", vtPos+1);
    fsPos = msgBuffer.indexOf("\u001C", fsPos+1);
  }
  successCallback(msgTable);
};