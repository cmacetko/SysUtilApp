var geoip = require('geoip-lite');

export async function Executar(Valor)
{

	return new Promise((Resolve, Reject) => {
		
		var geo = geoip.lookup(Valor);

		if( geo == null )
		{
			
			Reject("Falha em Obter Detalhes");
			
		}else{
			
			Resolve(geo);
			
		}
		
	});
	
}