import React from 'react'
import styled from 'styled-components'

interface Props {
    margin?: string;
    size?: string;
    height?: string;
    weight?: string;
    color?: string;
    width?:  string;
}

const StyledParagraph = styled.p<Props>`
    margin: ${({margin}) => margin || '0'} ;
    font-size: ${({size}) => size || '14px'};
    line-height: ${({height}) => height || '14px'};
    font-weight: ${({weight}) => weight || '400'};
    color: ${({color}) => color || '#828282'};
    max-width: ${({width}) => width};
`

const Paragraph: React.FC<Props> = (props: Props) => {
    return <StyledParagraph {...props}/>
};

export default Paragraph