import React, { useState, useCallback } from 'react';

export const CfgContext = React.createContext();

export default function GlobalState({ children }) {

    const [Cfg, SetCfg] = useState({});

	const CfgGet = (Campo, ValorPadrao = "") => {

		if( Cfg.hasOwnProperty(Campo) )
		{
			
			return Cfg[Campo];
		
		}else{
			
			return ValorPadrao;
			
		}

    };
	
	const CfgSet = (Campo, Valor) => {

		var NDados = {};
		NDados = { ...Cfg };
		
		if( typeof Valor === "object" )
		{
			
			Object.keys(Valor).forEach((RKey, RCod) => {
				
				NDados[RKey] = Valor[RKey];
				
			});
			
		}else{
			
			NDados[Campo] = Valor;
			
		}
		
        SetCfg(NDados);
		
    };
	
	const CfgSetGeral = (NDados) => {

        SetCfg(NDados);
		
    };
	
    return (
        <CfgContext.Provider value={{ Cfg, CfgGet, CfgSet, CfgSetGeral }}>
            {children}
        </CfgContext.Provider>
    )
	
};