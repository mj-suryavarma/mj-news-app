import React from 'react';
import './App.css';
// import Login from './SignInPage/Login';
import SelectTheCategory from './showNews/selectCategory';
import HomePage from './Home/home';
import MainPage from './Home/main';
import AboutPage from './About us/about'
import ContactPage from  './contactArea/contact'

import { BrowserRouter,Switch, Route } from 'react-router-dom';


function NewsPage() {
  
  return (<BrowserRouter>
  <div >
        <header className="top-head">
        <HomePage />  
      </header>
      <Switch>
        <Route exact  path='/' component={MainPage} />
        <Route  path='/read-news' component={SelectTheCategory}  />
        <Route path="/about" component={AboutPage}/>
        <Route  path="/contact" component={ContactPage}/>
      </Switch>
  

      </div>
  </BrowserRouter> 
   );
} 

export default NewsPage;
