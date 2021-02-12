var checkSslCertificate = require('checksslcertificate').default

export function Executar(Url)
{
	
	console.log("Url");
	console.log(Url);
	
	return new Promise((Resolve, Reject) => {

		console.log("checkSslCertificate");
	
		checkSslCertificate({hostname: Url}).then(res => {
		
			console.log("res");
			console.log(res);
		
			if( res.error )
			{
				
				Reject(res.error);
				
			}else{
				
				Resolve(res);
				
			}

		});
	
    });
	
}