import React from 'react';
import './ToetcieProjectOrder.scss';
import LocalDiv from '../../components/local/LocalDiv';
import ProjectSubSection from '../ProjectSubSection';

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
                            One of our main feature, which was also key for the chef, is the online food order system. Enabling customers to order directly through the website, without having to call the restaurant.
                        </p>
                        <p>
                            This system was designed in order to reduce mistakes on ordered items and to clear any doubt about pricing. 
                            Everything is clearly displayed throughout the whole process.
                            Once the order is validated by the customer, a standardised email is automatically sent to the restaurant with details, such as the name of the client and the pick up time.
                        </p>
                        <p>
                            Our system is based on a serverless architecture.
                            This allows for savings in terms of hosting costs for the restaurant owner.
                        </p>
                    </>,
                fr : 
                    <>
                        <p>
                            Une des fonctionnalités principales et la plus attendue par le restaurateur, la commande en ligne permet aux clients de passer leur commande directement sur le site web.
                        </p>
                        <p>
                            Ce module a été réalisé de sorte à minimiser les ambiguïtés de prix ou du contenu même de la commande, que ce soit du côté client ou restaurateur. 
                            Les montants sont affichés tout au long de la commande avec des notes explicites sur le prix de chaque élément. 
                            Le restaurateur quant à lui reçoit un e-mail standardisé avec le détail de la commande, qui lui permet ensuite de très rapidement lire et assimiler la demande du client.
                        </p>
                        <p>
                            Pour la réalisation, nous avons retenu une solution basée sur l'envoi d'e-mail et sans serveur.
                            Cette démarche permet une réduction significative des coûts d'hébergement pour le restaurateur.
                        </p>
                    </>
            }}
            </LocalDiv>
        </ProjectSubSection>
    );
}
export default ToetcieProjectOrder;