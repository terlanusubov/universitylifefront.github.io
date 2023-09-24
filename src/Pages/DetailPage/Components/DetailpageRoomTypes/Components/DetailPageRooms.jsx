import React, { useEffect, useState } from "react";
/////////
import "../../../Styles/DetailPageRooms.css";
import Booking from "../../DetailpageAboutCountry/Components/Booking";
/////////
const DetailPageRooms = ({userId,bedRoomTypeIds,bedRoomId,currentFilterIndex,typeIds}) => {
  const [bedRoomRooms,setBedRoomRooms] = useState([]);
  const getBedroomsByTypeId = async () => {
      console.log(bedRoomId);
      const promise = await fetch(import.meta.env.VITE_API_KEY + `/bedroomroomtype/getbedroomroomtype?id${bedRoomId}`)
      const {response} = await promise.json();
      console.log(currentFilterIndex);
      console.log(response);
      setBedRoomRooms(response);
  }

  useEffect(function() {
    getBedroomsByTypeId();
  },[])



  return (
    <div className="mt-5">
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-12 lg:col-span-5 relative h-full max-h-[200px] md:max-h-[260px]">
              <img
                alt=""
                sizes="(max-width: 768px) 40vw, 33vw"
                src={'https://cdn.universityliving.com/cms/yV9M9JSr5knfW5pHcovliEgJUE6sWX.webp?w=640'}
                width="485"
                height="280"
                decoding="async"
                data-nimg="1"
                className="te-room-img object-cover h-full md:max-h-[260px] w-full rounded-t-xl lg:rounded-tl-xl lg:rounded-tr-none cursor-pointer"
                loading="lazy"
              />
              <div className="absolute bottom-2.5 flex">
                <div className="rounded ml-2 px-1.5 py-0.5 flex bg-black/50 cursor-pointer">
                  <img
                    alt="View all photos"
                    srcSet="https://cdn.universityliving.com/files/1669200157285photo.svg?w=32 1x, https://cdn.universityliving.com/files/1669200157285photo.svg?w=48 2x"
                    src="https://cdn.universityliving.com/files/1669200157285photo.svg?w=48"
                    width="20"
                    height="24"
                    decoding="async"
                    data-nimg="1"
                    className="w-[20px] h-[24px]"
                    loading="lazy"
                  />
            
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7 p-4 pb-0 lg:p-0 lg:pt-4 flex flex-col">
              <div className="text-lg font-bold mb-4 text-gray-800">
                  {'Test Name'}
              </div>
              <div>
                <div className="relative">
                  <div className="md:mr-4 content-font leading-6 text-gray-600 transition-all max-h-[165px] md:max-h-[140px] lg:max-h-[120px] overflow-y-auto">
                    <p>
                     {' Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, aperiam.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      {
        bedRoomRooms.length
        ?
        bedRoomRooms.map((data) => {
          return (
            <Booking  bedRoomId={data.bedRoomId} type={data.name} userId={userId} key={data.id} id={data.id}  price={300} description={`space. Also, the students living in the apartment get access to all the communal facilities.`} bedroomName={data.bedRoomName} images={["https://cdn.universityliving.com/cms/54JiMUpawHkRsCsPZSV2CZ6A5CLy4L.png?w=1920"]}/>
          )
        })
        :
        <div className="rounded-[10px] m-[10px] mb-[20px]  w-[100%] h-[200px] animate-pulse bg-gray-300"></div>
      }
    </div>
  );
};
export default DetailPageRooms;
