import './App.css';
import SignUp from './components/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SubmitActivity from './components/SubmitActivity';
import DetailActivity from './components/DetailActivity';
import Page404 from './components/Page404';
import About from './components/About';
import Loading from './components/Loading'

import LegalNotice from './components/MentionsLégales';
import Profil from './components/Profil';
import Admin from './components/Admin'

import { Route, Switch } from 'react-router-dom';
import Logout from './components/Logout';
//import loadable from '@loadable/component';

import React , { Suspense } from 'react';


/*const SignUpLoad = loadable(() => import('./components/SignUp'),{
  fallback:<Loading/>,
})*/


function App() {

  const SignUpLoad  = React.lazy(()=>import("./components/SignUp"))

  return (
    <div className="App">
      <Header />
     
      <Switch>
        <Route path="/" exact>
          <Home />
          {/* Acceuil */}
        </Route>

        <Route path="/signup" exact>
          <Suspense fallback={<Loading/>}>
            <SignUpLoad/>
          </Suspense>
        </Route>

        <Route path="/submitactivity" exact>
          <SubmitActivity />


        </Route>

        <Route path="/detailactivity/:id" exact>
          <DetailActivity />      

        </Route>
        <Route path="/aboutus" exact>
            <About/>
          {/* inscription */}
        </Route>

        <Route path="/logout" exact>
            <Logout/>
        </Route>

        <Route path="/admin" exact>
          <Admin/>
        </Route>
        <Route path="/LegalNotice" exact>
        <LegalNotice />
        </Route>
        <Route path="/profil" exact>
            <Profil />
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
