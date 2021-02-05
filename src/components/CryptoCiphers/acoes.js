var CryptoJS = require("crypto-js");

const GMap_Modo = new Map();
GMap_Modo.set("CBC", CryptoJS.mode.CBC);
GMap_Modo.set("CFB", CryptoJS.mode.CFB);
GMap_Modo.set("CTR", CryptoJS.mode.CTR);
GMap_Modo.set("OFB", CryptoJS.mode.OFB);
GMap_Modo.set("ECB", CryptoJS.mode.ECB);

const GMap_Esquema = new Map();
GMap_Esquema.set("Pkcs7", CryptoJS.pad.Pkcs7);
GMap_Esquema.set("Iso97971", CryptoJS.pad.Iso97971);
GMap_Esquema.set("AnsiX923", CryptoJS.pad.AnsiX923);
GMap_Esquema.set("Iso10126", CryptoJS.pad.Iso10126);
GMap_Esquema.set("ZeroPadding", CryptoJS.pad.ZeroPadding);
GMap_Esquema.set("NoPadding", CryptoJS.pad.NoPadding);

export function Executar(Acao, Tipo, Modo, Esquema, Texto, Chave) {

	if( Texto == "" )
	{

		return "";
		
	}

	console.log(Texto);
    var Resultado = "";

    switch(Tipo)
    {

        case "AES":

            if( Acao == "C" ){

                Resultado       = CryptoJS.AES.encrypt(Texto, Chave, { mode: GMap_Modo.get(Modo), padding: GMap_Esquema.get(Esquema) }).toString();
            
            }else if( Acao == "D" ){

                Resultado       = CryptoJS.AES.decrypt(Texto, Chave, { mode: GMap_Modo.get(Modo), padding: GMap_Esquema.get(Esquema) }).toString();

            }

        break;

        case "DES":

            if( Acao == "C" ){

                Resultado       = CryptoJS.DES.encrypt(Texto, Chave, { mode: GMap_Modo.get(Modo), padding: GMap_Esquema.get(Esquema) }).toString();
            
            }else if( Acao == "D" ){

                Resultado       = CryptoJS.DES.decrypt(Texto, Chave, { mode: GMap_Modo.get(Modo), padding: GMap_Esquema.get(Esquema) }).toString();

            }

        break;

        case "TripleDES":

            if( Acao == "C" ){

                Resultado       = CryptoJS.TripleDES.encrypt(Texto, Chave, { mode: GMap_Modo.get(Modo), padding: GMap_Esquema.get(Esquema) }).toString();
            
            }else if( Acao == "D" ){

                Resultado       = CryptoJS.TripleDES.decrypt(Texto, Chave, { mode: GMap_Modo.get(Modo), padding: GMap_Esquema.get(Esquema) }).toString();

            }

        break;

        case "Rabbit":

            if( Acao == "C" ){

                Resultado       = CryptoJS.Rabbit.encrypt(Texto, Chave, { mode: GMap_Modo.get(Modo), padding: GMap_Esquema.get(Esquema) }).toString();
            
            }else if( Acao == "D" ){

                Resultado       = CryptoJS.Rabbit.decrypt(Texto, Chave, { mode: GMap_Modo.get(Modo), padding: GMap_Esquema.get(Esquema) }).toString();

            }

        break;

        case "RC4":

            if( Acao == "C" ){

                Resultado       = CryptoJS.RC4.encrypt(Texto, Chave, { mode: GMap_Modo.get(Modo), padding: GMap_Esquema.get(Esquema) }).toString();
            
            }else if( Acao == "D" ){

                Resultado       = CryptoJS.RC4.decrypt(Texto, Chave, { mode: GMap_Modo.get(Modo), padding: GMap_Esquema.get(Esquema) }).toString();

            }

        break;

        case "RC4Drop":

            if( Acao == "C" ){

                Resultado       = CryptoJS.RC4Drop.encrypt(Texto, Chave, { mode: GMap_Modo.get(Modo), padding: GMap_Esquema.get(Esquema) }).toString();
            
            }else if( Acao == "D" ){

                Resultado       = CryptoJS.RC4Drop.decrypt(Texto, Chave, { mode: GMap_Modo.get(Modo), padding: GMap_Esquema.get(Esquema) }).toString();

            }

        break;

    }

    return Resultado;
    
}