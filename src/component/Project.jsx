import React from "react";
import './styles/project.css';
function Project(props){
    return(
        <div className="container">
        <div className="row">
            <div className="col-md-12 text-center mt-5">
                <h3 className="display-3 text-title">Projects</h3>
            </div>
        </div>
    <div className="row">
        <div className="col-md-12 mt-5 mb-3 d-flex justify-content-center">
            <ul className="nav nav-pills" id="project" role="tablist">
            <li className="nav-item">
                <button className="nav-link active" id="html" data-bs-toggle="tab" data-bs-target="#nav-html">
                   HTML&CSS
                </button>
            </li>
            <li className="nav-item">
                <button className="nav-link" id="js" data-bs-toggle="tab" data-bs-target="#nav-js">
                JavaScript
                </button>
            </li>
            <li className="nav-item">
                <button className="nav-link" id="react" data-bs-toggle="tab" data-bs-target="#nav-react">
                React
                </button>
            </li>
            <li className="nav-item">
                <button className="nav-link" id="react-api" data-bs-toggle="tab" data-bs-target="#nav-react-api">
                React-API
                </button>
            </li>
            <li className="nav-item">
                <button className="nav-link" id="mearn stack" data-bs-toggle="tab" data-bs-target="#nav-mearn-stack">
                MEARN STACK
                </button>
            </li>
            </ul>
        </div>
    </div>
    <div className="row">
        <div className="col-md-12">
            <div className="tab-content mt-3 mb-3" id="project-tab">
                <div className="tab-pane fade show active" id="nav-html">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="text-success text-success text-center"> HTML & Css Project</h5>
                        </div>
                        {/* project */}
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-3 mt-2">
                                    <div className="card shadow-lg">
                                            <img src="https://picsum.photos/id/243/400/400" alt="no image" className="card-img-top"/>
                                            <div className="card-body">
                                                <h5 className="text-center">Project-1</h5>
                                                <div className="d-flex justify-content-between">
                                                    <a target="_blank" href="#" className="btn btn-outline-success btn-sm">Preview</a>
                                                    <a target="_blank" href="#" className="btn btn-outline-secondary btn-sm">Code</a>
                                                </div>
                                            </div>
                                    </div>
                                </div>

                                <div className="col-md-3 mt-2">
                                <div className="card shadow-lg">
                                <img src="https://picsum.photos/id/243/400/400" alt="no image" className="card-img-top"/>
                                            <div className="card-body">
                                                <h5 className="text-center">Project-1</h5>
                                                <div className="d-flex justify-content-between">
                                                    <a target="_blank" href="#" className="btn btn-outline-success btn-sm">Preview</a>
                                                    <a target="_blank" href="#" className="btn btn-outline-secondary btn-sm">Code</a>
                                                </div>
                                            </div>
                                </div>
                                </div>
                                <div className="col-md-3 mt-2">
                                <div className="card shadow-lg">
                                <img src="https://picsum.photos/id/243/400/400" alt="no image" className="card-img-top"/>
                                            <div className="card-body">
                                                <h5 className="text-center">Project-1</h5>
                                                <div className="d-flex justify-content-between">
                                                    <a target="_blank" href="#" className="btn btn-outline-success btn-sm">Preview</a>
                                                    <a target="_blank" href="#" className="btn btn-outline-secondary btn-sm">Code</a>
                                                </div>
                                            </div>
                                </div>
                                </div>
                                <div className="col-md-3 mt-2">
                                <div className="card shadow-lg">
                                <img src="https://picsum.photos/id/243/400/400" alt="no image" className="card-img-top"/>
                                            <div className="card-body">
                                                <h5 className="text-center">Project-1</h5>
                                                <div className="d-flex justify-content-between">
                                                    <a target="_blank" href="#" className="btn btn-outline-success btn-sm">Preview</a>
                                                    <a target="_blank" href="#" className="btn btn-outline-secondary btn-sm">Code</a>
                                                </div>
                                            </div>
                                </div>
                                </div>
                            </div>
                            {/* project end */}
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="nav-js">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="text-success text-success text-center"> JavaScript Projects</h5>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-3 mt-2">
                                    <div className="card shadow-lg">
                                            <img src="https://picsum.photos/id/243/400/400" alt="no image" className="card-img-top"/>
                                            <div className="card-body">
                                                <h5 className="text-center">Project-1</h5>
                                                <div className="d-flex justify-content-between">
                                                    <a target="_blank" href="#" className="btn btn-outline-success btn-sm">Preview</a>
                                                    <a target="_blank" href="#" className="btn btn-outline-secondary btn-sm">Code</a>
                                                </div>
                                            </div>
                                    </div>
                                </div>

                                <div className="col-md-3 mt-2">
                                <div className="card shadow-lg">
                                <img src="https://picsum.photos/id/243/400/400" alt="no image" className="card-img-top"/>
                                            <div className="card-body">
                                                <h5 className="text-center">Project-1</h5>
                                                <div className="d-flex justify-content-between">
                                                    <a target="_blank" href="#" className="btn btn-outline-success btn-sm">Preview</a>
                                                    <a target="_blank" href="#" className="btn btn-outline-secondary btn-sm">Code</a>
                                                </div>
                                            </div>
                                </div>
                                </div>
                                <div className="col-md-3 mt-2">
                                <div className="card shadow-lg">
                                <img src="https://picsum.photos/id/243/400/400" alt="no image" className="card-img-top"/>
                                            <div className="card-body">
                                                <h5 className="text-center">Project-1</h5>
                                                <div className="d-flex justify-content-between">
                                                    <a target="_blank" href="#" className="btn btn-outline-success btn-sm">Preview</a>
                                                    <a target="_blank" href="#" className="btn btn-outline-secondary btn-sm">Code</a>
                                                </div>
                                            </div>
                                </div>
                                </div>
                                <div className="col-md-3 mt-2">
                                <div className="card shadow-lg">
                                <img src="https://picsum.photos/id/243/400/400" alt="no image" className="card-img-top"/>
                                            <div className="card-body">
                                                <h5 className="text-center">Project-1</h5>
                                                <div className="d-flex justify-content-between">
                                                    <a target="_blank" href="#" className="btn btn-outline-success btn-sm">Preview</a>
                                                    <a target="_blank" href="#" className="btn btn-outline-secondary btn-sm">Code</a>
                                                </div>
                                            </div>
                                </div>
                                </div>
                            </div>
                            {/* project end */}
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="nav-react">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="text-success text-success text-center">React</h5>
                        </div>
                        <div className="card-body">
                            
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="nav-react-api">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="text-success text-success text-center">React-API</h5>
                        </div>
                        <div className="card-body"></div>
                    </div>
                </div>
               <div className="tab-pane fade" id="nav-mearn-stack">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="text-success text-success text-center">Mearn Stack</h5>
                        </div>
                        <div className="card-body"></div>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
        </div>
    )
}
export default Project