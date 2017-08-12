"use strict";

var net = require('net');
var msgParser = require('./msgparser.js');
var segmentParser = require('./segmentparser.js');
var fieldParser = require('./fieldparser.js');

net.createServer(function (socket) {

  // Réponse du serveur aux paquets reçus
  socket.on('data', function (data) {
    let datum = data;
    console.log(datum);
    // TODO : Envoyer une réponse ACK au client
    // this.write(ACKresponse);
    
    msgParser.parseBuffer(datum, function(msgTable){
      for(let i=0; i<msgTable.length; i++){
	segmentParser.parseMessage(msgTable[i], function(segmentTable){
	  for(let j=0; j<segmentTable.length; j++){
	    console.log("Segment #" + j + " :\n");
	    fieldParser.parseSegment(segmentTable[j], function(fieldTable){
	      for(let k=0; k<fieldTable.length; k++){
		if(k==1) console.log(fieldTable[k]);
		console.log("      " + (k+1) + " = ", fieldTable[k].toString());
	      }
	    });
	  }
	  socket.write(segmentTable.toString());
	});
      }
    });
  });

}).listen(1338, '127.0.0.1');

console.log("HL7 parser listening on port 1338\n");

// \u000B = Vertical Tab
// \u000D = Carriage return
// \u001C = File Separator