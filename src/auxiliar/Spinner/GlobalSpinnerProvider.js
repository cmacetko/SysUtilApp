import React from "react";
import { GlobalSpinner } from "./GlobalSpinner";

const SpinnerContext = React.createContext(null);
const SpinnerUpdateContext = React.createContext(null);

export function useGlobalSpinner() 
{
	
    return React.useContext(SpinnerContext);
	
}

export function useGlobalSpinnerUpdate() 
{
	
    return React.useContext(SpinnerUpdateContext);
	
}

export function GlobalSpinnerProvider({ children }) 
{
	
    const [globalSpinnerState, setGlobalSpinnerState] = React.useState({ open: false });

    return (
        <SpinnerContext.Provider value={{ globalSpinnerState }}>
            <SpinnerUpdateContext.Provider value={{ setGlobalSpinnerState }}>
                <GlobalSpinner>
                    {children}
                </GlobalSpinner>
            </SpinnerUpdateContext.Provider>
        </SpinnerContext.Provider>
    );
}

export default GlobalSpinnerProvider;
