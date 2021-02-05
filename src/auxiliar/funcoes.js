export function SalvarTextoParaArquivo(Texto, ArqNome = "Dados.txt") 
{

    const ipc = window.require("electron").ipcRenderer;
    ipc.send('SalvarTextoParaArquivo', Texto, ArqNome);
    
}

export function SalvarBinarioParaArquivo(Texto, ArqNome = "Dados.png") 
{

    const ipc = window.require("electron").ipcRenderer;
    ipc.send('SalvarBinarioParaArquivo', Texto, ArqNome);
    
}

export function ExibirNotificacao(Texto, Titulo = "", Icone = "") 
{

    const ipc = window.require("electron").ipcRenderer;
    ipc.send('ExibirNotificacao', Texto, Titulo, Icone);
    
}

export function URLToHost(Texto) 
{
	
    try{
		
		var CtrlUrl = new URL(Texto);
		var CtrlHost = CtrlUrl.host;
		
		return CtrlHost;
		
    }catch (e){
		
        return Texto;
		
    }
	
}

export function ArrayToJson(Obj) 
{
	
    try{
		
        return JSON.stringify(Obj, null, 4);
		
    }catch (e){
		
        return e.toString();
		
    }
	
}