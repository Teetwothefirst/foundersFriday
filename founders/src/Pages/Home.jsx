import logo from '../assets/logo.jpg'
import MainSection from '../component/mainSection'
import Footer from '../component/footer'

function Home(){
    return <>
    <header className="">
        <div><img src={logo} alt="Founders Friday Logo" /></div>
    </header>
    <MainSection></MainSection>
    <Footer></Footer>
    </>
}

export default Home