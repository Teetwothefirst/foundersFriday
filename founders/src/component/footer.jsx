import logo from '../assets/logo.jpg'

function Footer(){
    return <>
    
    <div className="mt-2.5 border-t-2 border-indigo-400">
        <div className='flex'>
            <img src={logo} alt="Founders Friday Logo" />
            <strong>Founders <br/> Friday</strong>
        </div>
        <div className='flex justify-center align-center'>
            <div>
            <div><h3>Want To Be A Part Of Abuja’s Biggest Tech Community?</h3></div>
            <div className='flex justify-center'>
                <button className='border-2 rounded-full p-2'>Register for our next event</button>
                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect x="0.5" width="40" height="40" fill="url(#pattern0_2_458)"/>
                    <defs>
                    <pattern id="pattern0_2_458" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_2_458" transform="scale(0.0078125)"/>
                    </pattern>
                    <image id="image0_2_458" width="128" height="128" xlink:href="data:image/png;base64,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"/>
                    </defs>
                </svg>
            </div>
            </div>
        </div>
    </div>
    
    </>
    ;
}

export default Footer;