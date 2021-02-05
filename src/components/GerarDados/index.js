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

export default function GerarDados() {
    
    const { openModAlert } = useModAlert();
	
	const [ Campos, setCampos ] = React.useState({ Tipo: "CPF", Formatar: "S", Quantidade: 1 });
	const [ Resultado, setResultado ] = React.useState({ Dados: [], Json: "" });
	
	const BtnCopiar = () => {

        copy.default(Resultado.Json, { format: 'text/plain' });
        openModAlert(true, "Dados copiados com Sucesso!", "success", 2000);

    };

    const BtnSalvar = () => {

        funcoes.SalvarTextoParaArquivo(Resultado.Json);

    };
	
	const BtnExecutar = () => {
		
		var DadRet		= acoes.Executar(Campos.Tipo, Campos.Formatar, Campos.Quantidade);

        setResultado({ Dados: DadRet, Json: funcoes.ArrayToJson(DadRet) });

    };
	
	const Info1_Render = () => {

		if( Resultado.Dados.length == 0 )
		{
			
			return null;
			
		}
		
		return (
		<Card className={'p10 mt20'}>
			<CardContent>
					
				<Typography gutterBottom align="center" variant="h5" component="h2">
					Registros Gerados
				</Typography>
				
				<TableContainer component={Paper} className={'mt20'}>
					<Table>
						<TableBody>
							{Resultado.Dados.map((ret, idx) => (
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

		if( Resultado.Dados.length == 0 )
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
            
            <ModTitle title="Gerar Dados" />
						
			<Divider />

            <form noValidate autoComplete="off" className={'mt20'}>

                <Grid container spacing={1}>
					<Grid item xs={6}>

                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel>Tipo</InputLabel>
                                <Select
                                label="Tipo"
                                fullWidth={true}
                                value={Campos.Tipo}
                                onChange={(e) => setCampos({ ...Campos, Tipo: e.target.value })}
                                >
                                <MenuItem value={'CPF'}>CPF</MenuItem>
                                <MenuItem value={'CNPJ'}>CNPJ</MenuItem>
                            </Select>
                        </FormControl>

                    </Grid>
					<Grid item xs={6}>

                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel>Formatar</InputLabel>
                                <Select
                                label="Formatar"
                                fullWidth={true}
                                value={Campos.Formatar}
                                onChange={(e) => setCampos({ ...Campos, Formatar: e.target.value })}
                                >
                                <MenuItem value={'S'}>Sim</MenuItem>
                                <MenuItem value={'N'}>Nao</MenuItem>
                            </Select>
                        </FormControl>

                    </Grid>
					<Grid item xs={4}>

                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel>Quantidade</InputLabel>
                                <Select
                                label="Quantidade"
                                fullWidth={true}
                                value={Campos.Quantidade}
                                onChange={(e) => setCampos({ ...Campos, Quantidade: e.target.value })}
                                >
                                <MenuItem value={'1'}>1</MenuItem>
                                <MenuItem value={'10'}>10</MenuItem>
								<MenuItem value={'20'}>20</MenuItem>
								<MenuItem value={'30'}>30</MenuItem>
								<MenuItem value={'40'}>40</MenuItem>
								<MenuItem value={'50'}>50</MenuItem>
                            </Select>
                        </FormControl>

                    </Grid>
                </Grid>
				
				<div className={'mt20 text-center'}>

					<Divider className={'mb20'} />

					<Button variant="contained" color="primary" onClick={(e) => BtnExecutar()}>Gerar</Button>

				</div>

            </form>

			{Info1_Render()}
			
			{Info2_Render()}

        </div>
    )

}