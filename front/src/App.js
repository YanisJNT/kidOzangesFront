import './App.css';
import Connexion from './components/Connexion'
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import  Header  from './components/Header';
import  Footer  from './components/Footer';
import  Home  from './components/Home';
import {Route, Switch,Redirect,useHistory} from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Home/>
            {/* Acceuil */}
        </Route>

        <Route path="/signup" exact>
          <SignUp/>
        </Route>

        <Route path="/contact" exact>
            <Contact />
        </Route>

        <Route path="/aboutUs " exact>
            {/* inscription */}
        </Route>

        <Route path="/admin " exact>
            {/* inscription */}
        </Route>


        <Route>
          {/* pageqsdqsdqsd 404*/}
        </Route>
      </Switch>
      <Footer />

    </div>
  );
}

export default App;
