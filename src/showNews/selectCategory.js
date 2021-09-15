import React from 'react';
import {BrowserRouter, Switch, Route , Link} from 'react-router-dom';
import TrendingNews from './trendingNews';
import SearchNews from './searchNews';
import './news.css';
import './selectCategory.css';

const SelectTheCategory = () => {

    return(
        <BrowserRouter>
         <div className="category"> 
         <button className="category-btn">  <Link   to='/trendingNews' className="category-link">
                 Trending News
                 </Link></button>
                 <button className="category-btn"> <Link to='/SearchNews' className="category-link">
                 Search News
                 </Link></button>
       </div>
       <Switch>
           <Route exact path="/trendingNews" component={TrendingNews} />
           <Route path="/SearchNews" component={SearchNews} />
       </Switch>
        </BrowserRouter>

    )
};
export default SelectTheCategory;