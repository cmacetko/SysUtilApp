var faker = require('faker-br');

export function Executar(Tipo, Formatar, Quantidade)
{
	
	faker.setLocale("pt_BR");
	
	var RetFinal = [];
	
	switch(Tipo)
	{
		
		case "CPF":
		
			if( Formatar == "S" )
			{
				
				for( var i=1; i<=Quantidade; i++ )
				{
					
					RetFinal.push(faker.br.cpf({ format: true }));
					
				}
				
			}else{
				
				for( var i=1; i<=Quantidade; i++ )
				{
					
					RetFinal.push(faker.br.cpf());
					
				}
				
			}
		
		break;
		
		case "CNPJ":
		
			if( Formatar == "S" )
			{
				
				for( var i=1; i<=Quantidade; i++ )
				{
					
					RetFinal.push(faker.br.cnpj({ format: true }));
					
				}
				
			}else{
				
				for( var i=1; i<=Quantidade; i++ )
				{
					
					RetFinal.push(faker.br.cnpj());
					
				}
				
			}
		
		break;
		
		case "CEP":
		
			for( var i=1; i<=Quantidade; i++ )
			{
				
				RetFinal.push(faker.address.zipCodeValidByState());
				
			}
		
		break;
		
		case "LatLog":
					
			for( var i=1; i<=Quantidade; i++ )
			{
				
				RetFinal.push(faker.address.latitude() + ", " + faker.address.longitude());
				
			}
		
		break;
		
		case "ProdutoDepartamento":
					
			for( var i=1; i<=Quantidade; i++ )
			{
				
				RetFinal.push(faker.commerce.department());
				
			}
		
		break;
		
		case "ProdutoNome":
					
			for( var i=1; i<=Quantidade; i++ )
			{
				
				RetFinal.push(faker.commerce.productName());
				
			}
		
		break;
		
		case "EmpresaNome":
					
			for( var i=1; i<=Quantidade; i++ )
			{
				
				RetFinal.push(faker.company.catchPhrase());
				
			}
		
		break;
		
		case "EnderecoBitcoin":
					
			for( var i=1; i<=Quantidade; i++ )
			{
				
				RetFinal.push(faker.finance.bitcoinAddress());
				
			}
		
		break;
		
		case "EnderecoEthereum":
					
			for( var i=1; i<=Quantidade; i++ )
			{
				
				RetFinal.push(faker.finance.ethereumAddress());
				
			}
		
		break;
		
		case "Email":
					
			for( var i=1; i<=Quantidade; i++ )
			{
				
				RetFinal.push(faker.internet.email());
				
			}
		
		break;
		
		case "Usuario":
					
			for( var i=1; i<=Quantidade; i++ )
			{
				
				RetFinal.push(faker.internet.userName());
				
			}
		
		break;
		
		case "Url":
					
			for( var i=1; i<=Quantidade; i++ )
			{
				
				RetFinal.push(faker.internet.url());
				
			}
		
		break;
		
		case "Dominio":
					
			for( var i=1; i<=Quantidade; i++ )
			{
				
				RetFinal.push(faker.internet.domainName());
				
			}
		
		break;
		
		case "IP":
					
			for( var i=1; i<=Quantidade; i++ )
			{
				
				RetFinal.push(faker.internet.ip());
				
			}
		
		break;
		
		case "IPV6":
					
			for( var i=1; i<=Quantidade; i++ )
			{
				
				RetFinal.push(faker.internet.ipv6());
				
			}
		
		break;
		
		case "UserAgent":
					
			for( var i=1; i<=Quantidade; i++ )
			{
				
				RetFinal.push(faker.internet.userAgent());
				
			}
		
		break;
		
		case "CorHexa":
					
			for( var i=1; i<=Quantidade; i++ )
			{
				
				RetFinal.push(faker.internet.color());
				
			}
		
		break;
		
		case "MACAdreess":
					
			for( var i=1; i<=Quantidade; i++ )
			{
				
				RetFinal.push(faker.internet.mac());
				
			}
		
		break;
		
		case "Senha":
					
			for( var i=1; i<=Quantidade; i++ )
			{
				
				RetFinal.push(faker.internet.password());
				
			}
		
		break;
		
		case "Nome":
					
			for( var i=1; i<=Quantidade; i++ )
			{
				
				RetFinal.push(faker.name.findName());
				
			}
		
		break;
		
		case "Ocupacao":
					
			for( var i=1; i<=Quantidade; i++ )
			{
				
				RetFinal.push(faker.name.jobArea());
				
			}
		
		break;
		
		case "Telefone":
					
			for( var i=1; i<=Quantidade; i++ )
			{
				
				RetFinal.push(faker.phone.phoneNumberFormat());
				
			}
		
		break;
		
		case "NumeroInteiro":
					
			for( var i=1; i<=Quantidade; i++ )
			{
				
				RetFinal.push(faker.random.number());
				
			}
		
		break;
		
		case "NumeroFlutuante":
					
			for( var i=1; i<=Quantidade; i++ )
			{
				
				RetFinal.push(faker.random.float());
				
			}
		
		break;
		
		case "UUID":
					
			for( var i=1; i<=Quantidade; i++ )
			{
				
				RetFinal.push(faker.random.uuid());
				
			}
		
		break;
		
		case "ArquivoNome":
					
			for( var i=1; i<=Quantidade; i++ )
			{
				
				RetFinal.push(faker.random.fileName());
				
			}
		
		break;
		
		case "MimeType":
					
			for( var i=1; i<=Quantidade; i++ )
			{
				
				RetFinal.push(faker.system.mimeType());
				
			}
		
		break;
		
		case "FileType":
					
			for( var i=1; i<=Quantidade; i++ )
			{
				
				RetFinal.push(faker.system.fileType());
				
			}
		
		break;
		
		case "Diretorio":
					
			for( var i=1; i<=Quantidade; i++ )
			{
				
				RetFinal.push(faker.system.directoryPath());
				
			}
		
		break;
		
	}
	
	return RetFinal;
	
}