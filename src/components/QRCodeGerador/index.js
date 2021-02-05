import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FormControl, FormHelperText, Card, CardContent, Grid, InputLabel, MenuItem, Select, TextField, Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import * as copy from 'copy-to-clipboard';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import ModTitle from '../../auxiliar/ModTitle';
import useModAlert from '../../auxiliar/ModAlert/index'

import * as acoes from './acoes';

export default function QRCodeGerador() {
    
    const { openModAlert } = useModAlert();
    const [ Campos, setCampos ] = React.useState({ Texto: "" });    
    const [ Resultado, setResultado ] = React.useState("");

    const BtnCopiar = () => {

        copy.default(Resultado, { format: 'text/plain' });
        openModAlert(true, "Dados copiados com Sucesso!", "success", 2000);

    };

    const BtnSalvar = () => {

        acoes.Salvar(Resultado);

    };
	
	const BtnExecutar = () => {

        acoes.Executar(Campos.Texto).then(function(RetTexto){
		
			setResultado(RetTexto);
		
		});

    };

    return ( 
        <div>
            
            <ModTitle title="QRCode /Gerador" />
			
			<Divider />

            <form noValidate autoComplete="off" className={'mt20'}>

                <Grid container spacing={1}>
                    <Grid item xs={12}>

                        <TextField
                            label="Texto"
                            multiline
                            rows={8}
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

				{Resultado && (
				<div className={'mt20 text-center'}>

					<Divider className={'mb20'} />

					<Button variant="contained" color="primary" onClick={BtnCopiar} className={'mr10'}>Copiar</Button>
					<Button variant="contained" color="primary" onClick={BtnSalvar}>Salvar</Button>

				</div>
				)}

            </form>

			{Resultado && (
			<Card className={'mt20'}>
			
                <Box display="flex" alignItems="center" justifyContent="center" className={'p20'}>
                    <img src={Resultado} />
                </Box>
				
                <CardContent>
				
                    <TextField
                        label="Imagem Completa"
                        fullWidth
                        value={`<img alt="QR Code" src="${Resultado}"/>`}
                        margin="normal"
                        variant="outlined"
                    />
					
                    <TextField
                        label="Base64"
                        fullWidth
                        value={Resultado}
                        margin="normal"
                        variant="outlined"
                        multiline
                        rows="8"
                    />
					
                </CardContent>
				
            </Card>
            )}
			
        </div>
    )

}