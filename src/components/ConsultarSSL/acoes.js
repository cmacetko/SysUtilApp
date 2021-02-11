import checksslcertificate from 'checksslcertificate'

export function Executar(Url)
{
	
	return new Promise((Resolve, Reject) => {

		checksslcertificate({hostname: Url}).then(res => {
		
			if( res.error )
			{
				
				Reject(res.error);
				
			}else{
				
				Resolve(res);
				
			}

		});
	
    });
	
}