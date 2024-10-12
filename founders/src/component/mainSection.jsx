import profile from '../assets/profiler.jpg'
import videoImage from '../assets/videoImg.png'
import lineJustAboveTestimonial from '../assets/lineJustAboveTestimonial.png'
import bgImg from '../assets/bg-img.png'
import logo from '../assets/logo1.png'
import founderFriday from '../assets/founderFriday.png'
import lineAcrossLanding from '../assets/lineAcrossLanding.jpg'
import mswitch from '../assets/mswitch.png'
import tree from '../assets/tree.png'
import solana from '../assets/Solana.png'
import boldspace from '../assets/boldspace.png'
import bend1 from '../assets/bend1.png'
import bend2 from '../assets/bend2.png'
import bend3 from '../assets/bend3.png'
import bend4 from '../assets/bend4.png'



function mainSection(){
        const names = ['Mr Belba Ngoy', 'Mr Belba Ngoy', 'Mr Belba Ngoy']
        const offerDatas = ['Monthly Meetups', 'Diverse Network', 'Knowledge Sharing', 'Collaboration   Opportunities', 'Community Support']
    return <>
    <div className='pt-14 z-10'>
        {/* Connect, Collaborate, innovate */}
        <div className='md:flex'>
            <div className='my-10 w-full md:my-5 pt-14 ps-10 w-1/3'>
                <small>Join our premier monthly meetup for startup founders and tech visionaries</small>
                <h3 className='text-violet-700'>Connect, Collaborate, innovate</h3>
                <p className='t'>Every last Friday of the month, we bring together the brightest minds in our local tech ecosystem. 
                Whether you're a seasoned entrepreneur or just starting your journey, 
                    Founder's Friday is your launchpad for new ideas, valuable connections, and game-changing opportunities.
                </p>
                <div className='mt-5'>
                    <button className='border-2 border-violet-800 rounded-full p-2'>Register for our next event <i className="bi bi-chevron-double-right"></i> </button>
                </div>
                <div className='mt-1'>
                    <small>Join Us for our next meetup on the 26th of July 2024</small>
                </div>
                <div className='flex gap-5 mt-5'>
                    <img src={mswitch} alt=""  width={40}/>
                    <img src={tree} alt=""  width={40}/>
                    <img src={boldspace} alt=""  width={40}/>
                    <img src={solana} alt=""  width={40}/>
                </div>
                <div className='mt-3'>
                    <strong>Become a collaborator today <i class="bi bi-box-arrow-up-right"></i></strong>
                </div>
            </div>
            <div className='md:w-full flex align-end relative'>
                <img src={lineAcrossLanding} alt="" width={`70%`}/>
                <div className='md:absolute top-2'> 
                    <img src={bend1} alt="" width={`50%`} className='relative top-20 left-20'/>
                    <img src={bend2} alt="" width={`50%`}  className='relative bottom-20 left-64'/>
                    <img src={bend3} alt="" width={`30%`}  className='relative bottom-32 left-8'/>
                    <img src={bend4} alt=""  width={`20%`}  className='relative bottom-32 left-32'/>
                </div>
            </div>
        </div>




        {/* Who are we  */}
        <div className='px-5 md:flex justify-around'>
            <div>
                <img src={founderFriday} alt="" />
            </div>
            <div className='md:flex flex-col justify-center align-center'>
                {/* <div>  */}
                    <h3>Who are we</h3>
                    <p>Born from the vibrant startup ecosystem of Abuja, we recognized <br />
                    the need for a consistent, high-quality networking platform where <br />
                    founders, innovators, and tech enthusiasts could connect, share <br /> ideas, and foster collaboration.</p>
                    <div className=''>
                        <button className='border bg-violet-700 border-violet-700 text-white px-7 py-1 rounded-full'>Register <i className="bi bi-arrow-right"></i></button>
                        <button className='border border-violet-700 bg-white text-violet-700 px-7 py-1 '>Donate</button>
                    </div>
                    <div className='mt-5'>
                        <strong>Founder's Friday is more than just a meetup — it's a movement.</strong>
                    </div>
                {/* </div> */}
            </div>
        </div>


        {/* What we offer */}

        <div className='px-5 mt-20'>
            <h3 className='text-center'>What we offer</h3>
            {offerDatas.map((offerData)=>(
                <div className='px-5'>
                    <div className='flex justify-between my-4'>
                        {/* (i)dot, h3 ,p i */}
                        <i className="bi bi-circle-fill"></i>
                        <h4>{offerData}</h4>
                        <p>Our cornerstone event, held on the last Friday of every month, 
                            featuring keynote speakers,<br /> panel discussions, and ample networking opportunities.</p>
                        <i className="bi bi-plus-lg"></i>
                    </div> 
                    <div>
                        <hr />
                    </div>
                </div>
            ))}
        </div>


        {/*What happens at Founders Friday  */}
        <div>
            <div className='md:flex justify-between'>
                <div>
                    <strong>Founders Friday</strong>
                    <h1>What Happens At <br />Founders Friday</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis. 
                        Nulla nibh lorem, facilisis vel est at, vehicula dignissim lacus. 
                        Cras sagittis imperdiet dolor, eget accumsan leo suscipit id.
                        Maecenas ut ante quis quam lobortis consequat eu id turpis. 
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
                        <button className='px-3 py-1 border rounded-full bg-violet-700 text-white'>Learn More ---</button>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </div>


        {/* Sponsor */}
        <div>
            <div className='md:flex justify-between'>
                <div className=''>
                    <strong className='text-violet-700'>Sponsor the next Friday</strong>
                    <h3>Why Sponsor <br />Founders Friday?</h3>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis. 
                        Nulla nibh lorem, facilisis vel est at, vehicula dignissim lacus. 
                        Cras sagittis imperdiet dolor, eget accumsan leo suscipit id. 
                        Maecenas ut ante quis quam lobortis consequat eu id turpis. 
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
                </div>
            </div>
            <div className='md:flex justify-between'>
                <div className='md:grid grid-cols-2 gap-5'>
                    <div>
                        <div className='border'>
                            {/* border-violet-700 rounded-full */}
                            <h4>Networking Opportunites</h4>
                            <p>Connect with industry leaders, founders, and potential partners.</p>
                        </div>
                        <div>
                            <h4>Community Impact</h4>
                        </div>
                    </div>
                    <div>
                        <p>Brand Association</p>
                    </div>
                </div>
                <div>
                    <strong>How to Sponsor</strong>
                    <i>Ready to make an impact</i>
                    <p>Fill out the form below or contact us at [contact email/phone number] to learn more about how you can sponsor the next Founders Friday</p>
                    <div>

                    </div>
                </div>
            </div>
        </div>

        {/* Going to Kaduna */}
        <div className='my-10'>
            <div className='relative'>
                <img src={bgImg} alt="" width={`100%`}/>
                <div className='absolute top-0 md:top-24 text-white'>
                    <div className='px-5 md: flex justify-between gap-5'>
                        <div>
                            <h3>Founders Friday is coming to</h3>
                            <h1 className='text-violet-700'>Kaduna</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac <br /> rutrum felis. 
                                Nulla nibh lorem, facilisis vel est at, vehicula dignissim <br /> lacus. Cras sagittis imperdiet dolor, 
                                eget accumsan leo suscipit id. <br />Maecenas ut ante quis quam lobortis consequat eu id turpis. 
                                Pellentesque habitant morbi tristique senectus et <br />netus et malesuada fames ac turpis egestas
                            </p>
                            <button className='border border-violet-700 text-white px-7 py-1 rounded-full'>Register <i className="bi bi-arrow-right"></i></button>
                        </div>
                        <div>
                            <img src={logo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* Roadmap */}
        <div className="px-5 my-10">
            <div>
                <h3>Register And Be Part of Our Community</h3>
                <p>Join our community of over 1000+ founders, developers, and tech junkies in general.Be inspired by people who live to inspire!</p>
            </div>
            <div>
                <img src={lineJustAboveTestimonial} alt="" width={`100%`}/>
            </div>
            <div className='my-10'>
                <button className="px-14 bg-white text-violet-700 py-2">Register Now</button>
            </div>
        </div>


        {/* Video Proof */}
        <div className="md:flex justify-between px-5 gap-5">
            <div>
                <img src={videoImage} alt="" />
            </div>
            <div className='flex justify-center flex-col'>
                
                <strong>At Founder’s Friday, Every Friday Is a Learning Experience!</strong>
                <p>Join us in our mission to transform ideas into impact and shape the future of Nigeria’s startup landscape.</p>
                <div>
                <button className="bg-violet-700 text-white py-2 px-8 border rounded-full">Register <i className="bi bi-arrow-right"></i></button>
                </div>
                
            </div>
        </div>
        

        {/* Testimonials Section */}
        <div className="md:flex justify-center">
            <div>
                <div className="my-14">
                    <div className=""><h3 className="text-center">What Do Our Attendees Have To Say?</h3></div>
                    <div>
                        <p className="text-center">Well See For Yourself!</p>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className="md:flex justify-evenly gap-14">
                    {names.map((name)=>(
                        <div className="text-center">
                            <div className="flex justify-center">
                            <img src={profile} alt=""  width="200px"/>
                            </div> 
                            <strong>{name}</strong>
                            <p>Always a remarkable experience for my team and myself</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>


        {/* FAQs Section */}
        <div className='my-10 md:px-10'>
            <h3 className="">FAQs</h3>
            <div className="px-11 md: flex justify-evenly gap-11">
                <div>Lorem ipsum dolor sit amet, consectetur adi elit.</div>
                <div>Lorem ipsum dolor sit amet, consectetur adi elit.</div>
            </div>
        </div>
    </div>
    </>
}

export default mainSection