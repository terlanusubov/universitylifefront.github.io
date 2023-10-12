import React from "react";

// Components
import Profilepagenav from "./Components/Profilepagenav/Profilepagenav";
import ProfilePageSide from "./Components/Profilepagemain/ProfilePageSide/ProfilePageSide";
import ProfilePageMainContainer from "./Components/Profilepagemain/ProfilPageMainContainer/ProfilePageMainContainer";
// Hooks

// Styles

// Assets

// Redux

const Profilepage = () => {
  return (
    <div className="profile_page bg-[#F9F9F9]">
      <Profilepagenav></Profilepagenav>
      <div className="profile_page_container flex pb-[33px]  px-[5%] max-[1160px]:px-[4%]">
        <ProfilePageSide></ProfilePageSide>
        <ProfilePageMainContainer></ProfilePageMainContainer>
      </div>
    </div>
  );
};

export default Profilepage;
