var CryptoJS = require("crypto-js");

export function Executar(Tipo, Texto) {

	if( Texto == "" )
	{

		return "";
		
	}
	
    var Resultado = "";

    switch(Tipo)
    {

        case "MD5":

            Resultado       = CryptoJS.MD5(Texto).toString();

        break;

        case "SHA1":

            Resultado       = CryptoJS.SHA1(Texto).toString();

        break;

        case "SHA256":

            Resultado       = CryptoJS.SHA256(Texto).toString();

        break;

        case "SHA224":

            Resultado       = CryptoJS.SHA224(Texto).toString();

        break;

        case "SHA384":

            Resultado       = CryptoJS.SHA384(Texto).toString();

        break;

        case "SHA512":

            Resultado       = CryptoJS.SHA512(Texto).toString();

        break;

        case "SHA3":

            Resultado       = CryptoJS.SHA3(Texto).toString();

        break;

        case "RIPEMD160":

            Resultado       = CryptoJS.RIPEMD160(Texto).toString();

        break;

    }

    return Resultado;
    
}