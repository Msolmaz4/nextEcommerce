import React from 'react'

interface Props {
    text: string;
}

const TextClip: React.FC<Props> = ({text}) => {
    if(text.length < 10) {
        return text.substring(0,10)+"...";
    }
    return text;
}

export default TextClip;
