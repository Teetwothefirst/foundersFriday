import logo from '../assets/logo.jpg'
import facebook from '../assets/facebook.png'
import instagram from '../assets/Instagram.png'
import x from '../assets/x.png'


function Footer(){
    return <>
    
    <div className="mt-2.5 border-t-2 border-indigo-400">
        <div className='flex'>
            <img src={logo} alt="Founders Friday Logo" />
            <div className='flex items-center'>
                <strong className=''>Founders <br/> Friday</strong>
            </div>
        </div>
        <div className='flex justify-center align-center'>
            <div>
            <div><h3 className='text-2xl font-bold'>Want To Be A Part Of Abuja’s Biggest Tech Community?</h3></div>
            <div className='flex justify-center'>
                <button className='border-2 border-violet-800 rounded-full p-2'>Register for our next event <i className="bi bi-chevron-double-right"></i> </button>
            </div>
            </div>
        </div>
        <div className="px-5">
            <br />
            <hr />
            <br />
            <div className='gap-3 md:flex justify-between align-center'>
                <div className="flex gap-3">
                    <img src={facebook} alt="" width="50px" height="50px" />
                    <img src={instagram} alt="" width="50px" height="50px" />
                    <img src={x} alt="" width="50px" height="50px" />
                </div>
                <div className="flex gap-3">
                    <a href="#" className='font-bold text-violet-700'>Adejumo Adetomiwa <br /><small>Front-end Developer</small></a>
                    <a href="#">Home</a>
                    <a href="#">About us</a>
                    <a href="#">Gallery</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>
        </div>
    </div>
    
    </>
    ;
}

export default Footer;