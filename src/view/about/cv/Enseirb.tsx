import React from 'react';
import CvEntry from './CvEntry';
import LocalDiv from '../../components/local/LocalDiv';
import './Enseirb.scss';
import Keyword from '../../components/text/Keyword';

const Enseirb : React.FC = props => {
    return (
        <CvEntry className={`enseirb`}
                date={`2013 - 2016`}
                location={`Bordeaux`}
                illustration={
                    <a href={`https://enseirb-matmeca.bordeaux-inp.fr/`} target={`_blank`}>
                        <img className={`enseirb-illustration`} src={`media/enseirb.jpg`}/>
                    </a>
                }
                title={`ENSEIRB-MATMECA`}>
            <LocalDiv>
            {{
                en : 
                    <>
                        <p>
                            I graduated in 2016 with a <Keyword>master's degree</Keyword> in Computer Science from ENSEIRB-MATMECA engineering school in Bordeaux.
                        </p>
                        <p>
                            During my last year at school, I specialized in <Keyword>high performance computing</Keyword> and implemented various projects related to my specialty. 
                            From GPU programming to matrix compression, my course work brought solid hand-on experience of the field.
                        </p>
                        <p>
                            My initial years of studying taught me the basics of computer science and engineering, from <Keyword>SQL databases</Keyword> to low-level <Keyword>threading</Keyword> and <Keyword>embedded software</Keyword> programming.
                            With a focus on computer theory I also studied <Keyword>algorithmics</Keyword>, <Keyword>cryptography</Keyword>, <Keyword>computer architecture</Keyword> and even <Keyword>quantum computing</Keyword>. 
                        </p>
                    </>,
                fr :
                    <>
                        <p>
                            J'ai été diplomé en 2016 d'un <Keyword>diplôme d'ingénieur en informatique</Keyword> de l'ENSEIRB-MATMECA à Bordeaux.
                        </p>
                        <p>
                            Ma dernière année d'études s'est concentrée sur ma spécialisation en <Keyword>calculs hautes performances</Keyword>.
                            J'ai notamment implémenté une multitude de projets, de la programmation de carte graphique à la compression matricielle.
                        </p>
                        <p>
                            J'ai également pu étudier durant mes premiéres années à l'école les bases de l'ingénierie informatique, de la programmation de <Keyword>base de données</Keyword> à la <Keyword>programmation logicielle et embarquée</Keyword>.
                            Une grande partie de ces études ont eu une portée théorique et m'ont instruit sur divers sujets, l'<Keyword>algorithmique</Keyword>, la <Keyword>cryptographie</Keyword>, l'<Keyword>architecture logicielle et matérielle</Keyword>, et même un peu d'<Keyword>informatique quantique</Keyword>.
                        </p>
                    </>
            }}
            </LocalDiv>
        </CvEntry>
    )
}
export default Enseirb;