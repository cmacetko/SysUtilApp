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

export default function CryptoCiphers() {
    
    const { openModAlert } = useModAlert();
	const [ Acao, setAcao ] = React.useState("");
	const [ Campos, setCampos ] = React.useState({ Tipo: "AES", Modo: "CBC", Esquema: "Pkcs7", Chave: "", Texto: "" });
    const [ Resultado, setResultado ] = React.useState('');

	React.useEffect(() => {
		
		setResultado(acoes.Executar(Acao, Campos.Tipo, Campos.Modo, Campos.Esquema, Campos.Texto, Campos.Chave));
	
	}, [Acao]);
	
    const BtnCopiar = () => {

        copy.default(Resultado, { format: 'text/plain' });
        openModAlert(true, "Dados copiados com Sucesso!", "success", 2000);

    };

    const BtnSalvar = () => {

        funcoes.SalvarTextoParaArquivo(Resultado);

    };
	
	const BtnExecutar = (Valor) => {

        setAcao(Valor);

    };

    return ( 
        <div>
            
            <ModTitle title="Crypto / Ciphers" />
			
			<Divider />

            <form noValidate autoComplete="off" className={'mt20'}>

                <Grid container spacing={1}>
					 <Grid item xs={4}>

                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel>Tipo</InputLabel>
							<Select
                                label="Tipo"
                                fullWidth={true}
                                value={Campos.Tipo}
                                onChange={(e) => setCampos({ ...Campos, Tipo: e.target.value })}
                                >
                                <MenuItem value={'AES'}>AES</MenuItem>
                                <MenuItem value={'DES'}>DES</MenuItem>
                                <MenuItem value={'TripleDES'}>TripleDES</MenuItem>
                                <MenuItem value={'Rabbit'}>Rabbit</MenuItem>
                                <MenuItem value={'RC4'}>RC4</MenuItem>
                                <MenuItem value={'RC4Drop'}>RC4Drop</MenuItem>
                            </Select>
                        </FormControl>

                    </Grid>
					<Grid item xs={4}>

                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel>Modo</InputLabel>
							<Select
                                label="Modo"
                                fullWidth={true}
                                value={Campos.Modo}
                                onChange={(e) => setCampos({ ...Campos, Modo: e.target.value })}
                                >
                                <MenuItem value={'CBC'}>CBC</MenuItem>
                                <MenuItem value={'CFB'}>CFB</MenuItem>
								<MenuItem value={'CTR'}>CTR</MenuItem>
								<MenuItem value={'OFB'}>OFB</MenuItem>
								<MenuItem value={'ECB'}>ECB</MenuItem>
                            </Select>
                        </FormControl>

                    </Grid>
					<Grid item xs={4}>

                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel>Esquema</InputLabel>
							<Select
                                label="Esquema"
                                fullWidth={true}
                                value={Campos.Esquema}
                                onChange={(e) => setCampos({ ...Campos, Esquema: e.target.value })}
                                >
                                <MenuItem value={'Pkcs7'}>Pkcs7</MenuItem>
								<MenuItem value={'Iso97971'}>Iso97971</MenuItem>
								<MenuItem value={'AnsiX923'}>AnsiX923</MenuItem>
								<MenuItem value={'Iso10126'}>Iso10126</MenuItem>
								<MenuItem value={'ZeroPadding'}>ZeroPadding</MenuItem>
								<MenuItem value={'NoPadding'}>NoPadding</MenuItem>
                            </Select>
                        </FormControl>

                    </Grid>
                    <Grid item xs={12}>

                        <TextField
                            label="Chave"
                            variant="outlined"
                            fullWidth={true}
                            value={Campos.Chave}
                            onChange={(e) => setCampos({ ...Campos, Chave: e.target.value })}
                        />

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
				
				<div className={'mt20 text-center'}>

					<Divider className={'mb20'} />

					<Button variant="contained" color="primary" onClick={(e) => BtnExecutar("C")} className={'mr10'}>Encriptar</Button>
					<Button variant="contained" color="primary" onClick={(e) => BtnExecutar("D")}>Decriptar</Button>

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
            <Paper elevation={3} className={'formatted p20 mt20'}>
                {Resultado}
            </Paper>
            )}

        </div>
    )

}