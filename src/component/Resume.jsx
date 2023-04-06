import React from "react";
import './styles/resume.css'

function Resume(props){
    return(
        <section id="resume">
        <div className="container mt-5 p-3">
        <div className="section-title text-center">
            <h2 className="text-title display-4">Resume</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>

            <div className="row">
            <div className="col-lg-6 col-md-6 sol-sm-12 ">
                <h6 className="display-6 text-secondary">Education</h6>
                <div className="resume-item pb-0">
                    <h4>Master-Degree</h4>
                    <h5>2018-2020</h5>
                    <p><em>Hindustan Institute of Tech and Sci, Chennai Tamil Nadu </em></p>
                    <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                </div>
                <div className="resume-item pb-0">
                    <h4>Degree</h4>
                    <h5>2015-2018</h5>
                    <p><em>Tinsukia College, Tinsukia Assam</em></p>
                    <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                </div>
                <div className="resume-item pb-0">
                    <h4>H.S</h4>
                    <h5>2013-2015</h5>
                    <p><em>Guru Tag Bahadur Academy, Tinsukia Assam</em></p>
                    <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                </div>
                <div className="resume-item pb-0">
                    <h4>H.S.L.C</h4>
                    <h5>2001-2013</h5>
                    <p><em>Don Bosco High School, Tinsukia Assam</em></p>
                    <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                </div>
                
                

             </div>
            <div className="col-lg-6 col-md-6 sol-sm-12">
                <h6 className="display-6 text-secondary">Certifications</h6>
                <div className="resume-item pb-0">
                    <h4>MERN</h4>
                    <h5>2022-2023</h5>
                    <p><em>Be-Practical Tech Solutions, Bengaluru</em></p>
                    <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                </div>
                <div className="resume-item pb-0">
                    <h4>DCA</h4>
                    <h5>2017-2018</h5>
                    <p><em>District Computer Center, Tinsukia Assam</em></p>
                    <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                </div>
                </div>
             </div>
            </div>
        </section>
    )
}
export default Resume
