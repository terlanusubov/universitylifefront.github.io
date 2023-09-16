import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/accomodation.scss'

const Best = () => {
    const [read, setRead] = useState(true);
    const readToogle = () => {
        setRead(!read)
    }
    return (
        <div className='best pt-7'>
            <div className={read ? 'h-[9rem] relative overflow-hidden' : ''}>
                <p className='text-xl font-bold'>Best London Accommodation For Students</p>
                <div className='text-sm'>
                    <p className='my-2'>Finding different options for <span className='font-bold'>student accommodation in London</span>  is no muss and no fuss with University living.</p>
                    <p className='my-2'>The student aspiring to complete their further study at any top university in London can reach our accommodation experts, who will help them find the perfect match for their homely stay.</p>
                    <p className='my-2'>All our accommodations are offered at an affordable rate with no compromise on the safety and security of the students.</p>
                    <p className='my-2'>All prices include utility bills, which means there is no extra cost other than paying rent. You can find many types of rooms in London, <Link className='font-bold text-customOrange hover:underline'>United Kingdom</Link> , like private rooms, shared rooms, studio rooms, etc.</p>
                    <p className='my-2'>All the <span className='font-bold'>student apartments in London</span> are near some of the best universities in town, namely the <span className='font-bold'>University of London, University College London</span> and more.</p>
                    <p className='my-2'>All the accommodations listed on our website are of leading-edge quality.</p>
                    <p className='my-2'>One can choose from many options that meet their desires and are not heavy on the pocket.</p>
                    <p className='my-2'>The accommodations in London are designed to provide comfort to the students. Some of the best-recommended accommodations in London are <Link className='font-bold text-customOrange hover:underline'>Emily Bowes Court</Link>, <Link className='font-bold text-customOrange hover:underline'>Moonraker Point</Link>, <Link className='font-bold text-customOrange hover:underline'>Quantum Court</Link>, <Link className='font-bold text-customOrange hover:underline'>Blithehale Court</Link>, <Link className='font-bold text-customOrange hover:underline'>Arbour House</Link>, <Link className='font-bold text-customOrange hover:underline'>Camden Hawley Crescent</Link>, <Link className='font-bold text-customOrange hover:underline'>Stratford Poland House</Link>, <Link className='font-bold text-customOrange hover:underline'>Chelsea Lightfoot Hall</Link> and <Link className='font-bold text-customOrange hover:underline'>Glassyard Building</Link>.</p>
                </div>
                <br />
                <p className='text-xl font-bold'>Top Demanded Student Accommodation in London</p>
                <p className='my-2 text-sm'>
                    London offers students so many different types of accommodation, and there are three types of accommodation available in London which you can find easily.</p>
                <p className='my-2 text-sm'><span className='font-bold'>1.Student Housing -</span> Student housing is very comfortable and safe and offers a good price for student rooms. The accommodation is near the university where you can go on foot and reach faster. The rooms are fully furnished, with a study desk & chair, wardrobe, bathroom, kitchen etc. The best part is the amenities; they give students a feel of staying in comfort.</p>
                <p className='my-2 text-sm'><span className='font-bold'>2.Private Apartments -</span> Renting a private apartment as a student is not difficult in London with so many choices; whether you want an apartment alone or to share it also, you have all these choices with <span className='font-bold'> student housing in London</span>. They come as bedroom apartments, and you can select the type of apartment per your needs and requirements. All the apartments are spacious and have a big bedroom, bathroom, kitchen and shared space.</p>
                <p className='my-2 text-sm'><span className='font-bold'>3.University Halls -</span> Universities provide university halls to students who stay in the university, and it is a preferred student accommodation in London by first and second-year students. University hall is a type of residence rented out to students studying at a particular university to make an easy and comfortable settlement.</p>
                <br />
                <p className='text-xl font-bold'>Finest 5 Areas For Students To Live In London</p>
                <br />
                <p className='my-2 text-sm font-bold'>1. Central London</p>
                <p className='text-sm'>Central London is one of the best areas for <Link className='font-bold text-customOrange hover:underline'>student accommodation</Link>. There is a lot of student housing available in this area at an affordable price for students and it's close to markets, shops, etc. If you want to stay in the best place in Central London, look no further than <Link className='font-bold text-customOrange hover:underline'>Vita Student Lewisham Exchange</Link>.</p>
                <p className='my-2 text-sm font-bold'>2. Blackhorse Ln</p>
                <p className='text-sm'>Blackhorse Ln is lined up with some amazing accommodations for students who are looking for safe, secure and affordable homes and are close to many universities, so if you want a living space in this area, <Link className='font-bold text-customOrange hover:underline'>Mannequin House</Link> is the best accommodation to find in Greater London.</p>
                <p className='my-2 text-sm font-bold'>3. London Kingsland Rd</p>
                <p className='text-sm'>London Kingsland Rd is one of the best and most affordable areas for student housing, and it is in a location close to universities, shops, markets, etc. One of the best places to live in this area is <Link className='font-bold text-customOrange hover:underline'>iQ Hoxton</Link>.</p>
                <p className='my-2 text-sm font-bold'>4. London Victoria Rd</p>
                <p className='text-sm'>London Victoria Rd is a safe and friendly location for students to live and study with so many things available to do in the area. You will find amazing houses to rent and one of the top accommodations in this area is <Link className='font-bold text-customOrange hover:underline'>Chapter Ealing</Link>.</p>
                <p className='my-2 text-sm font-bold'>5. Silicon Wy Rd London</p>
                <p className='text-sm'>Silicon Wy Rd London is an ideal location for a student who wants accommodation in London as it is not far from universities. Silicon Wy Rd London is also a happening hub for students as there are many things to do and see around this area where you can stay at <Link className='font-bold text-customOrange hover:underline'>iQ Shoreditch</Link>.</p>
                <br />
                <p className='text-xl font-bold'>Ideal cost of living in London</p>
                <br />
                <p className='text-sm my-2'>London is one of the ideal locations for students to live. Still, the <Link className='font-bold text-customOrange hover:underline'>cost of living in London</Link> will depend upon your lifestyle together, and it's advisable to have £1300–2000 a month, including your expenses for Food: £100 – 400 / month and Travel: £150 – 250 / month.</p>
                <p className='text-sm my-2'>You will find there are three best types of student accommodation in London. And, with so many varieties of student housing, you can also find affordable and budget-friendly ones. We have a list of the best apartments and student rooms on our site. You can find many of them close to your university without hassle.</p>
                <p className='text-sm my-2'>The <span className='font-bold'>cost of food in London</span> will depend upon where and what you eat; we gave you the monthly spending on food costs in London. For instance, you can save money by cooking food at home as it will cost £ 15-20 per day, and if you like to eat outside, you will have to spend on average £ 30-40 per day.</p>
                <p className='text-sm my-2'>The <span className='font-bold'>cost of tuition fees in London</span> will be included in the cost of living. So, while you plan and calculate your budget, find out how much your tuition fee is. Your tuition fee will depend on the type of course and university you choose to study in London.</p>
                <br />
                <p className='text-xl font-bold'>Best travel transportation service in London</p>
                <br />
                <p className='text-sm my-2'>There are many modes of public transportation in London like the bus, tram and tube.</p>
                <p className='text-sm my-2'>London Transportation England's transportation system has made a remarkable achievement in terms of connectivity and easy accessibility.</p>
                <p className='text-sm my-2'>Hence, one can say that the transportation system of London is well planned concerning students studying at different universities in London.</p>
                <p className='text-sm my-2'>Along with that, it also has a dedicated metro system that connects almost all the zones of London.</p>
                <p className='text-sm my-2'>It not only covers all the different zones of London but also its city centres.</p>
                <p className='text-sm my-2'><span className='font-bold'>Buses:</span> London's bus network operates continuously and without interruption. If you are a student looking for some cost-effective means of transportation, then this is the perfect transit choice for you.</p>
                <p className='text-sm my-2'><span className='font-bold'>Tubes:</span> People in London travel by tube as it is one of the cheapest and most affordable ones.</p>
                <p className='text-sm my-2'><span className='font-bold'>Cycling:</span> If you are a cycling freak and like exploring the city on two wheels, you can consider the option of buying your bicycle or renting one to explore the local city of London.</p>
                <br />
                <p className='text-base font-bold'>London Discount Cards For Students: The best Travel Card is Oyster Card</p>
                <br />
                <p className='text-sm my-2'>Student oyster cards are for students who are above 18 and studying at a university they can be used as a travel card on buses, trams, etc with a 30% discount.</p>
                <p className='text-sm my-2'>There are also travel student discount cards in London like railcards, students-specific cards, etc.</p>
                <br />
                <p className='text-xl font-bold'>Famous Universities of London</p>
                <br />
                <p className='my-2 text-sm font-bold'>1. <Link className='font-bold text-customOrange hover:underline'>Imperial College London</Link></p>
                <p className='text-sm'>Imperial College London is built on its commitment to academic excellence. It has top-class facilities, teaching methods and cutting-edge research. The college excels in scientific advancement and giving birth to students who have a societal impact on their professional careers.</p>
                <p className='my-2 text-sm font-bold'>2. <Link className='font-bold text-customOrange hover:underline'>UCL</Link></p>
                <p className='text-sm'>UCL is located in the city's heart and gives students access to explore and get network opportunities. It's long been a tradition that UCL excels in research and teaching, making it to the top. The college attracts the best mind from all over the world and prepares students for the challenges ahead.</p>
                <p className='my-2 text-sm font-bold'>3. <Link className='font-bold text-customOrange hover:underline'>King's College London</Link></p>
                <p className='text-sm'>King's College London is located in the heart of London and a reputable institution providing the best education in diverse programs and excelling in academics, research and teaching. The college believes in offering an inclusive environment to foster students through knowledge, enhance their skills to excel in careers and make a meaningful impact in society.</p>
                <p className='my-2 text-sm font-bold'>4. <Link className='font-bold text-customOrange hover:underline'>The LSE</Link></p>
                <p className='text-sm'>The LSE was established in 1895 with excellence in economics, law and politics. It is at the heart of London, offering a diverse and vibrant environment attracting many student communities. The college holds an expert in the field of social sciences. It is the best institution for students who want a career in this field.</p>
                <p className='my-2 text-sm font-bold'>5. <Link className='font-bold text-customOrange hover:underline'>The University of London</Link></p>
                <p className='text-sm'>The University of London was established in 1836. It is a prestigious university offering students many programs in various fields. It has a reputation for global excellence and is recognized for providing a high standard of education. It has state-of-the-art facilities to provide learning and career opportunities.</p>
                <br />
                <p className='text-xl font-bold'>London Tourist Attractions</p>
                <br />
                <p className='my-2 text-sm font-bold'>The Tower of London</p>
                <p className='text-sm'>This place is home to fortresses, crown homes, tales, and ravens, with many tours and activities available to see and explore London.</p>
                <p className='my-2 text-sm font-bold'>Warner Bros. Studio</p>
                <p className='text-sm'>If you are a harry potter fan, you can visit this studio and explore all the fun things you love about Harry Potter by taking tours, participating in activities, etc.</p>
                <p className='my-2 text-sm font-bold'>London Eye</p>
                <p className='text-sm'>If you want to fly high on Europe’s tallest Ferris Wheel, you should visit this iconic place and check out its panoramic views from above the River Thames.</p>
                <p className='my-2 text-sm font-bold'>Wax Museum Madame Tussauds</p>
                <p className='text-sm'>Madame Tussauds is one of the famous attractions in London where it displays a famous wax museum of celebrities from all over the world.</p>
                <p className='my-2 text-sm font-bold'>Westminster Abbey</p>
                <p className='text-sm'>Westminster Abbey is one of the top churches in the UK known for its royal ceremonies, wedding and coronations.</p>
                <br />
                <p className='text-xl font-bold'>About London</p>
                <br />
                <p className='text-sm my-2'>London is a culturally diverse city with 400,000 international students seeking to study here from different countries.</p>
                <p className='text-sm my-2'>There are endless things to do in London for students, whether it's culture, food or nightlife! The city attracts students to this vibrancy to experience the life of studying in London. It is one of the world's most popular study destinations.</p>
                <p className='text-sm my-2'>Being one of the global education centres, it hosts a larger population of students than any city in the world. It is home to some of the world's top universities.</p>
                <p className='text-sm my-2'>London is the vibrant capital of England and a melting point of cultural diversity. It is a global metropolis with a rich heritage evident in its historical landmarks. London is for those shopaholics; it is a shopping paradise. The transport systems are convenient and efficient, easily navigable through Double Decker buses and Underground.</p>
                <p className='text-sm my-2'>London is connected by train to many other cities such as <Link className='font-bold text-customOrange hover:underline'>Birmingham</Link>, <Link className='font-bold text-customOrange hover:underline'>Coventry</Link>, <Link className='font-bold text-customOrange hover:underline'>Oxford</Link>, etc. and a good thing, which means you can stay in these cities if you study in London too. Student accommodation is a bit dear in London, so you can also look for student housing in these cities.</p>
                <br />
                <p className='text-xl font-bold'>History of London</p>
                <br />
                <p className='text-sm my-2'>The history of the city of London is over 2000 years old and has witnessed many historic events which makes it stand out as the historical country of the world.</p>
                <p className='text-sm my-2'>The early settlements were discovered near the Thames River in London. It was known as Roman London (47-410 AD), then Anglo-Saxon London( 5th century-1066), Norman and Medieval London (15 century) and began the modern history of London.</p>
                <p className='text-sm my-2 font-bold'>Facts of London City</p>
                <ul style={{ listStyleType: "circle" }}>
                    <li className='text-sm my-2 ms-4'>London is home to three of the world's top 10 museums and galleries</li>
                    <li className='text-sm my-2 ms-4'>There are best 4 UNESCO world heritage sites in London city</li>
                    <li className='text-sm my-2 ms-4'>Around 300 top languages are spoken in London</li>
                    <li className='text-sm my-2 ms-4'>London houses best 800 bookshops and 325 public libraries</li>
                    <li className='text-sm my-2 ms-4'>Big Ben is 164 years old and survived a long time</li>
                </ul>
                <div className={read?'h-[9rem] absolute top-0 z-[1] grad-color w-full':'w-0 h-0'}></div>
            </div>
            <button onClick={readToogle} className={read ? 'text-sm my-2 font-bold text-customOrange' : 'text-sm my-2 font-bold text-[#574F86]'}>{read ? 'Read more' : 'Read less'}</button>
        </div>
    )
}

export default Best