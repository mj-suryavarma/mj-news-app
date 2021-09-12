import React,{useState} from 'react'
import reactDom from 'react-dom'

import {BrowserRouter,Route,Link, Switch} from 'react-router-dom'

import news from '../NewsPage/news';
//css
import '../App.css';


class Login extends React.Component {
  constructor(props){
         super(props);
         this.state ={ email:'',
                        password: '',
                       errorMessage:'',
                      welcome:'' ,
                      };
  }

   getStrated = ()=>{
         return<>
         
         </>
  }
  
 submitChange =(event) =>{
     event.preventDefault();
     console.log(' password is :' +this.state.password);
      

     if(this.state.email !== 'mjsuryavarma@gmail.com'){
    let err= <strong>Oops!... your email id is wrong</strong>;
     this.setState({errorMessage:err});
      
     }else if (this.state.password !== '1436') {
        let err= <strong>Oops!... your Pasword is wrong</strong>;
        this.setState({errorMessage:err});
     }
     else{

      let hideForm = document.getElementById('form');
      hideForm.style.display='none';
      let welcoming = (<div><h2 className="greeting">Welcome to Our webpage!!</h2>



        <button className="btn" onClick={this.getStrated}>Get Started</button></div> );
      this.setState({welcome:welcoming});
     
     
      window.open('https://www.google.com');
    //  window.location.href('https://www.google.com');
     this.setState({errorMessage:''});
  // window.location.href="./password.js"
   // props.histroy.push('./Password.js');   

     }
       
 }

 changeHandler = (event) => {
     let nam = event.target.name;
     let val = event.target.value;

   this.setState({[nam]:val});
    
}

 
    
    render(){
    return<React.Fragment>
        
        <form className='form' onSubmit={this.submitChange} id='form'>
            <div className='form-control'>
                <label htmlFor='label'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email   </label>
                 <input type='email'
                 name='email' 
                 id='email'
                 placeholder='Enter your email'
                 onChange={this.changeHandler}
                 required
                  />
            </div>
            <div className='form-control'>
                  <label htmlFor='label'>Password   </label>
                   <input type='password'
                   name='password' 
                   id='password'
                   placeholder='Enter your password'
                   onChange={this.changeHandler}
                   required
                    />
              </div>
        
         
         <div className='form-control'>
             <button type='submit' id='submit' >Submit</button>

         </div>
         <div>
           <p className='warning'>{this.state.errorMessage}</p>
        </div>

        </form><br /><br/><br/>
        <h1>{this.state.welcome}</h1>
    </React.Fragment>
}
}

export default Login ;