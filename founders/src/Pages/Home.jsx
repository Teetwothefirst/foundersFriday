import MainSection from '../component/mainSection'
import Footer from '../component/footer'
import HeaderComp from '../component/header'

function Home(){
    return <>
        <div className=''>
            <HeaderComp></HeaderComp>
            <MainSection></MainSection>
            <Footer></Footer>
        </div>
    </>
}

export default Home