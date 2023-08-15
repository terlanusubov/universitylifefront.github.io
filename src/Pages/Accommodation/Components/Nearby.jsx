import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nearby = () => {
    const [more, setMore] = useState(true);
    const moreToogle = () => {
        setMore(!more)
    }
    return (
        <div className='my-7'>
            <div className='flex justify-between mb-6'>
                <p className='text-lg font-semibold'>Nearby Areas</p>
                <button onClick={moreToogle} className='text-base my-2 text-customOrange hover:underline'>{more ? 'Read More' : 'Read Less'}</button>
            </div>
            <div className={more ? 'h-[4rem] overflow-hidden' : ''}>
                <ul>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>East London</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Aldgate</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Acton</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Barbican</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Bastwick St</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Bethnal Green</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Bloomsbury</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Brixton</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Camberwell</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Camden Town</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Canary Wharf</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Chalk Farm</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Chelsea</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Clerkenwell</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Colindale Ave</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Ealing</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>East End</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Edmonton</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Elephant And Castle</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Ewer St</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Farringdon</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Finsbury Park</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Fulham</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Gants Hill</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Graham St</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Greenwich</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Greenwich Peninsula</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Hackney</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Hammersmith</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Harlesden</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Lewisham</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Hoxton</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Shoreditch</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Spitalfields</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Portobello</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Kings Cross</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Old Street</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>White City</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Islington</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>South Bank</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Highbury</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Bankside</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Westminster</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>White Hall</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Piccadilly</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Soho</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Trafalgar Square</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Covent Garden</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Strand</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Fitzrovia</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Holborn</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Southwark</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>South Kensington</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Knightsbridge</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Kensington</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Holland Park</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Marylebone</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Blackheath</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>West London</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>South London</Link>
                    </li>
                    <li className='mr-4 border-r mb-4 px-4 pl-0 border-gray-200 inline-block'>
                        <Link className='font-bold leading-5 text-sm hover:text-customOrange'>Central London</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nearby