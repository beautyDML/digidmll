import TopBar from '../components/layout/TopBar'
import NavBar from '../components/layout/NavBar'
import HeroBanner from '../components/section/HeroBanner'
import RecruitBanner from '../components/Sections/RecruitBanner'
import WhatsHot from '../components/sections/WhatsHot'
import Drafts from '../components/sections/Drafts'
import Purchases from '../components/sections/Purchases'
import MySquads from '../components/sections/MySquads'
import MyCharacters from '../components/sections/MyCharacters'
import Footer from '../components/layout/Footer'


function Home(){
    return(
        <div>
            <TopBar/>
            <NavBar/>
            <HeroBanner/>
            <RecruitBanner/>
            <WhatsHot/>
            <Drafts/>
            <Purchases/>
            <MySquads/>
            <MyCharacters/>
            <Footer/>
        </div>
    )
}
export default Home