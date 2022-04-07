import React from 'react'
import styled from 'styled-components'
import Flex from './Flex'
import Paragraph from './Paragraph'
import picture from '../images/product-img.png'

const StyledCard = styled.article`
    box-shadow: 0px 10px 14px 0px #00000012;
    border-radius: 8px;
    max-width: 305px;
`

const StyledImg = styled.img`
    border-radius: 8px 8px 0 0;
    object-fit: cover;
    height: 404px;
    width: 305px;
`

const StyledDiv = styled.div`
    position: absolute;
    padding: 16px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Card = (props: ProductCard) => {

return (
    <StyledCard>
        <Flex>
            <StyledImg src={picture}/>
            <StyledDiv>
                <Flex direction={'column'}>
                    <Paragraph color={'#F3F3F3'} size={'12px'} height={'24px'}>created by</Paragraph>
                    <Paragraph color={'#F3F3F3'} weight={'700'} height={'24px'}>
                        {props.product.created_by.display_name}
                    </Paragraph>
                </Flex>
                <Paragraph color={'#F3F3F3'} width={'170px'} size={'18px'} height={'24px'}>
                    {props.product.name}
                </Paragraph>
            </StyledDiv>
        </Flex>
        <Flex justify={'space-between'} padding={'16px'}>
            <Flex direction={'column'} align={'flex-start'}>
                <Paragraph  size={'12px'} height={'24px'}>available</Paragraph>
                <Paragraph size={'16px'} height={'24px'} color={'#000'}>
                    {props.product.quantity_available} of {props.product.quantity}
                </Paragraph>
            </Flex>
            <Flex direction={'column'} align={'flex-end'}>
                <Paragraph size={'12px'} height={'24px'}>price</Paragraph>
                <Paragraph size={'16px'} height={'24px'} color={'#0040E5'}>
                {props.product.initial_price} ETH
                </Paragraph>
            </Flex>
        </Flex>
    </StyledCard>
  )
}

export default Card