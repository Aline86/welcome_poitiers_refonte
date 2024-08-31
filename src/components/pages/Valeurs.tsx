import Header from "../header/header"
import presentation from '../../assets/img/presentation.png'
import Footer from "../footer/footer"
import ScrollToTop from "./../../ScrollToTop"

export default function Presentation(){
    return (
        <div className="container">
            <Header />
            <div className="texte">
                <img className="fullimg" src={presentation} alt="presentation association flyer" />  
            </div>
            <div className="footer not-fixed">
                <Footer />
            </div>
            <ScrollToTop />
        </div>
    )
}