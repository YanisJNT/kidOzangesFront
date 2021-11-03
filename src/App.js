import './App.css';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SubmitActivity from './components/SubmitActivity';
import DetailActivity from './components/DetailActivity';
import Page404 from './components/Page404';
import About from './components/About';

import LegalNotice from './components/MentionsLégales';

import { Route, Switch } from 'react-router-dom';
import Logout from './components/Logout';

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

        <Route path="/detailactivity/:id" exact>
          <DetailActivity />      

        </Route>

        <Route path="/contact" exact>

          <Contact />

        </Route>

        <Route path="/aboutus" exact>
            <About/>
          {/* inscription */}
        </Route>

        <Route path="/logout" exact>
            <Logout/>
        </Route>

        <Route path="/admin" exact>
          {/* inscription */}
        </Route>
        <Route path="/LegalNotice" exact>
        <LegalNotice />
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
