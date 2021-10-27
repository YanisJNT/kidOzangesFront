import './App.css';
import Connexion from './components/Connexion'
import SignUp from './components/SignUp';
import  Header  from './components/Header';
import  Footer  from './components/Footer';
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Connexion />
     <SignUp/>
      <Header/>
      qsdqsdsqdqsdqsdsqd
      <Switch>
        <Route path="/" exact>
            {/* Acceuil */}
        </Route>

        <Route path="/signup" exact>
            {/* inscription */}
        </Route>

        <Route path="/contact" exact>
            {/* inscription */}
        </Route>

        <Route path="/aboutUs " exact>
            {/* inscription */}
        </Route>

        <Route path="/admin " exact>
            {/* inscription */}
        </Route>

        <Route>
          {/* page 404*/}
        </Route>
      </Switch>
      <Footer />

    </div>
  );
}

export default App;
