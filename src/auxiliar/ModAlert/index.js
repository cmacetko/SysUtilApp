import { useContext } from 'react';
import { ModAlertContext } from './Provider';

function useModAlert() 
{

    const { openModAlert } = useContext(ModAlertContext);
    return { openModAlert };

}

export default useModAlert;