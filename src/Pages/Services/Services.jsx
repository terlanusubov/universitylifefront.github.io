import "./Styles/Services.css";
import './Styles/Servicesrespon.css';

// Icons
import { HiOutlineChevronRight } from "react-icons/hi";

// Image
import ServicesBanner from "../Services/Assets/servicesbanner.jpg";
import { useEffect, useState } from "react";

const Services = () => {

    const [services, setServices] = useState([]);
    const [servicesLoading, setServicesLoading] = useState(false)
    const fetchServices = async () => {
        setServicesLoading(true)
        const promise = await fetch(import.meta.env.VITE_API_KEY + '/ourservice')
        const response = await promise.json();
        setServices(response)
        setServicesLoading(false)
    }

    useEffect(() => {
        fetchServices();
    }, [])

    return (
        <>

            <section className='services-banner '>
                <div className="services-img ">
                    <img src={ServicesBanner} alt="" className="object-cover" />
                    <div className="services-banner-title">
                        <h1>The services we provide for a comfortable university life</h1>
                        {/* <button>Explore All Services</button> */}
                    </div>
                </div>
                {/* //////////////////////// */}
                <div className='services'>
                    <div className='services-title'>
                        <h3>Our Services</h3>
                    </div>
                    <div className="services-boxs duzeltbunu  max-[320px]:p-0">
                        {
                            services.length
                                ?
                                services.map((data) => {
                                    return (
                                        <div className="services-box" key={data.id}>
                                            <img src={data.image} alt="" className="object-cover" />
                                            <div className="services-box-title">
                                                <h4>{data.name} <HiOutlineChevronRight className="services-icon" /></h4>
                                                <p>{data.description}</p>
                                            </div>
                                        </div>

                                    )
                                })
                                :
                                servicesLoading
                                ?
                                <>
                                    <div className="animate-pulse rounded-[5px] duration-[.2s] w-[100%] h-[128px] bg-gray-200"></div>
                                    <div className="animate-pulse rounded-[5px] duration-[.2s] w-[100%] h-[128px] bg-gray-200"></div>
                                    <div className="animate-pulse rounded-[5px] duration-[.2s] w-[100%] h-[128px] bg-gray-200"></div>

                                </>
                                :
                                'There is no Service'
                        }

                    </div>
                </div>
            </section>
            {/* <div className="w-[100px] h-[100px] animate-pulse bg-red-500"></div> */}
        </>
    )
}

export default Services;