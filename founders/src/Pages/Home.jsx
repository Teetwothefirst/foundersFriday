import logo from '../assets/logo.jpg'
import Footer from '../component/footer'
function Home(){
    return <>
    <header className="">
        <div><img src={logo} alt="Founders Friday Logo" /></div>
    </header>

    <Footer></Footer>
    </>
}

export default Home