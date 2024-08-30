import Header from "../header/header"
import Footer from "../footer/footer"

export default function Contact(){

    return (

        <div className="container">
            <Header />
            <div className="texte">
                <br />
                <h1 className="left">CONTACT</h1>
                <br />
                <br />
                <p><b>Adresse email: </b> welcomepoitiers@outlook.fr</p>
                <br />
                <p><b>Adresse postale: </b> 23-25, rue du Général Sérail 86000 POITIERS</p>
            </div>
            <div className="footer fixed">
                <Footer />
            </div>
        </div>
    )
}