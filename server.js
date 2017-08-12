"use strict";

var net = require('net');
var msgParser = require('./msgparser.js');
var segmentParser = require('./segmentparser.js');
var fieldParser = require('./fieldparser.js');

net.createServer(function (socket) {

  // Réponse du serveur aux paquets reçus
  socket.on('data', function (data) {
    let datum = data;
    
    // TODO : Envoyer une réponse ACK au client
    // this.write(ACKresponse);
    
    msgParser.parseBuffer(datum.toString('ascii'), function(msgTable){
      let nbMessage = msgTable.length;
      //console.log(msgTable);
      for(let i=0; i<nbMessage; i++){
	segmentParser.parseMessage(msgTable[i], function(segmentTable){
	  let nbSegment = segmentTable.length;
	  for(let j=0; j<nbSegment; j++){
	    fieldParser.parseSegment(segmentTable[j]);
	  }
	  socket.write(segmentTable.toString());
// 	console.log("Segment Table : \n", sgmntTable);
	});
      }
    });
  });

}).listen(1338, '127.0.0.1');

console.log("HL7 parser listening on port 1338\n");

// \u000B = Vertical Tab
// \u000D = Carriage return
// \u001C = File Separator