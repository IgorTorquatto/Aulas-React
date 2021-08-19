import React from 'react';

import Navegacao from './componentes/Navegacao';
import Home from './componentes/Home';
import Servicos from './componentes/Servicos';
import  Contatos from './componentes/Contatos';


import {BrowserRouter as router, Switch, Route} from 'react-router-dom';

class App extends React.Component{
    render(){
        return(
            <Router>
                <div> 
                    <Navegacao />
                    <Switch>
                    <Route  exact path='/'><Home /></Route>
                    <Route  exact path='/servicos'><Servicos /></Route> 
                    <Route  exact path='/contatos'><Contatos /></Route> 
                    </Switch>
                 </div>
            </Router>
        )
    }
}

export default App;
