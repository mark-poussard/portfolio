import React from 'react';
import CvEntry from './CvEntry';
import LocalDiv from '../../components/local/LocalDiv';
import './Enseirb.scss';

const Enseirb : React.FC = props => {
    return (
        <CvEntry className={`enseirb`}
                date={`2013 - 2016`}
                location={`Bordeaux`}
                illustration={
                    <img className={`enseirb-illustration`} src={`media/enseirb.jpg`}/>
                }
                title={`ENSEIRB-MATMECA`}>
            <LocalDiv>
            {{
                en : 
                    <>
                        <p>
                            I graduated in 2016 with a master's degree in Computer Science from ENSEIRB-MATMECA engineering school in Bordeaux.
                        </p>
                        <p>
                            During my last year at school, I specialized in high performance computing and implemented various projects related to my specialty. 
                            From GPU programming to matrix compression, my course work brought solid hand-on experience of the field.
                        </p>
                        <p>
                            My initial years of studying taught me the basics of computer science and engineering, from SQL databases to low-level thread and embarked software programming.
                            With a focus on computer theory I also studied algorithmics, cryptography, computer architecture and even quantum computing. 
                        </p>
                    </>,
                fr :
                    <>
                        <p>
                            J'ai été diplomé en 2016 d'un diplôme d'ingénieur en informatique de l'école d'ingénieurs ENSEIRB-MATMECA à Bordeaux.
                        </p>
                        <p>
                            Ma dernière année d'études s'est concentré sur ma spécialisation en calculs hautes performances.
                            J'ai notamment implémenté une multitude de projets, de la programmation de carte graphique à la compression matricielle.
                        </p>
                        <p>
                            J'ai également pu étudier durant mes premiéres années à l'école les bases de l'ingénierie informatique, de la programmation de base de données à la programmation logicielle et embarquée.
                            Une grande partie de ces études ont eu une portée théorique et m'ont instruit sur divers sujets, l'algorithmique, la cryptographie, l'architecture logicielle et matérielle, et même un peu d'informatique quantique.
                        </p>
                    </>
            }}
            </LocalDiv>
        </CvEntry>
    )
}
export default Enseirb;