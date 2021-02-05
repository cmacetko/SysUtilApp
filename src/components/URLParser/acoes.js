export function parseUrl(value) 
{
	
    const fragments = new Map();

    if( !value ) 
	{
		
        return fragments;
		
    }

    try {
		
        const url = new URL(value);

        fragments.set('host', url.host);
        fragments.set('protocol', url.protocol);
        fragments.set('hash', url.hash);
        fragments.set('origin', url.origin);
        fragments.set('pathname', url.pathname);
        fragments.set('port', url.port ? url.port : '<default>');
        fragments.set('search', url.search);
		
    } catch (e) {
        
    }

    return fragments;
	
}

export function parseUrlParams(value)
{
	
    const params = new Map();

    if( !value ) 
	{
		
        return params;
		
    }

    try {
		
        const url = new URL(value);
		
        const searchParams = url.searchParams;
		
        searchParams.forEach((value, key) => params.set(key, value));
		
    } catch (e) {
		
    }

    return params;
	
}