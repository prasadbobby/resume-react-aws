import React from 'react';
// import data from '../data/data.json';
// import profileIcon from '../img/img.jpg';
import {Link} from 'react-router-dom';


export default function Education(props) {
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
                        <h2>Education Details:</h2>
                        <hr />
                        <br/>
                        
                        <table className="table">
                            <thead>
                    <tr>
                        <th>Course</th>
                        <th>Name of the Institution</th>
                        <th>Year of Passing</th>
                        <th>Percentage</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>B.tech (C.S.E)</td>
                        <td>DNR College of Engineering and Technology</td>
                        <td>Pursuing</td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td>Diploma (C.M.E)</td>
                        <td>Smt.B.Seetha Polytechnic College</td>
                        <td>2019</td>
                        <td>87</td>
                    </tr>
                    <tr>
                        <td>S.S.C</td>
                        <td>K.V.L.P.Z.P.H.School</td>
                        <td>2016</td>
                        <td>97</td>
                    </tr>
                    </tbody>
                    
                    </table>
                    
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}