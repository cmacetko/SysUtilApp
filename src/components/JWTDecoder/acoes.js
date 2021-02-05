import jwt_decode from 'jwt-decode';

export function Executar(value, header) 
{
	
    if( !value )
	{
		
        return "";
		
    }

    try{
		
        const obj = jwt_decode(value, { header });
        return JSON.stringify(obj, null, 4);
		
    }catch (e){
		
        return e.toString();
		
    }
	
}