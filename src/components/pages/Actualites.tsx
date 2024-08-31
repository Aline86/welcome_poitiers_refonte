import {useState} from 'react'
import Text  from './Text'
import Header from "../header/header"
import article1 from './img/article1.jpeg'
import article2 from './img/article2.png'
import article3 from './img/article3.png'
import article4 from './img/article4.png'
import article5 from './img/article5.png'
import Footer from "../footer/footer"
import ScrollToTop from "./../../ScrollToTop"

export default function Actualites(){
    const [toggle, setToggle] = useState(false)
    const [toggle_1, setToggle_1] = useState(false)
    const [toggle_2, setToggle_2] = useState(false)
    const [toggle_3, setToggle_3] = useState(false)
    const [toggle_4, setToggle_4] = useState(false)
    const showMore_art_1 = () => {
        setToggle(!toggle)
    }
    const showMore_art_2 = () => { 
        setToggle_1(!toggle_1)     
    }
    const showMore_art_3 = () => {
        setToggle_2(!toggle_2)  
    }
    const showMore_art_4 = () => {  
        setToggle_3(!toggle_3) 
    }
    const showMore_art_5 = () => {  
        setToggle_4(!toggle_4)   
    }
  
    return (
        <div className="container">
            <Header />
            <div className="texte">
                <div>
            
                        <div className="card">
                            <h1>Actualités de l'association</h1>
                            <br />             
                                <Text>
                                <div className="center">
                                    <img className="full" alt="photo adhérants article NR" src={article2} />
                                </div>
                                <br />
                                <h3>Poitiers : l'association Welcome cherche des familles accueillantes</h3></Text>
                                <br />
                                L’association vient en aide à des demandeurs d’asile en situation régulière. Elle souhaite développer son réseau d’accueil et d’hébergement. 
                                {
                                toggle_1 && <Text>
                                <br />
                                Agir pour améliorer la situation des demandeurs d’asile, adoucir un temps la vie de celles et ceux qui ont fui leur pays dans l’urgence… C’est depuis quelques années le but que s’est fixé l’association Welcome en créant un réseau local d’accueil et d’hébergement. 
                                <br />
                                <br />
                                « Nous faisions le constat que les structures d’accueil proposées par l’État étaient insuffisantes en nombre de places, explique Benoît Weeger, l’un des tuteurs de l’association, nous permettons alors à des demandeurs d’asile d’être accueillis dans des familles pour une période limitée (six mois maximum). Chaque personne passe de famille en famille car le temps d’accueil dans chacune d’elles sera de trois semaines à un mois ».
                                <br />
                                <br />
                                (L’accueil, c’est nouer une relation humaine privilégiée, découvrir une culture, et c’est moins compliqué qu’on pourrait l’imaginer Benoît Weeger, tuteur de l'association Welcome D’où l’importance de disposer d’un réseau suffisamment dense, d’organiser à la fois le suivi et l’accompagnement de la personne accueillie et de la famille qui la reçoit. L’association s’est ainsi dotée de tuteurs et tutrices qui organisent avec la famille candidate un entretien préalable. Celle-ci sait qu’elle aura à assurer le gîte et le couvert sur une durée qu’elle aura choisie. *) Association reconnue d’utilité publique, Welcome Poitiers peut recueillir des dons d’argent ; ce qui ouvre droit à une réduction fiscale pour le donateur.
                                <br />
                                <br />
                                Depuis sa création, Welcome aura accueilli et soutenu un peu plus de cinquante demandeurs d’asile, principalement des hommes, sur Poitiers et sa couronne. Pas anodin en ces temps de repli sur soi où l’autre, a fortiori s’il est étranger, est parfois regardé de manière hostile. « L’accueil, c’est nouer une relation humaine privilégiée, découvrir une culture, et c’est moins compliqué qu’on pourrait l’imaginer », assure Benoît Weeger. Un engagement humain « Et puis, ajoute Maryline Tourancheau, vice-présidente de Welcome et « visiteuse », on s’accompagne les uns les autres, les tuteurs, les familles. Il y a un vrai suivi des situations, personne n’est isolé. Au final, c’est un peu comme si on recevait un ami ». 
                                <br />
                                <br />
                                Y a-t-il de l’appréhension à recevoir chez soi une personne qu’on ne connaît pas ? « Oui, cela peut arriver mais le désir de faire partie de cette chaîne de solidarité est grand chez les familles candidates, souligne Marie-Odile, famille d’accueil, il s’agit d’abord d’un engagement humain ». 
                                <br />
                                <br />
                                Un engagement dont a pu profiter Cheik, un jeune malien de 25 ans : « Welcome m’a permis de trouver un toit pour me poser et avancer, résume-t-il, avant je n’avais pas trop d’espoir. Je dormais à la gare ou au 115. Mon avenir est meilleur. J’ai un projet avec une entreprise de Benassay qui m’a proposé un stage et puis je souhaite intégrer la faculté de géographie à l’université. J’attends une réponse fin avril et je suis aussi dans l’attente d’un rendez-vous à l’Ofpra [Office français de protection des réfugiés et apatrides]. Mes deux tuteurs m’ont vraiment accompagné et soutenu. Et puis les familles dans lesquelles je suis passé m’invitent encore aujourd’hui ». Le sens de l’accueil… 
                                <br />
                                <br />
                                Texte écrit par Jean Michel Gouin </Text> 
                            }
                            <br />
                            <br />
                            <div className="button">
                                <button 
                                    onClick={showMore_art_2}
                                    className="show-more">
                                    {toggle_1 ? 'Moins': 'Lire plus'}
                                </button>
                            </div> 
                            <br />
                            <br />
                            <Text>
                                <div className="center">
                                    <img className="full" alt="photo adhérants article NR" src={article1} />
                                </div>
                                <br />
                                <h3>Welcome Poitiers recherche des familles et appelle aux dons (NR Poitiers)</h3></Text>
                                <br />
                                Depuis trois ans, Welcome Poitiers a tissé un réseau de familles qui hébergent des demandeurs d’asile. L’association souhaite étoffer ses rangs.
                                {
                                toggle && <Text>
                                <br />
                                Une simple boîte aux lettres dans l’entrée de la Maison des Trois-Quartiers relie des demandeurs d’asile à l’association Welcome Poitiers. La simplicité s’arrête là. Dans les faits, cette association créée en 2016 s’est donnée pour vocation de trouver un toit temporaire (chez des particuliers de leur réseau) à des hommes, femmes et enfants venus de pays où ils se sentaient en grand danger. 40 personnes ont été hébergées en trois ans « Aujourd’hui, nous avons entre 125 et 130 adhérents et une soixantaine de familles accueillantes, cadrent Colette Carreyre (vice-présidente) et Maryline Tourancheau (administratrice). Nous sommes une association laïque, apolitique et non subventionnée. Et nous y tenons. Nous essayons de représenter la société française au sens large avec toutes ses composantes. »
                                “ Des clés de compréhension ” L’association accepte donc tous les demandeurs d’asile « s’ils partagent les mêmes valeurs que l’association ». Au cours des premiers mois du lancement de Welcome, les familles accueillantes se comptaient sur les doigts d’une main. Petit à petit, en multipliant les réunions d’informations, l’association a aussi multiplié les familles prêtes à s’engager.
                                <br />
                                <br />
                                Pour autant, les nouvelles candidatures sont toujours les bienvenues, tout comme les dons (*) pour aider financièrement les hébergés dans des démarches administratives plus complexes qui nécessitent des déplacements ; notamment à Paris, accompagnés d’un « tuteur » de l’association. « La famille s’engage à accueillir de 15 jours à un mois, plusieurs fois par an si elle veut. Et l’association s’engage à héberger le demandeur pendant six mois maximum, précise Maryline Tourancheau. Pour résumer, sur une période de six mois, il nous faut six à sept familles. Depuis trois ans, nous avons suivi 40 personnes. » Des femmes seules avec enfants Au-delà de l’hébergement, les familles « donnent aux migrants des clés de compréhension de notre société ». Des hôtes qui doivent désormais accueillir des femmes seules avec leurs enfants. Une situation relativement nouvelle avec des cas de conscience parfois terrible. « Ces jeunes mères ou parfois des femmes enceintes, si elles ne trouvent pas de place au 115 ou via d’autres réseaux, dorment dans la rue. Elles y sont souvent en grand danger. C’est indigne ! », martèlent les deux bénévoles et hôtes.
                                <br />
                                <br />
                                (*) Association reconnue d’utilité publique, Welcome Poitiers peut recueillir des dons d’argent ; ce qui ouvre droit à une réduction fiscale pour le donateur.
                                <br />
                                Texte de Marie-Laure Aveline (NR Poitiers)</Text>
                            }
                            <br /> 
                            <br />
                            <div className="button">
                                <button 
                                    onClick={showMore_art_1}
                                    className="show-more">
                                    {toggle ? 'Moins': 'Lire plus'}
                                </button>
                            </div>
                            <br /> 
                            <br /> 
                            <Text>
                                <div className="center">
                                    <img className="full" alt="photo adhérants article NR" src={article3} />
                                </div>
                                <br />
                                <h3>“ Mohammed, on l’accueille comme n’importe quel invité ” (NR Poitiers)</h3>
                                Depuis trois ans, Welcome Poitiers a tissé un réseau de familles qui hébergent des demandeurs d’asile. L’association souhaite étoffer ses rangs.
                                </Text>
                                <br />
                                {
                                toggle_2 && <Text>
                                <br />
                                Chez les Weeger, l’accueil de l’autre est devenu une seconde nature. Avant même de participer à la fondation, voici deux ans de Welcome Poitiers, le couple était déjà à l’écoute de la détresse de ces étrangers venus de nulle part dormir dans nos rues, faute d’hébergement. Benoît (qui est aussi le « tuteur » de Mohammed au sein de l’association) a passé un mois comme bénévole dans la « jungle » de Calais et, il y a quelques années, les Weeger ont hébergé une jeune albanaise, sans papiers, en situation illégale. 
                                <br />
                                <br />
                                Avec Welcome, pas un soupçon d’illégalité : la demi-douzaine d’étrangers actuellement hébergés à droite et à gauche dans l’agglomération poitevine sont tous des demandeurs d’asile détenteurs d’un récépissé, ce qui ne leur assure pour autant aucun hébergement. « Je suis arrivé au mois d’août, raconte Mohammed, 25 ans, dans ce français un peu hésitant appris chez lui, là-bas, en Guinée. Au début je dormais souvent à la gare, sur le parking. » Mohammed a fini par s’inscrire auprès de Welcome Poitiers. Une petite dizaine de familles, sur la grosse centaine que compte l’association, se sont portées volontaires pour lui offrir pendant trois semaines, à tour de rôle, le gîte et le couvert.                             <br />
                                <br />
                                <br />
                                Chaque migrant passe trois semaines en famille puis en change « Mohammed prend le petit-déjeuner avec nous et souvent aussi le dîner. Mais il nous fait lever tôt, s’amuse Marie-Odile, parce qu’il va travailler à l’aube… » Faute de pouvoir exercer un emploi salarié, Mohammed a de lui-même décidé d’aller tous les jours donner un coup de main aux Restos du Cœur. Pour les Weeger, c’est un dérangement qu’ils jugent bien minime. « Je me dis qu’il y a une culture chez nous liée à notre éducation, explique Benoît. J’ai toujours vu mes parents être dans le partage. Il y a chez chacun un réflexe humain, une empathie naturelle vers quelqu’un qui est dans la difficulté. Je ne me pose pas la question de savoir pourquoi je fais ça. C’est parfois presque la question inverse que je me pose… »                             <br />
                                <br />
                                <br />
                                Marie-Odile est plus lyrique : « Chacun a le droit au bonheur sur terre. L’autre m’aide à être moi-même. » 
                                <br />
                                <br />
                                Mohammed s’apprête donc à découvrir une nouvelle famille française. Ce nomadisme ne semble pas trop l’affecter : « C’est très magnifique. Welcome, ce sont des hommes qui sont très bien. » Marie-Odile et Benoît s’apprêtent à goûter aux joies de l’intimité retrouvée. Pas pour longtemps : ils sont inscrits pour une nouvelle tournée d’accueil. Cette fois, ce sera un couple. Des Russes, pour changer. 
                                <br />
                                <br />
                                Texte écrit par Vincent Buche  (NR Poitiers)</Text>
                            }
                            <br /> 
                            <br />
                            <div className="button">
                                <button 
                                    onClick={showMore_art_3}
                                    className="show-more">
                                    {toggle_2 ? 'Moins': 'Lire plus'}
                                </button>
                            </div>
                            <br /> 
                            <br /> 
                            <Text>
                                <div className="center">
                                    <img className="full" alt="photo adhérants article NR" src={article4} />
                                </div>
                                <br />
                                <h3>Welcome cherche des familles d'accueil (NR Poitiers)</h3></Text>
                                <br />
                                L’association vient en aide aux demandeurs d’asile en leur offrant un hébergement temporaire. Elle cherche à élargir son réseau d’accueil. 
                                {
                                toggle_3 && <Text>
                                <br />
                                Pour celles et ceux qui fuient leur pays dans un contexte d'urgence et de danger, l'arrivée en France ne marque pas forcément la fin des difficultés. Demandeurs d'asile, ils n'obtiendront pas tous satisfaction. Et en attendant de pouvoir bénéficier du dispositif national d'accueil, il leur faut trouver le gîte et le couvert. C'est là qu'intervient Welcome, association créée il y a juste un an à Poitiers par quelques personnes déjà sensibilisées à la cause des migrants. En lien avec le réseau national Welcome France qui « œuvre sur le terrain pour apporter aide et soutien aux personnes déplacées par force de leur pays d'origine, selon la tradition d'hospitalité liée à la demande d'asile »,l'association poitevine, forte de 148 adhérents à ce jour, cherche aujourd'hui à élargir son réseau de familles d'accueil. 
                                <br />
                                <br />
                                Pour autant, les nouvelles candidatures sont toujours les bienvenues, tout comme les dons (*) pour aider financièrement les hébergés dans des démarches administratives plus complexes qui nécessitent des déplacements ; notamment à Paris, accompagnés d’un « tuteur » de l’association. « La famille s’engage à accueillir de 15 jours à un mois, plusieurs fois par an si elle veut. Et l’association s’engage à héberger le demandeur pendant six mois maximum, précise Maryline Tourancheau. Pour résumer, sur une période de six mois, il nous faut six à sept familles. Depuis trois ans, nous avons suivi 40 personnes. » Des femmes seules avec enfants Au-delà de l’hébergement, les familles « donnent aux migrants des clés de compréhension de notre société ». Des hôtes qui doivent désormais accueillir des femmes seules avec leurs enfants. Une situation relativement nouvelle avec des cas de conscience parfois terrible. « Ces jeunes mères ou parfois des femmes enceintes, si elles ne trouvent pas de place au 115 ou via d’autres réseaux, dorment dans la rue. Elles y sont souvent en grand danger. C’est indigne ! », martèlent les deux bénévoles et hôtes.
                                <br />
                                <br />
                                Un système de relais 
                                <br />
                                <br />
                                Ces familles volontaires se relaient pour offrir temporairement un hébergement à des demandeurs d'asile. « Il s'agit d'un temps qui va de 3 semaines à 1 mois dans chaque famille, pour une durée maximale de six mois,explique Benoît Weeger, l'un des administrateurs de Welcome. Nous fonctionnons avec un groupe de visiteurs qui se met en relation directe avec les familles accueillantes et un groupe de tuteurs qui suit les personnes accueillies et assure le lien d'une famille à l'autre ».Les familles volontaires s'engagent sur l'hébergement, la nuit, le dîner et le petit-déjeuner, y compris le week-end. 
                                <br />
                                <br />
                                En 2016, Welcome Poitiers a pris en charge 4 hommes et 2 femmes. Cette année, elle souhaite en prendre 3 ou 4 autres de septembre à mars, autant en 2018 sur une période qui ira du 1 erjanvier au 30 juin. 
                                <br />
                                <br />
                                « Il nous faut encore des familles d'accueil,complète Vincent Le Roux, le président. Des personnes qui puissent au minimum fournir une chambre indépendante. Souvent des relations amicales se créent entre les demandeurs d'asile et les personnes qui l'accueillent ».Un peu de baume au cœur avant de repartir…
                                <br />
                                <br />
                                Réunion d'information publique
                                <br />
                                le 22 septembre à 20 h au Local, 16 rue Saint-Pierre-Le-Puellier.
                                <br />
                                Contact : welcomepoitiers@ outlook.fr
                                <br />
                                Texte écrit par Jean-Michel Gouin (NR Poitiers)</Text>  
                            }
                            <br /> 
                            <br />
                            <div className="button">
                                <button 
                                    onClick={showMore_art_4}
                                    className="show-more">
                                    {toggle_3 ? 'Moins': 'Lire plus'}
                                </button>
                            </div>
                            <br /> 
                            <br /> 
                            <Text>
                                <div className="center">
                                    <img className="full" alt="photo adhérants article NR" src={article5} />
                                </div>
                                <br />
                                <h3>Bienvenu a été le premier migrant accueilli par le réseau Welcome de Poitiers (NR Poitiers)</h3></Text>
                                <br />
                                Le réseau Welcome, ce sont des personnes qui accueillent chez elles un migrant, le temps d'avancer dans sa demande d'asile et de lui offrir un peu de répit. Ensuite, c'est une autre famille qui prend le relais. Sept migrants ont été accueillis par le réseau depuis mi-octobre à Poitiers. 
                                {
                                toggle_4 && <Text>
                                <br />
                                Vincent Le Roux préside le réseau Welcome de Poitiers. Il a été le premier à accueillir un migrant chez lui. Vincent et sa compagne ont de la place maintenant. Leurs enfants devenus grands ne vivent plus à la maison." On accueille des gens qui n'ont rien. Très peu de ressources et quelques vêtements dans un sac en plastique. C'est forcément assez fort." Aujourd'hui, Bienvenu vit chez un autre couple. Il en est à sa troisième famille. " Quatre semaines, c'est une bonne durée pour qu'il se pose un peu et que l'on soit disponible pour lui. Plus, cela pourrait devenir compliqué pour certains." 
                                <br />
                                <br />
                                Vincent Le Roux se rappelle de ces quatre semaines d'accueil avec encore beaucoup d'émotion. " Cela représente beaucoup pour ces personnes, une vraie occasion de se reposer et de se reconstruire. Mais pour nous aussi c'est important. Cela interroge sur notre conception du monde. Comme il parlait le français, nous avons beaucoup discuté, confronté nos idées."                             <br />
                                <br />
                                <br />
                                Bien sûr, le départ a été difficile. Mais ils se sont revus à l'occasion de l'anniversaire de Bienvenu. Et une autre fête est prévue le 22 janvier avec tous les accueillants et les accueillis.                             <br />
                                <br />
                                <br />
                                Seule obligation des accueillants : fournir deux repas par jour et habiter à Poitiers ( ou en proche périphérie ) A Poitiers, une trentaine de familles forment le réseau Welcome.
                                <br />
                                <br />
                                Pour devenir accueillants, il faut pouvoir offrir une chambre à la personne pendant quatre semaines et deux repas par jour ( petit déjeuner et dîner). 
                                <br />
                                <br />
                                Par ailleurs, il faut habiter à Poitiers ou en proche périphérie pour que la personne accueillie puisse se déplacer seule. Les bénévoles de l'association Welcome accompagnent les accueillants. Avant, une visite préalable permet de savoir si vous êtes prêt et si vous avez bien compris les conditions. Ensuite, un tuteur de l'association sera votre référent et celui de la personne accueillie pour toutes les questions du quotidien. " Il faut un cadre stricte et une bonne préparation pour organiser ces accueils. Les migrants qui arrivent ont déjà trop souffert de leur exil pour leur faire subir un échec", explique Vincent Le Roux qui prend l'extension de ce réseau très à coeur. 
                                <br />
                                <br />
                                Cette forme d'accueil des migrants en dehors des structures classiques existe en France depuis 2009 dans une quinzaine de villes françaises comme Bordeaux, Brest, Grenoble, Le Mans, La Roche-sur-Yon. 
                                <br />
                                Le réseau poitevin compte une centaine d'adhérents dont une trentaine de familles d'accueillants.
                                <br />
                                <br />
                                Si vous êtes intéressés il faut contacter :
                                <br />
                                welcomepoitiers@outlook.fr
                                <br />
                                M3Q, 25 rue du Général-Sarrail à Poitiers.
                                <br />
                                Texte écrit par Marine Rondonnier 
                            </Text> 
                            }
                            <br /> 
                            <br />
                            <div className="button">
                                <button 
                                    onClick={showMore_art_5}
                                    className="show-more">
                                    {toggle_4 ? 'Moins': 'Lire plus'}
                                </button>
                            </div>
                        </div>
                    </div>
                
                </div>
            <div className="footer not-fixed">
                <Footer />
            </div>
            <ScrollToTop />
        </div>
    )
}