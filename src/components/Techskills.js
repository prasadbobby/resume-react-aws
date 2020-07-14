import React from 'react';
// import data from '../data/data.json';
// import profileIcon from '../img/img.jpg';
import {Link} from 'react-router-dom';


export default function Techskills(props) {
        fetch('https://raw.githubusercontent.com/prasadbobby/React-Shortcuts/master/data.json')
        .then(response=>response.json())
        .then(data=>console.log(data))

        // let info1=data.profile;
        // console.log(info1.career)
    return (
        <div className="navigation">
            
             <nav>
                <h1 className="brand">
                    <a href="/">HOME</a>
                    </h1>
                <ul>
                    <li><Link to={{pathname:'/career'}} className="inner">Career</Link></li>
                    <li><Link to={{pathname:'/education'}} className="inner">Education</Link></li>
                    <li><Link to={{pathname:'/tech'}} className="inner">Tech Skills</Link></li>
                    <li><Link to={{pathname:'/cert'}} className="inner">Certifications</Link></li>
                </ul>
            </nav>
         <div className="row justify-content-center">
           
             <div className="col-lg-8 m-2 data-card">
                <div className="card shadow new-right-side boxer-card">
                    <div className="card-body index-top">
                        <div className="">
                        <h2 className="blink">Technical Skills:</h2>
                        <hr />
                        <ul type="circle">
                            <h4>* Web Development:</h4>
                            <hr />
                        <h6><li>HTML, CSS, jQuery, Vanilla Javascript, GSAP, Bootstrap, React Js, Django</li></h6>
                        <hr />
                        <h4>* Databases:</h4>
                            <hr />
                        <h6><li>Mongo DB, MYSQL, PostgreSQL, Oracle, Microsoft SQL Server</li></h6>
                        <hr />
                        <h4>* Operating Systems:</h4>
                        <hr />
                        <h6><li>Linux, Ubuntu, Red Hat, Windows</li></h6>
                    </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}