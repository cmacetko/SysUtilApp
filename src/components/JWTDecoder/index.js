import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import * as copy from 'copy-to-clipboard';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import ModTitle from '../../auxiliar/ModTitle';
import useModAlert from '../../auxiliar/ModAlert/index'

import * as acoes from './acoes';
import * as funcoes from '../../auxiliar/funcoes'

export default function JWTDecoder() {
    
    const { openModAlert } = useModAlert();
    const [ Campos, setCampos ] = React.useState({ Texto: "" });    
    const [ Resultado, setResultado ] = React.useState({ Header: "", Transformed: "" });

	React.useEffect(() => {

		setResultado({ Header: acoes.Executar(Campos.Texto, true), Transformed: acoes.Executar(Campos.Texto, false) })
	
	}, [Campos]);

    const BtnCopiar = () => {

        copy.default(Resultado.Transformed, { format: 'text/plain' });
        openModAlert(true, "Dados copiados com Sucesso!", "success", 2000);

    };

    const BtnSalvar = () => {

        funcoes.SalvarTextoParaArquivo(Resultado.Transformed);

    };

    return ( 
        <div>
            
            <ModTitle title="JWT Decoder" />
			
			<Divider />

            <form noValidate autoComplete="off" className={'mt20'}>

                <Grid container spacing={1}>
                    <Grid item xs={12}>

                        <TextField
                            label="JWT"
							placeholder="Cole o Token JWT aqui"
                            multiline
                            rows={8}
                            variant="outlined"
                            fullWidth={true}
                            value={Campos.Texto}
                            onChange={(e) => setCampos({ ...Campos, Texto: e.target.value })}
                        />

                    </Grid>
                </Grid>

				{Resultado.Header && (
				<div className={'mt20 text-center'}>

					<Divider className={'mb20'} />

					<Button variant="contained" color="primary" onClick={BtnCopiar} className={'mr10'}>Copiar</Button>
					<Button variant="contained" color="primary" onClick={BtnSalvar}>Salvar</Button>

				</div>
				)}

            </form>

			{Resultado.Header && (
			<SyntaxHighlighter language="json" style={docco} showLineNumbers={true} wrapLines={true} wrapLongLines={true} className={'formatted2 p20 mt20'}>
                {Resultado.Header}
            </SyntaxHighlighter>
            )}
			
			{Resultado.Transformed && (
			<SyntaxHighlighter language="json" style={docco} showLineNumbers={true} wrapLines={true} wrapLongLines={true} className={'formatted2 p20 mt20'}>
                {Resultado.Transformed}
            </SyntaxHighlighter>
            )}

        </div>
    )

}