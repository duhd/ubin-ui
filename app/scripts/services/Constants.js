'use strict';

function constants(ENV) {

	var constants = {};
	
	var cordaConstants = {
		"mepsEndpoint": "http://127.0.0.1:9001",
		"bankNodes": {
//			  "MASREGULATOR": {
//                			 	 "host": "127.0.0.1",
//                			 	 "port": "10006",
//                			 	 "bankName": "MAS Regulator",
//                			 	 "centralBank": false,
//                			 	 "regulator": true
//                			  },
			"MASGSGSG": {
				"host": "127.0.0.1",
				"port": "10006",
				"bankName": "SBV State Bank of Vietnam",
				"centralBank": true,
				"regulator": false
			},
			"CSFBSGSX": {
				"host": "127.0.0.1",
				"port": "10009",
				"bankName": "Credit Suisse",
				"centralBank": false,
				"regulator": false
			},
			"BANKA": {
				"host": "127.0.0.1",
				"port": "10012",
				"bankName": "Bank A",
				"centralBank": false,
				"regulator": false
			},
			"BANKB": {
				"host": "127.0.0.1",
				"port": "10015",
				"bankName": "Bank B",
				"centralBank": false,
				"regulator": false
			},
			"BANKC": {
				"host": "127.0.0.1",
				"port": "10018",
				"bankName": "Bank C",
				"centralBank": false,
				"regulator": false
			}
    }
  };


  switch (ENV.platform) {
    case 'corda':
      constants.corda = cordaConstants;
      break;
    case 'fabric':
      constants.fabric = fabricConstants;
      break;
    case 'quorum':
      constants.quorum = quorumConstants;
      break;
    default:
    	break;
  }

	constants.priorities = {
  	0: "Normal",
  	1: "High"
  };

  constants.nettingStatus = [
    "SETTLED",
    "FAILED",
    "deadlock",
    "complete",
    "Deadlock",
    "Complete"
  ];

  constants.status = {
  	pending: "Pending",
  	confirmed: "Confirmed",
  	onhold: "On Hold",
  	canceled: "Canceled",
  	unknown: "Unknown"
  };

  constants.defaultBankLoc = "MASGSGSG";
  constants.regulator = "MASREGULATOR";
  constants.MAS = "MASGSGSG";
  constants.currencySymbol = "S$";
  constants.error = "error";
  constants.platform = {
  	fabric: "Hyperledger Fabric",
  	quorum: "Quorum",
  	corda: "Corda"
  };
  
  return constants;
}
