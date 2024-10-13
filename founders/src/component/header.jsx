import logo from '../assets/logo.jpg'


function header(){
    return <>
        <div>
            {/* z-10 */}
            <header className="w-full flex justify-between md:px-5 flex justify-between border-b border-violet-200 fixed mb-5 z-20 bg-white">

            <div className='flex items-center'>
                <img src={logo} alt="Founders Friday Logo" />
                <h3 className='text-2xl font-bold'>Founder's Friday</h3>
            </div>
            <div className=''>
            <div className='visible md:invisible'>
                HERE
            </div>
            <div className='invisible md:visible flex items-center gap-20'>
                <div className='md:flex gap-4'>
                    <a href="#" className='text-violet-700 font-bold'>Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Gallery</a>
                    <a href="#">Contact us</a>
                </div>
                <button className='px-5 py-1 border border-violet-700 rounded-xl text-violet-700'>Register <i className="bi bi-arrow-right"></i></button>
            </div>
            </div>
            </header>
        </div>
    </>
}

export default header