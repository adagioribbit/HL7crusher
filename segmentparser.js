"use strict";

// Récupère un message sous forme de chaînes et retourne un tableau de segments
exports.parseMessage = function(message) {
  let sgmntCount = message.match(/\u000D/g).length;
  let sgmntTable = [];
    
  console.log("Nombre de segments dans le message : " + sgmntCount);
  let i = 0;
  while(message.indexOf("\u000D") || message != "\u000D"){
      sgmntTable[i] = message.substring(0,message.indexOf("\u000D")-1);
      message = message.substring(message.indexOf("\u000D")+1,message.length);
      console.log("	Un segment de longueur : " + sgmntTable[i].length);
      console.log("	Que voici, que voilà : " + sgmntTable[i]+"\n");
      i++;
  }
  return sgmntTable;
};