import './App.css';
import Connexion from './components/Connexion'
import SignUp from './components/SignUp';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { SubmitActivity } from './components/SubmitActivity';
import { Page404 } from './components/Page404';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
          {/* Acceuil */}
        </Route>

        <Route path="/signup" exact>
          <SignUp />
        </Route>

        <Route path="/submitactivity" exact>
          <SubmitActivity />      

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

          <Page404 />

        </Route>
      </Switch>
      <Footer />

    </div>
  );
}

export default App;
