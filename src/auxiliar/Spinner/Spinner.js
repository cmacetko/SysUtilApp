import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import LoadingOverlay from 'react-loading-overlay';
import ScaleLoader from 'react-spinners/ScaleLoader';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .spinner_overlay': {
            background: 'rgba(0, 0, 0, 0.3)',
        },
    },
}));

export function GlobalSpinner(props) {
	
    const classes = useStyles();

    return (
        <LoadingOverlay classNamePrefix='spinner_' className={classes.root}
            active={props.active} spinner={<ScaleLoader color="#586ecf" />}>
            {props.children}
        </LoadingOverlay>
    );
	
}
