import profile from '../assets/profiler.jpg'
import videoImage from '../assets/videoImg.png'
import lineJustAboveTestimonial from '../assets/lineJustAboveTestimonial.png'
import bgImg from '../assets/bg-img.png'
import logo from '../assets/logo1.png'

function mainSection(){
        const names = ['Mr Belba Ngoy', 'Mr Belba Ngoy', 'Mr Belba Ngoy']
  
    return <>
    <div>
        <div>
            <div className='relative'>
                <img src={bgImg} alt="" width={`100%`}/>
                <div className='absolute top-24 text-white'>
                    <div className='px-5 md: flex justify-between gap-5'>
                        <div>
                            <h3>Founders Friday is coming to</h3>
                            <h1 className='text-violet-700'>Kaduna</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac <br /> rutrum felis. 
                                Nulla nibh lorem, facilisis vel est at, vehicula dignissim <br /> lacus. Cras sagittis imperdiet dolor, 
                                eget accumsan leo suscipit id. <br />Maecenas ut ante quis quam lobortis consequat eu id turpis. 
                                Pellentesque habitant morbi tristique senectus et <br />netus et malesuada fames ac turpis egestas
                            </p>
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
                <button className="bg-violet-700 text-white py-2 px-8 border rounded-full">Register <i class="bi bi-arrow-right"></i></button>
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