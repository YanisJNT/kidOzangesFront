import './App.css';
import SignUp from './components/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SubmitActivity from './components/SubmitActivity';
import DetailActivity from './components/DetailActivity';
import Page404 from './components/Page404';
import About from './components/About';

import LegalNotice from './components/MentionsLégales';
import Profil from './components/Profil';
import Admin from './components/Admin'
import Logout from './components/Logout';
//import loadable from '@loadable/component';
import React from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode'

/*const SignUpLoad = loadable(() => import('./components/SignUp'),{
  fallback:<Loading/>,
})*/


function App() {
  const checkPerm = () => {
    const token =  localStorage.getItem("token")
    
    if(!token){
      console.log("pas connecté")
      return(
        <Redirect to="/"/>
      )

    } 
    else{
      const dataToken = jwt_decode(token)
      console.log(dataToken.role)

      if(dataToken.role === "admin"){
        console.log("qsdqsdqsdqsdqdqsdqsd")
        return(
          <Admin/>
        )
      }
    }
  }

  return (
    <div className="App">
      <Header />
     
      <Switch>
        <Route path="/" exact>
          <Home />
          {/* Acceuil */}
        </Route>

        <Route path="/signup" exact>
          <SignUp/>
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

        <Route path="/admin"   exact >
            {checkPerm()}
        </Route>

        <Route path="/logout" exact>
            <Logout/>
        </Route>

      
        
       {
         /*
          <Route 
          path="/some-path" 
          render={() => !isAuthenticated ?
          <Login/> :
          <Redirect to="/some-path" />
      }/>
*/
       }
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
