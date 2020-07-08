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
                                Le module de commande en ligne permet l'envoie des commandes client par e-mail au restaurateur.
                                A la réception de l'e-mail un bouton permet au restaurateur de confirmer la commande.
                            </p>
                            <p>
                                Ce module fonctionne entiérement sur la base du service d'e-mail et sans serveur attitré, ce qui permet une réduction significative des coûts d'hébergement.
                            </p>
                        </>,
                    fr : 
                        <>
                            <p>
                                Le module de commande en ligne permet l'envoie des commandes client par e-mail au restaurateur.
                                A la réception de l' e-mail un bouton permet au restaurateur de confirmer la commande.
                            </p>
                            <p>
                                Ce module fonctionne entiérement sur la base du service d'e-mail et sans serveur attitré, ce qui permet une réduction significative des coûts d'hébergement.
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