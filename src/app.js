import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, useHistory } from 'react-router-dom'

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import HomeIcon from '@material-ui/icons/Home';

import ModAlertProvider from './auxiliar/ModAlert/Provider'
import GlobalState from './auxiliar/GlobalState/Provider'

import Home from './components/Home';
import Sobre from './components/Sobre';
import GeradorUUID from './components/GeradorUUID/index';
import CryptoHashing from './components/CryptoHashing/index';
import CryptoHMAC from './components/CryptoHMAC/index';
import CryptoCiphers from './components/CryptoCiphers/index';
import FormatarJSON from './components/FormatarJSON/index';
import EncodeDecode from './components/EncodeDecode/index';
import URLParser from './components/URLParser/index';
import JWTDecoder from './components/JWTDecoder/index';
import QRCodeGerador from './components/QRCodeGerador/index';
import ImagemEncoder from './components/ImagemEncoder/index';
import ImagemTrim from './components/ImagemTrim/index';
import ConsultarSSL from './components/ConsultarSSL/index';
import ConsultarPlaca from './components/ConsultarPlaca/index';
import ConsultarCNPJ from './components/ConsultarCNPJ/index';
import GerarPessoa from './components/GerarPessoa/index';
import GerarDados from './components/GerarDados/index';

function App() {

    const history = useHistory();

    const setupIPC = () => {

        if(window.require)
        {
    
            const ipc = window.require("electron").ipcRenderer;

            ipc.send('rendererAppStarted');

            ipc.on('navigateTo', (_event, path) => {
                
                console.log("navigateTo: " + path);

                history.push(path);

            });

        }
        
    };

    setupIPC();

    return (
        <>
            <div className={'root'}>

                <CssBaseline />

                <AppBar position="fixed" className={'appBar'}>
                    <Toolbar>

                        <Typography variant="h6" noWrap className={'title'}>
                            SysUtilApp
                        </Typography>
                        
                    </Toolbar>
                </AppBar>

                <Drawer variant="permanent">
                <div className={'drawer'}>
                <Divider />
                <List>
                    <NavLink to="/GeradorUUID" exact={true} className={'link'}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Gerador de UUID"} />
                    </ListItem>
                    </NavLink>
                    <NavLink to="/CryptoHashing" exact={true} className={'link'}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Crypto / Hashing"} />
                    </ListItem>
                    </NavLink>
                    <NavLink to="/CryptoHMAC" exact={true} className={'link'}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Crypto / HMAC"} />
                    </ListItem>
                    </NavLink>
                    <NavLink to="/CryptoCiphers" exact={true} className={'link'}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Crypto / Ciphers"} />
                    </ListItem>
                    </NavLink>
					<NavLink to="/FormatarJSON" exact={true} className={'link'}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Formatar JSON"} />
                    </ListItem>
                    </NavLink>
					<NavLink to="/EncodeDecode" exact={true} className={'link'}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Encode / Decode"} />
                    </ListItem>
                    </NavLink>
					<NavLink to="/URLParser" exact={true} className={'link'}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"URL Parser"} />
                    </ListItem>
                    </NavLink>
					<NavLink to="/JWTDecoder" exact={true} className={'link'}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"JWT Decoder"} />
                    </ListItem>
                    </NavLink>
					<NavLink to="/QRCodeGerador" exact={true} className={'link'}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"QRCode / Gerador"} />
                    </ListItem>
                    </NavLink>
					<NavLink to="/ImagemEncoder" exact={true} className={'link'}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Imagem Encoder"} />
                    </ListItem>
                    </NavLink>
					<NavLink to="/ImagemTrim" exact={true} className={'link'}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Imagem Trim"} />
                    </ListItem>
                    </NavLink>
					<NavLink to="/ConsultarSSL" exact={true} className={'link'}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Consultar SSL"} />
                    </ListItem>
                    </NavLink>
					<NavLink to="/ConsultarPlaca" exact={true} className={'link'}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Consultar Placa"} />
                    </ListItem>
                    </NavLink>
					<NavLink to="/ConsultarCNPJ" exact={true} className={'link'}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Consultar CNPJ"} />
                    </ListItem>
                    </NavLink>
					<NavLink to="/GerarPessoa" exact={true} className={'link'}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Gerar Pessoa"} />
                    </ListItem>
                    </NavLink>
					<NavLink to="/GerarDados" exact={true} className={'link'}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Gerar Dados"} />
                    </ListItem>
                    </NavLink>
                </List>
                </div>
                </Drawer>

                <ModAlertProvider>
				<GlobalState>

                <main className={'content'}>
                <div className={'toolbar'} />

                    <Switch>
                        <Route exact path="/"><Home /></Route>
                        <Route exact path="/Sobre"><Sobre /></Route>
                        <Route exact path="/GeradorUUID"><GeradorUUID /></Route>
                        <Route exact path="/CryptoHashing"><CryptoHashing /></Route>
                        <Route exact path="/CryptoHMAC"><CryptoHMAC /></Route>
                        <Route exact path="/CryptoCiphers"><CryptoCiphers /></Route>
						<Route exact path="/FormatarJSON"><FormatarJSON /></Route>
						<Route exact path="/EncodeDecode"><EncodeDecode /></Route>
						<Route exact path="/URLParser"><URLParser /></Route>
						<Route exact path="/JWTDecoder"><JWTDecoder /></Route>
						<Route exact path="/QRCodeGerador"><QRCodeGerador /></Route>
						<Route exact path="/ImagemEncoder"><ImagemEncoder /></Route>
						<Route exact path="/ImagemTrim"><ImagemTrim /></Route>,
						<Route exact path="/ConsultarSSL"><ConsultarSSL /></Route>
						<Route exact path="/ConsultarPlaca"><ConsultarPlaca /></Route>
						<Route exact path="/ConsultarCNPJ"><ConsultarCNPJ /></Route>
						<Route exact path="/GerarPessoa"><GerarPessoa /></Route>
						<Route exact path="/GerarDados"><GerarDados /></Route>
                        <Route component={Home} />
                    </Switch>

                </main>
                
				</GlobalState>
                </ModAlertProvider>

            </div>
        </>
    );
    
}

export default App;