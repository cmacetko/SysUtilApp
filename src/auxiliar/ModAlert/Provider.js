import React, { useState, useCallback } from 'react';
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

export const ModAlertContext = React.createContext();

export default function ModAlertProvider({ children }) {

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState('success');
    const [autoHideDuration, setAutoHideDuration] = useState(2000);

    const openModAlert = (open, message, type, autoHideDuration) => {

        setOpen(open);
        setMessage(message);
        setType(type);
        setAutoHideDuration(autoHideDuration);

        if( open == true )
        {

            setTimeout(() => {
                
                setOpen(false);

            }, autoHideDuration)

        }

    };

    return (
        <ModAlertContext.Provider value={{ openModAlert }}>

            {children}

            <Snackbar
                open={open}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert
                    elevation={6}
                    variant="filled"
                    severity={type}
                >
                    {message}
                </Alert>
            </Snackbar>

        </ModAlertContext.Provider>
    );

}