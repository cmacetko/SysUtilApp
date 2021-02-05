import React, {useCallback} from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDropzone, FileRejection } from 'react-dropzone';
import { FormControl, FormHelperText, Card, CardContent, Grid, InputLabel, MenuItem, Select, TextField, Box, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { useGlobalSpinnerUpdate } from '../../auxiliar/Spinner/GlobalSpinnerProvider';
import * as copy from 'copy-to-clipboard';

import ModTitle from '../../auxiliar/ModTitle';
import useModAlert from '../../auxiliar/ModAlert/index'

import * as acoes from './acoes';
import * as funcoes from '../../auxiliar/funcoes'

export default function ImagemEncoder() {
    
    const { openModAlert } = useModAlert();
	const [ encodedFiles, setEncodedFiles ] = React.useState([]);
	const [ errors, setErrors ] = React.useState([]);
	const { setGlobalSpinnerState } = useGlobalSpinnerUpdate();
 
	const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
		
		setErrors(acoes.rejectFiles(rejectedFiles));
		setEncodedFiles([]);
		
		acceptedFiles.forEach((file) => {
			
            acoes.loadFile(file)
			.then(encFile => {
				
				setEncodedFiles(list => [...list, encFile])
			
			})
			.catch(error => {
				
				setErrors(list => [...list, {
				name: file.name,
				size: file.size,
				error
				}])
			
			});
				
        });
		
    }, []);
	
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
		accept: ['image/jpeg', 'image/png', 'image/gif', 'image/*'],
        maxSize: 1000000,
        multiple: true,
        onDrop
    });
	
	const filesSelected = acceptedFiles.length && acceptedFiles.length > 0;
	const processing = acceptedFiles.length !== encodedFiles.length;

    const BtnCopiar = (idx) => {

		var ObjImage = encodedFiles[idx];
		
        copy.default(ObjImage.encoded, { format: 'text/plain' });
		
    };

    const BtnSalvar = (idx) => {

		var ObjImage = encodedFiles[idx];
		
        funcoes.SalvarTextoParaArquivo(ObjImage.encoded);

    };
	
	React.useEffect(() => {
		
        if( filesSelected ) 
		{
			
            setGlobalSpinnerState({ open: processing });
			
        }
		
    }, [filesSelected, processing, setGlobalSpinnerState]);
	
	const loading_render = () => {

		if( !processing )
		{
			
			return null;
			
		}
		
		return (
		<Paper elevation={3} className={'p10 mt20'}>
		
			<Typography color="primary" align="center" variant="body1">
				Carregando <b>{acceptedFiles.length - encodedFiles.length}</b> arquivos
			</Typography>
			
		</Paper>
		);

	};
	
	const errors_render = () => {

		if( errors.length == 0 )
		{
			
			return null;
			
		}
		
		return (
		<Paper elevation={3} className={'p10 mt20'}>
		
			{errors.map((err, idx) => (
			<div key={idx}>
			
				<Typography color="secondary" align="center" variant="body1">
					<b>{err.name}</b> ({err.size} bytes): {err.error}
				</Typography>
				
			</div>
			))}		
		
		</Paper>
		);

	};
	
	const encodedFiles_render = () => {

		if( encodedFiles.length == 0 )
		{
			
			return null;
			
		}
		
		return (
		<div>
		
			{encodedFiles.map((file, idx) => (
			<div key={idx} className={'mt20'}>
			
				<Card className={'p20'}>
				
					{file.img && (
					<div className={'imageResizer'}>
						<img src={file.encoded} alt={file.name} className={'image'} />
					</div>
					)}
					
					<CardContent>
					
						<Typography gutterBottom align="center" variant="h5" component="h2">
							<b>{file.name}</b> ({file.size} bytes)
						</Typography>
						
						<TextField
							label="Imagem Completa"
							fullWidth
							value={`<img src="${file.encoded}"/>`}
							margin="normal"
							variant="outlined"
						/>
						
						<TextField
							label="Base64"
							fullWidth
							value={file.encoded}
							margin="normal"
							variant="outlined"
							multiline
							rows="8"
						/>
						
					</CardContent>
					
					<div className={'mt20 text-center'}>

						<Divider className={'mb20'} />
						
						<Button variant="contained" color="primary" onClick={() => BtnCopiar(idx)} className={'mr10'}>Copiar</Button>
						<Button variant="contained" color="primary" onClick={() => BtnSalvar(idx)}>Salvar</Button>

					</div>
					
				</Card>
				
			</div>
			))}		
		
		</div>
		);

	};
	
    return ( 
        <div>
            
            <ModTitle title="Imagem Encoder" />
			
			<Divider />

			<div {...getRootProps()} className={'mt20 dropzone'}>
				<input {...getInputProps()} />
				<p className={'m0'}>Jogue o arquivo aqui, ou clique para selecionar</p>
			</div>
			
			{loading_render()}
			
			{errors_render()}
			
			{encodedFiles_render()}
			
        </div>
    )

}