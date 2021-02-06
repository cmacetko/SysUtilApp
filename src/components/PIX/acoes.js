import { Pix } from "faz-um-pix"
import * as funcoes from '../../auxiliar/funcoes'

const QRCfg = {
    errorCorrectionLevel: "H",
    type: "image/png",
    width: 300,
    quality: 0.3,
    margin: 1,
    color: {
        dark: "#000000FF",
        light: "#FFFFFFFF"
    }
};

export async function Executar(Chave, Nome, Cidade, Valor)
{
	
    if( !Chave || !Nome || !Cidade || !Valor )
	{
		
        return "";
		
    }

	try{
	
		var RetValor = await Pix(Chave, Nome, Cidade, Valor, "", true)
	
		return RetValor;
	
	}catch (err){
		
		return "";
		
	}
	
}

export async function Salvar(Texto)
{

	try{
	
		var base64Data 		= Texto;
		base64Data  		=  base64Data.replace(/^data:image\/png;base64,/, "");
		base64Data  		+= base64Data.replace('+', ' ');
		var binaryData 		= new Buffer(base64Data, 'base64').toString('binary');
	
		funcoes.SalvarBinarioParaArquivo(binaryData, "QRCode.png");
	
	}catch (err){
		
		
		
	}
	
}