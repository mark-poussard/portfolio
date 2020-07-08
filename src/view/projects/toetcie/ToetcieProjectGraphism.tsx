import React from 'react';
import './ToetcieProjectGraphism.scss';
import LocalDiv from '../../components/local/LocalDiv';
import ImageDiv from '../../components/media/ImageDiv';
import Logo from './Logo';

const ToetcieProjectGraphism : React.FC = props => {
    return (
        <div className={`toetcie-project-graphism`}>
            <div className={`toetcie-project-graphism-text`}>
                <h3 className={`toetcie-project-graphism-header`}>
                    <LocalDiv>
                    {{
                        en : "Graphic design",
                        fr : "Graphisme"
                    }}
                    </LocalDiv>
                </h3>
                <LocalDiv>
                {{
                    en : 
                        <>
                            <p>
                                Un point a ne surtout pas négliger, le graphisme du site c'est la premiére impression sur le potentiel client. 
                                Il est important de proposer une charte et un travail graphique cohérent qui permet au visiteur de se projeter dans l'univers du restaurant. 
                            </p>
                        </>,
                    fr : 
                        <>
                            <p>
                                Un point a ne surtout pas négliger, le graphisme du site c'est la premiére impression sur le potentiel client. 
                                Il est important de proposer une charte et un travail graphique cohérent qui permet au visiteur de se projeter dans l'univers du restaurant. 
                            </p>
                        </>
                }}
                </LocalDiv>
            </div>
            <div className={`toetcie-project-graphism-illustration`}>
                <div className={`toetcie-project-graphism-illustration-circle`}>
                    <Logo animate/>
                </div>
            </div>
        </div>
    )
}
export default ToetcieProjectGraphism;