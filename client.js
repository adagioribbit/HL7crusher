
/* 
ADT A04: Register a patient
******************************************************************************************************************************************************************************************************************
MSH|^~\&|SENDING_APPLICATION|SENDING_FACILITY|RECEIVING_APPLICATION|RECEIVING_FACILITY|20110613083617||ADT^A04|934576120110613083617|P|2.3|||||||
EVN|A04|20110613083617|||
PID|1||135769||MOUSE^MICKEY^||19281118|M|||123 Main St.^^Lake Buena Vista^FL^32830||(407)939-1289^^^theMainMouse@disney.com|||||1719|99999999|||||||||||||
PV1|1|O|||||7^Disney^Walt^^MD^^^^|||||||||||||||||||||||||||||||||||||||||||||
PR1|6510|21||||15|||||||||
IN1|1||1|ABC Insurance Medicaid|P O Box 12345^^Atlanta^GA^30348|Claims^Florida |(555)555-1234^^^^^^|G1234|||||||G|Mouse^Mickey|SELF|19281118|123 Main St.^^Lake Buena Vista^FL^32830|Y||||||||||||P||||ZYX1234589-1|||||||M||||M||


\u000BMSH|^~\&|SENDING_APPLICATION|SENDING_FACILITY|RECEIVING_APPLICATION|RECEIVING_FACILITY|20110613083617||ADT^A04|934576120110613083617|P|2.3|||||||\u000D
EVN|A04|20110613083617|||\u000D
PID|1||135769||MOUSE^MICKEY^||19281118|M|||123 Main St.^^Lake Buena Vista^FL^32830||(407)939-1289^^^theMainMouse@disney.com|||||1719|99999999|||||||||||||\u000D
PV1|1|O|||||7^Disney^Walt^^MD^^^^|||||||||||||||||||||||||||||||||||||||||||||\u000D
PR1|6510|21||||15|||||||||\u000D
IN1|1||1|ABC Insurance Medicaid|P O Box 12345^^Atlanta^GA^30348|Claims^Florida |(555)555-1234^^^^^^|G1234|||||||G|Mouse^Mickey|SELF|19281118|123 Main St.^^Lake Buena Vista^FL^32830|Y||||||||||||P||||ZYX1234589-1|||||||M||||M||\u001C\u000D

ADT A08: Update patient information
******************************************************************************************************************************************************************************************************************
\u000BMSH|^~\&|SENDING_APPLICATION|SENDING_FACILITY|RECEIVING_APPLICATION|RECEIVING_FACILITY|20110613072049||ADT^A08|934579920110613072049|P|2.3|||||||\u000D
EVN|A08|20110613072049|||\u000D
PID|1||135769||MOUSE^MICKEY^||19281118|M|||123 Main St.^^Lake Buena Vista^FL^32830||(407)939-1289^^^theMainMouse@disney.com|||||1719|99999999|||||||||||||\u000D
PV1|1|O|||||7^Disney^Walt^^MD^^^^|||||||||||||||||||||||||||||||||||||||||||||\u000D
PR1|6510|21||||15|||||||||\u000D
GT1|1|78|MOUSE^MARSHALL^||123 Main St.^^Lake Buena Vista^FL^32830|(407)939-1289^^^^^^||19190101|M||||||||||||||||||||||||||||||||||||||||||||||\u000D
IN1|1||1|ABC Insurance Medicaid|P O Box 12345^^Atlanta^GA^30348|Claims^Florida |(555)555-1234^^^^^^|G1234|||||||G|Mouse^Mickey|SELF|19281118|123 Main St.^^Lake Buena Vista^FL^32830|Y||||||||||||P||||ZYX1234589-1|||||||M||||M||\u000D
IN2||||||ZYX1234589-1||||ZYX1234589-1|||||||||||||||000079||||||||||||||||||||||||||||||||||||||(206)446-5080^^^^^260^4465080|||||||||SELF\u001C\u000D


Les messages commencent par 0x0B (vertical tab) \x0B \u000B
Les segments sont délimités par 0x0D (carriage return) \x0D \u000D
Les messages se terminent par 0x1C0D (file separator + carriage return) \x1C\x0D \u001C\u000D
 */


var net = require('net');

var client = new net.Socket();

//client.connect(1337, '127.0.0.1', function() {
client.connect(1338, '127.0.0.1', function() {
  console.log("Le client HL7 s'est connecté au serveur.");
  
  
  
  client.write( "\u000BMSH|^~\&|SENDING_APPLICATION|SENDING_FACILITY|RECEIVING_APPLICATION|RECEIVING_FACILITY|20110613083617||ADT^A04|934576120110613083617|P|2.3|||||||\u000D"+
		"EVN|A04|20110613083617|||\u000D"+
		"PID|1||135769||MOUSE^MICKEY^||19281118|M|||123 Main St.^^Lake Buena Vista^FL^32830||(407)939-1289^^^theMainMouse@disney.com|||||1719|99999999|||||||||||||\u000D"+
		"PV1|1|O|||||7^Disney^Walt^^MD^^^^|||||||||||||||||||||||||||||||||||||||||||||\u000D"+
		"PR1|6510|21||||15|||||||||\u000D"+
		"IN1|1||1|ABC Insurance Medicaid|P O Box 12345^^Atlanta^GA^30348|Claims^Florida |(555)555-1234^^^^^^|G1234|||||||G|Mouse^Mickey|SELF|19281118|123 Main St.^^Lake Buena Vista^FL^32830|Y||||||||||||P||||ZYX1234589-1|||||||M||||M||\u001C\u000D");

//   client.write( "\u000BMSH|^~\&|SENDING_APPLICATION|SENDING_FACILITY|RECEIVING_APPLICATION|RECEIVING_FACILITY|20110613083617||ADT^A04|934576120110613083617|P|2.3|||||||\u000DEVN|A04|20110613083617|||\u000DPID|1||135769||MOUSE^MICKEY^||19281118|M|||123 Main St.^^Lake Buena Vista^FL^32830||(407)939-1289^^^theMainMouse@disney.com|||||1719|99999999|||||||||||||\u000DPV1|1|O|||||7^Disney^Walt^^MD^^^^|||||||||||||||||||||||||||||||||||||||||||||\u000DPR1|6510|21||||15|||||||||\u000DIN1|1||1|ABC Insurance Medicaid|P O Box 12345^^Atlanta^GA^30348|Claims^Florida |(555)555-1234^^^^^^|G1234|||||||G|Mouse^Mickey|SELF|19281118|123 Main St.^^Lake Buena Vista^FL^32830|Y||||||||||||P||||ZYX1234589-1|||||||M||||M||\u001C\u000D\u000BMSH|^~\&|SENDING_APPLICATION|SENDING_FACILITY|RECEIVING_APPLICATION|RECEIVING_FACILITY|20110613072049||ADT^A08|934579920110613072049|P|2.3|||||||\u000D"+
// 		"EVN|A08|20110613072049|||\u000D"+
// 		"PID|1||135769||MOUSE^MICKEY^||19281118|M|||123 Main St.^^Lake Buena Vista^FL^32830||(407)939-1289^^^theMainMouse@disney.com|||||1719|99999999|||||||||||||\u000D"+
// 		"PV1|1|O|||||7^Disney^Walt^^MD^^^^|||||||||||||||||||||||||||||||||||||||||||||\u000D"+
// 		"PR1|6510|21||||15|||||||||\u000D"+
// 		"GT1|1|78|MOUSE^MARSHALL^||123 Main St.^^Lake Buena Vista^FL^32830|(407)939-1289^^^^^^||19190101|M||||||||||||||||||||||||||||||||||||||||||||||\u000D"+
// 		"IN1|1||1|ABC Insurance Medicaid|P O Box 12345^^Atlanta^GA^30348|Claims^Florida |(555)555-1234^^^^^^|G1234|||||||G|Mouse^Mickey|SELF|19281118|123 Main St.^^Lake Buena Vista^FL^32830|Y||||||||||||P||||ZYX1234589-1|||||||M||||M||\u000D"+
// 		"IN2||||||ZYX1234589-1||||ZYX1234589-1|||||||||||||||000079||||||||||||||||||||||||||||||||||||||(206)446-5080^^^^^260^4465080|||||||||SELF\u001C\u000D");
//   client.write("\u000BCause\u000Dà\u000Dmon\u000Dcul\u001C\u000D");
//   client.write("\u000Bà\u001C\u000D");
//   client.write( "\u000BMSH|^~\&|SENDING_APPLICATION|SENDING_FACILITY|RECEIVING_APPLICATION|RECEIVING_FACILITY|20110613083617||ADT^A04|934576120110613083617|P|2.3|||||||\u000DEVN|A04|20110613083617|||\u000DPID|1||135769||MOUSE^MICKEY^||19281118|M|||123 Main St.^^Lake Buena Vista^FL^32830||(407)939-1289^^^theMainMouse@disney.com|||||1719|99999999|||||||||||||\u000DPV1|1|O|||||7^Disney^Walt^^MD^^^^|||||||||||||||||||||||||||||||||||||||||||||\u000DPR1|6510|21||||15|||||||||\u000DIN1|1||1|ABC Insurance Medicaid|P O Box 12345^^Atlanta^GA^30348|Claims^Florida |(555)555-1234^^^^^^|G1234|||||||G|Mouse^Mickey|SELF|19281118|123 Main St.^^Lake Buena Vista^FL^32830|Y||||||||||||P||||ZYX1234589-1|||||||M||||M||\u001C\u000D\u000BMSH|^~\&|SENDING_APPLICATION|SENDING_FACILITY|RECEIVING_APPLICATION|RECEIVING_FACILITY|20110613072049||ADT^A08|934579920110613072049|P|2.3|||||||\u000D"+
// 		"EVN|A08|20110613072049|||\u000D"+
// 		"PID|1||135769||MOUSE^MICKEY^||19281118|M|||123 Main St.^^Lake Buena Vista^FL^32830||(407)939-1289^^^theMainMouse@disney.com|||||1719|99999999|||||||||||||\u000D"+
// 		"PV1|1|O|||||7^Disney^Walt^^MD^^^^|||||||||||||||||||||||||||||||||||||||||||||\u000D"+
// 		"PR1|6510|21||||15|||||||||\u000D"+
// 		"GT1|1|78|MOUSE^MARSHALL^||123 Main St.^^Lake Buena Vista^FL^32830|(407)939-1289^^^^^^||19190101|M||||||||||||||||||||||||||||||||||||||||||||||\u000D"+
// 		"IN1|1||1|ABC Insurance Medicaid|P O Box 12345^^Atlanta^GA^30348|Claims^Florida |(555)555-1234^^^^^^|G1234|||||||G|Mouse^Mickey|SELF|19281118|123 Main St.^^Lake Buena Vista^FL^32830|Y||||||||||||P||||ZYX1234589-1|||||||M||||M||\u000D"+
// 		"IN2||||||ZYX1234589-1||||ZYX1234589-1|||||||||||||||000079||||||||||||||||||||||||||||||||||||||(206)446-5080^^^^^260^4465080|||||||||SELF\u001C\u000D");
//   client.write("\u000Bà\u001C\u000D");
//   client.write("\u000BCause\u000Dà\u000Dmon\u000Dcul\u001C\u000D");
//   client.write("\u000BMa\u000Dtête\u000Dest\u000Dmalade !\u001C\u000D");
//   client.write( "\u000BMSH|^~\&|SENDING_APPLICATION|SENDING_FACILITY|RECEIVING_APPLICATION|RECEIVING_FACILITY|20110613083617||ADT^A04|934576120110613083617|P|2.3|||||||\u000DEVN|A04|20110613083617|||\u000DPID|1||135769||MOUSE^MICKEY^||19281118|M|||123 Main St.^^Lake Buena Vista^FL^32830||(407)939-1289^^^theMainMouse@disney.com|||||1719|99999999|||||||||||||\u000DPV1|1|O|||||7^Disney^Walt^^MD^^^^|||||||||||||||||||||||||||||||||||||||||||||\u000DPR1|6510|21||||15|||||||||\u000DIN1|1||1|ABC Insurance Medicaid|P O Box 12345^^Atlanta^GA^30348|Claims^Florida |(555)555-1234^^^^^^|G1234|||||||G|Mouse^Mickey|SELF|19281118|123 Main St.^^Lake Buena Vista^FL^32830|Y||||||||||||P||||ZYX1234589-1|||||||M||||M||\u001C\u000D\u000BMSH|^~\&|SENDING_APPLICATION|SENDING_FACILITY|RECEIVING_APPLICATION|RECEIVING_FACILITY|20110613072049||ADT^A08|934579920110613072049|P|2.3|||||||\u000D"+
// 		"EVN|A08|20110613072049|||\u000D"+
// 		"PID|1||135769||MOUSE^MICKEY^||19281118|M|||123 Main St.^^Lake Buena Vista^FL^32830||(407)939-1289^^^theMainMouse@disney.com|||||1719|99999999|||||||||||||\u000D"+
// 		"PV1|1|O|||||7^Disney^Walt^^MD^^^^|||||||||||||||||||||||||||||||||||||||||||||\u000D"+
// 		"PR1|6510|21||||15|||||||||\u000D"+
// 		"GT1|1|78|MOUSE^MARSHALL^||123 Main St.^^Lake Buena Vista^FL^32830|(407)939-1289^^^^^^||19190101|M||||||||||||||||||||||||||||||||||||||||||||||\u000D"+
// 		"IN1|1||1|ABC Insurance Medicaid|P O Box 12345^^Atlanta^GA^30348|Claims^Florida |(555)555-1234^^^^^^|G1234|||||||G|Mouse^Mickey|SELF|19281118|123 Main St.^^Lake Buena Vista^FL^32830|Y||||||||||||P||||ZYX1234589-1|||||||M||||M||\u000D"+
// 		"IN2||||||ZYX1234589-1||||ZYX1234589-1|||||||||||||||000079||||||||||||||||||||||||||||||||||||||(206)446-5080^^^^^260^4465080|||||||||SELF\u001C\u000D");
//   client.write("\u000Bà\u001C\u000D");
});

client.on('data', function(data) {
  console.log('Réponse du serveur : \n\n' + data + "\n\n");
  client.destroy();
});

client.on('close', function() {
  console.log('Connexion interrompue.');
});
