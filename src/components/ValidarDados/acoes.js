import * as dochelper from 'dochelper';

export function Executar(Tipo, Informacao)
{
	
	var RetFinal = false;
	
	switch(Tipo)
	{
		
		case "CPF":
		
			RetFinal = dochelper.CPF.validate(Informacao);
		
		break;
		
		case "CNPJ":
		
			RetFinal = dochelper.CNPJ.validate(Informacao);
		
		break;
		
	}
	
	return RetFinal;
	
}