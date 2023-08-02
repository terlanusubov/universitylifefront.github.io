import "./OurServices.css";
import "./OurServicesrespon.css";

// Link
import { Link } from "react-router-dom"

// Icons
import { HiOutlineChevronRight } from "react-icons/hi";

// Image
import Accoommodation from "../Assets/accommodation.jpg";

const OurServices = () => {
    return (
        <section className='our-services'>
            <div className='our-services-title'>
                <h3>Our Services</h3>
                <Link to="/services">View All</Link>
            </div>
            <div className="our-services-boxs">
                <div className="our-services-box">
                    <img src={Accoommodation} alt="" />
                    <div className="our-services-box-title">
                        <h4>Accommodation <HiOutlineChevronRight className="our-services-icon" /></h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="our-services-box">
                    <img src={Accoommodation} alt="" />
                    <div className="our-services-box-title">
                        <h4>Accommodation <HiOutlineChevronRight className="our-services-icon" /></h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="our-services-box">
                    <img src={Accoommodation} alt="" />
                    <div className="our-services-box-title">
                        <h4>Accommodation <HiOutlineChevronRight className="our-services-icon" /></h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurServices;