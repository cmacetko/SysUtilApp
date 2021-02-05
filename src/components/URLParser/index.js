import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FormControl, FormHelperText, Card, CardContent, Grid, InputLabel, MenuItem, Select, TextField, Box, Typography } from '@material-ui/core';
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
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import ModTitle from '../../auxiliar/ModTitle';
import useModAlert from '../../auxiliar/ModAlert/index'

import * as acoes from './acoes';
import * as funcoes from '../../auxiliar/funcoes'
import { StyledTableCell, StyledTableRow, useStyles } from './css';

export default function URLParser() {
    
	const classes = useStyles();
	
    const { openModAlert } = useModAlert();
	const [ Campos, setCampos ] = React.useState({ Url: "" });
	const [ Resultado, setResultado ] = React.useState({ UrlFragments: {}, UrlFragmentsJson: "", UrlParams: {}, UrlParamsJson: "" });
	
	React.useEffect(() => {
		
		var DadUrlFragments	= acoes.parseUrl(Campos.Url);
		var DadUrlParams = acoes.parseUrlParams(Campos.Url);
		
		setResultado({ UrlFragments: DadUrlFragments, UrlFragmentsJson: acoes.monta_json(DadUrlFragments), UrlParams: DadUrlParams, UrlParamsJson: acoes.monta_json(DadUrlParams) });

	}, [Resultado]);
	
	const BtnCopiar = (RetJson) => {

        copy.default(RetJson, { format: 'text/plain' });
        openModAlert(true, "Dados copiados com Sucesso!", "success", 2000);

    };

    const BtnSalvar = (RetJson) => {

        funcoes.SalvarTextoParaArquivo(RetJson);

    };
	
	const UrlFragments_render = () => {

		if( Object.keys(Resultado.UrlFragments).length == 0 )
		{
			
			return null;
			
		}
		
		return (
		<Card className={'p10 mt20'}>
			<CardContent>
					
				<Typography gutterBottom align="center" variant="h5" component="h2">
					UrlFragments
				</Typography>
					
				<TableContainer component={Paper} className={'mt20'}>
					<Table>
						<TableHead className={classes.tableHeader}>
							<TableRow>
								<StyledTableCell>Fragment</StyledTableCell>
								<StyledTableCell>Value</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{Object.keys(Resultado.UrlFragments).map((ret, idx) => (
								<StyledTableRow key={idx}>
									<StyledTableCell component="th" scope="row">{ret}</StyledTableCell>
									<StyledTableCell>{Resultado.UrlFragments[ret]}</StyledTableCell>
								</StyledTableRow>
							))}	
						</TableBody>
					</Table>
				</TableContainer>
				
				<Divider />
				
				<SyntaxHighlighter language="json" style={docco} showLineNumbers={true} wrapLines={true} wrapLongLines={true} className={'formatted2 p20'}>
					{Resultado.UrlFragmentsJson}
				</SyntaxHighlighter>
				
				<div className={'mt20 text-center'}>

					<Divider className={'mb20'} />

					<Button variant="contained" color="primary" onClick={() => BtnCopiar(Resultado.UrlFragmentsJson)} className={'mr10'}>Copiar</Button>
					<Button variant="contained" color="primary" onClick={() => BtnSalvar(Resultado.UrlFragmentsJson)}>Salvar</Button>

				</div>
			
			</CardContent>
		</Card>
		);

	};
	
	const UrlParams_render = () => {

		if( Object.keys(Resultado.UrlParams).length == 0 )
		{
			
			return null;
			
		}
		
		return (
		<Card className={'p10 mt20'}>
			<CardContent>
					
				<Typography gutterBottom align="center" variant="h5" component="h2">
					UrlParams
				</Typography>
					
				<TableContainer component={Paper} className={'mt20'}>
					<Table>
						<TableHead className={classes.tableHeader}>
							<TableRow>
								<StyledTableCell>Parameter</StyledTableCell>
								<StyledTableCell>Value</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{Object.keys(Resultado.UrlParams).map((ret, idx) => (
								<StyledTableRow key={idx}>
									<StyledTableCell component="th" scope="row">{ret}</StyledTableCell>
									<StyledTableCell>{Resultado.UrlParams[ret]}</StyledTableCell>
								</StyledTableRow>
							))}	
						</TableBody>
					</Table>
				</TableContainer>
				
				<Divider />
				
				<SyntaxHighlighter language="json" style={docco} showLineNumbers={true} wrapLines={true} wrapLongLines={true} className={'formatted2 p20'}>
					{Resultado.UrlParamsJson}
				</SyntaxHighlighter>
				
				<div className={'mt20 text-center'}>

					<Divider className={'mb20'} />

					<Button variant="contained" color="primary" onClick={() => BtnCopiar(Resultado.UrlParamsJson)} className={'mr10'}>Copiar</Button>
					<Button variant="contained" color="primary" onClick={() => BtnSalvar(Resultado.UrlParamsJson)}>Salvar</Button>

				</div>
			
			</CardContent>
		</Card>
		);

	};
	
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

			{UrlFragments_render()}
			
			{UrlParams_render()}

        </div>
    )

}