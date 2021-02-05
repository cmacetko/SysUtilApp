import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import * as copy from 'copy-to-clipboard';

import ModTitle from '../../auxiliar/ModTitle';
import useModAlert from '../../auxiliar/ModAlert/index'

import * as acoes from './acoes';
import * as funcoes from '../../auxiliar/funcoes'

export default function GeradorUUID() {
    
    const { openModAlert } = useModAlert();
    const { handleSubmit, errors, control } = useForm();
    const [ Resultado, setResultado ] = React.useState('');

    const BtnCopiar = () => {

        copy.default(Resultado, { format: 'text/plain' });
        openModAlert(true, "Dados copiados com Sucesso!", "success", 2000);

    };

    const BtnSalvar = () => {

        funcoes.SalvarTextoParaArquivo(Resultado);

    };

    const onSubmit = (data) => {

        setResultado(acoes.generate(data.version, data.quantity));

    };

    return ( 
        <div>
            
            <ModTitle title="UUID Generator" />
			
			<Divider />

            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} className={'mt20'}>

                <Grid container spacing={1}>
                    <Grid item xs={6}>

                        <FormControl fullWidth={true}>
                            <InputLabel>Versão</InputLabel>
                            <Controller
                                control={control}
                                name="version"
                                defaultValue="1"
                                as={
                                    <Select labelId="uuidVersionLabel">
                                        <MenuItem value={1}>Timestamp</MenuItem>
                                        <MenuItem value={4}>Random</MenuItem>
                                    </Select>
                                }
                                rules={{
                                    required: true,
                                    valueAsNumber: true,
                                    min: 1,
                                    max: 4,
                                }}
                            />
                        </FormControl>

                    </Grid>
                    <Grid item xs={6}>

                        <FormControl fullWidth={true}>
                            <Controller
                                name="quantity"
                                as={
                                    <TextField label="Quantidade" error={!!errors.quantity} type="number" helperText={errors.quantity ? 'Número entre: [1..9999]' : null} />
                                }
                                control={control}
                                defaultValue="10"
                                rules={{
                                    required: true,
                                    valueAsNumber: true,
                                    min: 1,
                                    max: 9999,
                                }}
                            />
                        </FormControl>

                    </Grid>
                </Grid>
			
				<div className={'mt20 text-center'}>

					<Button variant="contained" color="primary" type="submit">Gerar</Button>

				</div>

				{Resultado && (
				<div className={'mt20 text-center'}>

					<Divider className={'mb20'} />

					<Button variant="contained" color="primary" onClick={BtnCopiar} className={'mr10'}>Copiar</Button>
					<Button variant="contained" color="primary" onClick={BtnSalvar}>Salvar</Button>

				</div>
				)}
			

            </form>

            {Resultado && (
            <Paper elevation={3} className={'p20 mt20'}>
                <pre>{Resultado}</pre>
            </Paper>
            )}

        </div>
    )

}