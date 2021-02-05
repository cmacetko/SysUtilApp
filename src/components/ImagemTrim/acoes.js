import { FileRejection } from 'react-dropzone';
import Jimp from 'jimp/es';
import * as funcoes from '../../auxiliar/funcoes'

export function loadFile(file) 
{
	
    return new Promise((Resolve, Reject) => {
		
		Jimp.read(file.path).then(image => {
		
			image
			.autocrop({ tolerance: 1, cropOnlyFrames: true, cropSymmetric: false, leaveBorder: 0 })
			.getBase64(Jimp.AUTO, (err, src) => {
				
				if(err)
				{

					Reject(`Falha: ${err}`)

				}

				var base = {
					name: file.name,
					size: file.size,
					encoded: src
				};
				
				Resolve(base);
				
			});
				
			
		})
		.catch(err => {
		
			Reject(`Falha: ${err}`	)
		
		});
		
    });
}

export function rejectFiles(FileRejections)
{
	
    return FileRejections.map(Rejection => ({
        name: Rejection.file.name,
        size: Rejection.file.size,
        error: Rejection.errors[0].message
    }));
	
}

export async function Salvar(Texto, Nome)
{

	try{
	
		var base64Data 		= Texto;
		base64Data  		=  base64Data.replace(/^data:image\/png;base64,/, "");
		base64Data  		+= base64Data.replace('+', ' ');
		var binaryData 		= new Buffer(base64Data, 'base64').toString('binary');
	
		funcoes.SalvarBinarioParaArquivo(binaryData, Nome);
	
	}catch (err){
		
		
		
	}
	
}