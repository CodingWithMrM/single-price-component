import React from 'react'

const CardComponent = () => {
    return (
        <div className='w-auto h-full shrink-0 bg-white shadow-[0px_15px_30px_0px_#0051AB26] rounded-lg'>
            {/* first block element */}
            <div className='space-y-2 p-10 flex flex-col w-[331px] md:w-auto '>
                <h2 className=' text-[#2AB3B1] text-lg md:text-2xl font-bold leading-normal tracking-[-0.3px]'>
                    Join our community
                </h2>
                <div className=' text-[#C0DF33] text-sm md:text-lg font-bold leading-normal tracking-[-0.225px]'>
                    30-day, hassle-free money back guarantee
                </div>
                <div className='md:w-[555px] text-[#9AA7BE] text-sm md:text-base font-normal leading-[26px] tracking-[-0.2px]'>
                    Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.
                </div>
            </div>
            {/* the second block */}
            <div className='grid grid-cols-1  md:grid-cols-2 h-full text-white'>
                {/* sign up block */}
                <div className='bg-[#2AB3B1] px-10 py-6 md:p-10 md:rounded-bl-lg flex justify-center'>
                    <div className='md:space-y-5'>
                        <h2 className=' text-lg font-bold leading-normal tracking-[0.225px]'>Monthly Subscription</h2>
                        <div className='flex items-center gap-3 '>
                            <p className='text-[2rem] font-bold leading-normal tracking-[-0.4px]'>$29</p>
                            <span className='font-normal leading-[26px] tracking-[-0.0125rem] opacity-50'>per month</span>
                        </div>
                        <p className='whitespace-nowrap'>Full access for less than $1 a day</p>
                        <button className='w-[237px] mt-5 h-12 shrink-0 bg-[#C0DF33] shadow-[0px_10px_10px_0px_#0000001A] rounded-[5px] font-bold  leading-normal tracking-[-0.2px]'>Sign Up</button>
                    </div>
                </div>
                {/* why us */}
                <div className='bg-[#4ABFBC] px-10 py-6 md:p-10  md:rounded-br-lg'>
                    <div className='space-y-5'>
                        <p className='font-bold text-xl'>
                            Why us
                        </p>
                        <div className='md:w-[238px]  text-sm font-light  tracking-[0.175px] opacity-75'>
                            <ul className="space-y-1 text-sm font-light opacity-90">
                                <li>Tutorials by industry experts</li>
                                <li>Peer & expert code review</li>
                                <li>Coding exercises</li>
                                <li>Access to our GitHub repos</li>
                                <li>Community forum</li>
                                <li>Flashcard decks</li>
                                <li>New videos every week</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardComponent