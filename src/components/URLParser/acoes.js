export function parseUrl(value) 
{
	
    const fragments = {};

    if( !value ) 
	{
		
        return fragments;
		
    }

    try {
		
        const url = new URL(value);

        fragments['host'] = url.host;
        fragments['protocol'] = url.protocol;
        fragments['hash'] = url.hash;
        fragments['origin'] = url.origin;
        fragments['pathname'] = url.pathname;
        fragments['port'] = url.port ? url.port : '<default>';
        fragments['search'] = url.search;
		
    } catch (e) {
        
    }

    return fragments;
	
}

export function parseUrlParams(value)
{
	
    const params = {};

    if( !value ) 
	{
		
        return params;
		
    }

    try {
		
        const url = new URL(value);
        const searchParams = url.searchParams;
		
        searchParams.forEach((value, key) => {
			
			params[key] = value;
			
		});
		
    } catch (e) {
		
    }

    return params;
	
}

export function monta_json(obj) 
{
	
    try{
		
        return JSON.stringify(obj, null, 4);
		
    }catch (e){
		
        return e.toString();
		
    }
	
}