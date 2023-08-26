import React from 'react'

const SignupButton = () => {
  return (
    <button className='sign_up_btn bg-customOrange text-white w-[125px] h-[40px] rounded-[8px] hover:bg-customLightOrange flex justify-center items-center'>
        <span className="button_text max-[500px]:text-red-700">
        Login / Signup
        </span>
    </button>
  )
}

export default SignupButton