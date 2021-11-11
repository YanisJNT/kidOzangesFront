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
import Recherche from './components/Recherche';
//import loadable from '@loadable/component';
import React from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode'



function App() {
  const token =  localStorage.getItem("token")
  // condition for check token

  // eslint-disable-next-line no-restricted-globals
  // if(token){
  //   const data =  jwt_decode(token)
  //   const date = new Date()
  //   const getime  = Math.round(date.getTime() /  1000)
  //   if(getime >  data.exp){
  //     return(
  //       <Redirect to="/logout"/>
  //     )
  //   }
  // }


  // check si l'user a la perm admin
  const checkPermAdmin = () => {
    const token =  localStorage.getItem("token")
    
    if(!token){
      console.log("pas connecté")

      return(
        <div>
          <p className="trollPageAdmin">NIQUE TA Mère</p>
        </div>
      )

    } 
    else{
      const dataToken = jwt_decode(token)
      console.log(dataToken.role)
      console.log("NIckname :   " +   dataToken.nickname)

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
            {checkPermAdmin()}
        </Route>

        <Route path="/recherche">
            <Recherche/>
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
