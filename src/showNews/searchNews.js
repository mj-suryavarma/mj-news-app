import React,{useState,useEffect,useCallback} from "react";
import './news.css'
import axios from 'axios'
import './selectCategory.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

const SearchPage =()=>{
    
     
    // initialize components
    const [news, setNews] = useState([]);
    const [url, setUrl] = useState({
      method: 'GET',
      url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
      params: {
        q: 'india',
        pageNumber: '1',
        pageSize: '30',
        autoCorrect: 'true',
        safeSearch: 'true',
        fromPublishedDate: 'null',
        toPublishedDate: 'null'
      },
      headers: {
        'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
        'x-rapidapi-key': '7aacdf0638msha58f0af4a1e8709p1f7b23jsnc981274d462d'
      }
    })
      
    const [searchNews, setSearchNews] = useState('');
    const [Loading, setLoading] = useState(false)

    // initialze fetching news
  
    const fetchNews = () => {
      setLoading(true)
    
      var axios = require("axios").default;

      
      axios.request(url).then((response) => {
        setNews(response.data.value)
        setLoading(false)
      }).catch( (error) => {
        console.error(error);
      });
      

    }
   // implementing fetch news

    useEffect(()=>{
         fetchNews()
          },[url]);
          

          const showHeadline = () =>{
              const time = new Date();
              const giveId = time.toLocaleTimeString();
             console.log(news)
            return ( news.map((n) => (
              <div 
              className="headline-news"
                key={n.id}> 
               <div className="title">{n.title}</div>
               <img className="news-img" src={n.image.url} />
               <div>{n.description}</div>
               <a href={n.url} target="_blank" rel="noreferrer" className="read-more-link"> read more</a>
               </div>
             )))
          }
        
    
      
      const changeHandler = (e)=>{
         
          setSearchNews(e.target.value)
          
      }
    const submitHandler = (e)=>{
          e.preventDefault();
          window.scrollTo({
              top:0
          })
           
          return(

            setUrl({
              method: 'GET',
              url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
              params: {
                q: `${searchNews}`,
                pageNumber: '1',
                pageSize: '30',
                autoCorrect: 'true',
                safeSearch: 'true',
                fromPublishedDate: 'null',
                toPublishedDate: 'null'
              },
              headers: {
                'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
                'x-rapidapi-key': '7aacdf0638msha58f0af4a1e8709p1f7b23jsnc981274d462d'
              }
            })
      )
    }
 
    const scrollHandle =() =>{
        window.scrollTo({
            top:0
        })
    }
   
    return(<>
    <form className="form-control" >
    <input
     className="search-bar"
     placeholder="Search any news here"
     type="text"
     value={searchNews}
     onChange={changeHandler} 
    />
 
         <button type="submit" 
         className="search-btn" 
         onClick={submitHandler}
          >search</button>
        
    </form>
    <h4 className="Loading">{Loading ? "Loading.... please wait a moment...." : ""}</h4>
    <div className="main-news">{showHeadline()}</div>
   <FontAwesomeIcon icon={faAngleUp}  className="scroll-up" onClick={scrollHandle} /> 


        </>
    )
}

export default SearchPage;