import React from 'react'
import styled from 'styled-components'

interface Props {
    size?: string;
    height?: string;
}

const StyledTitle = styled.h1<Props>`
    font-size: ${({size}) => size || '32px'};
    line-height: ${({height}) => height || '32px'};
    font-weight: 700;
`

const Title: React.FC<Props> = (props: Props) => {
    return <StyledTitle {...props}/>
}

export default Title