"use strict";

// Récupère un message sous forme de chaînes et retourne un tableau de segments
exports.parseMessage = function(message, successCallback) {
  let sgmntCount = (message.match(/\u000D/g) != null) ? message.match(/\u000D/g).length : 0,
      sgmntTable = [];
    
  if(sgmntCount != 0){
    for(let i=0; i<sgmntCount; i++){
	sgmntTable[i] = message.substring(0,message.indexOf("\u000D")+1);
	sgmntTable[i] = sgmntTable[i].substring(0,sgmntTable[i].length -1);
	message = message.substring(message.indexOf("\u000D")+1,message.indexOf("\u001C\u000D")+2);
    }
    sgmntTable[sgmntCount-1] = sgmntTable[sgmntCount-1].substring(0,sgmntTable[sgmntCount-1].length -1);
  }
  successCallback(sgmntTable);
};