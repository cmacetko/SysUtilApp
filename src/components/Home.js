import React from 'react';
import { NavLink } from 'react-router-dom'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default class Home extends React.Component{

    render(){
        
        return ( 
            <div>
			
				<Paper className="m0 mb10 p10">

					<Typography variant="subtitle1">
						Selecione a <b>Ferramentas</b> desejada
					</Typography>

				</Paper >
				
				<Paper className="m0 p10">
				
					<List>
						<NavLink to="/GeradorUUID" exact={true} className={'link'}>
						<ListItem button>
							<ListItemIcon>
								<NavigateNextIcon />
							</ListItemIcon>
							<ListItemText primary={"Gerador de UUID"} />
						</ListItem>
						</NavLink>
						<NavLink to="/CryptoHashing" exact={true} className={'link'}>
						<ListItem button>
							<ListItemIcon>
								<NavigateNextIcon />
							</ListItemIcon>
							<ListItemText primary={"Crypto / Hashing"} />
						</ListItem>
						</NavLink>
						<NavLink to="/CryptoHMAC" exact={true} className={'link'}>
						<ListItem button>
							<ListItemIcon>
								<NavigateNextIcon />
							</ListItemIcon>
							<ListItemText primary={"Crypto / HMAC"} />
						</ListItem>
						</NavLink>
						<NavLink to="/CryptoCiphers" exact={true} className={'link'}>
						<ListItem button>
							<ListItemIcon>
								<NavigateNextIcon />
							</ListItemIcon>
							<ListItemText primary={"Crypto / Ciphers"} />
						</ListItem>
						</NavLink>
						<NavLink to="/FormatarJSON" exact={true} className={'link'}>
						<ListItem button>
							<ListItemIcon>
								<NavigateNextIcon />
							</ListItemIcon>
							<ListItemText primary={"Formatar JSON"} />
						</ListItem>
						</NavLink>
						<NavLink to="/EncodeDecode" exact={true} className={'link'}>
						<ListItem button>
							<ListItemIcon>
								<NavigateNextIcon />
							</ListItemIcon>
							<ListItemText primary={"Encode / Decode"} />
						</ListItem>
						</NavLink>
						<NavLink to="/URLParser" exact={true} className={'link'}>
						<ListItem button>
							<ListItemIcon>
								<NavigateNextIcon />
							</ListItemIcon>
							<ListItemText primary={"URL Parser"} />
						</ListItem>
						</NavLink>
						<NavLink to="/JWTDecoder" exact={true} className={'link'}>
						<ListItem button>
							<ListItemIcon>
								<NavigateNextIcon />
							</ListItemIcon>
							<ListItemText primary={"JWT Decoder"} />
						</ListItem>
						</NavLink>
						<NavLink to="/QRCodeGerador" exact={true} className={'link'}>
						<ListItem button>
							<ListItemIcon>
								<NavigateNextIcon />
							</ListItemIcon>
							<ListItemText primary={"QRCode / Gerador"} />
						</ListItem>
						</NavLink>
						<NavLink to="/ImagemEncoder" exact={true} className={'link'}>
						<ListItem button>
							<ListItemIcon>
								<NavigateNextIcon />
							</ListItemIcon>
							<ListItemText primary={"Imagem Encoder"} />
						</ListItem>
						</NavLink>
						<NavLink to="/ImagemTrim" exact={true} className={'link'}>
						<ListItem button>
							<ListItemIcon>
								<NavigateNextIcon />
							</ListItemIcon>
							<ListItemText primary={"Imagem Trim"} />
						</ListItem>
						</NavLink>
						<NavLink to="/ConsultarSSL" exact={true} className={'link'}>
						<ListItem button>
							<ListItemIcon>
								<NavigateNextIcon />
							</ListItemIcon>
							<ListItemText primary={"Consultar SSL"} />
						</ListItem>
						</NavLink>
						<NavLink to="/ConsultarPlaca" exact={true} className={'link'}>
						<ListItem button>
							<ListItemIcon>
								<NavigateNextIcon />
							</ListItemIcon>
							<ListItemText primary={"Consultar Placa"} />
						</ListItem>
						</NavLink>
						<NavLink to="/ConsultarCNPJ" exact={true} className={'link'}>
						<ListItem button>
							<ListItemIcon>
								<NavigateNextIcon />
							</ListItemIcon>
							<ListItemText primary={"Consultar CNPJ"} />
						</ListItem>
						</NavLink>
						<NavLink to="/GerarPessoa" exact={true} className={'link'}>
						<ListItem button>
							<ListItemIcon>
								<NavigateNextIcon />
							</ListItemIcon>
							<ListItemText primary={"Gerar Pessoa"} />
						</ListItem>
						</NavLink>
						<NavLink to="/GerarDados" exact={true} className={'link'}>
						<ListItem button>
							<ListItemIcon>
								<NavigateNextIcon />
							</ListItemIcon>
							<ListItemText primary={"Gerar Dados"} />
						</ListItem>
						</NavLink>
						<NavLink to="/ValidarDados" exact={true} className={'link'}>
						<ListItem button>
							<ListItemIcon>
								<NavigateNextIcon />
							</ListItemIcon>
							<ListItemText primary={"Validar Dados"} />
						</ListItem>
						</NavLink>
						<NavLink to="/ValidarBoleto" exact={true} className={'link'}>
						<ListItem button>
							<ListItemIcon>
								<NavigateNextIcon />
							</ListItemIcon>
							<ListItemText primary={"Validar Boleto"} />
						</ListItem>
						</NavLink>
						<NavLink to="/PIX" exact={true} className={'link'}>
						<ListItem button>
							<ListItemIcon>
								<NavigateNextIcon />
							</ListItemIcon>
							<ListItemText primary={"PIX"} />
						</ListItem>
						</NavLink>
						<NavLink to="/GeoIP" exact={true} className={'link'}>
						<ListItem button>
							<ListItemIcon>
								<NavigateNextIcon />
							</ListItemIcon>
							<ListItemText primary={"GeoIP"} />
						</ListItem>
						</NavLink>
						<NavLink to="/NsLookup" exact={true} className={'link'}>
						<ListItem button>
							<ListItemIcon>
								<NavigateNextIcon />
							</ListItemIcon>
							<ListItemText primary={"NsLookup"} />
						</ListItem>
						</NavLink>
						<NavLink to="/Ping" exact={true} className={'link'}>
						<ListItem button>
							<ListItemIcon>
								<NavigateNextIcon />
							</ListItemIcon>
							<ListItemText primary={"Ping"} />
						</ListItem>
						</NavLink>
						<NavLink to="/Tracert" exact={true} className={'link'}>
						<ListItem button>
							<ListItemIcon>
								<NavigateNextIcon />
							</ListItemIcon>
							<ListItemText primary={"Tracert"} />
						</ListItem>
						</NavLink>
					</List>
				
				</Paper >

			</div>
        )

    }

}