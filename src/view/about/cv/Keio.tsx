import React from 'react';
import CvEntry from './CvEntry';
import LocalDiv from '../../components/local/LocalDiv';
import './Keio.scss';
import Keyword from '../../components/text/Keyword';

const Keio : React.FC = props => {
    return (

        <CvEntry className={`keio`}
                date={`2015`}
                location={`Tokyo`}
                illustration={
                    <a href={`https://im-lab.net/`} target={`_blank`}>
                        <img className={`keio-illustration`} src={`media/keio.png`}/>
                    </a>
                }
                title={`Keio university`}>
            <LocalDiv>
            {{
                en : 
                    <>
                        <p>
                            The Interactive Media Lab at Keio university welcomed me for a three month internship in summer 2015.
                        </p>
                        <p>
                            My internship project was about interpolating two 360° pictures to produce intermediate pictures.
                            The idea was to provide smooth transitioning from one 360° picture to the next with these intermediate steps.
                        </p>
                        <p>
                            One of the suggested applications would have been for <Keyword>Google Maps</Keyword>' street view navigation.
                        </p>
                        <p>
                            This project was implemented using <Keyword>C++</Keyword> and the computer vision library <Keyword>OpenCV</Keyword>.
                        </p>
                    </>,
                fr :
                    <>
                        <p>
                            J'ai été accueilli au sein du laboratoire de médias interactifs à l'université Keio à Tokyo pour un stage de 3 mois en été 2015.
                        </p>
                        <p>
                            Mon projet de stage portait sur l'interpolation de deux prises de vues à 360° afin de produire des images intermédiaires simulant un passage d'une prise de vue à l'autre.
                            L'idée étant de pouvoir offrir une transition douce d'une image à l'autre à l'aide de ces images intermédiaires.
                        </p>
                        <p>
                            L'une des applications possibles du projet aurait pu concerner la navigation Street View de <Keyword>Google Maps</Keyword>, où l'on se déplace dans un quartier à l'aide de prise de vues à 360°.
                        </p>
                        <p>
                            Le projet a été implémenté en <Keyword>C++</Keyword> à l'aide de la bibliothèque de traitement d'images <Keyword>OpenCV</Keyword>.
                        </p>
                    </>
            }}
            </LocalDiv>
        </CvEntry>
    )
}
export default Keio;