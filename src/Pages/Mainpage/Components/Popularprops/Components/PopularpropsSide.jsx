import React from 'react'

const PopularpropsSide = () => {
  return (
    <div className='popular_props_sidebar max-[1024px]:hidden'>
        <div className="popular_props_sidebar_container">
            <div className="options_sidebar flex flex-col gap-[30px] shadow-[0_0.5px_2px_0.1px_rgba(0,0,0,0.3)] rounded-[20px] p-[40px] max-[1400px]:p-[25px] max-[1350px]:p-[20px] max-[1150px]:p-[10px]">
                <button className="option bg-customBlue text-white w-[300px] max-[1500px]:w-[250px] max-[1350px]:w-[220px] max-[1185px]:w-[200px] max-[1130px]:w-[180px] max-[1090px]:w-[170px] rounded-[20px]  h-[50px]">
                    London
                </button>
                <button className="option w-[300px] max-[1500px]:w-[250px] max-[1350px]:w-[220px] max-[1185px]:w-[200px] max-[1130px]:w-[180px] max-[1090px]:w-[170px] rounded-[20px]   h-[50px]">
                    Leeds
                </button>
                <button className="option w-[300px] max-[1500px]:w-[250px] max-[1350px]:w-[220px] max-[1185px]:w-[200px] max-[1130px]:w-[180px] max-[1090px]:w-[170px] rounded-[20px]   h-[50px]">
                    Nottingham
                </button>
                <button className="option w-[300px] max-[1500px]:w-[250px] max-[1350px]:w-[220px] max-[1185px]:w-[200px] max-[1130px]:w-[180px] max-[1090px]:w-[170px] rounded-[20px]   h-[50px]">
                    Cardiff
                </button>
                <button className="option w-[300px] max-[1500px]:w-[250px] max-[1350px]:w-[220px] max-[1185px]:w-[200px] max-[1130px]:w-[180px] max-[1090px]:w-[170px] rounded-[20px]   h-[50px]">
                    Sheffield
                </button>
            </div>
        </div>
    </div>
  )
}

export default PopularpropsSide