import React from 'react';
import LocalDiv from '../components/local/LocalDiv';
import './ProjectWebsiteLink.scss';

interface IProjectWebsiteLinkProps{
    url ?: string;
}

const ProjectWebsiteLink : React.FC<IProjectWebsiteLinkProps> = props => {
    if(props.url == null){
        return (
            <div className={`project-website-link disabled`}>
                <LocalDiv>
                {{
                    en : "Website in construction",
                    fr : "Site web en construction"
                }}
                </LocalDiv>
            </div>
        )
    }
    return (
        <a className={`project-website-link`} href={props.url} target={`_blank`}>
            <LocalDiv>
            {{
                en : "Visit the website",
                fr : "Visitez le site web"
            }}
            </LocalDiv>
        </a>
    )
}
export default ProjectWebsiteLink;