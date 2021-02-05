var sinespApi = require('sinesp-api');

export function Executar(Placa)
{

	return new Promise((Resolve, Reject) => {
		
		(async function(){
		
			try {

				var vehicle = await sinespApi.search(Placa);
			
				Resolve(vehicle);

			} catch (ex) {
				
				Reject(ex.message);
			
			}
		
		})();
		
	});
	
}