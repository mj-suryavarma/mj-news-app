import React,{useState,useEffect,useCallback} from "react";
import './news.css'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import './selectCategory.css';

const TrendingPage =()=>{
    
     
    // initialize components
    const [news, setNews] = useState([]);
    const [url] = useState({
        method: 'GET',
        url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI',
        params: {pageNumber: '1', pageSize: '30', withThumbnails: 'false', location: 'in'},
        headers: {
          'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
          'x-rapidapi-key': '7aacdf0638msha58f0af4a1e8709p1f7b23jsnc981274d462d'
        }
      })
      const [Loading , setLoading] = useState(false);

    // initialze fetching news
  
    const fetchNews = () => {
    
  setLoading(true);

axios.request(url).then((response) => {
	setNews(response.data.value)
    setLoading(false)
}).catch((error) => {
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
        
    
        
    const scrollHandle =() =>{
        window.scrollTo({
            top:0
        })
    }
   
    return(<>
    <h2 className="top-headlines">Top Headlines</h2>
    <h4 className="Loading">{Loading ? "Loading.... please wait a moment...." : ""}</h4>
    <div className="main-news">{showHeadline()}</div>
   <FontAwesomeIcon icon={faAngleUp}  className="scroll-up" onClick={scrollHandle} /> 

        </>
    )
}

export default TrendingPage;