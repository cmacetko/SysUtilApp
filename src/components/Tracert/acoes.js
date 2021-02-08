import * as funcoes from '../../auxiliar/funcoes'

var Traceroute = require('nodejs-traceroute');

export async function Executar(Valor, setProcessado, setFalha, Resultado, setResultado, setResultado2)
{

	setProcessado(true);
	setFalha({ Is: false, Msg: "" });
	setResultado([]);
	setResultado2([]);

	var RetFinal = [];

	var tracer = new Traceroute();
	tracer
	.on('hop', (hop) => {
		
		RetFinal.push(hop);
		
		setResultado(Resultado => [...Resultado, hop]);
		setResultado2(Resultado2 => [...Resultado2, hop]);
			
	})
	.on('close', (code) => {
		
		setProcessado(false);
		
		if( code == 0 )
		{
			
			setFalha({ Is: false, Msg: "" });
			
		}else{
			
			setFalha({ Is: true, Msg: "Falha gerada com Code " + code });
			
		}
		
	});

	tracer.trace(Valor);
	
}