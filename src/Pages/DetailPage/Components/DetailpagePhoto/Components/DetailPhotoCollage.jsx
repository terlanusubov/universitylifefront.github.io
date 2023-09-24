import React from "react";
import { FaImage } from "react-icons/fa6";
/////////
import "../../../Styles/DetailPhotoCollage.css";
/////////
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import { useDispatch, useSelector } from "react-redux";
import { detailSliderSlice } from "../../../../../Redux/slider";

const DetailPhotoCollage = ({photos}) => {
 const modalState = useSelector(state => state.detailSliceReducer.isSliceModalOpen)
  const dispatch = useDispatch();

  const openModalHandler = () => {
    dispatch(detailSliderSlice.actions.setSliderModal(true));
  }
  
  const closeModalHandler = () => {
    dispatch(detailSliderSlice.actions.setSliderModal(false));
  }

  return (
    <>
  {
    modalState
    &&
    <>
      <div className="image_container fixed z-20 top-[45%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
      <Carousel  showIndicators={true} dynamicHeight={true} className="w-[650px]  h-[330px] relative" infiniteLoop={true} showArrows={true}  showThumbs={false} >
         {
          photos.length
          ?
          photos.map((data,index) => {
            return (
        <div className="max-w-[300px] w-full h-[400px]  " key={index}>
          <img className="object-cover" src={data} alt="" />
        </div>
            )
          })
          :
          ''
         }
      </Carousel>
      </div>
    <div className="fixed bg-[#0000006d] top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center" onClick={closeModalHandler}>
    </div>
    </>
  }
  
    <div className="md:my-5 w-full px-0 sm:px-5">
      <div className="lg:grid grid-cols-2 gap-3 md:rounded-xl overflow-hidden h-[400px] max-[1024px]:h-[325px]   w-full  md:max-h-[none]">
        <div className="bg-[#f1f1f1] relative  md:max-h-[none]">
          <div>
            <div>
            </div>
              <Carousel showIndicators={true} dynamicHeight={true} className="w-[100%] h-[100%] relative" infiniteLoop={true} showArrows={true}  showThumbs={false} >
              {
          photos
          ?
          photos.map((data,index) => {
            return (
        <div key={index} className="max-w-[300px] w-full h-[400px] max-[1024px]:h-[325px]">
          <img className="object-cover" src={data} alt="" />
        </div>
            )
          })
          :
          ''
         }

              </Carousel>

            {/* <div>
                  <img
                    alt="Nottingham Two Nottingham 0"
                    sizes="(max-width: 768px) 50vw, 40vw"
                    srcset="https://cdn.universityliving.com/fit-in/256x0/filters:no_upscale()/filters:format(webp)/cms/TV2uZnmzr73Wa9VvtCK8t9mGqQ5sSV.jpg 256w, https://cdn.universityliving.com/fit-in/384x0/filters:no_upscale()/filters:format(webp)/cms/TV2uZnmzr73Wa9VvtCK8t9mGqQ5sSV.jpg 384w, https://cdn.universityliving.com/fit-in/640x0/filters:no_upscale()/filters:format(webp)/cms/TV2uZnmzr73Wa9VvtCK8t9mGqQ5sSV.jpg 640w, https://cdn.universityliving.com/fit-in/750x0/filters:no_upscale()/filters:format(webp)/cms/TV2uZnmzr73Wa9VvtCK8t9mGqQ5sSV.jpg 750w, https://cdn.universityliving.com/fit-in/828x0/filters:no_upscale()/filters:format(webp)/cms/TV2uZnmzr73Wa9VvtCK8t9mGqQ5sSV.jpg 828w, https://cdn.universityliving.com/fit-in/1080x0/filters:no_upscale()/filters:format(webp)/cms/TV2uZnmzr73Wa9VvtCK8t9mGqQ5sSV.jpg 1080w, https://cdn.universityliving.com/fit-in/1200x0/filters:no_upscale()/filters:format(webp)/cms/TV2uZnmzr73Wa9VvtCK8t9mGqQ5sSV.jpg 1200w, https://cdn.universityliving.com/fit-in/1920x0/filters:no_upscale()/filters:format(webp)/cms/TV2uZnmzr73Wa9VvtCK8t9mGqQ5sSV.jpg 1920w"
                    src="https://cdn.universityliving.com/fit-in/1920x0/filters:no_upscale()/filters:format(webp)/cms/TV2uZnmzr73Wa9VvtCK8t9mGqQ5sSV.jpg"
                    width="640"
                    height="360"
                    decoding="async"
                    data-nimg="1"
                    class="te-property-img w-full object-cover cursor-pointer md:h-[45vh] h-[24vh] md:rounded-l-xl max-h-[220px] md:max-h-[none] object-top"
                    />
                  </div> */}
          </div>
          <div className="absolute bottom-2 flex justify-between z-[2] w-full md:w-auto px-2 md:bottom-4 md:px-2.5">
            <div className="block"></div>
            <div className="bg-white  left-4 md:px-3 md:py-2 py-1 px-2 rounded flex  items-center cursor-pointer">
              <div className=" inline-block">
                <FaImage></FaImage>
              </div>
              {/* <div className="flex justify-between">
                <p className="content-font pl-2">See all 25 images</p>
              </div> */}
            </div>
          </div>
        </div>
        <ul className="md:grid grid-cols-2 grid-rows-2  h-full  hiddens ">
          {
            photos
            &&
            photos.map((data,index) => {
              return (
            <li key={index}  className="bg-[#f1f1f1]  flex justify-center items-center relative te-property-img" onClick={openModalHandler} >

            <img
              alt=""
              title=""
              sizes="(max-width: 768px) 50vw, 10vw"
              src={data}
              decoding="async"
              data-nimg="fill"
              className="object-cover cursor-pointer p-[5px]"
              />
          </li>
              )
            })
          }
        </ul>
      </div>
    </div>
    </>
  );
};
export default DetailPhotoCollage;
