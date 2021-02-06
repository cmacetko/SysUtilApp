import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FormControl, FormHelperText, Card, CardContent, Grid, InputLabel, MenuItem, Select, TextField, Box, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

import ModTitle from '../../auxiliar/ModTitle';
import useModAlert from '../../auxiliar/ModAlert/index'

import * as acoes from './acoes';
import * as funcoes from '../../auxiliar/funcoes'

export default function ValidarDados() {
    
    const { openModAlert } = useModAlert();
	
	const [ Campos, setCampos ] = React.useState({ Tipo: "CPF", Informacao: "" });
	const [ Resultado, setResultado ] = React.useState(false);
	const [ Processado, setProcessado ] = React.useState(false);
	
	const BtnExecutar = () => {
		
		if( Campos.Informacao == "" ){
			
			openModAlert(true, "Preencha a Informacao a ser Validada!", "error", 2000);
			
		}else{

			setProcessado(true);
			setResultado(acoes.Executar(Campos.Tipo, Campos.Informacao));
		
		}

    };
	
    return ( 
        <div>
            
            <ModTitle title="Validar Dados" />
						
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
							<TextField
								label="Informacao"
								multiline
								variant="outlined"
								fullWidth={true}
								value={Campos.Informacao}
								onChange={(e) => setCampos({ ...Campos, Informacao: funcoes.URLToHost(e.target.value) })}
							/>
                        </FormControl>

                    </Grid>
                </Grid>
				
				<div className={'mt20 text-center'}>

					<Divider className={'mb20'} />

					<Button variant="contained" color="primary" onClick={(e) => BtnExecutar()}>Validar</Button>

				</div>
				
				{Processado && (
				<Card className={'p10 mt20'}>
					<CardContent className={'p0'}>
						
						<Typography gutterBottom color={Resultado ? 'primary' : 'error'} align="center" variant="h5" component="h2">
							{Resultado ? 'Valido' : 'Invalido'}
						</Typography>
					
					</CardContent>
				</Card>
				)}

            </form>

			

        </div>
    )

}