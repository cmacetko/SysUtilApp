import * as funcoes from '../../auxiliar/funcoes'

var dns = require('native-dns');

export async function Executar(Tipo, Valor, setProcessado, setFalha, Resultado, setResultado, setResultado2)
{

	setProcessado(true);
	setFalha({ Is: false, Msg: "" });
	setResultado([]);
	setResultado2([]);

	var RetFinal = [];
	var IsTimeout = false;

	var question = dns.Question({
	name: Valor,
	type: Tipo,
	});

	var req2 = dns.Request({
	question: question,
	server: { address: '8.8.8.8', port: 53, type: 'udp' },
	timeout: 1000,
	});

	req2.on('timeout', function () {

		IsTimeout = true;

	});

	req2.on('message', function (err, answer) {

		answer.answer.forEach(function (a) {

			RetFinal.push(a);
			
			var TmpReg = {};
		
			if( a.hasOwnProperty("primary") == true ){

                TmpReg["Nome"]			= a.name;
				TmpReg["TTL"]			= a.ttl;
				TmpReg["Destino"]		= a.serial;

            }else if( a.hasOwnProperty("address") == true ){

                TmpReg["Nome"]			= a.name;
				TmpReg["TTL"]			= a.ttl;
				TmpReg["Destino"]		= a.address;

            }else if( a.hasOwnProperty("exchange") == true ){

                TmpReg["Nome"]			= a.name;
				TmpReg["TTL"]			= a.ttl;
				TmpReg["Destino"]		= a.exchange;

            }else if( a.hasOwnProperty("data") == true ){

                TmpReg["Nome"]			= a.name;
				TmpReg["TTL"]			= a.ttl;
				TmpReg["Destino"]		= a.data;

            }else if( a.hasOwnProperty("target") == true ){

                TmpReg["Nome"]			= a.name;
				TmpReg["TTL"]			= a.ttl;
				TmpReg["Destino"]		= a.target;

            }else if( a.hasOwnProperty("service") == true ){

                TmpReg["Nome"]			= a.name;
				TmpReg["TTL"]			= a.ttl;
				TmpReg["Destino"]		= a.service;

            }else if( a.hasOwnProperty("service") == true ){

                TmpReg["Nome"]			= a.name;
				TmpReg["TTL"]			= a.ttl;
				TmpReg["Destino"]		= "-";

            }
			
			setResultado(Resultado => [...Resultado, TmpReg]);
			setResultado2(Resultado2 => [...Resultado2, a]);
			
		});

	});
	
	req2.on('end', function () {

		setProcessado(false);
	
		if( IsTimeout == true )
		{

			setFalha({ Is: true, Msg: "Timeou na consulta ao Host" });

		}else{
			
			if( RetFinal.length ==  0 )
			{
				
				setFalha({ Is: true, Msg: "Host nao localizado" });
				
			}else{
			
				setFalha({ Is: false, Msg: "" });
			
			}
			
		}

	});

	req2.send();
	
}