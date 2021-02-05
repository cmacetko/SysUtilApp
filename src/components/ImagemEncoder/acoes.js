import { FileRejection } from 'react-dropzone';

var path = require('path');

export function loadFile(file) 
{
	
    return new Promise((Resolve, Reject) => {
		
        var Reader = new FileReader();
		var Extencao = path.extname(file.name);
		var IsImg = ( Extencao == ".jpg" || Extencao == ".jpeg" || Extencao == ".gif" || Extencao == ".png" ) ? true : false;
		
        var base = {
            name: file.name,
            size: file.size,
			ext: Extencao,
			img: IsImg
        };

        Reader.addEventListener('abort', e => Reject(`File upload aborted:${e}`));
        Reader.addEventListener('error', e => Reject(`File upload error: ${e}`));
        Reader.addEventListener('load', () => Resolve({
            ...base,
            encoded: Reader.result
        }), false);

        Reader.readAsDataURL(file);
		
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