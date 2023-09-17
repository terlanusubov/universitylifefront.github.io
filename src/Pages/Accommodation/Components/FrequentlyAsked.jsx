import React from 'react'
import { Link } from 'react-router-dom'

const FrequentlyAsked = () => {


  return (
    <div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
            <div>
                <p className='text-base font-semibold mt-4 mb-3'>Frequently Asked Questions</p>
                <p className='text-sm'> Check out these answers to common questions and go to <br /> <Link><span className='font-bold text-customOrange'>Help Centre </span></Link>for more details.</p>
            </div>
            <div>
                <div className='text-customOrange w-full mb-1 font-semibold text-lg md:text-xl lg:text-2xl'>
                    <p>FAQs</p>
                </div>
                <div>
                    <details className='cursor-pointer'>
                        <summary className='text-gray-700 text-sm font-semibold flex justify-between py-3 transition'>
                        Q. Can I find a bookstore near the student accommodation in London?
                        {/* <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> */}
                        </summary>
                        <p className='rounded-2xl leading-6 pt-2 pb-4 text-sm'>
                        A. Yes, many of the student accommodations are near the bookstore, you can go there in your leisure time whenever so want to sit quietly and enjoy some reading time.
                        </p>
                    </details>
                    <div className='border-dashed border border-gray-100 my-0.5'></div>
                </div>
                <div>
                    <details className='cursor-pointer'>
                        <summary className='text-gray-700 text-sm font-semibold flex justify-between py-3 transition'>
                        Q. Are there any properties in London that accommodate teenagers?
                        {/* <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> */}
                        </summary>
                        <p className='rounded-2xl leading-6 pt-2 pb-4 text-sm'>
                        A. It’s rare when the properties accept lodgers aged under 18. However, there are a few properties that can help with this. In case of further clarification on this, we advise you to submit your application so that our Accommodation experts can give you feedback on the same.
                        </p>
                    </details>
                    <div className='border-dashed border border-gray-100 my-0.5'></div>
                </div>
                <div>
                    <details className='cursor-pointer'>
                        <summary className='text-gray-700 text-sm font-semibold flex justify-between py-3 transition'>
                        Q. Is it possible to choose my roommate?
                        {/* <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> */}
                        </summary>
                        <p className='rounded-2xl leading-6 pt-2 pb-4 text-sm'>
                        A. Yes, but it still depends on the timing of the booking. For example, some accommodations have all-male and all-female array flats and suites. Moreover, if you want to move in with a specific person, inform our Accommodation Experts; they will try to help you with your personal preferences.
                        </p>
                    </details>
                    <div className='border-dashed border border-gray-100 my-0.5'></div>
                </div>
                <div>
                    <details className='cursor-pointer'>
                        <summary className='text-gray-700 text-sm font-semibold flex justify-between py-3 transition'>
                        Q. Can I move in during weekends?
                        {/* <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> */}
                        </summary>
                        <p className='rounded-2xl leading-6 pt-2 pb-4 text-sm'>
                        A. Yes, it is possible. But try to check in during the weekdays as some accommodations open their booking on weekends. If you select any of these properties, we suggest you manage your travel to check in on a weekday. Still, If you feel caught up with your stuff, no worries; we will work weekend arrival with the property. Just update our Accommodation Experts.
                        </p>
                    </details>
                    <div className='border-dashed border border-gray-100 my-0.5'></div>
                </div>
                <div>
                    <details className='cursor-pointer'>
                        <summary className='text-gray-700 text-sm font-semibold flex justify-between py-3 transition'>
                        Q. Can I know the variety of student rooms in London?
                        {/* <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> */}
                        </summary>
                        <p className='rounded-2xl leading-6 pt-2 pb-4 text-sm'>
                        A. You get three types of rooms:- Sharing Type: This type of room accommodates two or more students. It has a single room with a washroom and a kitchen with few common spaces. En-suite Type: This type of room gives you complete privacy with a bedroom and bathroom while you have shared the kitchen only. Studios: This type of room solely belongs to one person where you get a bedroom, kitchen, and washroom.
                        </p>
                    </details>
                    <div className='border-dashed border border-gray-100 my-0.5'></div>
                </div>
                <div>
                    <details className='cursor-pointer'>
                        <summary className='text-gray-700 text-sm font-semibold flex justify-between py-3 transition'>
                        Q. What factors should I consider for student accommodation in London?
                        {/* <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> */}
                        </summary>
                        <p className='rounded-2xl leading-6 pt-2 pb-4 text-sm'>
                        A. The points you should consider are to look for places that offer all-around bills, accommodation with all amenities, and accommodation near the premises of your university.
                        </p>
                    </details>
                    <div className='border-dashed border border-gray-100 my-0.5'></div>
                </div>
                <div>
                    <details className='cursor-pointer'>
                        <summary className='text-gray-700 text-sm font-semibold flex justify-between py-3 transition'>
                        Q. Do the accommodations offer facilities for disabled tenants?
                        {/* <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> */}
                        </summary>
                        <p className='rounded-2xl leading-6 pt-2 pb-4 text-sm'>
                        A. Yes, we do acknowledge specially-abled people. For example, we offer various rooms for students with hearing or visual impairments, mobility issues, wheelchairs, etc.
                        </p>
                    </details>
                    <div className='border-dashed border border-gray-100 my-0.5'></div>
                </div>
                <div>
                    <details className='cursor-pointer' onClick={() => console.log(123)}>
                        <summary className='text-gray-700 text-sm font-semibold flex justify-between py-3 transition'>
                        Q. Do I need to pay the rent prior I check in?
                        {/* <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> */}
                        </summary>
                        <p className='rounded-2xl leading-6 pt-2 pb-4 text-sm'>
                        A. If not the lump sum, you must pay at least the first installment of your rent. So, you need to spend some amount otherwise you can’t move in. So, your first installment is like the security that makes the process transparent.
                        </p>
                    </details>
                    <div className='border-dashed border border-gray-100 my-0.5'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FrequentlyAsked