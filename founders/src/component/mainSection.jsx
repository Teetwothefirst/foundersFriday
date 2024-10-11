import profile from '../assets/profiler.jpg'
import videoImage from '../assets/videoImg.png'

function mainSection(){
        const names = ['Mr Belba Ngoy', 'Mr Belba Ngoy', 'Mr Belba Ngoy']
  
    return <>
    <div>
        {/* Video Proof */}
        <div className="md:flex justify-between px-5">
            <div>
                <img src={videoImage} alt="" />
            </div>
            <div>
                <strong>At Founder’s Friday, Every Friday Is a Learning Experience!</strong>
                <p>Join us in our mission to transform ideas into impact and shape the future of Nigeria’s startup landscape.</p>
                <button className="bg-violet-700 text-white py-2 px-8 border rounded-full">Register <i class="bi bi-arrow-right"></i></button>
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
        <div className='my-10'>
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