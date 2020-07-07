import React from 'react';
import VideoDiv, { IVideoDivProps } from './VideoDiv';
import ImageDiv, { IImageDivProps } from './ImageDiv';

type IMediaDivProps = IVideoDivProps & IImageDivProps;

const MediaDiv : React.FC<IMediaDivProps> = props => {
    const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp"];
    const srcSplit = props.src.split(".");
    const extension = srcSplit.pop()!.toLowerCase();
    console.log(`props.src : ${props.src}`);
    console.log(`imageExtensions : ${imageExtensions}`);
    console.log(`srcSplit : ${srcSplit}`);
    console.log(`extension : ${extension}`);
    if(imageExtensions.indexOf(extension) > -1){
        return (
            <ImageDiv {...props} />
        )
    }
    return (
        <VideoDiv {...props} />
    )
}
export default MediaDiv;