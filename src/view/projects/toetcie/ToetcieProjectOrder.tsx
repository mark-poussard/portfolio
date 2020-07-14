import React from 'react';
import './ToetcieProjectOrder.scss';
import LocalDiv from '../../components/local/LocalDiv';
import ProjectSubSection from '../ProjectSubSection';
import Keyword from '../../components/text/Keyword';

const ToetcieProjectOrder : React.FC = props => {
    return (
        <ProjectSubSection className={`toetcie-project-order`}
            header={
                <LocalDiv>
                {{
                        en : "Ordering online",
                        fr : "Commande en ligne"
                }}
                </LocalDiv>
            }
            illustration={
                <img className={`toetcie-project-order-illustration`}  src={`media/toetcie-order.png`} />
            }>
            <LocalDiv>
            {{
                en : 
                    <>
                        <p>
                            One of our main features, which was also key for the chef, is the online food order system. 
                            This feature enables customers to order <Keyword>directly through the website</Keyword>, without having to call the restaurant.
                        </p>
                        <p>
                            This system was designed in order to <Keyword>reduce mistakes</Keyword> on ordered items and to <Keyword>clear any confusion on pricing</Keyword>. 
                            Everything is clearly displayed throughout the whole process.
                            Once the order is validated by the customer, a <Keyword>standardised email</Keyword> is automatically sent to the restaurant with details, such as the name of the client and the pick up time.
                        </p>
                        <p>
                            Our system is based on a <Keyword>serverless architecture</Keyword>.
                            This allows for <Keyword>savings</Keyword> in terms of hosting costs for the restaurant owner.
                        </p>
                    </>,
                fr : 
                    <>
                        <p>
                            Une des fonctionnalités principales et la plus attendue par le restaurateur, la commande en ligne permet aux clients de passer leur commande <Keyword>directement sur le site web</Keyword>.
                        </p>
                        <p>
                            Ce module a été réalisé de sorte à <Keyword>minimiser les ambiguïtés de prix ou du contenu</Keyword> même de la commande, que ce soit du côté client ou restaurateur. 
                            Les montants sont affichés tout au long de la commande avec des notes explicites sur le prix de chaque élément. 
                            Le restaurateur quant à lui reçoit un <Keyword>e-mail standardisé</Keyword> avec le détail de la commande, qui lui permet ensuite de très rapidement lire et assimiler la demande du client.
                        </p>
                        <p>
                            Pour la réalisation, nous avons retenu une solution basée sur l'envoi d'e-mail et <Keyword>sans serveur</Keyword>.
                            Cette démarche permet une <Keyword>réduction significative des coûts d'hébergement</Keyword> pour le restaurateur.
                        </p>
                    </>
            }}
            </LocalDiv>
        </ProjectSubSection>
    );
}
export default ToetcieProjectOrder;