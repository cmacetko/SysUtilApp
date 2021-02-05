var CryptoJS = require("crypto-js");

export function Executar(Tipo, Texto, Chave) {

	if( Texto == "" )
	{

		return "";
		
	}
	
    var Resultado = "";

    switch(Tipo)
    {

        case "MD5":

            Resultado       = CryptoJS.HmacMD5(Texto, Chave).toString();

        break;

        case "SHA1":

            Resultado       = CryptoJS.HmacSHA1(Texto, Chave).toString();

        break;

        case "SHA256":

            Resultado       = CryptoJS.HmacSHA256(Texto, Chave).toString();

        break;

        case "SHA224":

            Resultado       = CryptoJS.HmacSHA224(Texto, Chave).toString();

        break;

        case "SHA384":

            Resultado       = CryptoJS.HmacSHA384(Texto, Chave).toString();

        break;

        case "SHA512":

            Resultado       = CryptoJS.HmacSHA512(Texto, Chave).toString();

        break;

        case "SHA3":

            Resultado       = CryptoJS.HmacSHA3(Texto, Chave).toString();

        break;

        case "RIPEMD160":

            Resultado       = CryptoJS.HmacRIPEMD160(Texto, Chave).toString();

        break;

    }

    return Resultado;
    
}