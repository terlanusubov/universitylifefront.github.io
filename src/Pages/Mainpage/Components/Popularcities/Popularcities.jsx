import React,{useState,useEffect} from 'react'

// Components
import Country from './Components/Country'
import { Link } from 'react-router-dom'
// Hooks

// Icons

// Assets
import nybg from './Assets/newyork.jpg'


const Popularcities = () => {

  const [cities,setCities] = useState([])
  
  
  const fetchingTopCities = async () => {
    const firstPromise = await fetch(`${import.meta.env.VITE_API_KEY}/cities?isTop=true`)
    const firstResponse = await firstPromise.json()
    setCities(firstResponse)
  }
  useEffect(() => {
    fetchingTopCities()
  },[])

 

  return (
    <div className='main_page_popular_cities max-w-[1440px] w-[100%] mx-auto max-[1475px]:px-[20px] max-[1024px]:px-[30px]'>
        <div className="popular_cities_title text-[35px] font-[600] max-[1024px]:text-[32px] max-[800px]:text-[28px]  pb-[20px]">
            Top Cities
        </div>
        <div  className='countries_container  grid grid-cols-4 max-[1024px]:grid-cols-2 max-[568px]:grid-cols-1 gap-[13px] gap-x-[20px]'>
           {
            cities.length
            ?
            cities.map((data) => {
              return (
                <Link key={data.id}  to={`/accomodations/page/1/city/${data.id}`}>
                  <div key={data.id} className='country_element rounded-[10px] cursor-pointer overflow-hidden relative' >
                    <div className="country_element_content rounded-[13px] overflow-hidden">
                    <div className="country_element_image rounded-[13px] overflow-hidden max-w-[350px] w-[100%] h-[220px] max-[1024px]:max-w-none">
                        <img src={data.image}  className='w-[100%] h-[100%] object-cover rounded-[13px]  hover:scale-[1.3] duration-[0.3s] ease-in'  alt="" />
                    </div>
                    <div className="flex gap-[10px] flex-col items-start   country_element_text absolute bottom-[30px] left-[30px] bg-white/20 p-[6px] text-white font-[600] rounded-[10px] backdrop-blur-[10px]">
                        <div className="country_name">
                            {data.name}
                        </div>
                        <div className="country_bed_count">
                            {data.bedRoomCount} Beds
                        </div>
                    </div>
                    
                    </div>
                  </div>
                </Link>
              )
            })
            :
            
            <>
            <div className='rounded-[13px] bg-gray-300 animate-pulse overflow-hidden max-w-[350px] w-[100%] h-[220px] max-[1024px]:max-w-none'>
            </div>
            <div className='rounded-[13px] bg-gray-300 animate-pulse overflow-hidden max-w-[350px] w-[100%] h-[220px] max-[1024px]:max-w-none'>
           </div>
            <div className='rounded-[13px] bg-gray-300 animate-pulse overflow-hidden max-w-[350px] w-[100%] h-[220px] max-[1024px]:max-w-none'>
             </div>
             <div className='rounded-[13px] bg-gray-300 animate-pulse overflow-hidden max-w-[350px] w-[100%] h-[220px] max-[1024px]:max-w-none'>
             </div>
            </>
           }
      </div>
    </div>
  )
}

export default Popularcities