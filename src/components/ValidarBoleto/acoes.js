var boleto = require('@mrmgomes/boleto-utils')
var dateFormat = require("dateformat");

export function Executar(Tipo, Texto)
{
	
	var RetFinal = boleto.validarBoleto(Texto, Tipo);

	if( RetFinal.sucesso == true )
	{
		
		RetFinal["vencimento"] = dateFormat(RetFinal["vencimento"], "isoDateTime");
		
	}
	
	return RetFinal;
	
}