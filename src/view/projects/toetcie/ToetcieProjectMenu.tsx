import React from 'react';
import './ToetcieProjectMenu.scss';
import LocalDiv from '../../components/local/LocalDiv';
import ImageDiv from '../../components/media/ImageDiv';

const ToetcieProjectMenu : React.FC = props => {
    return (
        <div className={`toetcie-project-menu`}>
            <div className={`toetcie-project-menu-illustration`}>
                <ImageDiv src={`media/toetcie-menu.png`} />
            </div>
            <div className={`toetcie-project-menu-text`}>
                <h3 className={`toetcie-project-menu-header`}>
                    <LocalDiv>
                    {{
                        en : "Editable menu",
                        fr : "Menu éditable"
                    }}
                    </LocalDiv>
                </h3>
                <LocalDiv>
                {{
                    en : 
                        <>
                            <p>
                                Une demande importante sur les projets de site de restauration, les menu éditable deviennent essentiels afin d'offrir au restaurateur une flexibilité sur son offre.
                            </p>
                        </>,
                    fr : 
                        <>
                            <p>
                                Une demande importante sur les projets de site de restauration, les menu éditable deviennent essentiels afin d'offrir au restaurateur une flexibilité sur son offre.
                            </p>
                        </>
                }}
                </LocalDiv>
            </div>
        </div>
    )
}
export default ToetcieProjectMenu;