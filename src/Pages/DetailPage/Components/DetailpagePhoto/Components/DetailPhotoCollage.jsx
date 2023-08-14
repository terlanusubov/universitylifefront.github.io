import React from "react";
import { FaImage } from "react-icons/fa6";
import "../../../Styles/DetailPhotoCollage.css";

const DetailPhotoCollage = () => {
  return (
    <div className="md:my-5 w-full px-0 sm:px-5">
      <div className="lg:grid grid-cols-2 gap-3 md:rounded-xl overflow-hidden md:h-[30vh] lg:h-[45vh] h-[24vh] w-full max-h-[220px] md:max-h-[none]">
        <div className="bg-[#f1f1f1] relative md:h-[30vh] lg:h-[45vh] h-[24vh] max-h-[220px] md:max-h-[none]">
          <div>
            <button
              type="button"
              data-role="none"
              className="slick-arrow slick-prev slick-disabled"
              //   style="display:block"
            >
              Previous
            </button>
            <div></div>
            <button
              type="button"
              data-role="none"
              className="slick-arrow slick-next"
              //   style="display:block"
            >
              Next
            </button>
          </div>
          <div className="absolute bottom-2 flex justify-between z-[2] w-full md:w-auto px-2 md:bottom-4 md:px-2.5">
            <div className="block"></div>
            <div className="bg-white left-4 md:px-3 md:py-2 py-1 px-2 rounded flex items-center cursor-pointer">
              <div className="w-5 h-5 inline-block">
                <FaImage></FaImage>
              </div>
              <div className="flex justify-between">
                <p className="content-font pl-2">See all 25 images</p>
              </div>
            </div>
          </div>
        </div>
        <ul className="md:grid grid-cols-2 h-full gap-x-3 gap-y-3 hiddens">
          <li className="bg-[#f1f1f1] flex justify-center items-center lg:h-[22vh] relative te-property-img">
            <img
              alt=""
              title=""
              sizes="(max-width: 768px) 50vw, 10vw"
              src="https://cdn.universityliving.com/fit-in/1920x0/filters:no_upscale()/filters:format(webp)/cms/zu5Zj39s9LoNnj3sjlwvTr1bHU4NyR.jpg"
              decoding="async"
              data-nimg="fill"
              className="object-cover cursor-pointer "
            />
          </li>
          <li className="bg-[#f1f1f1] flex justify-center items-center lg:h-[22vh] relative te-property-img">
            <img
              alt=""
              title=""
              sizes="(max-width: 768px) 50vw, 10vw"
              src="https://cdn.universityliving.com/fit-in/1920x0/filters:no_upscale()/filters:format(webp)/cms/zu5Zj39s9LoNnj3sjlwvTr1bHU4NyR.jpg"
              decoding="async"
              data-nimg="fill"
              className="object-cover cursor-pointer "
            />
          </li>
          <li className="bg-[#f1f1f1] flex justify-center items-center lg:h-[22vh] relative te-property-img">
            <img
              alt=""
              title=""
              sizes="(max-width: 768px) 50vw, 10vw"
              src="https://cdn.universityliving.com/fit-in/1920x0/filters:no_upscale()/filters:format(webp)/cms/zu5Zj39s9LoNnj3sjlwvTr1bHU4NyR.jpg"
              decoding="async"
              data-nimg="fill"
              className="object-cover cursor-pointer "
            />
          </li>
          <li className="bg-[#f1f1f1] flex justify-center items-center lg:h-[22vh] relative te-property-img">
            <img
              alt=""
              title=""
              sizes="(max-width: 768px) 50vw, 10vw"
              src="https://cdn.universityliving.com/fit-in/1920x0/filters:no_upscale()/filters:format(webp)/cms/zu5Zj39s9LoNnj3sjlwvTr1bHU4NyR.jpg"
              decoding="async"
              data-nimg="fill"
              className="object-cover cursor-pointer "
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default DetailPhotoCollage;
