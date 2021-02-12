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

export default function ValidarBoleto() {
    
	const classes = useStyles();
	
    const { openModAlert } = useModAlert();
	
	const [ Campos, setCampos ] = React.useState({ Tipo: "LINHA_DIGITAVEL", Texto: "" });
	const [ Falha, setFalha ] = React.useState({ Is: false, Msg: "" });
	const [ Resultado, setResultado ] = React.useState({ Dados: [], Json: "" });
	
	const BtnCopiar = () => {

        copy.default(Resultado.Json, { format: 'text/plain' });
        openModAlert(true, "Dados copiados com Sucesso!", "success", 2000);

    };

    const BtnSalvar = () => {

        funcoes.SalvarTextoParaArquivo(Resultado.Json);

    };
	
	const BtnExecutar = () => {
		
		if( Campos.Texto == "" ){
			
			openModAlert(true, "Preencha a Informacao a ser Validada!", "error", 2000);
			
		}else{
			
			var DadRet		= acoes.Executar(Campos.Tipo, Campos.Texto);

			if( DadRet.sucesso == true )
			{
				
				setResultado({ Dados: DadRet, Json: funcoes.ArrayToJson(DadRet) });
				setFalha({ Is: false, Msg: "" });
			
			}else{
				
				setFalha({ Is: true, Msg: DadRet.mensagem });
				
			}
		
		}

    };
	
	const Erro_Render = () => {

		if( !Falha.Is )
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
	
	const Info1_Render = () => {

		if( Falha.Is )
		{
			
			return null;
			
		}
		
		if( Resultado.Dados === undefined )
		{
			
			return null;
			
		}
		
		if( Object.keys(Resultado.Dados).length == 0 )
		{
			
			return null;
			
		}
		
		return (
		<Card className={'p10 mt20'}>
			<CardContent>
					
				<TableContainer component={Paper} className={'mt20'}>
					<Table>
						<TableBody>
							{Object.keys(Resultado.Dados).map((ret, idx) => (
								<StyledTableRow key={idx}>
									<StyledTableCell component="th" scope="row">{ret}</StyledTableCell>
									<StyledTableCell>{Resultado.Dados[ret]}</StyledTableCell>
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

		if( Falha.Is )
		{
			
			return null;
			
		}
		
		if( Resultado.Dados === undefined )
		{
			
			return null;
			
		}
		
		if( Object.keys(Resultado.Dados).length == 0 )
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
            
            <ModTitle title="Validar Boleto" />
						
			<Divider />

            <form noValidate autoComplete="off" className={'mt20'}>

                <Grid container spacing={1}>
					<Grid item xs={12}>

                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel>Tipo</InputLabel>
                                <Select
                                label="Tipo"
                                fullWidth={true}
                                value={Campos.Tipo}
                                onChange={(e) => setCampos({ ...Campos, Tipo: e.target.value })}
                                >
                                <MenuItem value={'LINHA_DIGITAVEL'}>Linha Digitavel</MenuItem>
                                <MenuItem value={'CODIGO_DE_BARRAS'}>Codigo de Barras</MenuItem>
                            </Select>
                        </FormControl>

                    </Grid>
                    <Grid item xs={12}>

                        <TextField
                            label="Informacao do Boleto"
                            multiline
                            rows={4}
                            variant="outlined"
                            fullWidth={true}
                            value={Campos.Texto}
                            onChange={(e) => setCampos({ ...Campos, Texto: e.target.value })}
                        />

                    </Grid>
                </Grid>
				
				<div className={'mt20 text-center'}>

					<Divider className={'mb20'} />

					<Button variant="contained" color="primary" onClick={(e) => BtnExecutar()}>Gerar</Button>

				</div>

            </form>
			
			{Erro_Render()}

			{Info1_Render()}
			
			{Info2_Render()}

        </div>
    )

}