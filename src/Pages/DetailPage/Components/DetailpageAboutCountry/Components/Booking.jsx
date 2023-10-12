import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import { ModalSlice } from "../../../../../Redux/ModalSlice";

const Booking = ({
  images,
  bedroomName,
  description,
  price,
  userId,
  type,
  bedRoomId,
  id,
  bedRoomRoomIds,
  bedRoomType,
}) => {
  const dispatch = useDispatch();
  const [addBookLoading, setAddBookLoading] = useState(false);
  const addBookHandler = async () => {
    if (!localStorage.getItem("tokenId")) {
      dispatch(ModalSlice.actions.openModal());
      return false;
    }
    setAddBookLoading(true);
    const promise = await fetch(import.meta.env.VITE_API_KEY + "/book", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        userId: +userId,
        bedRoomRoomId: +id,
      }),
    });
    const result = await promise.json();

    if (result.statusCode == 200) {
      toast.success("Booked Successfully");
    } else if (result.statusCode == 208) {
      toast.error("This Item Already Exist in Your Bookings");
    }
    setAddBookLoading(false);
  };

  return (
    <div className="rounded-xl shadow-3xl mb-10">
      <div className="grid grid-cols-12 gap-x-4">
        <div className="col-span-12 lg:col-span-5 relative h-full ">
          <Carousel infiniteLoop showThumbs={false}>
            {images?.length &&
              images.map((src, index) => {
                return (
                  <div
                    key={index}
                    className="image max-w-[400px] w-full h-[260px]"
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={src}
                      alt=""
                    />
                  </div>
                );
              })}
          </Carousel>
          {/* <img
                alt=""
                sizes="(max-width: 768px) 40vw, 33vw"
                src={'https://cdn.universityliving.com/cms/yV9M9JSr5knfW5pHcovliEgJUE6sWX.webp?w=640'}
                width="485"
                height="280"
                decoding="async"
                data-nimg="1"
                className="te-room-img object-cover h-full md:max-h-[260px] w-full rounded-t-xl lg:rounded-tl-xl lg:rounded-tr-none cursor-pointer"
                loading="lazy"
              /> */}
          <div className="absolute bottom-2.5 flex">
            <div className="rounded ml-2  flex bg-black/50 cursor-pointer">
              {/* <img
                    alt="View all photos"
                    srcSet="https://cdn.universityliving.com/files/1669200157285photo.svg?w=32 1x, https://cdn.universityliving.com/files/1669200157285photo.svg?w=48 2x"
                    src="https://cdn.universityliving.com/files/1669200157285photo.svg?w=48"
                    width="20"
                    height="24"
                    decoding="async"
                    data-nimg="1"
                    className="w-[20px] h-[24px]"
                    loading="lazy"
                  /> */}
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7  pb-0 lg:p-0  flex flex-col">
          <div className="text-lg font-bold  text-gray-800">{bedroomName}</div>
          <div>
            <div className="relative">
              <div className="md:mr-4 content-font leading-6 text-gray-600 transition-all max-[1224px]:text-[15px]">
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-6">
        <div className="border-t border-gray-300 mt-6 mb-3"></div>
        <div className="hidden lg:grid grid-cols-4 gap-4">
          <ul className="col-span-4 md:col-span-3 flex justify-between w-full mt-2.5 mb-2">
            <li className="w-2/12">
              <p className="content-font text-gray-600 font-bold">
                Bedroom Name
              </p>
            </li>

            <li className="w-2/12">
              <p className="content-font text-gray-600 font-bold">Type</p>
            </li>
            <li className="w-2/12">
              <p className="content-font text-gray-600 font-bold">Price</p>
            </li>
          </ul>
        </div>
        <div className="DetailPagelastBorder">
          <div className="  border-b border-gray-300  py-5 first:pt-0 space-y-3">
            <div className="grid grid-cols-4 gap-4 items-center">
              <ul className="ratesMain col-span-4 lg:col-span-3 flex-wrap lg:flex-nowrap flex justify-between w-full lg:items-center">
                <li
                  className="w-4/12 lg:w-2/12 mb-4 lg:mb-0"
                  data-label="Stay Duration"
                >
                  <p className="content-font text-gray-600">{bedroomName}</p>
                </li>
                <li className="w-4/12 lg:w-2/12" data-label="Occupancy">
                  <p className="content-font text-gray-600">{bedRoomType}</p>
                </li>
                <li className="w-4/12 lg:w-2/12" data-label="Total">
                  <p className="content-font text-gray-600">Weekly {price} £</p>
                </li>
              </ul>
              <ul className="col-span-4 lg:col-span-1 flex justify-end gap-x-3 flex-row-reverse lg:flex-row">
                <li className="flex-grow lg:flex-grow-0">
                  <button
                    onClick={addBookHandler}
                    className="my-1 py-2 rounded-md text-base w-full lg:w-48 bg-customOrange hover:bg-customLightOrange text-white hover:bg-theme-orange-hover border border-customOrange transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    type="button"
                  >
                    <div className="flex items-center justify-center gap-2 truncate ">
                      {addBookLoading ? (
                        <div role="status">
                          <svg
                            aria-hidden="true"
                            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-customOrange"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                          <span className="sr-only">Loading...</span>
                        </div>
                      ) : (
                        "Instant Book"
                      )}
                    </div>
                  </button>
                </li>
              </ul>
            </div>
            <div className="text-theme-blue content-font bg-gray-100 py-1.5 px-2.5 font-semibold w-full flex items-center rounded-md"></div>
          </div>
          {/* <div className="  border-b border-gray-300  py-5 first:pt-0 space-y-3">
          <div class="grid grid-cols-4 gap-4 items-center">
            <ul class="ratesMain col-span-4 lg:col-span-3 flex-wrap lg:flex-nowrap flex justify-between w-full lg:items-center">
              <li
                class="w-4/12 lg:w-2/12 mb-4 lg:mb-0"
                data-label="Stay Duration"
              >
                <p class=" text-gray-600">51 weeks</p>
              </li>
              <li class="w-8/12 lg:w-2/6 mb-4 lg:mb-0" data-label="Move">
                <div class="content-font text-gray-600">
                  <div class="lg:pr-3">Sep 9, 2023 - Aug 31, 2024</div>
                </div>
              </li>
              <li class="w-4/12 lg:w-2/12" data-label="Occupancy">
                <p class="content-font text-gray-600">Single</p>
              </li>
              <li class="w-4/12 lg:w-2/12" data-label="Price">
                <p class="content-font text-gray-600">189&nbsp;£/week</p>
              </li>
              <li class="w-4/12 lg:w-2/12" data-label="Total">
                <p class="content-font text-gray-600">9.639&nbsp;£</p>
              </li>
            </ul>
            <ul class="col-span-4 lg:col-span-1 flex justify-end gap-x-3 flex-row-reverse lg:flex-row">
              <li class="flex-grow lg:flex-grow-0">
                <button
                  class="w-full lg:w-36  my-1 py-2 rounded-md text-base w-full lg:w-48 bg-theme-orange text-white hover:bg-theme-orange-hover border border-theme-orange transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  type="button"
                >
                  <div class="flex items-center justify-center gap-2 truncate ">
                    Instant Book
                  </div>
                </button>
              </li>
            </ul>
          </div>
          <div class="text-theme-blue content-font bg-gray-100 py-1.5 px-2.5 font-semibold w-full flex items-center rounded-md">
            <span class="uppercase mr-6">Offer 1</span>
            <span>
              Book a room and get summer stay at £99 per week offer*
            </span>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Booking;
