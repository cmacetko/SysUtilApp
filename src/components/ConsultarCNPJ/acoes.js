var CNPJ = require('consulta-cnpj-ws');

export async function Executar(Valor)
{

	return new Promise((Resolve, Reject) => {
		
		var cnpj = new CNPJ();

		cnpj.consultaCNPJ({ cnpj: Valor })
		.then(result => {
			
			if( result.status == "ERROR" )
			{
				
				Reject(result.message);
				
			}else{
				
				Resolve(result);
			
			}
								
		})
		.catch(error => {
			
			if( error.message != undefined )
			{

				Reject(error.message);

			}else{

				Reject("Falha em Obter Detalhes");

			}
			
		});
		
	});
	
}