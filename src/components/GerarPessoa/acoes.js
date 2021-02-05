var Leite = require('leite');

export async function Executar()
{

	return new Promise((Resolve, Reject) => {
		
		try {

			var leite = new Leite()
			console.log(leite.pessoa.nome());
			
			var RetFinal = {
                            "Pessoa": {
								"Nome": leite.pessoa.nome(),
								"CPF": leite.pessoa.cpf({ formatado: true }),
								"RG": leite.pessoa.rg(),
								"CNPJ": leite.empresa.cnpj({ formatado: false }),
								"Email": leite.pessoa.email(),
								"Usuario": leite.pessoa.usuario(),
								"Idade": leite.pessoa.idade(),
								"DataNascimento": leite.pessoa.nascimento({ formato: 'DD/MM/YYYY' }),
								"Sexo": leite.pessoa.sexo()
							},
                            "Endereco": {
                                "CEP": leite.localizacao.cep(),
                                "Estado": leite.localizacao.estado(),
                                "Cidade": leite.localizacao.cidade(),
                                "Bairro": leite.localizacao.bairro(),
                                "Logradouro": leite.localizacao.logradouro(),
                                "Complemento": leite.localizacao.complemento()
                            },
                            "Veiculo": {
                                "Tipo": leite.veiculo.tipo(),
                                "Marca": leite.veiculo.marca(),
                                "Modelo": leite.veiculo.modelo(),
                                "Especie": leite.veiculo.especie(),
                                "Categoria": leite.veiculo.categoria(),
                                "Placa": leite.veiculo.placa(),
                                "Combustivel": leite.veiculo.combustivel(),
                                "Carroceria": leite.veiculo.carroceria(),
                                "Restricao": leite.veiculo.restricao()
                            },
                            "CNH": {
                                "Numero": leite.cnh.numero(),
                                "Categoria": leite.cnh.categoria(),
                                "NumeroRegistro": leite.cnh.registro(),
                                "NumerSeguranca": leite.cnh.seguranca(),
                            }
                            };
						
			Resolve(RetFinal);

		} catch (ex) {
			
			Reject(ex.message);
		
		}
		
	});
	
}