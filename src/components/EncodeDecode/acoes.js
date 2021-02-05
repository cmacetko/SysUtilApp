var encode = require('nodejs-base64-encode');

export function Executar(Acao, Tipo, Texto) {

	if( Texto == "" )
	{

		return "";
		
	}

    var Resultado = "";

	try {
		
		if( Tipo == "Url" ){
			
			if( Acao == "E" ) 
			{
				
				Resultado = encodeURIComponent(Texto);
			
			}else{
			
				Resultado = decodeURIComponent(Texto);

			}
			
		}else{
			
			if( Acao == "E" ) 
			{
				
				Resultado = encode.encode(Texto, Tipo);
			
			}else{
			
				Resultado = encode.decode(Texto, Tipo);

			}
		
		}
		
	} catch (e) {
		
		return e.toString();
	
	}

    return Resultado;
    
}