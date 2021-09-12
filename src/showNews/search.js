import React,{useState,useEffect} from "react";
import './news.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faCoffee } from '@fortawesome/free-solid-svg-icons'

const SearchPage =()=>{
    
     
    // initialize components
    const [news, setNews] = useState([]);
    const [url, setUrl] = useState('https://newsapi.org/v2/everything?q=all&sortBy=publishedAt&apiKey=ee2e5eb315f4449591d9de25b864cb43')
      
    const [category, setCategory] = useState('');

    // initialze fetching news

    const fetchNews = () => {
           
        fetch(url).then(result => result.json())
        .then(data => setNews(data.articles))
        .catch(error => console.log(error));

    }
   // implementing fetch news

    useEffect(()=>{
         fetchNews()
          },[url]);
          

          const showHeadline = () =>{

         

            return ( news.map((n,i) => (
            <a href={n.url} target="_blank">
                <button  type="button"
            className="headline-news"
              key={i.index}> 
             <div className="title">{n.title}</div>
             <img className="news-img" src={n.urlToImage} />
            <div>{n.description}</div>
             </button></a>)))
          }
        
    
      
      const changeHandler = (e)=>{
         
          setCategory(e.target.value)
          
      }
    const submitHandler = (e)=>{
          e.preventDefault();
          window.scrollTo({
              top:0
          })
          return(
            setUrl(`https://newsapi.org/v2/everything?q=${category}&sortBy=publishedAt&apiKey=ee2e5eb315f4449591d9de25b864cb43`)
      )
    }
 
    const scrollHandle =() =>{
        window.scrollTo({
            top:0
        })
    }
   
    return(<>
    <form className="form-control" >
    <label> Select your category news  
    <select 
         value={category}
          onChange={changeHandler}
          className="select-category"
          >   
             <option value="all">All</option>
             <option value="trending">trending</option>
             <option value="weather and climate">weather and climate</option>
             <option value="sports">sports</option>
             <option value="tech">tech</option>
             <option value="politics">politics</option>
             <option value="entertainment">entertainment</option>
             <option value="science and space">science and space</option>
             <option value="bussiness">bussiness</option>
             <option value="movies">movies</option>
         </select>
         </label>
         <button type="submit" 
         className="search-btn" 
         onClick={submitHandler}>search</button>
        
    </form>
   <FontAwesomeIcon icon={faAngleUp}  className="scroll-up" onClick={scrollHandle} /> 
        <div className="main-news">{showHeadline()}</div>

        </>
    )
}

export default SearchPage;