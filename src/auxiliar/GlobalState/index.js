/*
import GlobalState from './auxiliar/GlobalState/Provider'

<GlobalState>

</GlobalState>

#######################

import useCfg from '../../auxiliar/GlobalState/index'

const { Cfg, CfgGet, CfgSet, CfgSetGeral } = useCfg();

React.useEffect(() => {
	
	console.log("useEffect");		
	console.log(Cfg);
	console.log("--");


}, [Cfg]);



console.log(CfgGet("Teste1", "D1"));
//CfgSet("Teste1", "AAAAAAAAAAAAAAAA");
CfgSet("Teste1", { "Teste1": "1111AAAA" });



{CfgGet("Teste1", "D0")}
*/

import { useContext } from 'react';
import { CfgContext } from './Provider';

function useCfg() 
{

    const { Cfg, CfgGet, CfgSet, CfgSetGeral } = useContext(CfgContext);

    return { Cfg, CfgGet, CfgSet, CfgSetGeral };

}

export default useCfg;