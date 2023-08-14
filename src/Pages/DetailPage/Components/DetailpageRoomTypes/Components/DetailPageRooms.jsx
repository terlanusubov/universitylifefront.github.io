import React from "react";
/////////
import "../../../Styles/DetailPageRooms.css";
/////////
const DetailPageRooms = () => {
  return (
    <div className="mt-5">
      <div>
        <div className="rounded-xl shadow-3xl mb-10">
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-12 lg:col-span-5 relative h-full max-h-[200px] md:max-h-[260px]">
              <img
                alt=""
                sizes="(max-width: 768px) 40vw, 33vw"
                srcset="https://cdn.universityliving.com/cms/54JiMUpawHkRsCsPZSV2CZ6A5CLy4L.png?w=256 256w, https://cdn.universityliving.com/cms/54JiMUpawHkRsCsPZSV2CZ6A5CLy4L.png?w=384 384w, https://cdn.universityliving.com/cms/54JiMUpawHkRsCsPZSV2CZ6A5CLy4L.png?w=640 640w, https://cdn.universityliving.com/cms/54JiMUpawHkRsCsPZSV2CZ6A5CLy4L.png?w=750 750w, https://cdn.universityliving.com/cms/54JiMUpawHkRsCsPZSV2CZ6A5CLy4L.png?w=828 828w, https://cdn.universityliving.com/cms/54JiMUpawHkRsCsPZSV2CZ6A5CLy4L.png?w=1080 1080w, https://cdn.universityliving.com/cms/54JiMUpawHkRsCsPZSV2CZ6A5CLy4L.png?w=1200 1200w, https://cdn.universityliving.com/cms/54JiMUpawHkRsCsPZSV2CZ6A5CLy4L.png?w=1920 1920w"
                src="https://cdn.universityliving.com/cms/54JiMUpawHkRsCsPZSV2CZ6A5CLy4L.png?w=1920"
                width="485"
                height="280"
                decoding="async"
                data-nimg="1"
                class="te-room-img object-cover h-full md:max-h-[260px] w-full rounded-t-xl lg:rounded-tl-xl lg:rounded-tr-none cursor-pointer"
                loading="lazy"
              />
              <div class="absolute bottom-2.5 flex">
                <div class="rounded ml-2 px-1.5 py-0.5 flex bg-black/50 cursor-pointer">
                  <img
                    alt="View all photos"
                    srcset="https://cdn.universityliving.com/files/1669200157285photo.svg?w=32 1x, https://cdn.universityliving.com/files/1669200157285photo.svg?w=48 2x"
                    src="https://cdn.universityliving.com/files/1669200157285photo.svg?w=48"
                    width="20"
                    height="24"
                    decoding="async"
                    data-nimg="1"
                    class="w-[20px] h-[24px]"
                    loading="lazy"
                  />
                  &nbsp;<span class="text-white ml-1">4</span>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7 p-4 pb-0 lg:p-0 lg:pt-4 flex flex-col">
              <div className="text-lg font-bold mb-4 text-gray-800">
                Ensuite Bronze
              </div>
              <div>
                <div className="relative">
                  <div className="md:mr-4 content-font leading-6 text-gray-600 transition-all max-h-[165px] md:max-h-[140px] lg:max-h-[120px] overflow-y-auto">
                    <p>
                      The Bronze room in size 10.5-15 sqm, comes with all the
                      amenities a student needs. The room is fully furnished
                      with an ensuite bathroom, shower, basin, and toilet. The
                      room comes with a communal kitchen and a shared living
                      space. Also, the students living in the apartment get
                      access to all the communal facilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 lg:px-6">
            <div class="border-t border-gray-300 mt-6 mb-3"></div>
            <div class="hidden lg:grid grid-cols-4 gap-4">
              <ul class="col-span-4 md:col-span-3 flex justify-between w-full mt-2.5 mb-2">
                <li class="w-2/12">
                  <p class="content-font text-gray-600 font-bold">
                    Stay Duration
                  </p>
                </li>
                <li class="w-2/6">
                  <p class="content-font text-gray-600 font-bold">Move</p>
                </li>
                <li class="w-2/12">
                  <p class="content-font text-gray-600 font-bold">Occupancy</p>
                </li>
                <li class="w-2/12">
                  <p class="content-font text-gray-600 font-bold">Price</p>
                </li>
                <li class="w-2/12">
                  <p class="content-font text-gray-600 font-bold">Total </p>
                </li>
              </ul>
            </div>
            <div className="DetailPagelastBorder">
              <div className="  border-b border-gray-300  py-5 first:pt-0 space-y-3">
                <div class="grid grid-cols-4 gap-4 items-center">
                  <ul class="ratesMain col-span-4 lg:col-span-3 flex-wrap lg:flex-nowrap flex justify-between w-full lg:items-center">
                    <li
                      class="w-4/12 lg:w-2/12 mb-4 lg:mb-0"
                      data-label="Stay Duration"
                    >
                      <p class="content-font text-gray-600">51 weeks</p>
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
                    <li
                      class="flex-grow lg:flex-grow-0
                          "
                    >
                      <button
                        class="w-full lg:w-36 te-penq te-penq my-1 py-2 rounded-md text-base w-full lg:w-48 bg-white border border-theme-blue text-theme-blue hover:text-white hover:bg-theme-blue focus:bg-white focus:text-theme-blue transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                        type="button"
                      >
                        <div class="flex items-center justify-center gap-2 truncate te-penq">
                          Enquire
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
              </div>
              <div className="  border-b border-gray-300  py-5 first:pt-0 space-y-3">
                <div class="grid grid-cols-4 gap-4 items-center">
                  <ul class="ratesMain col-span-4 lg:col-span-3 flex-wrap lg:flex-nowrap flex justify-between w-full lg:items-center">
                    <li
                      class="w-4/12 lg:w-2/12 mb-4 lg:mb-0"
                      data-label="Stay Duration"
                    >
                      <p class="content-font text-gray-600">51 weeks</p>
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
                    <li
                      class="flex-grow lg:flex-grow-0
                          "
                    >
                      <button
                        class="w-full lg:w-36 te-penq te-penq my-1 py-2 rounded-md text-base w-full lg:w-48 bg-white border border-theme-blue text-theme-blue hover:text-white hover:bg-theme-blue focus:bg-white focus:text-theme-blue transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                        type="button"
                      >
                        <div class="flex items-center justify-center gap-2 truncate te-penq">
                          Enquire
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailPageRooms;
