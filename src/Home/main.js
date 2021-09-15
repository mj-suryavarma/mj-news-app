import './home.css'
import FooterArea from '../FooterArea/footer';


const MainPage = ()=>{
    return(
      <>
  <section className="intro-section">
  <div className="intro-heading">
  <h2 className="intro-sub-head">Personalized News</h2>
  <span className="in">IN</span> <span className="one-line">one line</span>     
  </div>         
  
  </section>
  <section className="explaine-area">
    <div className="declaration" >
       <p id="how-it-works">How it works</p>
      <p id="read-your-fav">Read your favorite news within one line from around the World!.Read Top Trending News</p>
    </div>
      <div className="declare-img">
        <div className="img-over">
        <p> your favorite News</p>
       
        <p>Search what you want</p>
        </div>
      </div>
  </section> 
  <FooterArea />

  </>
    )
  }

  export default MainPage;
  