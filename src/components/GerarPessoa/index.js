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

export default function GerarPessoa() {
    
	const classes = useStyles();
	
    const { openModAlert } = useModAlert();
	
	const [ Processado, setProcessado ] = React.useState(false);
	const [ Falha, setFalha ] = React.useState({ Is: false, Msg: "" });
	const [ Resultado, setResultado ] = React.useState({ Dados: {}, Json: "" });
	
	const { setGlobalSpinnerState } = useGlobalSpinnerUpdate();
		
	const BtnCopiar = () => {

        copy.default(Resultado.Json, { format: 'text/plain' });
        openModAlert(true, "Dados copiados com Sucesso!", "success", 2000);

    };

    const BtnSalvar = () => {

        funcoes.SalvarTextoParaArquivo(Resultado.Json);

    };
	
	const BtnExecutar = () => {

		setGlobalSpinnerState({ open: true });

		console.log("Executar");
		
		acoes.Executar()
		.then(result => {
			
			setGlobalSpinnerState({ open: false });
			setProcessado(true);
			
			console.log("result");
			console.log(result);
			
			setResultado({ Dados: result, Json: funcoes.ArrayToJson(result) });
			setFalha({ Is: false, Msg: "" });
			
		})
		.catch(error => {
			
			setGlobalSpinnerState({ open: false });		
			setProcessado(true);
			
			console.log("error");
			console.log(error);
			
			setFalha({ Is: true, Msg: error });
		
		});
		
    };
	
	const Erro_Render = () => {

		if( !Falha.Is || !Processado )
		{
			
			return null;
			
		}
		
		return (
		<Paper elevation={3} className={'p10 mt20'}>
	
			<Typography color="secondary" align="center" variant="body1">
				<b>Falha:</b> {Falha.Msg}
			</Typography>
		
		</Paper>
		);

	};
	
	const Info1_Render = (DadTitulo, DadList) => {

		if( Falha.Is || !Processado )
		{
			
			return null;
			
		}
		
		if( DadList === undefined )
		{
			
			return null;
			
		}
		
		if( Object.keys(DadList).length == 0 )
		{
			
			return null;
			
		}
		
		return (
		<Card className={'p10 mt20'}>
			<CardContent>
					
				<Typography gutterBottom align="center" variant="h5" component="h2">
					{DadTitulo}
				</Typography>
				
				<TableContainer component={Paper} className={'mt20'}>
					<Table>
						<TableBody>
							{Object.keys(DadList).map((ret, idx) => (
								<StyledTableRow key={idx}>
									<StyledTableCell component="th" scope="row">{ret}</StyledTableCell>
									<StyledTableCell>{DadList[ret]}</StyledTableCell>
								</StyledTableRow>
							))}	
						</TableBody>
					</Table>
				</TableContainer>
				
			</CardContent>
		</Card>
		);

	};
	
	const Info2_Render = () => {

		if( Falha.Is || !Processado )
		{
			
			return null;
			
		}
		
		return (
		<Card className={'p10 mt20'}>
			<CardContent>
					
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
            
            <ModTitle title="Gerar Pessoa" />
						
			<div className={'mt20 text-center'}>

				<Divider className={'mb20'} />

				<Button variant="contained" color="primary" onClick={(e) => BtnExecutar()}>Consultar</Button>

			</div>
			
			{Erro_Render()}
			
			{Info1_Render("Pessoa", Resultado.Dados.Pessoa)}
			
			{Info1_Render("Endereco", Resultado.Dados.Endereco)}
			
			{Info1_Render("Veiculo", Resultado.Dados.Veiculo)}
			
			{Info1_Render("CNH", Resultado.Dados.CNH)}
			
			{Info2_Render()}

        </div>
    )

}