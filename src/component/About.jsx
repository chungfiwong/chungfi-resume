import React from "react";
import './styles/about.css'
import image from '../image';



function About(props){
    return(
        <section id='about'>
<div className="container mt-5 p-3">
        <div className="section-title text-center">
            <h2 className="text-title display-4">About</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>

        <div className="row">
            <div className="col-md-4 col-lg-4">
                <img src={image?image.my:''} alt="no image" className="img img-thumbnail"/>
            </div>

            <div className="col-lg-8 col-md-8 pt-lg-0 content ">
                <h3>Web & FullStack Developer</h3>

          
            <p className="text-secondary"> <em>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</em></p>
             <div className="row">
             <div className="col-md-6 col-lg-6">
             <ul className="list-group">
                <li className="list-group-item">
                    <i className="bi bi-envelope-fill me-2"></i>
                <strong>Email</strong>
                <span className="text-success float-end">
                    wong.chungfi488@gmail.com
                </span>

                </li>
                <li className="list-group-item">
                    <i className="bi bi-phone-fill me-2"></i>
                <strong>Phone</strong>
                <span className="text-success float-end">
                    9706366338
                </span>

                </li>
                <li className="list-group-item">
                    <i className="bi bi-browser-edge me-2"></i>
                <strong>Website</strong>
                <span className="text-success float-end">
                   www.xyz.com
                </span>

                </li>
                <li className="list-group-item">
                    <i className="bi bi-geo-alt-fill me-2"></i>
                <strong>City</strong>
                <span className="text-success float-end">
                        Tinsukia
                </span>

                </li>
             </ul>

             </div>
             <div className="col-md-6 col-lg-6">
             <ul className="list-group">
                <li className="list-group-item">
                    <i className="bi bi-book-fill me-2"></i>
                <strong>Qualification</strong>
                <span className="text-success float-end">
                    Master in Computer Application
                </span>

                </li>
                <li className="list-group-item">
                    <i className="bi bi-patch-check me-2"></i>
                <strong>Certification</strong>
                <span className="text-success float-end">
                    MERN STACK 
                </span>
                </li>
             </ul>

             </div>
           
             </div>
             
        </div>
        <div className="section-title text-center">
            <h2 className="text-title display-4">Skills</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
             <div className="row skills-content">
                <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="skill-block mt-3 mb-3">
                <strong className="text-success">HTML <i className="val float-end">98%</i></strong>
                <div className="progress" role="progressbar">
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{width:'98%'}}>98%</div> 
                </div>
             </div>
               
             <div className="skill-block mt-3 mb-3">
             <strong className="text-danger">Css & Css3 <i className="val float-end">88%</i></strong>
                <div className="progress" role="progressbar">
                
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={{width:'88%'}}>88%</div> 
                </div>
             </div>
        
             <div className="skill-block mt-3 mb-3">
             <strong className="text-primary">JavaScript <i className="val float-end">80%</i></strong>
                <div className="progress" role="progressbar">
                
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" style={{width:'80%'}}>80%</div> 
                </div>
             </div>
             <div className="skill-block mt-3 mb-3">
             <strong className="text-secondary">Jquery<i className="val float-end">85%</i></strong>
                <div className="progress" role="progressbar">
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" style={{width:'85%'}}>85%</div> 
               
                </div>
                </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="skill-block mt-3 mb-3">
                <strong className="text-success">BootStrap<i className="val float-end">50%</i></strong>
                <div className="progress" role="progressbar">
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{width:'50%'}}>50%</div> 
                </div>
             </div>
           
             <div className="skill-block mt-3 mb-3">
             <strong className="text-danger">ReactJS<i className="val float-end">70%</i></strong>
                <div className="progress" role="progressbar">
                
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={{width:'70%'}}>70%</div> 
                </div>
             </div>
      
        <div className="skill-block mt-3 mb-3">
             <strong className="text-primary">Express JS <i className="val float-end">75%</i></strong>
            <div className="progress" role="progressbar">
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" style={{width:'75%'}}>75%</div> 
            </div>
        </div>
             <div className="skill-block mt-3 mb-3">
             <strong className="text-success">MongoDB<i className="val float-end">40%</i></strong>
                <div className="progress" role="progressbar">
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" style={{width:'40%'}}>40%</div> 
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
        </section>
        
    )
}
export default About