"use strict";

var net = require('net');
var msgParser = require('./msgparser.js');
var segmentParser = require('./segmentparser.js');

net.createServer(function (socket) {

  // Réponse du serveur aux paquets reçus
  socket.on('data', function (data) {
    var datum = data;
    
    // TODO : Envoyer une réponse ACK au client
    // this.write(ACKresponse);
    
    var msgString = datum.toString();
    var msgTable = msgParser.parseBuffer(msgString);
    console.log(msgTable);
    
//     for(let i=0; i<msgTable.length; i++){
//       segmentParser.parseMessage(msgTable[i]);
//     }
  });

}).listen(1338, '127.0.0.1');

console.log("HL7 parser listening on port 1338\n");

// \u000B = Vertical Tab
// \u000D = Carriage return
// \u001C = File Separator