import React from 'react';
import profileIcon from './img/img.jpg';
import './App.css';
// import Greet from './Greeting';
// import Count from './Counter';
import data from './data/data.json';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Resume from './components/Resume';
import Career from './components/Career';
import Education from './components/Education';
import Techskills from './components/Techskills';
import Cert from './components/Cert';

function App() {
  return (
   <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route exact path='/resume' component={Resume} />
      <Route exact path='/career' component={Career} />
      <Route exact path='/education' component={Education} />
      <Route exact path='/tech' component={Techskills} />
      <Route exact path='/cert' component={Cert} />
   </BrowserRouter>
  );
}

// Home

let Home= () =>{
  let profiles=data.profile;
  return(
    <div className="row justify-content-center">
        {profiles.map((values,index)=>(




          <div className="col-lg-4 col-md-4 col-sm-10 mt-1" key={index}>
          <div className="card data">
            <div className="card-body boxer">
            <div className="imgBx">
              <img src={profileIcon} alt="profile Icon" style={{width:"66%"}}/>
              </div>
              <div className="contentBx">
              <h1>{values.basics.name}</h1>
              <h2 className="text-secondary">{values.basics.role}</h2>
              <a href={"tel:"+values.basics.phone}>
                <h3>{values.basics.phone}</h3>
              </a>
              <a href={"mailto:"+values.basics.email}>
                <h3>{values.basics.email}</h3>
              </a>
              <Link to={{pathname:'/resume',data:{id:index}}} className="btn btn-primary">View Profile</Link>
              </div>
            </div>
          </div>
        </div>
        ))}
        <div className="footer">
            <p className="footer-text">Design and developed by * <b>Prasad Bobby &hearts;</b></p>
        </div>
    </div>
  )
}

export default App;