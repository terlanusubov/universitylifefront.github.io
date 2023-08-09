import "./Styles/Services.css";
import './Styles/Servicesrespon.css';

// Icons
import { HiOutlineChevronRight } from "react-icons/hi";

// Image
import Accoommodation from "../Services/Assets/accommodation.jpg"

const Services = () => {
    return (
        <>
            <section className='services-banner'>
                <div className="services-img">
                    {/* <img src={ServicesBanner} alt="" /> */}
                    <div className="services-banner-title">
                        <h1>Essential services for safe and happy journey</h1>
                        <button>Explore All Services</button>
                    </div>
                </div>
                {/* //////////////////////// */}
                <div className='services'>
                    <div className='services-title'>
                        <h3>Our Services</h3>
                    </div>
                    <div className="services-boxs">
                        <div className="services-box">
                            <img src={Accoommodation} alt="" />
                            <div className="services-box-title">
                                <h4>Accommodation <HiOutlineChevronRight className="services-icon" /></h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="services-box">
                            <img src={Accoommodation} alt="" />
                            <div className="services-box-title">
                                <h4>Accommodation <HiOutlineChevronRight className="services-icon" /></h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="services-box">
                            <img src={Accoommodation} alt="" />
                            <div className="services-box-title">
                                <h4>Accommodation <HiOutlineChevronRight className="services-icon" /></h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="services-box">
                            <img src={Accoommodation} alt="" />
                            <div className="services-box-title">
                                <h4>Accommodation <HiOutlineChevronRight className="services-icon" /></h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="services-box">
                            <img src={Accoommodation} alt="" />
                            <div className="services-box-title">
                                <h4>Accommodation <HiOutlineChevronRight className="services-icon" /></h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="services-box">
                            <img src={Accoommodation} alt="" />
                            <div className="services-box-title">
                                <h4>Accommodation <HiOutlineChevronRight className="services-icon" /></h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;