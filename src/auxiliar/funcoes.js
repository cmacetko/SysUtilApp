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

export function ObjectComplexToObjectSimple(Obj) 
{
	
    try{
		
		var NDados = {};
		
        Object.keys(Obj).map((ret, idx) => {
			
			if( Array.isArray(Obj[ret]) ){
				
				try{
					
					var NTmp1 = [];

					Obj[ret].map((ret2, idx2) => {
						
						var NTmp2 = [];
						
						Object.keys(ret2).map((ret3, idx3) => {
						
							NTmp2.push(ret3 + ": " + ret2[ret3]);
							
						});
						
						NTmp1.push(NTmp2.join(" | "));
						
					});		
					
					NDados[ret] = NTmp1.join("\n");
					
				}catch (e){
					
				}
				
			}else if( typeof(Obj[ret]) == "object" ){
				
				try{
					
					var NTmp1 = [];

					Object.keys(Obj[ret]).map((ret2, idx2) => {
						
						NTmp1.push(ret2 + ": " + Obj[ret][ret2]);
						
					});		
					
					NDados[ret] = NTmp1.join("\n");
				
				}catch (e){
					
				}
				
			}else{
				
				NDados[ret] = Obj[ret];
				
			}
			
		});
		
		return NDados;
		
    }catch (e){
		
        return {};
		
    }
	
}