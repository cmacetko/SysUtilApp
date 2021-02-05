var faker = require('faker-br');

export function Executar(Tipo, Formatar, Quantidade)
{
	
	var RetFinal = [];
	
	switch(Tipo)
	{
		
		case "CPF":
		
			if( Formatar == "S" )
			{
				
				for( var i=1; i<=Quantidade; i++ )
				{
					
					RetFinal.push(faker.br.cpf({ format: true }));
					
				}
				
			}else{
				
				for( var i=1; i<=Quantidade; i++ )
				{
					
					RetFinal.push(faker.br.cpf());
					
				}
				
			}
		
		break;
		
	}

	return RetFinal;
	
}