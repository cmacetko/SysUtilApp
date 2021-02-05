var CryptoJS = require("crypto-js");

export function Executar(Texto) {

	if( Texto == "" )
	{

		return "";
		
	}

	try {
		
        const obj = JSON.parse(Texto);
        return JSON.stringify(obj, false, 4);
		
    } catch (e) {
		
        return "";
		
    }
    
}