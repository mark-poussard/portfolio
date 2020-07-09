import React from 'react';
import './ToetcieProjectOrder.scss';
import LocalDiv from '../../components/local/LocalDiv';
import ImageDiv from '../../components/media/ImageDiv';
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
                <ImageDiv className={`toetcie-project-order-illustration`}  src={`media/toetcie-order.png`} />
            }>
            <LocalDiv>
            {{
                en : 
                    <>
                        <p>
                            One of the main feature, which was also key for the client, is the online ordering. Thus customers are able to order directly through the website without having to call on the phone, which was the current solution at the time.
                        </p>
                        <p>
                            This module was made in order to reduce mistakes on the content and to clear any doubt about the prices. 
                            Indeed, they are clearly displayed throughout the whole process.
                            Once the order is validated by the customer, a standardised email is automatically sent to the restaurant with the order's details, such as the name of the client and the pick up time.
                        </p>
                        <p>
                            For this feature, our solution is based on a serverless architecture.
                            This choice allows for a massive saving in terms of hosting for the restaurant owner.
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