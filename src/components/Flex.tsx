import React from 'react'
import styled from 'styled-components'

interface Props {
    position?: string;
    direction?: string;
    align?: string;
    justify?: string;
    MaxWidth?: string;
    margin?:  string;
    padding?: string;
    radius?: string;
}

const StyledFlex= styled.div<Props>`
    display: flex;
    position: ${props => props.position || 'relative'};
    flex-direction: ${props => props.direction || 'row'};
    align-items: ${props => props.align || 'stretch'};
    justify-content: ${props => props.justify || 'stretch'};
    margin: ${({margin}) => margin || '0'};
    padding: ${({padding}) => padding || '0'};
    border-radius: ${({radius}) => radius || '0'};
`

const Flex: React.FC<Props> = (props: Props) => {
    return <StyledFlex {...props} />
}

export default Flex
