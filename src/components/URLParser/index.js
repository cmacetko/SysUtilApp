import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import * as copy from 'copy-to-clipboard';

import ModTitle from '../../auxiliar/ModTitle';
import useModAlert from '../../auxiliar/ModAlert/index'

import * as acoes from './acoes';
import * as funcoes from '../../auxiliar/funcoes'
import { StyledTableCell, StyledTableRow, useStyles } from './css';

export default function URLParser() {
    
	const classes = useStyles();
	
    const { openModAlert } = useModAlert();
	const [ Campos, setCampos ] = React.useState({ Url: "" });
	const [ urlFragments, setUrlFragments ] = React.useState(new Map());
    const [ urlParams, setUrlParams ] = React.useState(new Map());
	
	React.useEffect(() => {
		
		setUrlFragments(acoes.parseUrl(Campos.Url));
		setUrlParams(acoes.parseUrlParams(Campos.Url));

	}, [Campos]);
	
    return ( 
        <div>
            
            <ModTitle title="URL Parser" />
			
			<Divider />

            <form noValidate autoComplete="off" className={'mt20'}>

                <Grid container spacing={1}>
					<Grid item xs={12}>

                        <TextField
                            label="Url"
                            multiline
                            rows={4}
                            variant="outlined"
                            fullWidth={true}
                            value={Campos.Url}
                            onChange={(e) => setCampos({ ...Campos, Url: e.target.value })}
                        />

                    </Grid>
                </Grid>

            </form>

            <TableContainer component={Paper} className={'mt20'}>
                <Table>
                    <TableHead className={classes.tableHeader}>
                        <TableRow>
                            <StyledTableCell>Fragment</StyledTableCell>
                            <StyledTableCell>Value</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {[...urlFragments.keys()].sort().map(key => (
                            <StyledTableRow key={key}>
                                <StyledTableCell component="th" scope="row">{key}</StyledTableCell>
                                <StyledTableCell>{urlFragments.get(key)}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <TableContainer component={Paper} className={'mt20'}>
                <Table>
                    <TableHead className={classes.tableHeader}>
                        <TableRow>
                            <StyledTableCell>Parameter</StyledTableCell>
                            <StyledTableCell>Value</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {[...urlParams.keys()].sort().map(key => (
                            <StyledTableRow key={key}>
                                <StyledTableCell component="th" scope="row">{key}</StyledTableCell>
                                <StyledTableCell>{urlParams.get(key)}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )

}