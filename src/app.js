import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, useHistory } from 'react-router-dom'

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

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
import ValidarDados from './components/ValidarDados/index';
import ValidarBoleto from './components/ValidarBoleto/index';
import PIX from './components/PIX/index';
import GeoIP from './components/GeoIP/index';
import NsLookup from './components/NsLookup/index';
import Ping from './components/Ping/index';
import Tracert from './components/Tracert/index';

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

                <AppBar position="fixed">
                    <Toolbar>

                        <Typography variant="h6" noWrap className={'title'}>
                            SysUtilApp
                        </Typography>
                        
                    </Toolbar>
                </AppBar>

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
						<Route exact path="/ValidarDados"><ValidarDados /></Route>
						<Route exact path="/ValidarBoleto"><ValidarBoleto /></Route>
						<Route exact path="/PIX"><PIX /></Route>
						<Route exact path="/GeoIP"><GeoIP /></Route>
						<Route exact path="/NsLookup"><NsLookup /></Route>
						<Route exact path="/Ping"><Ping /></Route>
						<Route exact path="/Tracert"><Tracert /></Route>
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