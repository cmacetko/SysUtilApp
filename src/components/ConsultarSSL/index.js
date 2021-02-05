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
import { useGlobalSpinnerUpdate } from '../../auxiliar/Spinner/GlobalSpinnerProvider';
import * as copy from 'copy-to-clipboard';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import ModTitle from '../../auxiliar/ModTitle';
import useModAlert from '../../auxiliar/ModAlert/index'

import * as acoes from './acoes';
import * as funcoes from '../../auxiliar/funcoes'
import { StyledTableCell, StyledTableRow, useStyles } from './css';

export default function ConsultarSSL() {
    
	const classes = useStyles();
	
    const { openModAlert } = useModAlert();
	const [ Campos, setCampos ] = React.useState({ Url: "" });
	const [ Resultado, setResultado ] = React.useState({ Dados: {}, Json: "", IsFalha: true, ErroMsg: "" });
	const { setGlobalSpinnerState } = useGlobalSpinnerUpdate();
		
	const BtnCopiar = () => {

        copy.default(Resultado.Json, { format: 'text/plain' });
        openModAlert(true, "Dados copiados com Sucesso!", "success", 2000);

    };

    const BtnSalvar = () => {

        funcoes.SalvarTextoParaArquivo(Resultado.Json);

    };
	
	const BtnExecutar = () => {

		if( Campos.Url == "" ){
			
			openModAlert(true, "Preencha a URL!", "error", 2000);
			
		}else{
			
			setGlobalSpinnerState({ open: true });

			acoes.Executar(Campos.Url)
			.then(result => {
				
				setGlobalSpinnerState({ open: false });
				setResultado({ ...Resultado, Dados: result, Json: funcoes.ArrayToJson(result), IsFalha: false });
				
			})
			.catch(error => {
				
				setGlobalSpinnerState({ open: false });				
				setResultado({ ...Resultado, IsFalha: true, ErroMsg: error });
			
			});

		}
		
    };
	
	const Erro_Render = () => {

		if( !Resultado.IsFalha || Object.keys(Resultado.Dados).length == 0 )
		{
			
			return null;
			
		}
		
		return (
		<Paper elevation={3} className={'p10 mt20'}>
	
			<Typography color="secondary" align="center" variant="body1">
				<b>Falha:</b> {Resultado.ErroMsg}
			</Typography>
		
		</Paper>
		);

	};
	
	const Sucesso_Render = () => {

		if( Resultado.IsFalha || Object.keys(Resultado.Dados).length == 0 )
		{
			
			return null;
			
		}
		
		return (
		<Card className={'p10 mt20'}>
			<CardContent>
					
				<Typography gutterBottom color={Resultado.Dados.valid ? 'primary' : 'error'} align="center" variant="h5" component="h2">
					{Resultado.Dados.valid ? 'Valido' : 'Expirados'}
				</Typography>
					
				<TableContainer component={Paper} className={'mt20'}>
					<Table>
						<TableBody>
							<StyledTableRow>
								<StyledTableCell component="th" scope="row">De</StyledTableCell>
								<StyledTableCell>{Resultado.Dados.validFrom}</StyledTableCell>
							</StyledTableRow>
							<StyledTableRow>
								<StyledTableCell component="th" scope="row">Ate</StyledTableCell>
								<StyledTableCell>{Resultado.Dados.validUntil}</StyledTableCell>
							</StyledTableRow>
						</TableBody>
					</Table>
				</TableContainer>
				
				<Divider />
				
				<SyntaxHighlighter language="json" style={docco} showLineNumbers={true} wrapLines={true} wrapLongLines={true} className={'formatted2 p20'}>
					{Resultado.Json}
				</SyntaxHighlighter>
				
				<div className={'mt20 text-center'}>

					<Divider className={'mb20'} />

					<Button variant="contained" color="primary" onClick={() => BtnCopiar()} className={'mr10'}>Copiar</Button>
					<Button variant="contained" color="primary" onClick={() => BtnSalvar()}>Salvar</Button>

				</div>
			
			</CardContent>
		</Card>
		);

	};
	
    return ( 
        <div>
            
            <ModTitle title="Consultar SSL" />
			
			<Divider />

            <form noValidate autoComplete="off" className={'mt20'}>

                <Grid container spacing={1}>
					<Grid item xs={12}>

                        <TextField
                            label="Url"
                            multiline
                            variant="outlined"
                            fullWidth={true}
                            value={Campos.Url}
                            onChange={(e) => setCampos({ ...Campos, Url: funcoes.URLToHost(e.target.value) })}
                        />

                    </Grid>
                </Grid>

            </form>
			
			<div className={'mt20 text-center'}>

				<Divider className={'mb20'} />

				<Button variant="contained" color="primary" onClick={(e) => BtnExecutar()}>Consultar</Button>

			</div>
			
			{Erro_Render()}
			
			{Sucesso_Render()}

        </div>
    )

}