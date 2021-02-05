var checkSslCertificate = require('checkSslCertificate').default

export function Executar(Url)
{
	
	return new Promise((Resolve, Reject) => {

		checkSslCertificate({hostname: Url}).then(res => {
		
			if( res.error )
			{
				
				Reject(res.error);
				
			}else{
				
				Resolve(res);
				
			}

		});
	
    });
	
}