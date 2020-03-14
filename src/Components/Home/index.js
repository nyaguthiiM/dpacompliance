import React, { Component } from 'react';

class Home extends Component {
  state = {
    api: []
  };
  render() {
    return (
      <div id="tm-bg">
        <div id="tm-wrap">
            <div className="tm-main-content">
                <div className="container tm-site-header-container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-md-col-xl-6 mb-md-0 mb-sm-4 mb-4 tm-site-header-col">
                            <div className="tm-site-header">
                                <h1 className="mb-4">DPAComply</h1>
                                <img src="{% static 'img/underline.png' %}" className="img-fluid mb-4"/>
                                <p>Kenya Data Protection Compliance Check</p>
                            </div>                        
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="content">
                                <div className="grid">
                                    <div className="grid__item" id="home-link">
                                        <div className="product">
                                            <div className="tm-nav-link">
                                                <i className="fas fa-home fa-3x tm-nav-icon"></i>
                                                <span className="tm-nav-text"></span>
                                                <div className="product__bg"></div>        
                                            </div>                                    
                                            <div className="product__description">
                                                <div className="row mb-3">
                                                    <div className="col-12">
                                                        <h2 className="tm-page-title">Data Protection Bill(DPA) signed into law</h2>
                                                    </div>
                                                </div>                                        
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                                        <img src="{% static 'img/uhuru.jpg' %}" className="img-fluid mb-3"/>
                                                         <link rel="stylesheet" href="{% static 'css/tooplate-style.css' %}"/>
                                                        <p>Give a background of the Data Protection Act of Kenya.</p>
    {/* <!--                                                    <p> For now</p>--> */}
                                                    </div>
                                                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
    {/* <!--                                                    <p>Donec eu lectus ligula. Aenean pulvinar dolor et massa lacinia rhoncus sit amet sed mauris. Aliquam dictum nibh et consequat finibus.</p>--> */}
    {/* <!--                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In magna mauris, malesuada ut diam eu, pellentesque fringilla orci.</p>--> */}
    {/* <!--                                                    <img src="{% static 'img/welcome-2.jpg' %}" className="img-fluid">--> */}
                                                    </div>                                        
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="grid__item" id="team-link">
                                        <div className="product">
                                            <div className="tm-nav-link">
                                                <i className="fas fa-users fa-3x tm-nav-icon"></i>
                                                <span className="tm-nav-text">Account</span>
                                                <div className="product__bg"></div>            
                                            </div>                                     
                                            <div className="product__description">
                                                <div className="p-sm-4 p-2">
                                                    <div className="row mb-3">
                                                        <div className="col-12">
                                                            <h2 className="tm-page-title">Access your account</h2>
                                                        </div>
                                                    </div>
                                                    <div className="row tm-reverse-sm">
                                                        <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8">
    {/* <!--                                                        <p className="mb-4">Vestibulum aliquet, arcu accumsan lobortis bibendum, justo velit efficitur lorem, at pulvinar mi justo nec lacus. Nullam et libero aliquet, luctus nunc sit amet, tincidunt ligula. Sed finibus ante sed tortor cursus, nec malesuada lectus interdum.</p>-->
    <!--                                                        <p className="mb-4">Sed ex turpis, vulputate in efficitur id, lobortis eget nibh. Pellentesque maximus ipsum eget velit imperdiet sodales. Suspendisse in blandit mi.</p>--> */}
                                                            <p className="mb-5">Welcome to DPAcomply,  the virtual presence for checking your compliance to the Data Protection Act.</p>
                                                            <a href="{% url 'register_user'%}" className="btn tm-btn-gray">Register</a>
                                                             <p className="mb-5">Already Have an account? Login below</p>
                                                            <a href="{% url 'login'%}" className="btn tm-btn-gray">Login </a>
                                                        </div>                                                
                                                        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-lg-0 mb-sm-4 mb-4">
    {/* <!--                                                        #<img src="{% static 'img/team.jpg' %}" className="img-fluid">--> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="grid__item">
                                        <div className="product">
                                            <div className="tm-nav-link">
                                                <i className="fas fa-handshake fa-3x tm-nav-icon"></i>
                                                <span className="tm-nav-text">Mapping Tool</span>
                                                <div className="product__bg"></div>             
                                            </div>                                                                 
                                            <div className="product__description">
                                                <div className="p-sm-4 p-2">
                                                    <div className="row mb-3">
                                                        <div className="col-12">
                                                            <h2 className="tm-page-title">Data Flow Map</h2>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <div className="col-12">
                                                            <p>Will give some details about the tool. Register on our site to access this tool.</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="p-sm-4 p-2 tm-img-container">
                                                                <div className="tm-img-slider" id="tmImgSlider">
                                                                 <img src="{% static 'img/gallery-img-01-tn.jpg'%}" alt="Image" className="tm-slider-img"/>
                                                                 <img src="{% static 'img/gallery-img-02-tn.jpg'%}" alt="Image" className="tm-slider-img"/>
                                                                 <img src="{% static 'img/gallery-img-03-tn.jpg'%}" alt="Image" className="tm-slider-img"/>
                                                                 <img src="{% static 'img/gallery-img-04-tn.jpg'%}" alt="Image" className="tm-slider-img"/>
                                                                 <img src="{% static 'img/gallery-img-05-tn.jpg'%}" alt="Image" className="tm-slider-img"/>
                                                                 <img src="{% static 'img/gallery-img-06-tn.jpg'%}" alt="Image" className="tm-slider-img"/>
                                                                </div>
                                                            </div>  
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>       
                                        </div>
                                    </div>
    
                                    <div className="grid__item">
                                        <div className="product">
                                            <div className="tm-nav-link">
                                                <i className="fas fa-comments fa-3x tm-nav-icon"></i>
                                                <span className="tm-nav-text">Contact</span>
                                                <div className="product__bg"></div>             
                                            </div>                                                              
                                            <div className="product__description">
                                                <div className="pt-sm-4 pb-sm-4 pl-sm-5 pr-sm-5 pt-2 pb-2 pl-3 pr-3">
                                                    <div className="row mb-3">
                                                        <div className="col-12">
                                                            <h2 className="tm-page-title">Contact Us</h2>        
                                                        </div>
                                                    </div>
                                                    <div className="row mb-4">
                                                        <div className="col-12">
                                                            <p>Work in progress, coming soon.....</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <form action="index.html" method="post" className="contact-form">
                                                                <div className="row">
                                                                    <div className="form-group col-md-6 col-lg-6 col-xl-6">
                                                                      <input type="text" id="contact_name" name="contact_name" className="form-control" placeholder="Name"  required/>
                                                                    </div>
                                                                    <div className="form-group col-md-6 col-lg-6 col-xl-6 tm-col-email">
                                                                      <input type="email" id="contact_email" name="contact_email" className="form-control" placeholder="Email"  required/>
                                                                    </div>
                                                                </div>                                                        
                                                                <div className="form-group">
                                                                  <textarea id="contact_message" name="contact_message" className="form-control" rows="9" placeholder="Message" required></textarea>
                                                                </div>
                                                                <button type="submit" className="btn btn-primary tm-btn-submit">Submit</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>                                            
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>                       
                        </div>
                    </div>                
                </div>
                <footer>
                    <p class="small tm-copyright-text">Copyright &copy; <span class="tm-current-year">2018</span> e-kraal innovation hub.
                    
                    </p>
                </footer>
            </div> 
        </div>
         </div>
    )}
}
export default Home