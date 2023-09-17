import React from "react";
// import "../Error/Error.css";
import { FaChevronLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const Error = () =>
{
  const navigate = useNavigate();
    const goBack = () => {
      navigate('/')
    }
    return (
      <>
        <div className="Error h-screen  text-center flex flex-col justify-center items-center ">
          <div>
            <h1 className="next-error-h1 mb-5 font-medium text-9xl leading-11">
              404
            </h1>
            <div className="ErrorWord inline-block">
              <h2 className="font-medium mb-3 text-3xl leading-7">Not Found</h2>
              <p className="font-normal text-sm">
                The resource requested could not be found on this server!
              </p>
            </div>
          </div>
          <div className="ErrorBtn border border-solid border-opacity-30 border-black text-sm font-normal m-5 rounded-md">
            <button
              className="flex text-center items-center  p-2.5"
               onClick={goBack}
            >
              <FaChevronLeft className="ErrorIcon mr-1" /> Go to
              <span className="font-medium ml-1">Back</span>
            </button>
          </div>
        </div>
      </>
    );
  };
export default Error;
