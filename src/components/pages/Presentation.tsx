import Header from "../header/header"
import Footer from "../footer/footer"
import ScrollToTop from "./../../ScrollToTop"
import './styles/global.css';

export default function Accueil(){
    return (
            <div className="container">
                <Header />
                <div className="texte">
                        <div className="card">
                        <h1>Présentation de l’Association WELCOME POITIERS</h1>
                        <br />
                        <p className="first">Créée en juillet 2016, l'association Welcome Poitiers, accueille des demandeurs d'asile en attente de structures d'accueil proposées par l'Etat.</p>
                        <br />
                        <p>L 'association se veut « apolitique, laïque et indépendante » et elle ne reçoit aucune subvention.</p>
                        <br />
                        <p>Le but de l'association est d'organiser un réseau de familles d'accueil bénévoles qui se relaient pour une période limitée (6 mois maximum), pour accueillir un demandeur d'asile pendant une période d'environ 3 semaines chacune.
                            La famille assure l'hébergement et le repas du soir, cela permet de nouer une relation humaine privilégiée avec l'accueilli.</p>
                        <br />
                        <p>Pour atteindre ces objectifs, un fonctionnement a été mis en place:</p>
                        <ul>
                            <li className="m">Commission d'admission</li>
                            <li className="m">Familles d’accueil</li>
                            <li className="m">Groupe de visiteuses et visiteurs</li>
                            <li className="m">Groupe « filage »</li>
                            <li className="m">Un suivi par des tutrices et tuteurs :</li>

                            <ul>
                                <li className="m secondm">	La commission admission sélectionne les demandes et après entretien, la personne retenue est mise en contact avec un binôme de tuteurs.</li>

                                <li className="m secondm">Un groupe de visiteuses et visiteurs assure le premier contact avec les familles d’accueil, pour s’assurer des conditions d’hébergement et expliquer le fonctionnement de l’accueil.</li>

                                <li className="m secondm">Les familles volontaires pour accueillir proposent leurs disponibilités et un groupe chargé des « filages » construit la durée d’accueil du demandeur d’asile sur une période de 6 mois.</li>

                                <li className="m secondm">Les tutrices et tuteurs programment avec la famille candidate à l’accueil un entretien préalable en présence du demandeur d’asile. Ils sont les personnes référentes pour tout dialogue ou problème entre les familles et le demandeur d’asile.</li>
                            </ul>
                        </ul>
                        <br />
                        <p>Globalement cet engagement humain dans le réseau Welcome permet d’offrir aux demandeurs d’asile un temps pour se poser et leur permet d’avancer dans l’attente d’un rendez-vous à l’OFPRA (Office Français de Protection des Réfugiés et Apatrides) ou d’une réponse si le rendez-vous a déjà eu lieu, ou encore d’une place en CADA (Centre d’Accueil des Demandeurs d’Asile).</p>
                        <br />
                        <p>Le fait de faire partie d’un réseau permet d’agir collectivement dans l’accueil et qu’aucun acteur de la solidarité ne soit isolé.</p>
                    </div>
                </div>
                <div className="footer not-fixed">
                    <Footer />
                </div>
                <ScrollToTop />
            </div>
            
    )
}