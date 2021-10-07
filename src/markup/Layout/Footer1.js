import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Footer1 extends Component {
    render() {
        return (
            <>
                <footer className="site-footer text-uppercase">
                    <div className="footer-top bg-primary">
                        <div className="container" >
                            <div className="row">
                                <div className="col-5 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                                    <div className="widget widget_services border-0">
                                        <h5 className="m-b30 text-white">Company</h5>
                                        <ul>
                                        <li className="active"><Link to={'./'}><span className="ti-home"></span></Link></li>
											<li><Link to={'./about-1'}>About Us </Link></li>
                                            <li><Link to={'./service'}>Services</Link></li>
                                            <li><Link to={'./expertise'}>Products</Link></li>
                                            <li><Link to={'./portfolio-grid-4'}>Our Works</Link></li>
                                            <li><Link to={'./blog-classic-grid'}>Blogs</Link></li>
                                            {/* <li><Link to={"#"}>More</Link></li>
                                            <li><Link to={"#"}>Sample More</Link></li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-7 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                                    <div className="widget widget_services border-0">
                                        <h5 className="m-b30 text-white">Useful Link</h5>
                                        <ul>
                                            <li><Link to={"#"}>Expertise</Link></li>
                                            <li><Link to={"#"}>Project Management</Link></li>
                                            <li><Link to={"#"}>Faq's</Link></li>
                                            {/* <li><Link to={"#"}>Portfolio</Link></li>
                                            <li><Link to={"#"}>Project Details</Link></li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4">
                                    <div className="widget widget_getintuch">
                                        <h5 className="m-b30 text-white ">Contact us</h5>
                                        <ul>
                                            <li><i className="ti-location-pin"></i><strong>address</strong>DLF Cybercity, 6th Floor, Patia</li>
                                            <li><i className="ti-mobile"></i><strong>phone</strong><a href="tel:8763889700">( +91 ) 8763889700</a></li>
                                            <li><i className="ti-email"></i><strong>email</strong><a href="mailto:teceads@gmail.com"> teceads@gmail.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4 ">
                                    <div className="widget">
                                        <h5 className="m-b30 text-white">Subscribe To Our Newsletter</h5>
                                        <p className="text-capitalize m-b20">If you have any questions, you can contact with us so that we can give you a satisfying answer. Subscribe to our newsletter to get our latest products.</p>
                                        <div className="subscribe-form m-b20">
                                            <form className="dzSubscribe" action="script/mailchamp.php" method="post">
                                                <div className="dzSubscribeMsg"></div>
                                                <div className="input-group">
                                                    <input name="dzEmail" required="required" className="form-control" placeholder="Your Email Id" type="email" />
                                                    <span className="input-group-btn">
                                                        <button name="submit" value="Submit" type="submit" className="site-button">Subscribe</button>
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
                                        <ul className="list-inline m-a0">
                                            <li>{/* Link to={'https://www.facebook.com/teceads/'}*/}<a href="https://www.facebook.com/teceads/" target="_blank" className="site-button facebook circle mr-1"><i className="fa fa-facebook"></i></a>{/*</Link>*/}</li> 
                                            <li>{/*Link to={"#"}*/}<a href="#" target="_blank" className="site-button google-plus circle mr-1"><i className="fa fa-google-plus"></i></a>{/*</Link>*/}</li>
                                            <li>{/*Link to={"#"}*/}<a href="https://www.linkedin.com/company/teceads-solutions/?originalSubdomain=in" target="_blank" className="site-button linkedin circle mr-1"><i className="fa fa-linkedin"></i></a>{/*</Link>*/}</li>
                                            <li>{/*Link to={"#"}*/}<a href="https://www.instagram.com/teceads/?hl=en" target="_blank" className="site-button instagram circle mr-1"><i className="fa fa-instagram"></i></a>{/*</Link>*/}</li>
                                            <li><Link to={"#"} className="site-button twitter circle mr-1"><i className="fa fa-twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom bg-primary">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 text-left "> <span>Copyright © 2021 Teceads</span> </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 text-right ">
                                    <div className="widget-link ">
                                        <ul>
                                            <li><Link to={'./sitemap-routes'}> SiteMap</Link></li>
                                            <li className="ml-1"><Link to={"#"}> Privacy Policy</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer1;