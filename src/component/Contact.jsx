import React from "react";

function Contact(props){
    return(
        <section id="contact">
          <div className="container">
        <section className="section-list mt-5">
            <h2 className="text-title display-3 mt-5 text-center">Conatct</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </section>
      
        <div className="row mt-5">
            <div className="col-md-4 col-lg-4">
                <div className="info">
                        <div className="address">
                            <i className="bi bi-geo-alt"></i>
                            <h4 className="text-title">Location</h4>
                            <p>A1203,4thcross,Benguluru-560078</p>
                        </div>
                        <div className="email">
                            <i className="bi bi-geo-envelope"></i>
                            <h4 className="text-title">Email-id</h4>
                            <p>wong.chungfi499@gmail.com</p>
                        </div>
                        <div className="phone">
                            <i className="bi bi-geo-phone"></i>
                            <h4 className="text-title">Phone</h4>
                            <p>+9435002079</p>
                        </div>
                </div>
            </div>
            <div className="col-md-8 col-lg-8 mt-2 mb-3">
                <div className="card">
                    <div className="card-body">
                        <form autoComplete="off">
                            <div className="from-group mt 2">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" name="name" id="name" className="form-control" required/>  
                            </div>
                            <div className="from-group mt 2">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" className="form-control" required/>  
                            </div>
                            <div className="from-group mt 2">
                                <label htmlFor="message">Message</label>
                                <textarea  name="msg" cols="30" row="5" className="form-control" required>  </textarea>
                            </div>
                            <div className="form-group mt-2">
                                <input type="submit" value="submit" className="btn btn-outline-secondary"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
        </div>
        </section>
    )
}
export default Contact