import * as funcoes from '../../auxiliar/funcoes'

var ping = require('ping');

export function Executar(Valor, setProcessado, setFalha, Resultado, setResultado, setResultado2)
{

	setProcessado(true);
	setFalha({ Is: false, Msg: "" });
	setResultado([]);
	setResultado2([]);

	ping.promise.probe(Valor)
	.then(function (res) {
				
		console.log("then");
		console.log(res);
				
		setProcessado(false);
				
		if( res.alive = false )
		{
			
			setFalha({ Is: true, Msg: res.output });
			
		}else{
			
			var TmpSep          = res.output.split("\r\n");
			var TmpRet          = [];

			TmpSep.forEach(function(TmpSep2){

				if( TmpSep2 != "" )
				{

					TmpSep2         = TmpSep2.trim();

					if( TmpSep2 != "" )
					{

						TmpRet.push(TmpSep2);

					}

				}
		
			});
			
			setResultado(TmpRet);
			setResultado2(res);
			
			setFalha({ Is: false, Msg: "" });
			
		}
		
	});
	
}