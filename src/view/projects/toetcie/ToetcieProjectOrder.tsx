import React from 'react';
import './ToetcieProjectOrder.scss';
import LocalDiv from '../../components/local/LocalDiv';
import ImageDiv from '../../components/media/ImageDiv';

const ToetcieProjectOrder : React.FC = props => {
    return (
        <div className={`toetcie-project-order`}>
            <div className={`toetcie-project-order-text`}>
                <h3 className={`toetcie-project-order-header`}>
                    <LocalDiv>
                    {{
                        en : "Ordering online",
                        fr : "Commande en ligne"
                    }}
                    </LocalDiv>
                </h3>
                <LocalDiv>
                {{
                    en : 
                        <>
                            <p>
                                Une des fonctionnalités principale et la plus attendue par le restaurateur, la commande en ligne permet aux clients de passer leur commande directement sur le site web.
                            </p>
                            <p>
                                Ce module à été réalisé de sorte à minimiser l'ambiguïté que ce soit du coté client ou restaurateur. 
                                Les montants sont affiché tout au long de la commande avec des notes explicites sur le prix de chaque élément. 
                                Le restaurateur quand à lui réceptionne un e-mail standardisé qui lui permet de trés rapidement lire et assimiler la demande du client.
                            </p>
                            <p>
                                Pour la réalisation nous avons retenu une solution basée sur l'envoie d'e-mail et sans serveur.
                                Cette démarche permettant une réduction significative des coûts d'hébergement pour le restaurateur.
                            </p>
                        </>,
                    fr : 
                        <>
                            <p>
                                Une des fonctionnalités principale et la plus attendue par le restaurateur, la commande en ligne permet aux clients de passer leur commande directement sur le site web.
                            </p>
                            <p>
                                Ce module à été réalisé de sorte à minimiser l'ambiguïté que ce soit du coté client ou restaurateur. 
                                Les montants sont affiché tout au long de la commande avec des notes explicites sur le prix de chaque élément. 
                                Le restaurateur quand à lui réceptionne un e-mail standardisé qui lui permet de trés rapidement lire et assimiler la demande du client.
                            </p>
                            <p>
                                Pour la réalisation nous avons retenu une solution basée sur l'envoie d'e-mail et sans serveur.
                                Cette démarche permettant une réduction significative des coûts d'hébergement pour le restaurateur.
                            </p>
                        </>
                }}
                </LocalDiv>
            </div>
            <div className={`toetcie-project-order-illustration`}>
                <ImageDiv src={`media/toetcie-order.png`} />
            </div>
        </div>
    )
}
export default ToetcieProjectOrder;