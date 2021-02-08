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

export default function Tracert() {
    
	const classes = useStyles();
	
    const { openModAlert } = useModAlert();
	
	const [ Campos, setCampos ] = React.useState({ Texto: "" });
	const [ Processado, setProcessado ] = React.useState(false);
	const [ Falha, setFalha ] = React.useState({ Is: false, Msg: "" });
	const [ Resultado, setResultado ] = React.useState([]);
	const [ Resultado2, setResultado2 ] = React.useState([]);
	const [ Json, setJson ] = React.useState("");
	
	const { setGlobalSpinnerState } = useGlobalSpinnerUpdate();
		
	React.useEffect(() => {
		
		setJson(funcoes.ArrayToJson(Resultado2));
		
	}, [Resultado2]);
	
	const BtnCopiar = () => {

        copy.default(Json, { format: 'text/plain' });
        openModAlert(true, "Dados copiados com Sucesso!", "success", 2000);

    };

    const BtnSalvar = () => {

        funcoes.SalvarTextoParaArquivo(Json);

    };
	
	const BtnExecutar = () => {

		if( Campos.Texto == "" ){
			
			openModAlert(true, "Preencha o IP!", "error", 2000);
			
		}else{
			
			acoes.Executar(Campos.Texto, setProcessado, setFalha, Resultado, setResultado, setResultado2);

		}
		
    };
	
	const Erro_Render = () => {

		if( !Falha.Is || Falha.Msg == "" )
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
	
	const Processando_Render = () => {

		if( !Processado )
		{
			
			return null;
			
		}
		
		return (
		<Paper elevation={3} className={'p10 mt20'}>
	
			<Typography align="center" variant="body1">
				<b>Processando...</b>
			</Typography>
		
		</Paper>
		);

	};
	
	const Sucesso_Render = () => {

		if( Resultado.length == 0 )
		{
			
			return null;
			
		}
		
		return (
		<Card className={'p10 mt20'}>
			<CardContent>
					
				<Typography gutterBottom align="center" variant="h5" component="h2">
					{Resultado.Texto}
				</Typography>
				
				<TableContainer component={Paper} className={'mt20'}>
					<Table>
						<TableHead className={classes.tableHeader}>
							<TableRow>
								<StyledTableCell>#</StyledTableCell>
								<StyledTableCell>IP</StyledTableCell>							
								<StyledTableCell>Tempo</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{Resultado.map((ret, idx) => (
								<StyledTableRow key={idx}>
									<StyledTableCell>{ret.hop}</StyledTableCell>
									<StyledTableCell>{ret.ip}</StyledTableCell>							
									<StyledTableCell>{ret.rtt1}</StyledTableCell>
								</StyledTableRow>
							))}	
						</TableBody>
					</Table>
				</TableContainer>
				
				<Divider />
				
				<SyntaxHighlighter language="json" style={docco} showLineNumbers={true} wrapLines={true} wrapLongLines={true} className={'formatted2 p20'}>
					{Json}
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
            
            <ModTitle title="Tracert" />
			
			<Divider />

            <form noValidate autoComplete="off" className={'mt20'}>

                <Grid container spacing={1}>
					<Grid item xs={12}>

                        <TextField
                            label="Dominio"
                            multiline
                            variant="outlined"
                            fullWidth={true}
                            value={Campos.Texto}
                            onChange={(e) => setCampos({ ...Campos, Texto: e.target.value })}
                        />

                    </Grid>
                </Grid>

            </form>
			
			{!Processado && (
			<div className={'mt20 text-center'}>

				<Divider className={'mb20'} />

				<Button variant="contained" color="primary" onClick={(e) => BtnExecutar()}>Consultar</Button>

			</div>
			)}
			
			{Processando_Render()}
			
			{Erro_Render()}
			
			{Sucesso_Render()}

        </div>
    )

}