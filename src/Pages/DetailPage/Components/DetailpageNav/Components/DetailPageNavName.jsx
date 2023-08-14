import React from "react";
/////////
import "../../../Styles/DetailpageNavName.css";
/////////
const DetailPageNavName = () => {
  return (
    <div className="bg-gray-100 py-3">
      <div className="px-5">
        <nav className="bg-grey-light rounded-md w-full">
          <ol className="list-reset flex text-xs space-x-1.5 overflow-x-auto no-scrollbar">
            <li className="whitespace-nowrap text-gray-900 hover:underline-offset-auto">
              <a href="/">Home</a>
            </li>
            <li>
              <span className="text-gray-500 mx-1">/</span>
            </li>
            <li className="whitespace-nowrap text-gray-900 hover:underline-offset-auto">
              <a href="/country/united-kingdom">United Kingdom</a>
            </li>
            <li>
              <span className="text-gray-500 mx-1">/</span>
            </li>
            <li className="whitespace-nowrap text-gray-900 hover:underline-offset-auto">
              <a href="/united-kingdom/city/nottingham">Nottingham</a>
            </li>
            <li>
              <span className="text-gray-500 mx-1">/</span>
            </li>
            <li className="whitespace-nowrap text-gray-500 hover:underline-offset-auto">
              <span>Nottingham Two</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};
export default DetailPageNavName;
