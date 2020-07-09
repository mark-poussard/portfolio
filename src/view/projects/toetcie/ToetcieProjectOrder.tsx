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
                            Une des fonctionnalités principales et la plus attendue par le restaurateur, la commande en ligne permet aux clients de passer leur commande directement sur le site web.
                        </p>
                        <p>
                            Ce module à été réalisé de sorte à minimiser les ambiguïtés de prix ou du contenue même de la commanque, que ce soit du côté client ou restaurateur. 
                            Les montants sont affichés tout au long de la commande avec des notes explicites sur le prix de chaque élément. 
                            Le restaurateur quant à lui reçoit un e-mail standardisé avec le détail de la commande, qui lui permet ensuite de très rapidement lire et assimiler la demande du client.
                        </p>
                        <p>
                            Pour la réalisation, nous avons retenu une solution basée sur l'envoi d'e-mail et sans serveur.
                            Cette démarche permettant une réduction significative des coûts d'hébergement pour le restaurateur.
                        </p>
                    </>,
                fr : 
                    <>
                        <p>
                            Une des fonctionnalités principales et la plus attendue par le restaurateur, la commande en ligne permet aux clients de passer leur commande directement sur le site web.
                        </p>
                        <p>
                            Ce module à été réalisé de sorte à minimiser les ambiguïtés de prix ou du contenue même de la commanque, que ce soit du côté client ou restaurateur. 
                            Les montants sont affichés tout au long de la commande avec des notes explicites sur le prix de chaque élément. 
                            Le restaurateur quant à lui reçoit un e-mail standardisé avec le détail de la commande, qui lui permet ensuite de très rapidement lire et assimiler la demande du client.
                        </p>
                        <p>
                            Pour la réalisation, nous avons retenu une solution basée sur l'envoi d'e-mail et sans serveur.
                            Cette démarche permettant une réduction significative des coûts d'hébergement pour le restaurateur.
                        </p>
                    </>
            }}
            </LocalDiv>
        </ProjectSubSection>
    );
}
export default ToetcieProjectOrder;