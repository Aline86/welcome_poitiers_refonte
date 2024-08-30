import bulletin_adhesion from '../../assets/img/bulletin_adhesion.pdf'
import Header from "../header/header"
import Footer from "../footer/footer"

export default function Adhesion(){
    const result = window.matchMedia("(max-width: 1000px)");
   
    return (
        <div className="container">
            <Header />
            <div className="texte">
                <br />
                <br />
                <h1 className="left">Nous rejoindre</h1>
                <p> Vous souhaitez rejoindre l'association, devenir famille d'accueil ou bien renouveler votre adhésion ?
                    Télécharger le formulaire d'adhésion.
                </p>
                <br />
                <button className="gray_button"><a className="no_decoration" href={bulletin_adhesion}>Télécharger le bulletin d'adhésion</a></button>
            </div>
            <div className={!result ? `${"footer fixed"}` : `${"footer not-fixed"}`}>
                <Footer />
            </div>
        </div>
    )
}