import React from 'react';
import CvEntry from './CvEntry';
import './GBSmith.scss';
import LocalDiv from '../../components/local/LocalDiv';

const GBSmith : React.FC = props => {
    return (
        <CvEntry className={`gb-smith`}
                date={`2016 - 2018`}
                location={`London`}
                illustration={
                    <img className={`gb-smith-illustration`} src={`media/gb-smith.png`}/>
                }
                title={`GB & SMITH`}>
            <LocalDiv>
                {{
                    en : 
                        <>
                        </>,
                    fr : 
                        <>
                        </>
                }}
            </LocalDiv>
        </CvEntry>
    )
}
export default GBSmith;