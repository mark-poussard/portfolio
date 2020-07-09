import React from 'react';
import './ToetcieProjectGraphism.scss';
import LocalDiv from '../../components/local/LocalDiv';
import ImageDiv from '../../components/media/ImageDiv';
import Logo from './Logo';
import ProjectSubSection from '../ProjectSubSection';

const ToetcieProjectGraphism : React.FC = props => {
    return (
        <ProjectSubSection className={`toetcie-project-graphism`}
            header={
                <LocalDiv>
                {{
                    en : "Graphic design",
                    fr : "Graphisme"
                }}
                </LocalDiv>
            }
            illustration={
                <Logo className={`toetcie-project-graphism-illustration`} 
                    animate backgroundCircle/>
            }>
            <LocalDiv>
            {{
                en : 
                    <>
                        <p>
                            La charte et le travail graphique sont des composantes essentielle à tout site web. 
                            Elles forment les premières impressions d'un client et se doivent de transmettre au mieux l'esprit du restaurant.
                        </p>
                        <p>
                            Afin de s'assurer que le site web resterais fidèle à l'univers établie par Tô & Cie, j'ai travaillé sur la base de nombreuses photos prises sur place.
                        </p>
                        <p>
                            Le logo a été redessiné afin d'en produire une version animé et de nombreux petits éléments graphique ont été dessiné sur la base des photos prises au restaurant.
                        </p>
                    </>,
                fr : 
                    <>
                        <p>
                            La charte et le travail graphique sont des composantes essentielle à tout site web. 
                            Elles forment les premières impressions d'un client et se doivent de transmettre au mieux l'esprit du restaurant.
                        </p>
                        <p>
                            Afin de s'assurer que le site web resterais fidèle à l'univers établie par Tô & Cie, j'ai travaillé sur la base de nombreuses photos prises sur place.
                        </p>
                        <p>
                            Le logo a été redessiné afin d'en produire une version animé et de nombreux petits éléments graphique ont été dessiné sur la base des photos prises au restaurant.
                        </p>
                    </>
            }}
            </LocalDiv>
        </ProjectSubSection>
    );
}
export default ToetcieProjectGraphism;