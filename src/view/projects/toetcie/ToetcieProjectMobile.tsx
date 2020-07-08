import React from 'react';
import ImageDiv from '../../components/media/ImageDiv';
import ProjectSubSection from '../ProjectSubSection';
import LocalDiv from '../../components/local/LocalDiv';
import './ToetcieProjectMobile.scss';
import SubHeader from '../../components/text/SubHeader';

const ToetcieProjectMobile : React.FC = props => {
    return (
        <div className={`toetcie-project-mobile`}>
            <div className={`toetcie-project-mobile-illustration`}>
                <ImageDiv src={`media/toetcie-mobile.png`} />
            </div>
            <div className={`toetcie-project-mobile-text`}>
                <h3 className={`toetcie-project-mobile-header`}>
                    <LocalDiv>
                    {{
                        en : "Mobile navigation",
                        fr : "Navigation mobile"
                    }}
                    </LocalDiv>
                </h3>
                <LocalDiv>
                {{
                    en : 
                        <>
                            <p>
                                75% du trafic sur les sites de restauration sont sur des support mobile. 
                                C'est pourquoi il est essentiel que le site web puisse d'adapter sans encombre sur ces supports.
                            </p>
                        </>,
                    fr : 
                        <>
                            <p>
                                75% du trafic sur les sites de restauration sont sur des support mobile. 
                                C'est pourquoi il est essentiel que le site web puisse d'adapter sans encombre sur ces supports.
                            </p>
                        </>
                }}
                </LocalDiv>
            </div>
        </div>
    )
}
export default ToetcieProjectMobile;