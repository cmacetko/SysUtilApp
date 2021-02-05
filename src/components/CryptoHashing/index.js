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

export default function CryptoHashing() {
    
    const { openModAlert } = useModAlert();
    const [ Campos, setCampos ] = React.useState({ Tipo: "MD5", Texto: "" });
    const [ Resultado, setResultado ] = React.useState('');

	React.useEffect(() => {
		
		setResultado(acoes.Executar(Campos.Tipo, Campos.Texto));
	
	}, [Campos]);
	
    const BtnCopiar = () => {

        copy.default(Resultado, { format: 'text/plain' });
        openModAlert(true, "Dados copiados com Sucesso!", "success", 2000);

    };

    const BtnSalvar = () => {

        funcoes.SalvarTextoParaArquivo(Resultado);

    };

    return ( 
        <div>
            
            <ModTitle title="Crypto / Hashing" />
			
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
                                <MenuItem value={'MD5'}>MD5</MenuItem>
                                <MenuItem value={'SHA1'}>SHA1</MenuItem>
                                <MenuItem value={'SHA256'}>SHA256</MenuItem>
                                <MenuItem value={'SHA224'}>SHA224</MenuItem>
                                <MenuItem value={'SHA384'}>SHA384</MenuItem>
                                <MenuItem value={'SHA512'}>SHA512</MenuItem>
                                <MenuItem value={'SHA3'}>SHA3</MenuItem>
                                <MenuItem value={'RIPEMD160'}>RIPEMD160</MenuItem>
                            </Select>
                        </FormControl>

                    </Grid>
                    <Grid item xs={12}>

                        <TextField
                            label="Texto"
                            multiline
                            rows={4}
                            variant="outlined"
                            fullWidth={true}
                            value={Campos.Texto}
                            onChange={(e) => setCampos({ ...Campos, Texto: e.target.value })}
                        />

                    </Grid>
                </Grid>

				{Resultado && (
				<div className={'mt20 text-center'}>

					<Divider className={'mb20'} />

					<Button variant="contained" color="primary" onClick={BtnCopiar} className={'mr10'}>Copiar</Button>
					<Button variant="contained" color="primary" onClick={BtnSalvar}>Salvar</Button>

				</div>
				)}

            </form>

            {Resultado && (
            <Paper elevation={3} className={'formatted p20 mt20'}>
                {Resultado}
            </Paper>
            )}

        </div>
    )

}